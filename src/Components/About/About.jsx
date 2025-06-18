import aboutPic from "../../assets/woman-search.png";
function About() {
    

    return (
        <>
            <div className="bg-dark text-white  text-center py-4">
                <h1 className="text-center text-one fa-3x mb-2 ">من انا</h1>
                <div className="container vh-100 d-flex   align-items-center justify-content-center">
                    <div className="row align-items-center w-100 text-center text-md-end">
                        <div className="col-12 col-md-6 mb-4 mb-md-0 order-1 order-md-2 d-flex justify-content-center">
                            <img
                                src={aboutPic}
                                alt="Hala Elkomy"
                                className="img-fluid opacity-100 mt-2 w-50 w-md-50"
                            />
                        </div>
                        <div className="col-12 col-md-6 order-2 order-md-2">
                         <h2>   أنا هالة الكومي من مصر، معلمة لغة عربية في مدرسة المعبيلة الجنوبية في مسقط، عمان. أعلم الأطفال في المراحل التعليمية المختلفة اللغة بطريقة "مبتكرة" و"جذابة" تواكب التطور. أستخدم الذكاء الاصطناعي لتوصيل المعلومة بشكل أوضح وأكثر تفاعلية.</h2>
                        </div>
                        
                    </div>
                </div>
                
            </div>
        </>
    );
}
export default About;
