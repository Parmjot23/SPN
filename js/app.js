// Minimal router implementation to avoid external React Router dependency
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
      gsap.from('#heroText', { opacity: 0, y: -50, duration: 1 });
    }
  }, []);
  return (
    <section className="bg-cover bg-center h-96 flex items-center justify-center" style={{backgroundImage: 'url(https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1600&q=80)'}}>
      <h1 id="heroText" className="text-white text-4xl font-bold bg-black bg-opacity-50 p-4 rounded">SPN Logistics</h1>
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

const Home = () => (
  <div>
    <Hero />
    <section className="p-8 text-center">
      <h2 className="text-2xl font-semibold mb-4">Reliable Trucking and Logistics Services</h2>
      <p className="max-w-xl mx-auto">We provide freight transportation, warehousing and supply chain management solutions.</p>
    </section>
    <StatsCounter />
    <ContactForm />
  </div>
);

const About = () => (
  <div className="p-8">
    <h2 className="text-2xl font-semibold mb-4">About Us</h2>
    <p>SPN Logistics has been serving customers in Quebec with reliable trucking solutions. Our mission is to deliver shipments safely and on time.</p>
  </div>
);

const services = [
  { title: 'Freight Transportation', icon: '🚚', desc: 'Efficient truckload and LTL services.' },
  { title: 'Warehousing', icon: '🏢', desc: 'Secure storage facilities.' },
  { title: 'Logistics Solutions', icon: '📦', desc: 'End-to-end supply chain management.' }
];

const Services = () => (
  <div className="p-8">
    <h2 className="text-2xl font-semibold mb-4">Our Services</h2>
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {services.map((s) => (
        <div key={s.title} className="bg-white p-4 rounded shadow">
          <div className="text-4xl mb-2">{s.icon}</div>
          <h3 className="font-semibold">{s.title}</h3>
          <p>{s.desc}</p>
        </div>
      ))}
    </div>
  </div>
);

const Fleet = () => (
  <div className="p-8">
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
    </div>
  </div>
);

const Careers = () => (
  <div className="p-8">
    <h2 className="text-2xl font-semibold mb-4">Careers</h2>
    <p className="mb-4">Join our team! Submit your application below.</p>
    <ContactForm formId="careers" />
  </div>
);

const Contact = () => (
  <div className="p-8">
    <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
    <p className="mb-4">1059 Chem. Legault, Les Cèdres, QC J7T 1N8</p>
    <iframe className="w-full h-64 mb-4" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2792.6839970458055!2d-74.07331958444191!3d45.342130779099336!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDXCsDIwJzMxLjciTiA3NMKwMDQnMDguMCJX!5e0!3m2!1sen!2sca!4v1710240265604" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    <ContactForm />
  </div>
);

function ContactForm({ formId = 'contact' }) {
  const [status, setStatus] = React.useState('');

  function handleSubmit(e) {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.target));
    if (window.emailjs) {
      emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', data)
        .then(() => setStatus('Message sent!'))
        .catch(() => setStatus('Failed to send'));
    }
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto p-4 bg-white rounded shadow mt-8">
      <input type="hidden" name="form" value={formId} />
      <input required name="name" placeholder="Name" className="w-full p-2 mb-2 border" />
      <input required type="email" name="email" placeholder="Email" className="w-full p-2 mb-2 border" />
      <textarea required name="message" placeholder="Message" className="w-full p-2 mb-2 border"></textarea>
      <button className="bg-blue-600 text-white px-4 py-2" type="submit">Send</button>
      {status && <p className="mt-2 text-sm">{status}</p>}
    </form>
  );
}

const NavLink = ({ to, children }) => (
  <Link className="text-white hover:text-gray-200" to={to}>{children}</Link>
);

const Footer = () => (
  <footer className="bg-gray-800 text-white mt-8">
    <div className="max-w-6xl mx-auto px-4 py-8 grid md:grid-cols-3 gap-6">
      <div>
        <h3 className="font-semibold mb-2">Navigation</h3>
        <ul className="space-y-1">
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/about">About</NavLink></li>
          <li><NavLink to="/services">Services</NavLink></li>
          <li><NavLink to="/fleet">Fleet</NavLink></li>
          <li><NavLink to="/careers">Careers</NavLink></li>
          <li><NavLink to="/contact">Contact</NavLink></li>
        </ul>
      </div>
      <div>
        <h3 className="font-semibold mb-2">Follow Us</h3>
        <div className="flex space-x-4 text-xl">
          <a href="#" aria-label="Facebook">📘</a>
          <a href="#" aria-label="Twitter">🐦</a>
          <a href="#" aria-label="Instagram">📸</a>
        </div>
      </div>
      <div className="md:col-span-1 col-span-2">
        <h3 className="font-semibold mb-2">Sponsors</h3>
        <div className="overflow-hidden">
          <div className="flex space-x-8 animate-scroll">
            <span>🚚</span>
            <span>🏭</span>
            <span>🛣️</span>
            <span>🚦</span>
            <span>🔧</span>
            <span>⛽</span>
          </div>
        </div>
      </div>
    </div>
    <div className="text-center py-4 border-t border-gray-700">
      <p>© {new Date().getFullYear()} SPN Logistics. Site by <a href="https://www.madebyparm.com" className="text-blue-400">madebyparm</a>.</p>
    </div>
  </footer>
);

const Layout = ({ children }) => (
  <div>
    <nav className="bg-gray-800 text-white p-4 flex space-x-4">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/services">Services</NavLink>
      <NavLink to="/fleet">Fleet</NavLink>
      <NavLink to="/careers">Careers</NavLink>
      <NavLink to="/contact">Contact</NavLink>
    </nav>
    {children}
    <Footer />
  </div>
);

const App = () => (
  <Router>
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/fleet" element={<Fleet />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Layout>
  </Router>
);

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
