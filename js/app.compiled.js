(() => {
  // js/app.js
  var {
    BrowserRouter,
    Routes,
    Route,
    Link,
    NavLink: RouterNavLink
  } = window.ReactRouterDOM || {};
  window.emailjs && emailjs.init("YOUR_PUBLIC_KEY");
  var { motion, useInView } = Motion;
  var Hero = () => /* @__PURE__ */ React.createElement("section", { className: "relative h-screen overflow-hidden" }, /* @__PURE__ */ React.createElement(
    "video",
    {
      className: "absolute inset-0 w-full h-full object-cover",
      src: "https://assets.mixkit.co/videos/preview/mixkit-large-truck-riding-down-a-highway-10020-large.mp4",
      autoPlay: true,
      loop: true,
      muted: true,
      playsInline: true
    }
  ), /* @__PURE__ */ React.createElement("div", { className: "absolute inset-0 bg-black/50 flex items-center justify-center" }, /* @__PURE__ */ React.createElement(
    motion.h1,
    {
      initial: { opacity: 0, y: -50 },
      animate: { opacity: 1, y: 0 },
      transition: { duration: 1 },
      className: "text-white text-5xl font-bold"
    },
    "SPN Logistics"
  )));
  var { CountUp } = ReactCountUp;
  var Counter = ({ end, start, suffix }) => /* @__PURE__ */ React.createElement(
    CountUp,
    {
      start: start ? 0 : null,
      end: start ? end : 0,
      duration: 2,
      suffix
    },
    ({ countUpRef }) => /* @__PURE__ */ React.createElement("div", { ref: countUpRef, className: "text-3xl font-bold text-blue-600" })
  );
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
      { label: "Trucks in Fleet", end: 25, suffix: "+" },
      { label: "Deliveries Completed", end: 15e3, suffix: "+" },
      { label: "Years of Operation", end: 10, suffix: "+" },
      { label: "Customer Satisfaction", end: 98, suffix: "%" }
    ];
    return /* @__PURE__ */ React.createElement("div", { ref, className: "bg-gray-50 py-8 grid sm:grid-cols-4 gap-8 max-w-5xl mx-auto" }, stats.map((s) => /* @__PURE__ */ React.createElement(
      motion.div,
      {
        key: s.label,
        initial: { opacity: 0, y: 20 },
        animate: start ? { opacity: 1, y: 0 } : {},
        className: "text-center"
      },
      /* @__PURE__ */ React.createElement(Counter, { end: s.end, start, suffix: s.suffix }),
      /* @__PURE__ */ React.createElement("p", { className: "mt-2 font-semibold" }, s.label)
    )));
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
  var Home = () => /* @__PURE__ */ React.createElement("div", { className: "min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50" }, /* @__PURE__ */ React.createElement(Hero, null), /* @__PURE__ */ React.createElement("section", { className: "p-8 text-center" }, /* @__PURE__ */ React.createElement("h2", { className: "text-2xl font-semibold mb-4" }, "Reliable Trucking and Logistics Services"), /* @__PURE__ */ React.createElement("p", { className: "max-w-xl mx-auto" }, "We provide freight transportation, warehousing and supply chain management solutions.")), /* @__PURE__ */ React.createElement(HomeServicesPreview, null), /* @__PURE__ */ React.createElement(FleetPreview, null), /* @__PURE__ */ React.createElement(Testimonials, null), /* @__PURE__ */ React.createElement(StatsCounter, null), /* @__PURE__ */ React.createElement(ContactForm, null));
  var About = () => /* @__PURE__ */ React.createElement("div", { className: "min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50 p-8 space-y-6" }, /* @__PURE__ */ React.createElement("h2", { className: "text-2xl font-semibold mb-4" }, "About Us"), /* @__PURE__ */ React.createElement("p", { className: "max-w-3xl" }, "Founded in 2010, SPN Logistics began with a single truck and a big dream. Today we operate a modern fleet serving customers across Quebec and Ontario."), /* @__PURE__ */ React.createElement("div", { className: "grid md:grid-cols-3 gap-4" }, /* @__PURE__ */ React.createElement("div", { className: "bg-white p-4 rounded shadow" }, /* @__PURE__ */ React.createElement("h3", { className: "font-semibold mb-2" }, "Our Mission"), /* @__PURE__ */ React.createElement("p", null, "To transport freight safely and efficiently while providing outstanding customer service.")), /* @__PURE__ */ React.createElement("div", { className: "bg-white p-4 rounded shadow" }, /* @__PURE__ */ React.createElement("h3", { className: "font-semibold mb-2" }, "Values"), /* @__PURE__ */ React.createElement("p", null, "Integrity, reliability and innovation drive everything we do.")), /* @__PURE__ */ React.createElement("div", { className: "bg-white p-4 rounded shadow" }, /* @__PURE__ */ React.createElement("h3", { className: "font-semibold mb-2" }, "Achievements"), /* @__PURE__ */ React.createElement("p", null, "Recognized as a top regional carrier and trusted partner for many leading shippers."))));
  var {
    FaTruckMoving,
    FaBolt,
    FaTruckLoading,
    FaWarehouse,
    FaBoxes
  } = ReactIcons.Fa;
  var services = [
    { title: "Freight Management", icon: /* @__PURE__ */ React.createElement(FaTruckMoving, null), desc: "Complete freight brokerage and management." },
    { title: "Express Delivery", icon: /* @__PURE__ */ React.createElement(FaBolt, null), desc: "Time-critical shipments across Canada." },
    { title: "Specialized Transport", icon: /* @__PURE__ */ React.createElement(FaTruckLoading, null), desc: "Oversized and temperature-controlled loads." },
    { title: "Warehousing", icon: /* @__PURE__ */ React.createElement(FaWarehouse, null), desc: "Secure storage facilities." },
    { title: "Logistics Solutions", icon: /* @__PURE__ */ React.createElement(FaBoxes, null), desc: "End-to-end supply chain management." }
  ];
  var ServiceAccordion = ({ service, eventKey }) => /* @__PURE__ */ React.createElement(ReactBootstrap.Accordion.Item, { eventKey }, /* @__PURE__ */ React.createElement(ReactBootstrap.Accordion.Header, null, /* @__PURE__ */ React.createElement("span", { className: "flex items-center space-x-2" }, /* @__PURE__ */ React.createElement("span", null, service.icon), /* @__PURE__ */ React.createElement("span", null, service.title))), /* @__PURE__ */ React.createElement(ReactBootstrap.Accordion.Body, null, service.desc));
  var Services = () => /* @__PURE__ */ React.createElement("div", { className: "min-h-screen bg-gradient-to-br from-green-50 via-white to-green-50 p-8" }, /* @__PURE__ */ React.createElement("h2", { className: "text-2xl font-semibold mb-4" }, "Our Services"), /* @__PURE__ */ React.createElement(ReactBootstrap.Accordion, { className: "max-w-2xl mx-auto" }, services.map((s, idx) => /* @__PURE__ */ React.createElement(ServiceAccordion, { key: s.title, service: s, eventKey: `${idx}` }))));
  var Fleet = () => /* @__PURE__ */ React.createElement("div", { className: "min-h-screen bg-gradient-to-br from-yellow-50 via-white to-yellow-50 p-8" }, /* @__PURE__ */ React.createElement("h2", { className: "text-2xl font-semibold mb-4" }, "Fleet Information"), /* @__PURE__ */ React.createElement("div", { className: "grid md:grid-cols-2 gap-4" }, /* @__PURE__ */ React.createElement("div", { className: "bg-white rounded shadow" }, /* @__PURE__ */ React.createElement("img", { src: "https://images.unsplash.com/photo-1565513123283-fbc0a0aaddc1?auto=format&fit=crop&w=800&q=80", alt: "Truck", className: "rounded-t" }), /* @__PURE__ */ React.createElement("p", { className: "p-4" }, "Modern trucks equipped for long haul.")), /* @__PURE__ */ React.createElement("div", { className: "bg-white rounded shadow" }, /* @__PURE__ */ React.createElement("img", { src: "https://images.unsplash.com/photo-1529070538774-1843cb3265df?auto=format&fit=crop&w=800&q=80", alt: "Trailer", className: "rounded-t" }), /* @__PURE__ */ React.createElement("p", { className: "p-4" }, "Variety of trailers for different loads."))));
  var jobs = [
    { id: "driver", title: "Truck Driver", desc: "Operate late-model tractors on regional routes." },
    { id: "dispatcher", title: "Dispatcher", desc: "Coordinate shipments and support our drivers." },
    { id: "mechanic", title: "Mechanic", desc: "Maintain our fleet of trucks and trailers." }
  ];
  var employeeTestimonials = [
    { q: "What do you like about working at SPN?", a: "Great team culture and modern equipment." },
    { q: "Do you offer training?", a: "Yes, continuous driver training is provided." }
  ];
  var CareerFaq = () => /* @__PURE__ */ React.createElement("div", { className: "mt-8" }, /* @__PURE__ */ React.createElement("h3", { className: "text-xl font-semibold mb-2" }, "Employee Insights"), employeeTestimonials.map((t, i) => /* @__PURE__ */ React.createElement(
    motion.div,
    {
      key: i,
      initial: { opacity: 0, y: 20 },
      whileInView: { opacity: 1, y: 0 },
      viewport: { once: true },
      className: "bg-white p-4 rounded shadow mb-2"
    },
    /* @__PURE__ */ React.createElement("p", { className: "font-semibold" }, t.q),
    /* @__PURE__ */ React.createElement("p", null, t.a)
  )));
  var Careers = () => /* @__PURE__ */ React.createElement("div", { className: "min-h-screen bg-gradient-to-br from-purple-50 via-white to-purple-50 p-8" }, /* @__PURE__ */ React.createElement("h2", { className: "text-2xl font-semibold mb-4" }, "Careers"), /* @__PURE__ */ React.createElement("p", { className: "mb-6" }, "Join our team! Click a position to apply."), /* @__PURE__ */ React.createElement("div", { className: "max-w-2xl mx-auto" }, jobs.map((j) => /* @__PURE__ */ React.createElement("details", { key: j.id, className: "mb-4 bg-white rounded shadow" }, /* @__PURE__ */ React.createElement("summary", { className: "cursor-pointer p-4 font-semibold" }, j.title), /* @__PURE__ */ React.createElement("div", { className: "p-4 border-t" }, /* @__PURE__ */ React.createElement("p", { className: "mb-4" }, j.desc), /* @__PURE__ */ React.createElement(ContactForm, { formId: `career_${j.id}` }))))), /* @__PURE__ */ React.createElement(CareerFaq, null));
  var Solutions = () => /* @__PURE__ */ React.createElement("div", { className: "min-h-screen bg-gradient-to-br from-indigo-50 via-white to-indigo-50 p-8" }, /* @__PURE__ */ React.createElement("h2", { className: "text-2xl font-semibold mb-4" }, "Technology-Driven Solutions"), /* @__PURE__ */ React.createElement("p", { className: "mb-2 max-w-xl" }, "Our digital freight network connects shippers with carriers for efficient hauling."), /* @__PURE__ */ React.createElement("p", { className: "max-w-xl" }, "Real-time tracking and optimized routes ensure your shipments arrive on time."));
  var Contact = () => /* @__PURE__ */ React.createElement("div", { className: "min-h-screen bg-gradient-to-br from-red-50 via-white to-red-50 p-8" }, /* @__PURE__ */ React.createElement("h2", { className: "text-2xl font-semibold mb-4" }, "Contact Us"), /* @__PURE__ */ React.createElement("p", { className: "mb-2" }, /* @__PURE__ */ React.createElement("a", { href: "https://maps.google.com/?q=1059%20Chem.%20Legault%2C%20Les%20C%C3%A8dres%2C%20QC", className: "text-blue-600 underline" }, "1059 Chem. Legault, Les C\xE8dres, QC J7T 1N8")), /* @__PURE__ */ React.createElement("p", { className: "mb-2" }, /* @__PURE__ */ React.createElement("a", { href: "tel:+14506313677", className: "text-blue-600 underline" }, "(450) 631-3677")), /* @__PURE__ */ React.createElement("p", { className: "mb-4" }, /* @__PURE__ */ React.createElement("a", { href: "mailto:info@spnlogistics.com", className: "text-blue-600 underline" }, "info@spnlogistics.com")), /* @__PURE__ */ React.createElement("p", { className: "mb-4 font-semibold" }, "Quick responses and 24/7 availability guaranteed."), /* @__PURE__ */ React.createElement("iframe", { className: "w-full h-64 mb-4", src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2792.6839970458055!2d-74.07331958444191!3d45.342130779099336!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDXCsDIwJzMxLjciTiA3NMKwMDQnMDguMCJX!5e0!3m2!1sen!2sca!4v1710240265604", allowfullscreen: "", loading: "lazy", referrerpolicy: "no-referrer-when-downgrade" }), /* @__PURE__ */ React.createElement(ContactForm, null));
  function ContactForm({ formId = "contact" }) {
    const [status, setStatus] = React.useState("");
    const allowFile = formId.startsWith("career");
    function handleSubmit(e) {
      e.preventDefault();
      if (window.emailjs) {
        emailjs.sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", e.target).then(() => setStatus("Message sent!")).catch(() => setStatus("Failed to send"));
      }
    }
    return /* @__PURE__ */ React.createElement("form", { onSubmit: handleSubmit, className: "max-w-md mx-auto p-4 bg-white rounded shadow mt-8", encType: "multipart/form-data" }, /* @__PURE__ */ React.createElement("input", { type: "hidden", name: "form", value: formId }), /* @__PURE__ */ React.createElement("input", { required: true, name: "name", placeholder: "Name", className: "w-full p-2 mb-2 border" }), /* @__PURE__ */ React.createElement("input", { required: true, type: "email", name: "email", placeholder: "Email", className: "w-full p-2 mb-2 border" }), allowFile && /* @__PURE__ */ React.createElement("input", { type: "file", name: "resume", className: "w-full p-2 mb-2 border" }), /* @__PURE__ */ React.createElement("textarea", { required: true, name: "message", placeholder: "Message", className: "w-full p-2 mb-2 border" }), /* @__PURE__ */ React.createElement("button", { className: "bg-blue-600 text-white px-4 py-2", type: "submit" }, allowFile ? "Apply Now" : "Send"), status && /* @__PURE__ */ React.createElement("p", { className: "mt-2 text-sm" }, status));
  }
  var NavLink = ({ to, children, className = "" }) => /* @__PURE__ */ React.createElement(
    RouterNavLink,
    {
      to,
      end: true,
      className: ({ isActive }) => `block md:inline-block px-3 py-2 rounded transition-colors duration-200 ${isActive ? "bg-blue-600 text-white" : "text-gray-800 hover:bg-blue-600 hover:text-white"} ${className}`
    },
    children
  );
  var Footer = () => /* @__PURE__ */ React.createElement("footer", { className: "bg-gradient-to-r from-gray-800 to-gray-900 text-white mt-8" }, /* @__PURE__ */ React.createElement("div", { className: "max-w-6xl mx-auto px-4 py-10 grid md:grid-cols-3 gap-6" }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h3", { className: "font-semibold mb-2" }, "Navigation"), /* @__PURE__ */ React.createElement("ul", { className: "space-y-1" }, /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement(NavLink, { to: "/", className: "text-gray-300" }, "Home")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement(NavLink, { to: "/about", className: "text-gray-300" }, "About")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement(NavLink, { to: "/services", className: "text-gray-300" }, "Services")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement(NavLink, { to: "/fleet", className: "text-gray-300" }, "Fleet")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement(NavLink, { to: "/careers", className: "text-gray-300" }, "Careers")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement(NavLink, { to: "/solutions", className: "text-gray-300" }, "Solutions")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement(NavLink, { to: "/contact", className: "text-gray-300" }, "Contact")))), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h3", { className: "font-semibold mb-2" }, "Follow Us"), /* @__PURE__ */ React.createElement("div", { className: "flex space-x-4 text-xl" }, /* @__PURE__ */ React.createElement("a", { href: "#", "aria-label": "Facebook", className: "hover:text-blue-400" }, /* @__PURE__ */ React.createElement("i", { className: "fab fa-facebook-f" })), /* @__PURE__ */ React.createElement("a", { href: "#", "aria-label": "Twitter", className: "hover:text-blue-400" }, /* @__PURE__ */ React.createElement("i", { className: "fab fa-twitter" })), /* @__PURE__ */ React.createElement("a", { href: "#", "aria-label": "Instagram", className: "hover:text-blue-400" }, /* @__PURE__ */ React.createElement("i", { className: "fab fa-instagram" })))), /* @__PURE__ */ React.createElement("div", { className: "md:col-span-1 col-span-2" }, /* @__PURE__ */ React.createElement("h3", { className: "font-semibold mb-2" }, "Sponsors"), /* @__PURE__ */ React.createElement("div", { className: "overflow-hidden" }, /* @__PURE__ */ React.createElement("div", { className: "flex space-x-8 text-2xl animate-scroll" }, /* @__PURE__ */ React.createElement("i", { className: "fas fa-truck hover:text-yellow-300" }), /* @__PURE__ */ React.createElement("i", { className: "fas fa-warehouse hover:text-yellow-300" }), /* @__PURE__ */ React.createElement("i", { className: "fas fa-road hover:text-yellow-300" }), /* @__PURE__ */ React.createElement("i", { className: "fas fa-traffic-light hover:text-yellow-300" }), /* @__PURE__ */ React.createElement("i", { className: "fas fa-tools hover:text-yellow-300" }), /* @__PURE__ */ React.createElement("i", { className: "fas fa-gas-pump hover:text-yellow-300" }))))), /* @__PURE__ */ React.createElement("div", { className: "text-center py-4 border-t border-gray-700" }, /* @__PURE__ */ React.createElement("p", null, "\xA9 ", (/* @__PURE__ */ new Date()).getFullYear(), " SPN Logistics. Site by ", /* @__PURE__ */ React.createElement("a", { href: "https://www.madebyparm.com", className: "text-blue-400" }, "madebyparm"), ".")));
  var Layout = ({ children }) => {
    const [open, setOpen] = React.useState(false);
    const toggle = () => setOpen((o) => !o);
    const Links = () => /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(NavLink, { to: "/" }, "Home"), /* @__PURE__ */ React.createElement(NavLink, { to: "/about" }, "About"), /* @__PURE__ */ React.createElement(NavLink, { to: "/services" }, "Services"), /* @__PURE__ */ React.createElement(NavLink, { to: "/fleet" }, "Fleet"), /* @__PURE__ */ React.createElement(NavLink, { to: "/careers" }, "Careers"), /* @__PURE__ */ React.createElement(NavLink, { to: "/solutions" }, "Solutions"), /* @__PURE__ */ React.createElement(NavLink, { to: "/contact" }, "Contact"));
    return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("nav", { className: "sticky top-0 z-50 bg-white/80 backdrop-blur shadow-md" }, /* @__PURE__ */ React.createElement("div", { className: "max-w-6xl mx-auto flex items-center justify-between p-4" }, /* @__PURE__ */ React.createElement(Link, { to: "/", className: "text-xl font-bold" }, "SPN Logistics"), /* @__PURE__ */ React.createElement("button", { className: "md:hidden", onClick: toggle, "aria-label": "Menu" }, /* @__PURE__ */ React.createElement(
      "svg",
      {
        className: "w-6 h-6",
        fill: "none",
        stroke: "currentColor",
        viewBox: "0 0 24 24",
        xmlns: "http://www.w3.org/2000/svg"
      },
      /* @__PURE__ */ React.createElement("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M4 6h16M4 12h16M4 18h16" })
    )), /* @__PURE__ */ React.createElement("div", { className: "hidden md:flex space-x-4" }, /* @__PURE__ */ React.createElement(Links, null))), open && /* @__PURE__ */ React.createElement("div", { className: "md:hidden px-4 pb-4 space-y-1" }, /* @__PURE__ */ React.createElement(Links, null))), children, /* @__PURE__ */ React.createElement(Footer, null));
  };
  var App = () => /* @__PURE__ */ React.createElement(BrowserRouter, null, /* @__PURE__ */ React.createElement(Layout, null, /* @__PURE__ */ React.createElement(Routes, null, /* @__PURE__ */ React.createElement(Route, { path: "/", element: /* @__PURE__ */ React.createElement(Home, null) }), /* @__PURE__ */ React.createElement(Route, { path: "/about", element: /* @__PURE__ */ React.createElement(About, null) }), /* @__PURE__ */ React.createElement(Route, { path: "/services", element: /* @__PURE__ */ React.createElement(Services, null) }), /* @__PURE__ */ React.createElement(Route, { path: "/fleet", element: /* @__PURE__ */ React.createElement(Fleet, null) }), /* @__PURE__ */ React.createElement(Route, { path: "/careers", element: /* @__PURE__ */ React.createElement(Careers, null) }), /* @__PURE__ */ React.createElement(Route, { path: "/solutions", element: /* @__PURE__ */ React.createElement(Solutions, null) }), /* @__PURE__ */ React.createElement(Route, { path: "/contact", element: /* @__PURE__ */ React.createElement(Contact, null) }))));
  ReactDOM.createRoot(document.getElementById("root")).render(/* @__PURE__ */ React.createElement(App, null));
})();
