// ✅ المطلوب: نخلي صفحة Home تجمع كل الصفحات كسكاشن، ونخلي التنقل من Navbar يوصّل للسكشن المطلوب لو المستخدم على /، ولو مش على / نوديه للراوت الصح وبعدين نعمل Scroll

// الخطوة الأولى: نجمع كل الصفحات كـ سكاشن داخل My_Home

// 📁 Components/Home/Home.jsx
import About from '../About/About';
import Services from '../Services/Services';
import Contact from '../Contact/Contact';
import Gallery from '../Gallery/Gallery';

import { motion as Motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";

function Home() {
  return (
    <>
      {/* الهيدر */}
      <div className="position-relative vh-100 overflow-hidden text-white">
        <Motion.img
          src="/src/Assets/kotob.png"
          alt="Hala Elkomy"
          className="w-100 h-100 opacity-25  position-absolute top-0 start-0"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.6, scale: 0.9 }}
          transition={{ duration: 1.5, ease: 'easeInOut' }}
        />
        <div className="position-absolute top-0 start-0 w-100 h-100 bg-black opacity-75"></div>
        <div className="container vh-100 d-flex   align-items-center justify-content-center">
          <div className="row align-items-center w-100 text-center text-md-end">
            <div className="col-12 col-md-6 mb-4 mb-md-0 order-2 order-md-2 d-flex justify-content-center">
              <Motion.img
                src="/src/Assets/hejab.png"
                alt="Hala Elkomy"
                className="img-fluid opacity-100 mt-5 w-75 w-md-100"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </div>
            <div className="col-12 col-md-6 order-1 order-md-2">
              <h2 className="fw-bold text-white opacity-75 pb-3">مرحبا بكم</h2>
              <h3 className="fw-bold pb-3 bg-one opacity-75 d-inline-block">
                هاله الكومي معلمه اللغه العربيه
              </h3>
              <Motion.h1
                className="fw-bold"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.5, delay: 1.5 }}
              ></Motion.h1>
              <h3 className="fw-bold fa-2x opacity-75 text-one mt-3">
                <Typewriter
                  words={[
                    "لكل المراحل التعليمية",
                    "المرحله الابتدائيه",
                    "المرحله الاعداديه",
                    "المرحله الثانويه",
                  ]}
                  loop={Infinity}
                  cursor
                  cursorStyle="|"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1500}
                />
              </h3>
            </div>
          </div>
        </div>
      </div>

    
      <section id="about"><About /></section>
      <section id="services"><Services /></section>
      <section id="gallery"><Gallery /></section>
      <section id="contact"><Contact /></section>
    </>
  );
}

export default Home;
