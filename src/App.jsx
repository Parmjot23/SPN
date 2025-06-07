// Minimal router implementation to avoid external React Router dependency
import React from "react";
const RouterContext = React.createContext();

function Router({ children }) {
  const [path, setPath] = React.useState(window.location.pathname);

  React.useEffect(() => {
    const onPop = () => setPath(window.location.pathname);
    window.addEventListener('popstate', onPop);
    return () => window.removeEventListener('popstate', onPop);
  }, []);

  const navigate = (to) => {
    window.history.pushState({}, '', to);
    setPath(to);
  };

  return (
    <RouterContext.Provider value={{ path, navigate }}>
      {children}
    </RouterContext.Provider>
  );
}

function Routes({ children }) {
  const { path } = React.useContext(RouterContext);
  let element = null;
  React.Children.forEach(children, (child) => {
    if (!element && child.props.path === path) {
      element = child.props.element;
    }
  });
  return element;
}

function Route() {
  return null;
}

function Link({ to, children, className }) {
  const { navigate } = React.useContext(RouterContext);
  const handleClick = (e) => {
    e.preventDefault();
    navigate(to);
  };
  return (
    <a href={to} className={className} onClick={handleClick}>
      {children}
    </a>
  );
}

// initialize EmailJS
window.emailjs && emailjs.init('YOUR_PUBLIC_KEY');

const Hero = () => {
  React.useEffect(() => {
    if (window.gsap) {
      gsap.registerPlugin(ScrollTrigger);
      gsap.from('#heroText', { opacity: 0, y: -50, duration: 1 });
    }
  }, []);
  return (
    <section className="relative h-screen overflow-hidden">
      <video
        className="absolute inset-0 w-full h-full object-cover kenburns"
        src="/trucking.mp4"
        autoPlay
        loop
        muted
        playsInline
      />
      <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
        <h1 id="heroText" className="text-white text-5xl font-bold">SPN Logistics</h1>
      </div>
    </section>
  );
};

const Counter = ({ end, start, suffix }) => {
  const [count, setCount] = React.useState(0);
  React.useEffect(() => {
    if (!start) return;
    let current = 0;
    const increment = Math.ceil(end / 50);
    const id = setInterval(() => {
      current += increment;
      if (current >= end) {
        current = end;
        clearInterval(id);
      }
      setCount(current);
    }, 40);
    return () => clearInterval(id);
  }, [start, end]);
  return <div className="text-3xl font-bold text-blue-600">{count}{suffix}</div>;
};

const StatsCounter = () => {
  const [start, setStart] = React.useState(false);
  const ref = React.useRef(null);

  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setStart(true);
        observer.disconnect();
      }
    }, { threshold: 0.4 });
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const stats = [
    { label: 'Loads Delivered', end: 10000, suffix: '+' },
    { label: 'Terminals', end: 3, suffix: '' },
    { label: 'Employees', end: 20, suffix: '+' },
  ];

  return (
    <div ref={ref} className="bg-gray-50 py-8 grid sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
      {stats.map((s) => (
        <div key={s.label} className="text-center">
          <Counter end={s.end} start={start} suffix={s.suffix} />
          <p className="mt-2 font-semibold">{s.label}</p>
        </div>
      ))}
    </div>
  );
};

