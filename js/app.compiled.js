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
    return /* @__PURE__ */ React.createElement("section", { className: "bg-cover bg-center h-96 flex items-center justify-center", style: { backgroundImage: "url(https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1600&q=80)" } }, /* @__PURE__ */ React.createElement("h1", { id: "heroText", className: "text-white text-4xl font-bold bg-black bg-opacity-50 p-4 rounded", style: { fontFamily: "Oswald, sans-serif" } }, "SPN Logistics"));
  };
  var Home = () => /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(Hero, null), /* @__PURE__ */ React.createElement("section", { className: "p-8 text-center" }, /* @__PURE__ */ React.createElement("h2", { className: "text-2xl font-semibold mb-4", style: { fontFamily: "Oswald, sans-serif" } }, "Reliable Trucking and Logistics Services"), /* @__PURE__ */ React.createElement("p", { className: "max-w-xl mx-auto" }, "We provide freight transportation, warehousing and supply chain management solutions.")), /* @__PURE__ */ React.createElement(ContactForm, null));
  var About = () => /* @__PURE__ */ React.createElement("div", { className: "p-8 text-white bg-cover bg-center", style: { backgroundImage: "url(https://images.unsplash.com/photo-1531259731546-0f7a22eecf74?auto=format&fit=crop&w=1600&q=80)" } }, /* @__PURE__ */ React.createElement("div", { className: "max-w-2xl bg-black/60 p-6 rounded" }, /* @__PURE__ */ React.createElement("h2", { className: "text-2xl font-semibold mb-4", style: { fontFamily: "Oswald, sans-serif" } }, "About Us"), /* @__PURE__ */ React.createElement("p", null, "SPN Logistics has been serving customers in Quebec with reliable trucking solutions. Our mission is to deliver shipments safely and on time.")));
  var services = [
    { title: "Freight Transportation", icon: "\u{1F69A}", desc: "Efficient truckload and LTL services." },
    { title: "Warehousing", icon: "\u{1F3E2}", desc: "Secure storage facilities." },
    { title: "Logistics Solutions", icon: "\u{1F4E6}", desc: "End-to-end supply chain management." }
  ];
  var Services = () => /* @__PURE__ */ React.createElement("div", { className: "p-8 text-white bg-cover bg-center", style: { backgroundImage: "url(https://images.unsplash.com/photo-1529070538774-1843cb3265df?auto=format&fit=crop&w=1600&q=80)" } }, /* @__PURE__ */ React.createElement("div", { className: "max-w-5xl mx-auto" }, /* @__PURE__ */ React.createElement("h2", { className: "text-2xl font-semibold mb-4", style: { fontFamily: "Oswald, sans-serif" } }, "Our Services"), /* @__PURE__ */ React.createElement("div", { className: "grid sm:grid-cols-2 lg:grid-cols-3 gap-4" }, services.map((s) => /* @__PURE__ */ React.createElement("div", { key: s.title, className: "bg-white/80 p-4 rounded shadow text-gray-800" }, /* @__PURE__ */ React.createElement("div", { className: "text-4xl mb-2" }, s.icon), /* @__PURE__ */ React.createElement("h3", { className: "font-semibold", style: { fontFamily: "Oswald, sans-serif" } }, s.title), /* @__PURE__ */ React.createElement("p", null, s.desc))))));
  var Fleet = () => /* @__PURE__ */ React.createElement("div", { className: "p-8 text-white bg-cover bg-center", style: { backgroundImage: "url(https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=1600&q=80)" } }, /* @__PURE__ */ React.createElement("div", { className: "max-w-5xl mx-auto" }, /* @__PURE__ */ React.createElement("h2", { className: "text-2xl font-semibold mb-4", style: { fontFamily: "Oswald, sans-serif" } }, "Fleet Information"), /* @__PURE__ */ React.createElement("div", { className: "grid md:grid-cols-2 gap-4" }, /* @__PURE__ */ React.createElement("div", { className: "bg-white/80 rounded shadow text-gray-800" }, /* @__PURE__ */ React.createElement("img", { src: "https://images.unsplash.com/photo-1565513123283-fbc0a0aaddc1?auto=format&fit=crop&w=800&q=80", alt: "Truck", className: "rounded-t" }), /* @__PURE__ */ React.createElement("p", { className: "p-4" }, "Modern trucks equipped for long haul.")), /* @__PURE__ */ React.createElement("div", { className: "bg-white/80 rounded shadow text-gray-800" }, /* @__PURE__ */ React.createElement("img", { src: "https://images.unsplash.com/photo-1529070538774-1843cb3265df?auto=format&fit=crop&w=800&q=80", alt: "Trailer", className: "rounded-t" }), /* @__PURE__ */ React.createElement("p", { className: "p-4" }, "Variety of trailers for different loads.")))));
  var Careers = () => /* @__PURE__ */ React.createElement("div", { className: "p-8 text-white bg-cover bg-center", style: { backgroundImage: "url(https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=1600&q=80)" } }, /* @__PURE__ */ React.createElement("div", { className: "max-w-2xl bg-black/60 p-6 rounded" }, /* @__PURE__ */ React.createElement("h2", { className: "text-2xl font-semibold mb-4", style: { fontFamily: "Oswald, sans-serif" } }, "Careers"), /* @__PURE__ */ React.createElement("p", { className: "mb-4" }, "Join our team! Submit your application below."), /* @__PURE__ */ React.createElement(ContactForm, { formId: "careers" })));
  var Contact = () => /* @__PURE__ */ React.createElement("div", { className: "p-8 text-white bg-cover bg-center", style: { backgroundImage: "url(https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1600&q=80)" } }, /* @__PURE__ */ React.createElement("div", { className: "max-w-2xl bg-black/60 p-6 rounded" }, /* @__PURE__ */ React.createElement("h2", { className: "text-2xl font-semibold mb-4", style: { fontFamily: "Oswald, sans-serif" } }, "Contact Us"), /* @__PURE__ */ React.createElement("p", { className: "mb-4" }, "1059 Chem. Legault, Les C\xE8dres, QC J7T 1N8"), /* @__PURE__ */ React.createElement("iframe", { className: "w-full h-64 mb-4", src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2792.6839970458055!2d-74.07331958444191!3d45.342130779099336!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDXCsDIwJzMxLjciTiA3NMKwMDQnMDguMCJX!5e0!3m2!1sen!2sca!4v1710240265604", allowFullScreen: "", loading: "lazy", referrerPolicy: "no-referrer-when-downgrade" }), /* @__PURE__ */ React.createElement(ContactForm, null)));
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
  var Layout = ({ children }) => /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("nav", { className: "bg-gradient-to-r from-blue-700 to-indigo-700 text-white p-4 flex justify-between items-center sticky top-0 z-10 shadow" }, /* @__PURE__ */ React.createElement("div", { className: "font-extrabold text-xl", style: { fontFamily: "Oswald, sans-serif" } }, "SPN Logistics"), /* @__PURE__ */ React.createElement("div", { className: "space-x-4" }, /* @__PURE__ */ React.createElement(NavLink, { to: "/" }, "Home"), /* @__PURE__ */ React.createElement(NavLink, { to: "/about" }, "About"), /* @__PURE__ */ React.createElement(NavLink, { to: "/services" }, "Services"), /* @__PURE__ */ React.createElement(NavLink, { to: "/fleet" }, "Fleet"), /* @__PURE__ */ React.createElement(NavLink, { to: "/careers" }, "Careers"), /* @__PURE__ */ React.createElement(NavLink, { to: "/contact" }, "Contact"))), children);
  var App = () => /* @__PURE__ */ React.createElement(Router, null, /* @__PURE__ */ React.createElement(Layout, null, /* @__PURE__ */ React.createElement(Routes, null, /* @__PURE__ */ React.createElement(Route, { path: "/", element: /* @__PURE__ */ React.createElement(Home, null) }), /* @__PURE__ */ React.createElement(Route, { path: "/about", element: /* @__PURE__ */ React.createElement(About, null) }), /* @__PURE__ */ React.createElement(Route, { path: "/services", element: /* @__PURE__ */ React.createElement(Services, null) }), /* @__PURE__ */ React.createElement(Route, { path: "/fleet", element: /* @__PURE__ */ React.createElement(Fleet, null) }), /* @__PURE__ */ React.createElement(Route, { path: "/careers", element: /* @__PURE__ */ React.createElement(Careers, null) }), /* @__PURE__ */ React.createElement(Route, { path: "/contact", element: /* @__PURE__ */ React.createElement(Contact, null) }))));
  ReactDOM.createRoot(document.getElementById("root")).render(/* @__PURE__ */ React.createElement(App, null));
})();
