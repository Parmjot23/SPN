(() => {
  // js/app.js
  var RouterContext = React.createContext();
  function Router({ children }) {
    const [path, setPath] = React.useState(window.location.pathname);
    React.useEffect(() => {
      const onPop = () => setPath(window.location.pathname);
      window.addEventListener("popstate", onPop);
      return () => window.removeEventListener("popstate", onPop);
    }, []);
    const navigate = (to) => {
      window.history.pushState({}, "", to);
      setPath(to);
    };
    return /* @__PURE__ */ React.createElement(RouterContext.Provider, { value: { path, navigate } }, children);
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
    return /* @__PURE__ */ React.createElement("a", { href: to, className, onClick: handleClick }, children);
  }
  window.emailjs && emailjs.init("YOUR_PUBLIC_KEY");
  var Hero = () => {
    React.useEffect(() => {
      if (window.gsap) {
        gsap.from("#heroText", { opacity: 0, y: -50, duration: 1 });
      }
    }, []);
    return /* @__PURE__ */ React.createElement("section", { className: "relative h-screen overflow-hidden" }, /* @__PURE__ */ React.createElement(
      "video",
      {
        className: "absolute inset-0 w-full h-full object-cover",
        src: "https://assets.mixkit.co/videos/preview/mixkit-large-truck-riding-down-a-highway-10020-large.mp4",
        autoPlay: true,
        loop: true,
        muted: true,
        playsInline: true
      }
    ), /* @__PURE__ */ React.createElement("div", { className: "absolute inset-0 bg-black/50 flex items-center justify-center" }, /* @__PURE__ */ React.createElement("h1", { id: "heroText", className: "text-white text-5xl font-bold" }, "SPN Logistics")));
  };
  var Counter = ({ end, start, suffix }) => {
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
    return /* @__PURE__ */ React.createElement("div", { className: "text-3xl font-bold text-blue-600" }, count, suffix);
  };
  var StatsCounter = () => {
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
      { label: "Loads Delivered", end: 1e4, suffix: "+" },
      { label: "Terminals", end: 3, suffix: "" },
      { label: "Employees", end: 20, suffix: "+" }
    ];
    return /* @__PURE__ */ React.createElement("div", { ref, className: "bg-gray-50 py-8 grid sm:grid-cols-3 gap-8 max-w-4xl mx-auto" }, stats.map((s) => /* @__PURE__ */ React.createElement("div", { key: s.label, className: "text-center" }, /* @__PURE__ */ React.createElement(Counter, { end: s.end, start, suffix: s.suffix }), /* @__PURE__ */ React.createElement("p", { className: "mt-2 font-semibold" }, s.label))));
  };
  var HomeServicesPreview = () => /* @__PURE__ */ React.createElement("section", { className: "p-8 bg-white" }, /* @__PURE__ */ React.createElement("h3", { className: "text-xl font-semibold mb-4 text-center" }, "Our Services"), /* @__PURE__ */ React.createElement("div", { className: "grid sm:grid-cols-3 gap-4 max-w-5xl mx-auto" }, services.map((s) => /* @__PURE__ */ React.createElement("div", { key: s.title, className: "bg-gray-50 p-4 rounded shadow-sm" }, /* @__PURE__ */ React.createElement("div", { className: "text-3xl mb-2 text-center" }, s.icon), /* @__PURE__ */ React.createElement("h4", { className: "font-semibold text-center" }, s.title), /* @__PURE__ */ React.createElement("p", { className: "text-sm text-center" }, s.desc)))));
  var FleetPreview = () => /* @__PURE__ */ React.createElement("section", { className: "p-8 bg-gray-50" }, /* @__PURE__ */ React.createElement("h3", { className: "text-xl font-semibold mb-4 text-center" }, "Our Fleet"), /* @__PURE__ */ React.createElement("div", { className: "grid md:grid-cols-2 gap-4 max-w-4xl mx-auto" }, /* @__PURE__ */ React.createElement("img", { className: "rounded shadow", src: "https://images.unsplash.com/photo-1565513123283-fbc0a0aaddc1?auto=format&fit=crop&w=800&q=80", alt: "Truck" }), /* @__PURE__ */ React.createElement("img", { className: "rounded shadow", src: "https://images.unsplash.com/photo-1529070538774-1843cb3265df?auto=format&fit=crop&w=800&q=80", alt: "Trailer" })));
  var Testimonials = () => {
    const items = [
      { quote: "Great service and on-time deliveries!", author: "Julie M." },
      { quote: "Professional drivers and clean equipment.", author: "Robert T." },
      { quote: "Our go-to carrier for specialized loads.", author: "LogiCorp" }
    ];
    return /* @__PURE__ */ React.createElement("section", { className: "p-8 bg-white" }, /* @__PURE__ */ React.createElement("h3", { className: "text-xl font-semibold mb-4 text-center" }, "Testimonials"), /* @__PURE__ */ React.createElement("div", { className: "grid md:grid-cols-3 gap-4 max-w-5xl mx-auto" }, items.map((t) => /* @__PURE__ */ React.createElement("div", { key: t.author, className: "bg-gray-50 p-4 rounded shadow-sm text-center" }, /* @__PURE__ */ React.createElement("p", { className: "italic mb-2" }, '"', t.quote, '"'), /* @__PURE__ */ React.createElement("p", { className: "font-semibold" }, "- ", t.author)))));
  };
  var Home = () => /* @__PURE__ */ React.createElement("div", { className: "min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50" }, /* @__PURE__ */ React.createElement(Hero, null), /* @__PURE__ */ React.createElement("section", { className: "p-8 text-center" }, /* @__PURE__ */ React.createElement("h2", { className: "text-2xl font-semibold mb-4" }, "Reliable Trucking and Logistics Services"), /* @__PURE__ */ React.createElement("p", { className: "max-w-xl mx-auto" }, "We provide freight transportation, warehousing and supply chain management solutions.")), /* @__PURE__ */ React.createElement(HomeServicesPreview, null), /* @__PURE__ */ React.createElement(FleetPreview, null), /* @__PURE__ */ React.createElement(Testimonials, null), /* @__PURE__ */ React.createElement("section", { className: "p-8 bg-gray-50 text-center" }, /* @__PURE__ */ React.createElement("h3", { className: "text-xl font-semibold mb-2" }, "Why Choose Us?"), /* @__PURE__ */ React.createElement("p", { className: "max-w-2xl mx-auto" }, "With years of experience and a dedicated team, we ensure shipments are handled with care and delivered on schedule.")), /* @__PURE__ */ React.createElement(StatsCounter, null), /* @__PURE__ */ React.createElement(ContactForm, null));
  var About = () => /* @__PURE__ */ React.createElement("div", { className: "min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50 p-8 space-y-6" }, /* @__PURE__ */ React.createElement("h2", { className: "text-2xl font-semibold mb-4" }, "About Us"), /* @__PURE__ */ React.createElement("p", { className: "max-w-3xl" }, "Founded in 2010, SPN Logistics began with a single truck and a big dream. Today we operate a modern fleet serving customers across Quebec and Ontario."), /* @__PURE__ */ React.createElement("p", { className: "max-w-3xl" }, "We continue to invest in clean technologies and support local charities to give back to our community."), /* @__PURE__ */ React.createElement("div", { className: "grid md:grid-cols-3 gap-4" }, /* @__PURE__ */ React.createElement("div", { className: "bg-white p-4 rounded shadow" }, /* @__PURE__ */ React.createElement("h3", { className: "font-semibold mb-2" }, "Our Mission"), /* @__PURE__ */ React.createElement("p", null, "To transport freight safely and efficiently while providing outstanding customer service.")), /* @__PURE__ */ React.createElement("div", { className: "bg-white p-4 rounded shadow" }, /* @__PURE__ */ React.createElement("h3", { className: "font-semibold mb-2" }, "Values"), /* @__PURE__ */ React.createElement("p", null, "Integrity, reliability and innovation drive everything we do.")), /* @__PURE__ */ React.createElement("div", { className: "bg-white p-4 rounded shadow" }, /* @__PURE__ */ React.createElement("h3", { className: "font-semibold mb-2" }, "Achievements"), /* @__PURE__ */ React.createElement("p", null, "Recognized as a top regional carrier and trusted partner for many leading shippers."))));
  var services = [
    { title: "Freight Management", icon: "\u{1F69A}", desc: "Complete freight brokerage and management." },
    { title: "Express Delivery", icon: "\u26A1", desc: "Time-critical shipments across Canada." },
    { title: "Specialized Transport", icon: "\u{1F6E3}\uFE0F", desc: "Oversized and temperature controlled loads." },
    { title: "Warehousing", icon: "\u{1F3E2}", desc: "Secure storage facilities." },
    { title: "Logistics Solutions", icon: "\u{1F4E6}", desc: "End-to-end supply chain management." },
    { title: "Cross-Border Shipping", icon: "\u{1F1FA}\u{1F1F8}", desc: "Seamless moves between Canada and the USA." },
    { title: "Consulting", icon: "\u{1F4A1}", desc: "Expert advice to optimize your supply chain." }
  ];
  var ServiceAccordion = ({ service }) => {
    const [open, setOpen] = React.useState(false);
    return /* @__PURE__ */ React.createElement("div", { className: "border-b" }, /* @__PURE__ */ React.createElement(
      "button",
      {
        type: "button",
        className: "w-full flex justify-between items-center p-4 text-left",
        onClick: () => setOpen((o) => !o)
      },
      /* @__PURE__ */ React.createElement("span", { className: "font-semibold flex items-center space-x-2" }, /* @__PURE__ */ React.createElement("span", null, service.icon), /* @__PURE__ */ React.createElement("span", null, service.title)),
      /* @__PURE__ */ React.createElement("span", null, open ? "-" : "+")
    ), open && /* @__PURE__ */ React.createElement("div", { className: "p-4 bg-gray-50" }, service.desc));
  };
  var Services = () => /* @__PURE__ */ React.createElement("div", { className: "min-h-screen bg-gradient-to-br from-green-50 via-white to-green-50 p-8" }, /* @__PURE__ */ React.createElement("h2", { className: "text-2xl font-semibold mb-4" }, "Our Services"), /* @__PURE__ */ React.createElement("div", { className: "max-w-2xl mx-auto" }, services.map((s) => /* @__PURE__ */ React.createElement(ServiceAccordion, { key: s.title, service: s }))));
  var Fleet = () => /* @__PURE__ */ React.createElement("div", { className: "min-h-screen bg-gradient-to-br from-yellow-50 via-white to-yellow-50 p-8" }, /* @__PURE__ */ React.createElement("h2", { className: "text-2xl font-semibold mb-4" }, "Fleet Information"), /* @__PURE__ */ React.createElement("div", { className: "grid md:grid-cols-2 gap-4" }, /* @__PURE__ */ React.createElement("div", { className: "bg-white rounded shadow" }, /* @__PURE__ */ React.createElement("img", { src: "https://images.unsplash.com/photo-1565513123283-fbc0a0aaddc1?auto=format&fit=crop&w=800&q=80", alt: "Truck", className: "rounded-t" }), /* @__PURE__ */ React.createElement("p", { className: "p-4" }, "Modern trucks equipped for long haul.")), /* @__PURE__ */ React.createElement("div", { className: "bg-white rounded shadow" }, /* @__PURE__ */ React.createElement("img", { src: "https://images.unsplash.com/photo-1529070538774-1843cb3265df?auto=format&fit=crop&w=800&q=80", alt: "Trailer", className: "rounded-t" }), /* @__PURE__ */ React.createElement("p", { className: "p-4" }, "Variety of trailers for different loads.")), /* @__PURE__ */ React.createElement("div", { className: "bg-white rounded shadow" }, /* @__PURE__ */ React.createElement("img", { src: "https://images.unsplash.com/photo-1529778162587-656c3b9b4d81?auto=format&fit=crop&w=800&q=80", alt: "Flatbed", className: "rounded-t" }), /* @__PURE__ */ React.createElement("p", { className: "p-4" }, "Flatbeds available for oversized freight.")), /* @__PURE__ */ React.createElement("div", { className: "bg-white rounded shadow" }, /* @__PURE__ */ React.createElement("img", { src: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80", alt: "Warehouse", className: "rounded-t" }), /* @__PURE__ */ React.createElement("p", { className: "p-4" }, "Secure yards and warehouse facilities."))));
  var jobs = [
    { id: "driver", title: "Truck Driver", desc: "Operate late-model tractors on regional routes." },
    { id: "dispatcher", title: "Dispatcher", desc: "Coordinate shipments and support our drivers." },
    { id: "mechanic", title: "Mechanic", desc: "Maintain our fleet of trucks and trailers." },
    { id: "ops", title: "Operations Manager", desc: "Lead daily operations and manage our team." }
  ];
  var Careers = () => /* @__PURE__ */ React.createElement("div", { className: "min-h-screen bg-gradient-to-br from-purple-50 via-white to-purple-50 p-8" }, /* @__PURE__ */ React.createElement("h2", { className: "text-2xl font-semibold mb-4" }, "Careers"), /* @__PURE__ */ React.createElement("p", { className: "mb-6" }, "Join our team! Click a position to apply."), /* @__PURE__ */ React.createElement("div", { className: "max-w-2xl mx-auto" }, jobs.map((j) => /* @__PURE__ */ React.createElement("details", { key: j.id, className: "mb-4 bg-white rounded shadow" }, /* @__PURE__ */ React.createElement("summary", { className: "cursor-pointer p-4 font-semibold" }, j.title), /* @__PURE__ */ React.createElement("div", { className: "p-4 border-t" }, /* @__PURE__ */ React.createElement("p", { className: "mb-4" }, j.desc), /* @__PURE__ */ React.createElement(ContactForm, { formId: `career_${j.id}` }))))));
  var Solutions = () => /* @__PURE__ */ React.createElement("div", { className: "min-h-screen bg-gradient-to-br from-indigo-50 via-white to-indigo-50 p-8" }, /* @__PURE__ */ React.createElement("h2", { className: "text-2xl font-semibold mb-4" }, "Technology-Driven Solutions"), /* @__PURE__ */ React.createElement("p", { className: "mb-2 max-w-xl" }, "Our digital freight network connects shippers with carriers for efficient hauling."), /* @__PURE__ */ React.createElement("p", { className: "max-w-xl" }, "Real-time tracking and optimized routes ensure your shipments arrive on time."), /* @__PURE__ */ React.createElement("ul", { className: "list-disc pl-5 max-w-xl space-y-1 mt-2" }, /* @__PURE__ */ React.createElement("li", null, "API integrations for real-time data"), /* @__PURE__ */ React.createElement("li", null, "Automated alerts for any delays")));
  var Contact = () => /* @__PURE__ */ React.createElement("div", { className: "min-h-screen bg-gradient-to-br from-red-50 via-white to-red-50 p-8" }, /* @__PURE__ */ React.createElement("h2", { className: "text-2xl font-semibold mb-4" }, "Contact Us"), /* @__PURE__ */ React.createElement("p", { className: "mb-4 max-w-xl" }, "Our team is available 24/7 to answer your questions and provide shipping quotes."), /* @__PURE__ */ React.createElement("p", { className: "mb-2" }, /* @__PURE__ */ React.createElement("a", { href: "https://maps.google.com/?q=1059%20Chem.%20Legault%2C%20Les%20C%C3%A8dres%2C%20QC", className: "text-blue-600 underline" }, "1059 Chem. Legault, Les C\xE8dres, QC J7T 1N8")), /* @__PURE__ */ React.createElement("p", { className: "mb-2" }, /* @__PURE__ */ React.createElement("a", { href: "tel:+14506313677", className: "text-blue-600 underline" }, "(450) 631-3677")), /* @__PURE__ */ React.createElement("p", { className: "mb-4" }, /* @__PURE__ */ React.createElement("a", { href: "mailto:info@spnlogistics.com", className: "text-blue-600 underline" }, "info@spnlogistics.com")), /* @__PURE__ */ React.createElement("iframe", { className: "w-full h-64 mb-4", src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2792.6839970458055!2d-74.07331958444191!3d45.342130779099336!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDXCsDIwJzMxLjciTiA3NMKwMDQnMDguMCJX!5e0!3m2!1sen!2sca!4v1710240265604", allowfullscreen: "", loading: "lazy", referrerpolicy: "no-referrer-when-downgrade" }), /* @__PURE__ */ React.createElement(ContactForm, null));
  function ContactForm({ formId = "contact" }) {
    const [status, setStatus] = React.useState("");
    const allowFile = formId.startsWith("career");
    function handleSubmit(e) {
      e.preventDefault();
      if (window.emailjs) {
        emailjs.sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", e.target).then(() => setStatus("Message sent!")).catch(() => setStatus("Failed to send"));
      }
    }
    return /* @__PURE__ */ React.createElement("form", { onSubmit: handleSubmit, className: "max-w-md mx-auto p-4 bg-white rounded shadow mt-8", encType: "multipart/form-data" }, /* @__PURE__ */ React.createElement("input", { type: "hidden", name: "form", value: formId }), /* @__PURE__ */ React.createElement("input", { required: true, name: "name", placeholder: "Name", className: "w-full p-2 mb-2 border" }), /* @__PURE__ */ React.createElement("input", { required: true, type: "email", name: "email", placeholder: "Email", className: "w-full p-2 mb-2 border" }), allowFile && /* @__PURE__ */ React.createElement("input", { type: "file", name: "resume", className: "w-full p-2 mb-2 border" }), /* @__PURE__ */ React.createElement("textarea", { required: true, name: "message", placeholder: "Message", className: "w-full p-2 mb-2 border" }), /* @__PURE__ */ React.createElement("button", { className: "bg-blue-600 text-white px-4 py-2", type: "submit" }, "Send"), status && /* @__PURE__ */ React.createElement("p", { className: "mt-2 text-sm" }, status));
  }
  var NavLink = ({ to, children, className = "" }) => /* @__PURE__ */ React.createElement(
    Link,
    {
      className: `block md:inline-block px-3 py-2 rounded text-gray-800 transition-colors duration-200 hover:bg-blue-600 hover:text-white ${className}`,
      to
    },
    children
  );
  var Footer = () => /* @__PURE__ */ React.createElement("footer", { className: "bg-gradient-to-r from-gray-800 to-gray-900 text-white mt-8" }, /* @__PURE__ */ React.createElement("div", { className: "max-w-6xl mx-auto px-4 py-10 grid md:grid-cols-3 gap-6" }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h3", { className: "font-semibold mb-2" }, "Navigation"), /* @__PURE__ */ React.createElement("ul", { className: "space-y-1" }, /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement(NavLink, { to: "/", className: "text-gray-300" }, "Home")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement(NavLink, { to: "/about", className: "text-gray-300" }, "About")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement(NavLink, { to: "/services", className: "text-gray-300" }, "Services")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement(NavLink, { to: "/fleet", className: "text-gray-300" }, "Fleet")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement(NavLink, { to: "/careers", className: "text-gray-300" }, "Careers")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement(NavLink, { to: "/solutions", className: "text-gray-300" }, "Solutions")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement(NavLink, { to: "/contact", className: "text-gray-300" }, "Contact")))), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h3", { className: "font-semibold mb-2" }, "Follow Us"), /* @__PURE__ */ React.createElement("div", { className: "flex space-x-4 text-xl" }, /* @__PURE__ */ React.createElement("a", { href: "#", "aria-label": "Facebook", className: "hover:text-blue-400" }, /* @__PURE__ */ React.createElement("i", { className: "fab fa-facebook-f" })), /* @__PURE__ */ React.createElement("a", { href: "#", "aria-label": "Twitter", className: "hover:text-blue-400" }, /* @__PURE__ */ React.createElement("i", { className: "fab fa-twitter" })), /* @__PURE__ */ React.createElement("a", { href: "#", "aria-label": "Instagram", className: "hover:text-blue-400" }, /* @__PURE__ */ React.createElement("i", { className: "fab fa-instagram" })))), /* @__PURE__ */ React.createElement("div", { className: "md:col-span-1 col-span-2" }, /* @__PURE__ */ React.createElement("h3", { className: "font-semibold mb-2" }, "Sponsors"), /* @__PURE__ */ React.createElement("div", { className: "overflow-hidden" }, /* @__PURE__ */ React.createElement("div", { className: "flex space-x-8 text-2xl animate-scroll" }, /* @__PURE__ */ React.createElement("i", { className: "fas fa-truck hover:text-yellow-300" }), /* @__PURE__ */ React.createElement("i", { className: "fas fa-warehouse hover:text-yellow-300" }), /* @__PURE__ */ React.createElement("i", { className: "fas fa-road hover:text-yellow-300" }), /* @__PURE__ */ React.createElement("i", { className: "fas fa-traffic-light hover:text-yellow-300" }), /* @__PURE__ */ React.createElement("i", { className: "fas fa-tools hover:text-yellow-300" }), /* @__PURE__ */ React.createElement("i", { className: "fas fa-gas-pump hover:text-yellow-300" }))))), /* @__PURE__ */ React.createElement("div", { className: "text-center py-4 border-t border-gray-700" }, /* @__PURE__ */ React.createElement("p", null, "\xA9 ", (/* @__PURE__ */ new Date()).getFullYear(), " SPN Logistics. Site by ", /* @__PURE__ */ React.createElement("a", { href: "https://www.madebyparm.com", className: "text-blue-400" }, "madebyparm"), ".")));
  var Layout = ({ children }) => {
    const [open, setOpen] = React.useState(false);
    const toggle = () => setOpen((o) => !o);
    const Links = () => /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(NavLink, { to: "/" }, "Home"), /* @__PURE__ */ React.createElement(NavLink, { to: "/about" }, "About"), /* @__PURE__ */ React.createElement(NavLink, { to: "/services" }, "Services"), /* @__PURE__ */ React.createElement(NavLink, { to: "/fleet" }, "Fleet"), /* @__PURE__ */ React.createElement(NavLink, { to: "/careers" }, "Careers"), /* @__PURE__ */ React.createElement(NavLink, { to: "/solutions" }, "Solutions"), /* @__PURE__ */ React.createElement(NavLink, { to: "/contact" }, "Contact"));
    return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("nav", { className: "sticky top-0 z-50 text-white bg-gradient-to-r from-gray-900 to-gray-700 shadow-md" }, /* @__PURE__ */ React.createElement("div", { className: "max-w-6xl mx-auto flex items-center justify-between p-4" }, /* @__PURE__ */ React.createElement("h1", { className: "text-xl font-bold" }, "SPN Logistics"), /* @__PURE__ */ React.createElement("button", { className: "md:hidden focus:outline-none", onClick: toggle, "aria-label": "Menu" }, open ? /* @__PURE__ */ React.createElement("i", { className: "fas fa-times text-2xl" }) : /* @__PURE__ */ React.createElement("i", { className: "fas fa-bars text-2xl" })), /* @__PURE__ */ React.createElement("div", { className: "hidden md:flex space-x-4" }, /* @__PURE__ */ React.createElement(Links, null))), /* @__PURE__ */ React.createElement("div", { className: `md:hidden overflow-hidden transition-all duration-300 ${open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}` }, /* @__PURE__ */ React.createElement("div", { className: "px-4 pb-4 space-y-1" }, /* @__PURE__ */ React.createElement(Links, null)))), children, /* @__PURE__ */ React.createElement(Footer, null));
  };
  var App = () => /* @__PURE__ */ React.createElement(Router, null, /* @__PURE__ */ React.createElement(Layout, null, /* @__PURE__ */ React.createElement(Routes, null, /* @__PURE__ */ React.createElement(Route, { path: "/", element: /* @__PURE__ */ React.createElement(Home, null) }), /* @__PURE__ */ React.createElement(Route, { path: "/about", element: /* @__PURE__ */ React.createElement(About, null) }), /* @__PURE__ */ React.createElement(Route, { path: "/services", element: /* @__PURE__ */ React.createElement(Services, null) }), /* @__PURE__ */ React.createElement(Route, { path: "/fleet", element: /* @__PURE__ */ React.createElement(Fleet, null) }), /* @__PURE__ */ React.createElement(Route, { path: "/careers", element: /* @__PURE__ */ React.createElement(Careers, null) }), /* @__PURE__ */ React.createElement(Route, { path: "/solutions", element: /* @__PURE__ */ React.createElement(Solutions, null) }), /* @__PURE__ */ React.createElement(Route, { path: "/contact", element: /* @__PURE__ */ React.createElement(Contact, null) }))));
  ReactDOM.createRoot(document.getElementById("root")).render(/* @__PURE__ */ React.createElement(App, null));
})();