const HomeServicesPreview = () => {
  React.useEffect(() => {
    if (window.gsap) {
      gsap.utils.toArray('.service-card').forEach((el) => {
        gsap.from(el, {
          opacity: 0,
          y: 50,
          duration: 0.6,
          scrollTrigger: { trigger: el, start: 'top 80%' }
        });
      });
    }
  }, []);

  return (
    <section className="p-8 bg-white">
      <h3 className="text-xl font-semibold mb-4 text-center">Our Services</h3>
      <div className="grid sm:grid-cols-3 gap-4 max-w-5xl mx-auto">
        {services.map((s) => (
          <div key={s.title} className="service-card bg-gray-50 p-4 rounded shadow-sm hover:scale-105 transition-transform">
            <div className="text-3xl mb-2 text-center">{s.icon}</div>
            <h4 className="font-semibold text-center">{s.title}</h4>
            <p className="text-sm text-center">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

const FleetPreview = () => {
  const [open, setOpen] = React.useState(null);
  const images = [
    { src: 'https://images.unsplash.com/photo-1565513123283-fbc0a0aaddc1?auto=format&fit=crop&w=800&q=80&fmt=webp', alt: 'Truck' },
    { src: 'https://images.unsplash.com/photo-1529070538774-1843cb3265df?auto=format&fit=crop&w=800&q=80&fmt=webp', alt: 'Trailer' },
  ];

  return (
    <section className="p-8 bg-gray-50">
      <h3 className="text-xl font-semibold mb-4 text-center">Our Fleet</h3>
      <div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto">
        {images.map((img, i) => (
          <img
            key={i}
            className="rounded shadow cursor-pointer hover:opacity-75"
            src={img.src}
            alt={img.alt}
            onClick={() => setOpen(img)}
          />
        ))}
      </div>
      {open && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center" onClick={() => setOpen(null)}>
          <img src={open.src} alt={open.alt} className="max-h-full max-w-full" />
        </div>
      )}
    </section>
  );
};

const Testimonials = () => {
  const items = [
    { quote: 'Great service and on-time deliveries!', author: 'Julie M.' },
    { quote: 'Professional drivers and clean equipment.', author: 'Robert T.' },
    { quote: 'Our go-to carrier for specialized loads.', author: 'LogiCorp' },
  ];
  React.useEffect(() => {
    if (window.gsap) {
      gsap.utils.toArray('.testimonial').forEach((el) => {
        gsap.from(el, {
          opacity: 0,
          y: 40,
          duration: 0.5,
          scrollTrigger: { trigger: el, start: 'top 80%' }
        });
      });
    }
  }, []);

  return (
    <section className="p-8 bg-white">
      <h3 className="text-xl font-semibold mb-4 text-center">Testimonials</h3>
      <div className="grid md:grid-cols-3 gap-4 max-w-5xl mx-auto">
        {items.map((t) => (
          <div key={t.author} className="testimonial bg-gray-50 p-4 rounded shadow-sm text-center">
            <p className="italic mb-2">"{t.quote}"</p>
            <p className="font-semibold">- {t.author}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

const Home = () => (
  <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50">
    <Hero />
    <section className="p-8 text-center">
      <h2 className="text-2xl font-semibold mb-4">Reliable Trucking and Logistics Services</h2>
      <p className="max-w-xl mx-auto">We provide freight transportation, warehousing and supply chain management solutions.</p>
    </section>
    <HomeServicesPreview />
  </div>
);

const About = () => (
  <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50 p-8 space-y-6">
  <h2 className="text-2xl font-semibold mb-4">About Us</h2>
  <p className="max-w-3xl">Founded in 2010, SPN Logistics began with a single truck and a big dream. Today we operate a modern fleet serving customers across Quebec and Ontario.</p>
  <p className="max-w-3xl">We continue to invest in clean technologies and support local charities to give back to our community.</p>
  <div className="grid md:grid-cols-3 gap-4">
      <div className="bg-white p-4 rounded shadow">
        <h3 className="font-semibold mb-2">Our Mission</h3>
        <p>To transport freight safely and efficiently while providing outstanding customer service.</p>
      </div>
      <div className="bg-white p-4 rounded shadow">
        <h3 className="font-semibold mb-2">Values</h3>
        <p>Integrity, reliability and innovation drive everything we do.</p>
      </div>
      <div className="bg-white p-4 rounded shadow">
        <h3 className="font-semibold mb-2">Achievements</h3>
        <p>Recognized as a top regional carrier and trusted partner for many leading shippers.</p>
      </div>
    </div>
  </div>
);

const services = [
  { title: 'Freight Management', icon: '🚚', desc: 'Complete freight brokerage and management.' },
  { title: 'Express Delivery', icon: '⚡', desc: 'Time-critical shipments across Canada.' },
  { title: 'Specialized Transport', icon: '🛣️', desc: 'Oversized and temperature controlled loads.' },
  { title: 'Warehousing', icon: '🏢', desc: 'Secure storage facilities.' },
  { title: 'Logistics Solutions', icon: '📦', desc: 'End-to-end supply chain management.' },
  { title: 'Cross-Border Shipping', icon: '🇺🇸', desc: 'Seamless moves between Canada and the USA.' },
  { title: 'Consulting', icon: '💡', desc: 'Expert advice to optimize your supply chain.' }
];

const ServiceAccordion = ({ service }) => {
  const [open, setOpen] = React.useState(false);
  return (
    <div className="border-b">
      <button
        type="button"
        className="w-full flex justify-between items-center p-4 text-left"
        onClick={() => setOpen((o) => !o)}
      >
        <span className="font-semibold flex items-center space-x-2">
          <span>{service.icon}</span>
          <span>{service.title}</span>
        </span>
        <span>{open ? '-' : '+'}</span>
      </button>
      {open && <div className="p-4 bg-gray-50">{service.desc}</div>}
    </div>
  );
};

const Services = () => (
  <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-green-50 p-8">
    <h2 className="text-2xl font-semibold mb-4">Our Services</h2>
    <div className="max-w-2xl mx-auto">
      {services.map((s) => (
        <ServiceAccordion key={s.title} service={s} />
      ))}
    </div>
  </div>
);

const Fleet = () => (
  <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-white to-yellow-50 p-8">
    <h2 className="text-2xl font-semibold mb-4">Fleet Information</h2>
    <div className="grid md:grid-cols-2 gap-4">
      <div className="bg-white rounded shadow">
        <img src="https://images.unsplash.com/photo-1565513123283-fbc0a0aaddc1?auto=format&fit=crop&w=800&q=80" alt="Truck" className="rounded-t" />
        <p className="p-4">Modern trucks equipped for long haul.</p>
      </div>
      <div className="bg-white rounded shadow">
        <img src="https://images.unsplash.com/photo-1529070538774-1843cb3265df?auto=format&fit=crop&w=800&q=80" alt="Trailer" className="rounded-t" />
        <p className="p-4">Variety of trailers for different loads.</p>
      </div>
      <div className="bg-white rounded shadow">
        <img src="https://images.unsplash.com/photo-1529778162587-656c3b9b4d81?auto=format&fit=crop&w=800&q=80" alt="Flatbed" className="rounded-t" />
        <p className="p-4">Flatbeds available for oversized freight.</p>
      </div>
      <div className="bg-white rounded shadow">
        <img src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80" alt="Warehouse" className="rounded-t" />
        <p className="p-4">Secure yards and warehouse facilities.</p>
      </div>
    </div>
  </div>
);

const jobs = [
  { id: 'driver', title: 'Truck Driver', desc: 'Operate late-model tractors on regional routes.' },
  { id: 'dispatcher', title: 'Dispatcher', desc: 'Coordinate shipments and support our drivers.' },
  { id: 'mechanic', title: 'Mechanic', desc: 'Maintain our fleet of trucks and trailers.' },
  { id: 'ops', title: 'Operations Manager', desc: 'Lead daily operations and manage our team.' }
];

const Careers = () => {
  const [query, setQuery] = React.useState('');

  const filtered = jobs.filter((j) => j.title.toLowerCase().includes(query.toLowerCase()));

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-purple-50 p-8">
      <h2 className="text-2xl font-semibold mb-4">Careers</h2>
      <input
        type="text"
        placeholder="Search positions"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="mb-6 p-2 border w-full max-w-md"
      />
      <div className="max-w-2xl mx-auto">
        {filtered.map((j) => (
          <details key={j.id} className="mb-4 bg-white rounded shadow">
            <summary className="cursor-pointer p-4 font-semibold">{j.title}</summary>
            <div className="p-4 border-t">
              <p className="mb-4">{j.desc}</p>
              <ContactForm formId={`career_${j.id}`} />
            </div>
          </details>
        ))}
        {filtered.length === 0 && <p>No positions found.</p>}
      </div>
    </div>
  );
};

const Solutions = () => (
  <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-indigo-50 p-8">
    <h2 className="text-2xl font-semibold mb-4">Technology-Driven Solutions</h2>
  <p className="mb-2 max-w-xl">Our digital freight network connects shippers with carriers for efficient hauling.</p>
  <p className="max-w-xl">Real-time tracking and optimized routes ensure your shipments arrive on time.</p>
  <ul className="list-disc pl-5 max-w-xl space-y-1 mt-2">
    <li>API integrations for real-time data</li>
    <li>Automated alerts for any delays</li>
  </ul>
</div>
);

const Contact = () => (
  <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-red-50 p-8">
    <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
    <p className="mb-4 max-w-xl">Our team is available 24/7 to answer your questions and provide shipping quotes.</p>
    <p className="mb-2">
      <a href="https://maps.google.com/?q=1059%20Chem.%20Legault%2C%20Les%20C%C3%A8dres%2C%20QC" className="text-blue-600 underline">
        1059 Chem. Legault, Les Cèdres, QC J7T 1N8
      </a>
    </p>
    <p className="mb-2">
      <a href="tel:+14506313677" className="text-blue-600 underline">(450) 631-3677</a>
    </p>
    <p className="mb-4">
      <a href="mailto:info@spnlogistics.com" className="text-blue-600 underline">info@spnlogistics.com</a>
    </p>
    <iframe className="w-full h-64 mb-4" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2792.6839970458055!2d-74.07331958444191!3d45.342130779099336!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDXCsDIwJzMxLjciTiA3NMKwMDQnMDguMCJX!5e0!3m2!1sen!2sca!4v1710240265604" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    <ContactForm />
  </div>
);

function ContactForm({ formId = 'contact' }) {
  const [status, setStatus] = React.useState('');
  const allowFile = formId.startsWith('career');

  function handleSubmit(e) {
    e.preventDefault();
    if (window.emailjs) {
      emailjs
        .sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', e.target)
        .then(() => setStatus('Message sent!'))
        .catch(() => setStatus('Failed to send'));
    }
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto p-4 bg-white rounded shadow mt-8" encType="multipart/form-data">
      <input type="hidden" name="form" value={formId} />
      <input required name="name" placeholder="Name" className="w-full p-2 mb-2 border" />
      <input required type="email" name="email" placeholder="Email" className="w-full p-2 mb-2 border" />
      {allowFile && <input type="file" name="resume" className="w-full p-2 mb-2 border" />}
      <textarea required name="message" placeholder="Message" className="w-full p-2 mb-2 border"></textarea>
      <button className="bg-blue-600 text-white px-4 py-2" type="submit">Send</button>
      {status && <p className="mt-2 text-sm">{status}</p>}
    </form>
  );
}

const NavLink = ({ to, children, className = "" }) => (
  <Link
    className={`relative block md:inline-block px-3 py-2 text-gray-200 transition-colors duration-200 hover:text-white after:absolute after:left-1/2 after:-bottom-1 after:-translate-x-1/2 after:content-['\u2713'] after:text-xs after:opacity-0 hover:after:opacity-100 ${className}`}
    to={to}
  >
    {children}
  </Link>
);

const Footer = () => (
  <footer className="bg-gradient-to-r from-gray-800 to-gray-900 text-white mt-8">
    <div className="max-w-6xl mx-auto px-4 py-10 grid md:grid-cols-2 gap-6">
      <div>
        <h3 className="font-semibold mb-2">Contact Us</h3>
        <p><i className="fas fa-map-marker-alt mr-2"></i>1059 Chem. Legault, Les Cèdres, QC J7T 1N8</p>
        <p>
          <i className="fas fa-phone mr-2"></i>
          <a href="tel:+14506313677" className="hover:text-blue-400">(450) 631-3677</a>
        </p>
        <p>
          <i className="fas fa-envelope mr-2"></i>
          <a href="mailto:info@spnlogistics.com" className="hover:text-blue-400">info@spnlogistics.com</a>
        </p>
      </div>
      <div>
        <h3 className="font-semibold mb-2">Follow Us</h3>
        <div className="flex space-x-4 text-xl mb-4">
          <a href="#" aria-label="Instagram" className="hover:text-blue-400">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="#" aria-label="Facebook" className="hover:text-blue-400">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="#" aria-label="Twitter" className="hover:text-blue-400">
            <i className="fab fa-twitter"></i>
          </a>
        </div>
      </div>
    </div>
    <div className="overflow-hidden py-6">
      <div className="flex space-x-8 text-2xl animate-scroll">
        <i className="fas fa-truck hover:text-yellow-300"></i>
        <i className="fas fa-warehouse hover:text-yellow-300"></i>
        <i className="fas fa-road hover:text-yellow-300"></i>
        <i className="fas fa-traffic-light hover:text-yellow-300"></i>
        <i className="fas fa-tools hover:text-yellow-300"></i>
        <i className="fas fa-gas-pump hover:text-yellow-300"></i>
      </div>
    </div>
    <div className="text-center py-4 border-t border-gray-700">
      <p>© {new Date().getFullYear()} SPN Logistics. Site by <a href="https://www.madebyparm.com" className="text-blue-400">madebyparm</a>.</p>
    </div>
  </footer>
);

const Layout = ({ children }) => {
  const [open, setOpen] = React.useState(false);
  const [dark, setDark] = React.useState(false);
  const toggle = () => setOpen((o) => !o);
  const toggleDark = () => setDark((d) => !d);

  React.useEffect(() => {
    document.documentElement.classList.toggle('dark', dark);
  }, [dark]);

  const Links = () => (
    <>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/contact">Contact</NavLink>
    </>
  );

  return (
    <div>

        <div className="max-w-6xl mx-auto flex items-center justify-end p-4">
          <button className="md:hidden focus:outline-none" onClick={toggle} aria-label="Menu">
            {open ? <i className="fas fa-times text-2xl"></i> : <i className="fas fa-bars text-2xl"></i>}
          </button>
          <div className="hidden md:flex space-x-4">
            <Links />
            <button onClick={toggleDark} aria-label="Toggle dark mode" className="ml-4">
              {dark ? <i className="fas fa-sun"></i> : <i className="fas fa-moon"></i>}
            </button>
          </div>
        </div>

          <div className="px-4 pb-4 space-y-1">
            <Links />
            <button onClick={toggleDark} aria-label="Toggle dark mode" className="block mt-2">
              {dark ? 'Light Mode' : 'Dark Mode'}
            </button>
          </div>
        </div>
      </nav>
      {children}
      <Footer />
    </div>
  );
};

const App = () => (
  <Router>
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/fleet" element={<Fleet />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/solutions" element={<Solutions />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Layout>
  </Router>
);

export default App;
