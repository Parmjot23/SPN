const e = React.createElement;
const { BrowserRouter: Router, Routes, Route, Link } = ReactRouterDOM;

// initialize EmailJS
if (window.emailjs) { emailjs.init('YOUR_PUBLIC_KEY'); }

function Hero() {
  React.useEffect(() => {
    if (window.gsap) {
      gsap.from('#heroText', { opacity: 0, y: -50, duration: 1 });
    }
  }, []);
  return e(
    'section',
    { className: 'bg-cover bg-center h-96 flex items-center justify-center', style: { backgroundImage: 'url(https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1600&q=80)' } },
    e('h1', { id: 'heroText', className: 'text-white text-4xl font-bold bg-black bg-opacity-50 p-4 rounded' }, 'SPN Logistics')
  );
}

function Home() {
  return e(
    React.Fragment,
    null,
    e(Hero, null),
    e(
      'section',
      { className: 'p-8 text-center' },
      e('h2', { className: 'text-2xl font-semibold mb-4' }, 'Reliable Trucking and Logistics Services'),
      e('p', { className: 'max-w-xl mx-auto' }, 'We provide freight transportation, warehousing and supply chain management solutions.')
    ),
    e(ContactForm, null)
  );
}

function About() {
  return e(
    'div',
    { className: 'p-8' },
    e('h2', { className: 'text-2xl font-semibold mb-4' }, 'About Us'),
    e('p', null, 'SPN Logistics has been serving customers in Quebec with reliable trucking solutions. Our mission is to deliver shipments safely and on time.')
  );
}

const services = [
  { title: 'Freight Transportation', icon: '\uD83D\uDE9A', desc: 'Efficient truckload and LTL services.' },
  { title: 'Warehousing', icon: '\uD83C\uDFE2', desc: 'Secure storage facilities.' },
  { title: 'Logistics Solutions', icon: '\uD83D\uDCE6', desc: 'End-to-end supply chain management.' }
];

function Services() {
  return e(
    'div',
    { className: 'p-8' },
    e('h2', { className: 'text-2xl font-semibold mb-4' }, 'Our Services'),
    e(
      'div',
      { className: 'grid sm:grid-cols-2 lg:grid-cols-3 gap-4' },
      services.map(s =>
        e(
          'div',
          { key: s.title, className: 'bg-white p-4 rounded shadow' },
          e('div', { className: 'text-4xl mb-2' }, s.icon),
          e('h3', { className: 'font-semibold' }, s.title),
          e('p', null, s.desc)
        )
      )
    )
  );
}

function Fleet() {
  return e(
    'div',
    { className: 'p-8' },
    e('h2', { className: 'text-2xl font-semibold mb-4' }, 'Fleet Information'),
    e(
      'div',
      { className: 'grid md:grid-cols-2 gap-4' },
      e(
        'div',
        { className: 'bg-white rounded shadow' },
        e('img', { src: 'https://images.unsplash.com/photo-1565513123283-fbc0a0aaddc1?auto=format&fit=crop&w=800&q=80', alt: 'Truck', className: 'rounded-t' }),
        e('p', { className: 'p-4' }, 'Modern trucks equipped for long haul.')
      ),
      e(
        'div',
        { className: 'bg-white rounded shadow' },
        e('img', { src: 'https://images.unsplash.com/photo-1529070538774-1843cb3265df?auto=format&fit=crop&w=800&q=80', alt: 'Trailer', className: 'rounded-t' }),
        e('p', { className: 'p-4' }, 'Variety of trailers for different loads.')
      )
    )
  );
}

function Careers() {
  return e(
    'div',
    { className: 'p-8' },
    e('h2', { className: 'text-2xl font-semibold mb-4' }, 'Careers'),
    e('p', { className: 'mb-4' }, 'Join our team! Submit your application below.'),
    e(ContactForm, { formId: 'careers' })
  );
}

function Contact() {
  return e(
    'div',
    { className: 'p-8' },
    e('h2', { className: 'text-2xl font-semibold mb-4' }, 'Contact Us'),
    e('p', { className: 'mb-4' }, '1059 Chem. Legault, Les Cèdres, QC J7T 1N8'),
    e('iframe', { className: 'w-full h-64 mb-4', src: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2792.6839970458055!2d-74.07331958444191!3d45.342130779099336!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDXCsDIwJzMxLjciTiA3NMKwMDQnMDguMCJX!5e0!3m2!1sen!2sca!4v1710240265604', allowFullScreen: '', loading: 'lazy', referrerPolicy: 'no-referrer-when-downgrade' }),
    e(ContactForm, null)
  );
}

function ContactForm({ formId = 'contact' }) {
  const [status, setStatus] = React.useState('');

  function handleSubmit(e) {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.target));
    if (window.emailjs) {
      emailjs
        .send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', data)
        .then(() => setStatus('Message sent!'))
        .catch(() => setStatus('Failed to send'));
    }
  }

  return e(
    'form',
    { onSubmit: handleSubmit, className: 'max-w-md mx-auto p-4 bg-white rounded shadow mt-8' },
    e('input', { type: 'hidden', name: 'form', value: formId }),
    e('input', { required: true, name: 'name', placeholder: 'Name', className: 'w-full p-2 mb-2 border' }),
    e('input', { required: true, type: 'email', name: 'email', placeholder: 'Email', className: 'w-full p-2 mb-2 border' }),
    e('textarea', { required: true, name: 'message', placeholder: 'Message', className: 'w-full p-2 mb-2 border' }),
    e('button', { className: 'bg-blue-600 text-white px-4 py-2', type: 'submit' }, 'Send'),
    status ? e('p', { className: 'mt-2 text-sm' }, status) : null
  );
}

function NavLink({ to, children }) {
  return e(Link, { className: 'text-white hover:text-gray-200', to }, children);
}

function Layout({ children }) {
  return e(
    'div',
    null,
    e(
      'nav',
      { className: 'bg-gray-800 text-white p-4 flex space-x-4' },
      e(NavLink, { to: '/' }, 'Home'),
      e(NavLink, { to: '/about' }, 'About'),
      e(NavLink, { to: '/services' }, 'Services'),
      e(NavLink, { to: '/fleet' }, 'Fleet'),
      e(NavLink, { to: '/careers' }, 'Careers'),
      e(NavLink, { to: '/contact' }, 'Contact')
    ),
    children
  );
}

function App() {
  return e(
    Router,
    null,
    e(
      Layout,
      null,
      e(
        Routes,
        null,
        e(Route, { path: '/', element: e(Home) }),
        e(Route, { path: '/about', element: e(About) }),
        e(Route, { path: '/services', element: e(Services) }),
        e(Route, { path: '/fleet', element: e(Fleet) }),
        e(Route, { path: '/careers', element: e(Careers) }),
        e(Route, { path: '/contact', element: e(Contact) })
      )
    )
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(e(App));
