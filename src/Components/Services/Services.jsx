import React from 'react';
import { motion } from 'framer-motion';
import 'bootstrap/dist/css/bootstrap.min.css';


const services = [
  {
    title: 'دروس لغة عربية - المرحلة الابتدائية',
    description: 'تبسيط قواعد النحو والإملاء والقراءة بطريقة شيقة وسهلة تناسب الأطفال مع أنشطة تفاعلية وجذابة.',
    icon: '📚',
    color: 'purple-blue'
  },
  {
    title: 'المرحلة الإعدادية',
    description: 'تأسيس قوي في البلاغة والنحو والتعبير مع تمارين تطبيقية وشرح مبسط للمفاهيم الصعبة.',
    icon: '✏️',
    color: 'amber-orange'
  },
  {
    title: 'المرحلة الثانوية',
    description: 'إتقان منهج اللغة العربية مع التركيز على النقد الأدبي وتحليل النصوص والتحضير للامتحانات.',
    icon: '📖',
    color: 'emerald-teal'
  }
];

const ServiceCard = ({ icon, title, description, color }) => {
  const gradientClasses = {
    'purple-blue': 'bg-purple-to-blue',
    'amber-orange': 'bg-amber-to-orange',
    'emerald-teal': 'bg-emerald-to-teal'
  };
  
  

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -10 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className={`col-md-4  mb-4   ${gradientClasses[color]} text-white rounded p-1 overflow-hidden h-100`}
      dir="rtl"
      style={{ margin: '0 10px' }} 
    >
      <div className="p-4 h-100 d-flex flex-column">
        <div className="icon-circle mb-3">
          <span className="icon">{icon}</span>
        </div>
        <h3 className="h4 font-weight-bold mb-3">{title}</h3>
        <p className="mb-4 flex-grow-1">{description}</p>
        
        <a 
  href="#About" 
  target="_self" 
  rel="noopener noreferrer"
  className="btn btn-light   align-self-start text-dark font-weight-bold px-4 py-2"
>
  ابدأ التعلم
</a>
      </div>
    </motion.div>
  );
};

const Services = () => {
  return (
    <section className="bg-black py-5" dir="rtl">
      <div className="container py-5">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-5"
        >
          <h2 className="text-white mb-3">
            <span className="text-one">برامجنا التعليمية</span>
          </h2>
          
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="divider mx-auto mb-4"
          />
          
          <p className="text-white lead">
            نظام تعليمي متكامل مصمم خصيصًا لكل مرحلة دراسية لضمان أفضل النتائج
          </p>
        </motion.div>
        
        <div className="row justify-content-center" style={{ margin: '0 2px' }}>
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>

    </section>
  );
};

export default Services;