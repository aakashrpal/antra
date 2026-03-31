import React, { useState, useEffect } from 'react';
import { 
  MessageCircle, 
  MapPin, 
  ShieldCheck, 
  TrendingUp, 
  Clock, 
  CheckCircle2, 
  ArrowRight,
  Menu,
  X,
  Star,
  Users,
  Zap,
  IndianRupee,
  Phone
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// --- Configuration ---
const WHATSAPP_NUMBER = "919270295479"; // Change this one place to update all buttons
const WHATSAPP_MESSAGE = "Hi Antra, I want to join and get 5 FREE leads!";

const handleWhatsAppClick = () => {
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;
  window.open(url, '_blank');
};

// --- Shared Components ---

const Button = ({ children, className = '', variant = 'primary', ...props }) => {
  const variants = {
    primary: 'bg-primary hover:bg-primary-dark text-white whatsapp-shadow',
    secondary: 'bg-white text-primary border-2 border-primary hover:bg-primary-50',
    accent: 'bg-orange-500 hover:bg-orange-600 text-white shadow-lg shadow-orange-200',
  };
  
  return (
    <button 
      className={`px-8 py-4 rounded-xl font-bold transition-all transform active:scale-95 flex items-center justify-center gap-2 ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current" xmlns="http://www.w3.org/2000/svg">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.889 1.025 3.841 1.516 5.715 1.517h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
  </svg>
);

// --- Sections ---

const Navbar = () => (
  <nav className="fixed top-0 left-0 w-full z-50 glass border-b border-slate-200">
    <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <div className="bg-primary p-2 rounded-lg">
          <MessageCircle className="text-white w-6 h-6" />
        </div>
        <span className="text-2xl font-bold text-dark tracking-tight">Antra</span>
      </div>
      <div className="hidden md:flex items-center gap-8 text-slate-600 font-medium">
        <a href="#how" className="hover:text-primary transition-colors">How it works</a>
        <a href="#pricing" className="hover:text-primary transition-colors">Pricing</a>
        <a href="#benefits" className="hover:text-primary transition-colors">Benefits</a>
      </div>
      <button 
        onClick={handleWhatsAppClick}
        className="bg-primary text-white px-4 py-2 rounded-lg font-semibold flex items-center gap-2 hover:bg-primary-dark transition-all md:flex hidden"
      >
        <WhatsAppIcon />
        Join Free
      </button>
      <button className="md:hidden text-dark">
        <Menu />
      </button>
    </div>
  </nav>
);

const Hero = () => (
  <section className="pt-32 pb-20 px-4 hero-gradient overflow-hidden relative">
    <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
      <motion.div 
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="space-y-6"
      >
        <div className="inline-flex items-center gap-2 bg-primary-50 text-primary-dark px-4 py-2 rounded-full font-bold text-sm border border-primary-100">
          <Zap className="w-4 h-4" />
          <span>New: First 5 Leads Are Absolutely FREE!</span>
        </div>
        <h1 className="text-5xl md:text-7xl font-extrabold text-dark leading-tight">
          Ab Kaam Khud <span className="text-primary italic">Chal Kar</span> Aayega!
        </h1>
        <p className="text-xl text-slate-600 leading-relaxed max-w-lg">
          Join 5,000+ local electricians, plumbers & cleaners. <span className="font-bold text-primary">Direct WhatsApp pe leads paayein.</span> No app required.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 pt-4">
          <Button 
            variant="primary" 
            className="py-5 text-xl"
            onClick={handleWhatsAppClick}
          >
            <WhatsAppIcon />
            Start Free on WhatsApp
          </Button>
          <div className="flex items-center gap-2 text-slate-500 font-medium px-2">
            <CheckCircle2 className="text-primary w-5 h-5" />
            No Registration Fee
          </div>
        </div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="relative"
      >
        {/* Decorative elements */}
        <div className="absolute -top-10 -right-10 w-64 h-64 bg-primary-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-pulse"></div>
        <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-pulse delay-700"></div>
        
        {/* Phone UI Mockup */}
        <div className="relative mx-auto border-8 border-slate-900 rounded-[3rem] w-[300px] h-[600px] bg-white shadow-2xl overflow-hidden">
          <div className="bg-slate-900 w-32 h-6 absolute top-0 left-1/2 -translate-x-1/2 rounded-b-2xl z-10"></div>
          <div className="bg-primary p-4 pt-8 text-white">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-white/20 rounded-full"></div>
              <div className="font-bold">Antra Bot</div>
            </div>
          </div>
          <div className="p-4 space-y-4 bg-[#e5ddd5] h-full">
            <div className="bg-white p-3 rounded-lg rounded-tl-none text-sm shadow-sm max-w-[80%] animate-fade-in">
              Namaste Rajesh! 🔔 NEW LEAD:
              <br/><br/>
              <b>Problem:</b> AC not cooling
              <br/>
              <b>Area:</b> Sector 15 (800m away)
              <br/><br/>
              Accept karne ke liye (1) dabayein.
            </div>
            <div className="bg-primary-light p-3 rounded-lg rounded-tr-none text-sm shadow-sm max-w-[80%] ml-auto text-white animate-fade-in delay-500">
              1
            </div>
            <div className="bg-white p-3 rounded-lg rounded-tl-none text-sm shadow-sm max-w-[80%] animate-fade-in delay-1000">
              Shabash! Lead accepted. Customer ka number: +91 98765 43210
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

const SocialProof = () => (
  <div className="bg-white border-y border-slate-100 py-12">
    <div className="max-w-7xl mx-auto px-4 flex flex-wrap justify-around items-center gap-8 opacity-60 grayscale hover:grayscale-0 transition-all">
      <div className="flex items-center gap-2 font-bold text-xl"><Star className="fill-current text-yellow-500" /> Rated 4.9/5</div>
      <div className="flex items-center gap-2 font-bold text-xl"><Users /> 5,000+ Vendors</div>
      <div className="flex items-center gap-2 font-bold text-xl">Trusted by Urban Company Experts</div>
      <div className="flex items-center gap-2 font-bold text-xl"><MapPin /> 20+ Indian Cities</div>
    </div>
  </div>
);

const HowItWorks = () => {
  const steps = [
    { title: 'Join on WhatsApp', desc: 'Just send "Hi" to start registration. No complex app needed.', icon: <MessageCircle className="w-8 h-8" /> },
    { title: 'Get Direct Leads', desc: 'Nearest customers ki details direct phone pe paayein.', icon: <Zap className="w-8 h-8" /> },
    { title: 'Earn More Daily', desc: 'No commission. Har lead se poora paisa aapka.', icon: <TrendingUp className="w-8 h-8" /> },
  ];

  return (
    <section id="how" className="py-24 px-4 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-dark italic">Kaam milna ab bohot asaan hai!</h2>
          <p className="text-slate-500 text-lg">3 simple steps mein start karein</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, i) => (
            <div key={i} className="bg-white p-10 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl transition-all group">
              <div className="mb-6 bg-primary-50 text-primary w-16 h-16 rounded-2xl flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all transform group-hover:scale-110">
                {step.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
              <p className="text-slate-600 leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Pricing = () => (
  <section id="pricing" className="py-24 px-4">
    <div className="max-w-4xl mx-auto bg-dark rounded-[3rem] p-12 text-center text-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 rounded-full blur-3xl"></div>
      <div className="space-y-6 relative z-10">
        <h2 className="text-4xl font-bold">Har Lead Sirf <span className="text-primary italic">₹40</span></h2>
        <div className="flex justify-center items-center gap-4">
           <div className="bg-primary/20 px-6 py-10 rounded-2xl border border-primary/30">
              <div className="text-primary text-5xl font-black mb-2">5 FREE</div>
              <div className="font-semibold uppercase tracking-widest text-sm">Trial Leads</div>
           </div>
           <ArrowRight className="text-slate-500" />
           <div className="bg-white/10 px-6 py-10 rounded-2xl border border-white/20">
              <div className="text-5xl font-black mb-2 text-primary-light">₹200</div>
              <div className="font-semibold uppercase tracking-widest text-sm">Next 5 Leads</div>
           </div>
        </div>
        <p className="text-slate-400 max-w-md mx-auto italic">
          Market mein leads ₹500+ tak jaati hain, humse lein sirf ₹40 mein!
        </p>
        <div className="space-y-3 pt-6">
          <div className="flex items-center justify-center gap-2"><CheckCircle2 className="text-primary w-5 h-5"/> Zero Commission</div>
          <div className="flex items-center justify-center gap-2"><CheckCircle2 className="text-primary w-5 h-5"/> Customer se Direct Contact</div>
          <div className="flex items-center justify-center gap-2"><CheckCircle2 className="text-primary w-5 h-5"/> Pure Paisa Aapka</div>
        </div>
        <Button 
          variant="accent" 
          className="mx-auto mt-8 w-full max-w-xs py-5 text-xl"
          onClick={handleWhatsAppClick}
        >
           Activate 5 Free Leads
        </Button>
      </div>
    </div>
  </section>
);

const IncomeSection = () => (
  <section className="py-24 px-4 bg-primary text-white text-center">
    <div className="max-w-4xl mx-auto space-y-10">
      <h2 className="text-4xl font-bold">Mahine ke ₹20,000+ kamayein!</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        <div className="bg-white/10 p-6 rounded-2xl">
          <div className="text-3xl font-bold">₹4,000</div>
          <div className="text-sm opacity-80">Investment/Mo</div>
        </div>
        <div className="bg-white/20 p-6 rounded-2xl scale-110 border border-white/30">
          <div className="text-4xl font-black">100+</div>
          <div className="text-sm">Confirmed Jobs</div>
        </div>
        <div className="bg-white/10 p-6 rounded-2xl col-span-2 md:col-span-1">
          <div className="text-3xl font-bold text-primary-light">₹24,000+</div>
          <div className="text-sm opacity-80 text-white">Estimated Profit</div>
        </div>
      </div>
      <p className="text-lg opacity-90 italic">"Pehle din se hi meri income double ho gayi!" - Sonu, Electrician</p>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-dark text-slate-400 py-12 px-4 border-t border-white/10">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
      <div className="flex items-center gap-2">
        <div className="bg-primary p-2 rounded-lg">
          <MessageCircle className="text-white w-5 h-5" />
        </div>
        <span className="text-xl font-bold text-white tracking-tight">Antra</span>
      </div>
      <p>© 2026 Antra Business Solutions. All rights reserved.</p>
      <div className="flex gap-6">
        <a href="#" className="hover:text-white transition-colors">Privacy</a>
        <a href="#" className="hover:text-white transition-colors">Terms</a>
      </div>
    </div>
  </footer>
);

const App = () => {
  const [showSticky, setShowSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowSticky(window.scrollY > 500);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <SocialProof />
      <HowItWorks />
      <Pricing />
      <IncomeSection />
      
      {/* Testimonials or Benefits would go here */}
      <section id="benefits" className="py-24 px-4 bg-slate-50">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h2 className="text-4xl font-bold">Kyun join karein Antra?</h2>
            <div className="space-y-6">
              {[
                { title: 'No App Required', desc: 'Phone mein space nahi hai? No problem. Sab kuch WhatsApp pe hoga.' },
                { title: 'Ghar ke Paas Kaam', desc: '1km - 3km ke andar leads milegi. Petrol bachega aur samay bhi.' },
                { title: 'Pure Leads', desc: 'Hum sirf wahi leads bhejte hain jo confirm hoti hain. Time-pass leads nahi!' },
              ].map((item, i) => (
                <div key={i} className="flex gap-4">
                  <div className="mt-1"><ShieldCheck className="text-primary w-8 h-8" /></div>
                  <div>
                    <h4 className="text-xl font-bold">{item.title}</h4>
                    <p className="text-slate-600">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-white p-2 rounded-[2.5rem] shadow-2xl relative overflow-hidden group">
            <div className="absolute top-4 right-4 bg-primary text-white p-2 rounded-full font-bold z-10 scale-150 group-hover:scale-[2] transition-all">₹0</div>
             <img 
               src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&q=80&w=800" 
               alt="Plumber Working" 
               className="rounded-[2rem] w-full h-80 object-cover grayscale group-hover:grayscale-0 transition-all duration-700" 
             />
             <div className="absolute inset-0 bg-gradient-to-t from-dark/80 to-transparent flex items-end p-8 text-white">
                <div>
                  <div className="font-bold text-xl uppercase tracking-widest text-primary-light">Worker of the Month</div>
                  <div className="text-4xl font-black">Rajesh Kumar</div>
                  <div className="opacity-80">Earned extra ₹15,000 using Antra</div>
                </div>
             </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-4 bg-white text-center">
        <div className="max-w-2xl mx-auto space-y-8">
          <h2 className="text-4xl font-extrabold text-dark underline decoration-primary decoration-4 underline-offset-8">Limited Slots Available!</h2>
          <p className="text-xl text-slate-600 italic">Har area mein sirf top 10 vendors liye jayenge. Rajesh ne already join kar liya hai. Aap kab karoge?</p>
          <Button 
            variant="primary" 
            className="mx-auto text-2xl py-6 px-12 animate-bounce"
            onClick={handleWhatsAppClick}
          >
            <WhatsAppIcon />
            Join Antra for FREE
          </Button>
        </div>
      </section>

      <Footer />

      {/* Sticky CTA for Mobile */}
      <AnimatePresence>
        {showSticky && (
          <motion.div 
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            exit={{ y: 100 }}
            className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[60] w-[90%] md:w-auto"
          >
            <Button 
              variant="primary" 
              className="w-full md:px-12 py-5 shadow-2xl scale-105"
              onClick={handleWhatsAppClick}
            >
              <WhatsAppIcon />
              Abhi Start Karein (FREE)
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default App;
