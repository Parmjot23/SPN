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
    return /* @__PURE__ */ React.createElement("section", { className: "bg-cover bg-center h-96 flex items-center justify-center", style: { backgroundImage: "url(https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1600&q=80)" } }, /* @__PURE__ */ React.createElement("h1", { id: "heroText", className: "text-white text-4xl font-bold bg-black bg-opacity-50 p-4 rounded" }, "SPN Logistics"));
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
  var Home = () => /* @__PURE__ */ React.createElement("div", { className: "min-h-screen bg-cover bg-center", style: { backgroundImage: "url(https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1600&q=80)" } }, /* @__PURE__ */ React.createElement(Hero, null), /* @__PURE__ */ React.createElement("section", { className: "p-8 text-center" }, /* @__PURE__ */ React.createElement("h2", { className: "text-2xl font-semibold mb-4" }, "Reliable Trucking and Logistics Services"), /* @__PURE__ */ React.createElement("p", { className: "max-w-xl mx-auto" }, "We provide freight transportation, warehousing and supply chain management solutions.")), /* @__PURE__ */ React.createElement(StatsCounter, null), /* @__PURE__ */ React.createElement(ContactForm, null));
  var About = () => /* @__PURE__ */ React.createElement("div", { className: "min-h-screen bg-cover bg-center p-8", style: { backgroundImage: "url(https://images.unsplash.com/photo-1529070538774-1843cb3265df?auto=format&fit=crop&w=1600&q=80)" } }, /* @__PURE__ */ React.createElement("h2", { className: "text-2xl font-semibold mb-4" }, "About Us"), /* @__PURE__ */ React.createElement("p", null, "SPN Logistics has been serving customers in Quebec with reliable trucking solutions. Our mission is to deliver shipments safely and on time."));
  var services = [
    { title: "Freight Transportation", icon: "\u{1F69A}", desc: "Efficient truckload and LTL services." },
    { title: "Warehousing", icon: "\u{1F3E2}", desc: "Secure storage facilities." },
    { title: "Logistics Solutions", icon: "\u{1F4E6}", desc: "End-to-end supply chain management." }
  ];
  var Services = () => /* @__PURE__ */ React.createElement("div", { className: "min-h-screen bg-cover bg-center p-8", style: { backgroundImage: "url(https://images.unsplash.com/photo-1581091012184-155a876cc194?auto=format&fit=crop&w=1600&q=80)" } }, /* @__PURE__ */ React.createElement("h2", { className: "text-2xl font-semibold mb-4" }, "Our Services"), /* @__PURE__ */ React.createElement("div", { className: "grid sm:grid-cols-2 lg:grid-cols-3 gap-4" }, services.map((s) => /* @__PURE__ */ React.createElement("div", { key: s.title, className: "bg-white p-4 rounded shadow" }, /* @__PURE__ */ React.createElement("div", { className: "text-4xl mb-2" }, s.icon), /* @__PURE__ */ React.createElement("h3", { className: "font-semibold" }, s.title), /* @__PURE__ */ React.createElement("p", null, s.desc)))));
  var Fleet = () => /* @__PURE__ */ React.createElement("div", { className: "min-h-screen bg-cover bg-center p-8", style: { backgroundImage: "url(https://images.unsplash.com/photo-1565513123283-fbc0a0aaddc1?auto=format&fit=crop&w=1600&q=80)" } }, /* @__PURE__ */ React.createElement("h2", { className: "text-2xl font-semibold mb-4" }, "Fleet Information"), /* @__PURE__ */ React.createElement("div", { className: "grid md:grid-cols-2 gap-4" }, /* @__PURE__ */ React.createElement("div", { className: "bg-white rounded shadow" }, /* @__PURE__ */ React.createElement("img", { src: "https://images.unsplash.com/photo-1565513123283-fbc0a0aaddc1?auto=format&fit=crop&w=800&q=80", alt: "Truck", className: "rounded-t" }), /* @__PURE__ */ React.createElement("p", { className: "p-4" }, "Modern trucks equipped for long haul.")), /* @__PURE__ */ React.createElement("div", { className: "bg-white rounded shadow" }, /* @__PURE__ */ React.createElement("img", { src: "https://images.unsplash.com/photo-1529070538774-1843cb3265df?auto=format&fit=crop&w=800&q=80", alt: "Trailer", className: "rounded-t" }), /* @__PURE__ */ React.createElement("p", { className: "p-4" }, "Variety of trailers for different loads."))));
  var Careers = () => /* @__PURE__ */ React.createElement("div", { className: "min-h-screen bg-cover bg-center p-8", style: { backgroundImage: "url(https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1600&q=80)" } }, /* @__PURE__ */ React.createElement("h2", { className: "text-2xl font-semibold mb-4" }, "Careers"), /* @__PURE__ */ React.createElement("p", { className: "mb-4" }, "Join our team! Submit your application below."), /* @__PURE__ */ React.createElement(ContactForm, { formId: "careers" }));
  var Contact = () => /* @__PURE__ */ React.createElement("div", { className: "min-h-screen bg-cover bg-center p-8", style: { backgroundImage: "url(https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=1600&q=80)" } }, /* @__PURE__ */ React.createElement("h2", { className: "text-2xl font-semibold mb-4" }, "Contact Us"), /* @__PURE__ */ React.createElement("p", { className: "mb-4" }, "1059 Chem. Legault, Les C\xE8dres, QC J7T 1N8"), /* @__PURE__ */ React.createElement("iframe", { className: "w-full h-64 mb-4", src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2792.6839970458055!2d-74.07331958444191!3d45.342130779099336!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDXCsDIwJzMxLjciTiA3NMKwMDQnMDguMCJX!5e0!3m2!1sen!2sca!4v1710240265604", allowfullscreen: "", loading: "lazy", referrerpolicy: "no-referrer-when-downgrade" }), /* @__PURE__ */ React.createElement(ContactForm, null));
  function ContactForm({ formId = "contact" }) {
    const [status, setStatus] = React.useState("");
    function handleSubmit(e) {
      e.preventDefault();
      const data = Object.fromEntries(new FormData(e.target));
      if (window.emailjs) {
        emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", data).then(() => setStatus("Message sent!")).catch(() => setStatus("Failed to send"));
      }
    }
    return /* @__PURE__ */ React.createElement("form", { onSubmit: handleSubmit, className: "max-w-md mx-auto p-4 bg-white rounded shadow mt-8" }, /* @__PURE__ */ React.createElement("input", { type: "hidden", name: "form", value: formId }), /* @__PURE__ */ React.createElement("input", { required: true, name: "name", placeholder: "Name", className: "w-full p-2 mb-2 border" }), /* @__PURE__ */ React.createElement("input", { required: true, type: "email", name: "email", placeholder: "Email", className: "w-full p-2 mb-2 border" }), /* @__PURE__ */ React.createElement("textarea", { required: true, name: "message", placeholder: "Message", className: "w-full p-2 mb-2 border" }), /* @__PURE__ */ React.createElement("button", { className: "bg-blue-600 text-white px-4 py-2", type: "submit" }, "Send"), status && /* @__PURE__ */ React.createElement("p", { className: "mt-2 text-sm" }, status));
  }
  var NavLink = ({ to, children }) => /* @__PURE__ */ React.createElement(Link, { className: "text-white hover:text-gray-200", to }, children);
  var Footer = () => /* @__PURE__ */ React.createElement("footer", { className: "bg-gray-800 text-white mt-8" }, /* @__PURE__ */ React.createElement("div", { className: "max-w-6xl mx-auto px-4 py-8 grid md:grid-cols-3 gap-6" }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h3", { className: "font-semibold mb-2" }, "Navigation"), /* @__PURE__ */ React.createElement("ul", { className: "space-y-1" }, /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement(NavLink, { to: "/" }, "Home")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement(NavLink, { to: "/about" }, "About")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement(NavLink, { to: "/services" }, "Services")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement(NavLink, { to: "/fleet" }, "Fleet")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement(NavLink, { to: "/careers" }, "Careers")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement(NavLink, { to: "/contact" }, "Contact")))), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h3", { className: "font-semibold mb-2" }, "Follow Us"), /* @__PURE__ */ React.createElement("div", { className: "flex space-x-4 text-xl" }, /* @__PURE__ */ React.createElement("a", { href: "#", "aria-label": "Facebook" }, "\u{1F4D8}"), /* @__PURE__ */ React.createElement("a", { href: "#", "aria-label": "Twitter" }, "\u{1F426}"), /* @__PURE__ */ React.createElement("a", { href: "#", "aria-label": "Instagram" }, "\u{1F4F8}"))), /* @__PURE__ */ React.createElement("div", { className: "md:col-span-1 col-span-2" }, /* @__PURE__ */ React.createElement("h3", { className: "font-semibold mb-2" }, "Sponsors"), /* @__PURE__ */ React.createElement("div", { className: "overflow-hidden" }, /* @__PURE__ */ React.createElement("div", { className: "flex space-x-8 animate-scroll" }, /* @__PURE__ */ React.createElement("span", null, "\u{1F69A}"), /* @__PURE__ */ React.createElement("span", null, "\u{1F3ED}"), /* @__PURE__ */ React.createElement("span", null, "\u{1F6E3}\uFE0F"), /* @__PURE__ */ React.createElement("span", null, "\u{1F6A6}"), /* @__PURE__ */ React.createElement("span", null, "\u{1F527}"), /* @__PURE__ */ React.createElement("span", null, "\u26FD"))))), /* @__PURE__ */ React.createElement("div", { className: "text-center py-4 border-t border-gray-700" }, /* @__PURE__ */ React.createElement("p", null, "\xA9 ", (/* @__PURE__ */ new Date()).getFullYear(), " SPN Logistics. Site by ", /* @__PURE__ */ React.createElement("a", { href: "https://www.madebyparm.com", className: "text-blue-400" }, "madebyparm"), ".")));
  var Layout = ({ children }) => /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("nav", { className: "sticky top-0 z-50 bg-gradient-to-r from-blue-800 to-gray-900 text-white p-4 flex items-center space-x-4" }, /* @__PURE__ */ React.createElement("h1", { className: "text-xl font-bold mr-4" }, "SPN Logistics"), /* @__PURE__ */ React.createElement(NavLink, { to: "/" }, "Home"), /* @__PURE__ */ React.createElement(NavLink, { to: "/about" }, "About"), /* @__PURE__ */ React.createElement(NavLink, { to: "/services" }, "Services"), /* @__PURE__ */ React.createElement(NavLink, { to: "/fleet" }, "Fleet"), /* @__PURE__ */ React.createElement(NavLink, { to: "/careers" }, "Careers"), /* @__PURE__ */ React.createElement(NavLink, { to: "/contact" }, "Contact")), children, /* @__PURE__ */ React.createElement(Footer, null));
  var App = () => /* @__PURE__ */ React.createElement(Router, null, /* @__PURE__ */ React.createElement(Layout, null, /* @__PURE__ */ React.createElement(Routes, null, /* @__PURE__ */ React.createElement(Route, { path: "/", element: /* @__PURE__ */ React.createElement(Home, null) }), /* @__PURE__ */ React.createElement(Route, { path: "/about", element: /* @__PURE__ */ React.createElement(About, null) }), /* @__PURE__ */ React.createElement(Route, { path: "/services", element: /* @__PURE__ */ React.createElement(Services, null) }), /* @__PURE__ */ React.createElement(Route, { path: "/fleet", element: /* @__PURE__ */ React.createElement(Fleet, null) }), /* @__PURE__ */ React.createElement(Route, { path: "/careers", element: /* @__PURE__ */ React.createElement(Careers, null) }), /* @__PURE__ */ React.createElement(Route, { path: "/contact", element: /* @__PURE__ */ React.createElement(Contact, null) }))));
  ReactDOM.createRoot(document.getElementById("root")).render(/* @__PURE__ */ React.createElement(App, null));
})();
