import React, { useState } from 'react';
import { motion } from 'framer-motion';
// import { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const videos = [
  {
    id: 1,
    title: 'مراجعه النمط الإملائي لعلامات الترقيم',
    thumbnail: '/src/assets/pic-vid3.png',
    url: '/src/assets/video3.mp4',
    duration: '12:45',
    views: '1.2K'
  },
  {
    id: 2,
    title: 'الإملاء بطريقة ممتعة',
    thumbnail: '/src/assets/pic-vid2.png',
    url: '/src/assets/video2.mp4',
    duration: '15:30',
    views: '365'
  },
  {
    id: 3,
    title: 'تحليل النصوص الأدبية',
    thumbnail: '/src/assets/pic-vid1.png',
    url: '/src/assets/vedio1.mp4',
    duration: '2:54',
    views: '1.1K'
  },
  {
    id: 4,
    title: 'اساليب الانماط اللغويه',
    thumbnail: '/src/assets/pic-vid-4.png',
    url: '/src/assets/video4.mp4',
    duration: '18:22',
    views: '1.8K'
  },
  
];


const Gallery = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);

  const openVideo = (url) => {
    setSelectedVideo(url);
  };

  const closeVideo = () => {
    setSelectedVideo(null);
  };
// useEffect(() => {
//   document.title = "Hala Elkomy - Gallery";
// }, []);
  return (
    <section className="bg-black text-white py-5" dir="rtl">
      <div className="container">
       
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-5"
        >
          <h1 className="display-4 font-weight-bold mb-4">
            <span className="gradient-text">معرض الفيديوهات التعليمية</span>
          </h1>

          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="divider mx-auto mb-4"
          />

          <p className="text-white lead">
            شاهد أحدث الدروس والفيديوهات التعليمية المقدمة من معلمتك
          </p>
        </motion.div>

        
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-5"
          >
            <div className="row justify-content-center">
              <div className="col-md-8">
                <div className="filter-buttons text-center">
            <button className="btn btn-outline-warning  mx-2 mb-2">الكل</button>
            <button className="btn btn-outline-warning mx-2 mb-2">الابتدائي</button>
            <button className="btn btn-outline-warning mx-2 mb-2">الإعدادي</button>
            <button className="btn btn-outline-warning mx-2 mb-2">الثانوي</button>
                </div>
              </div>
            </div>
          </motion.div>

          
            <div className="row">
              {videos.map((video, index) => (
                <motion.div
            key={video.id}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true, margin: "-50px" }}
            className="col-lg-4 col-md-6 mb-4"
                >
            <div className="video-card bg-dark  rounded overflow-hidden h-100">
              <motion.div
               
                className="video-thumbnail position-relative"
                onClick={() => openVideo(video.url)}
                style={{ aspectRatio: "1 / 1", width: "100%", overflow: "hidden", background: "#222" }}
              >
                <img
            src={video.thumbnail}
            alt={video.title}
            className="img-fluid w-100 h-100"
            style={{ objectFit: "cover", aspectRatio: "1 / 1", width: "100%", height: "100%" }}
                />
                <div className="play-icon position-absolute">
            <svg width="50" height="50" viewBox="0 0 24 24" fill="#fff">
              <circle cx="12" cy="12" r="12" fill="rgba(0, 0, 0, 0.6)" />
              <polygon points="10,8 17,12 10,16" fill="#fff" />
            </svg>
                </div>
                <div className="duration-badge bg-black text-white position-absolute">
            {video.duration}
                </div>
              </motion.div>

              <div className="p-3">
                <h3 className="h5 mb-2">{video.title}</h3>
                <div className="d-flex justify-content-between text-muted">
            <span>
              
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" style={{verticalAlign: 'middle', marginLeft: 4}}>
                <path d="M12 5c-7 0-10 7-10 7s3 7 10 7 10-7 10-7-3-7-10-7zm0 12c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8a3 3 0 100 6 3 3 0 000-6z"/>
              </svg>
              {video.views} مشاهدة
            </span>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn btn-sm btn-outline-light"
              onClick={() => openVideo(video.url)}
            >
              شاهد الآن
            </motion.button>
                </div>
              </div>
            </div>
                </motion.div>
              ))}
            </div>

           
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-center mt-4"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn btn-primary px-5 py-3"
            >
              عرض المزيد من الفيديوهات
            </motion.button>
          </motion.div>
              </div>

             
      {selectedVideo && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="video-modal"
        >
          <div className="modal-overlay" onClick={closeVideo}></div>
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            className="modal-content"
          >
            <button className="close-btn" onClick={closeVideo}>
              &times;
            </button>
            <iframe
              src={`${selectedVideo.replace('watch?v=', 'embed/')}?autoplay=1`}
              title="فيديو تعليمي"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </motion.div>
        </motion.div>
      )}

      
      <style jsx>{`
       
        .video-card {
          transition: all 0.3s ease;
          border: 1px solid #333;
        }
        .video-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 20px rgba(0,0,0,0.3);
        }
          .video-card:hover circle {
          fill: #C9F31D;
        }
        .video-thumbnail {
          cursor: pointer;
          overflow: hidden;
        }
        .play-icon {
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          opacity: 0.8;
          transition: all 0.3s ease;
        }
        .video-thumbnail:hover .play-icon {
          opacity: 1;
          
          transform: translate(-50%, -50%) scale(1.1);
        }
        .duration-badge {
          bottom: 10px;
          right: 10px;
          padding: 3px 8px;
          border-radius: 4px;
          font-size: 12px;
        }
        .video-modal {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 1000;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .modal-overlay {
          position: absolute;
          width: 100%;
          height: 100%;
          background: rgba(0,0,0,0.8);
        }
        .modal-content {
          position: relative;
          width: 80%;
          max-width: 800px;
          z-index: 1001;
          background: #000;
          padding: 20px;
          border-radius: 10px;
        }
        .close-btn {
          position: absolute;
          top: -40px;
          right: 0;
          background: none;
          border: none;
          color: white;
          font-size: 30px;
          cursor: pointer;
        }
        iframe {
          width: 100%;
          height: 450px;
          border: none;
          border-radius: 5px;
        }
        @media (max-width: 768px) {
          iframe {
            height: 250px;
          }
          .modal-content {
            width: 95%;
          }
        }
      `}</style>
    </section>
  );
};



export default Gallery;