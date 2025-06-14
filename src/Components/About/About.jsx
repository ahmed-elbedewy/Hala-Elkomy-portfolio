import { useEffect } from "react";
function About() {
    useEffect(() => {
        document.title = "Hala Elkomy - About Us";
    }, []);

    return (
        <>
            <div className="bg-dark text-white  text-center py-4">
                <h1 className="text-center text-one fa-3x mb-2 ">من انا</h1>
                <div className="container vh-100 d-flex   align-items-center justify-content-center">
                    <div className="row align-items-center w-100 text-center text-md-end">
                        <div className="col-12 col-md-6 mb-4 mb-md-0 order-1 order-md-2 d-flex justify-content-center">
                            <img
                                src="/src/Assets/woman-search.png"
                                alt="Hala Elkomy"
                                className="img-fluid opacity-100 mt-2 w-50 w-md-50"
                            />
                        </div>
                        <div className="col-12 col-md-6 order-2 order-md-2">
                        <h2>انا هاله الكومي من مصر معلمه لغه عربيه في مدرسه الاصدقاء في مسقط عمان اعلم الاطفال اللغه بطريقه حديثه وتواكب التطور </h2>
                        </div>
                        
                    </div>
                </div>
                
            </div>
        </>
    );
}
export default About;
