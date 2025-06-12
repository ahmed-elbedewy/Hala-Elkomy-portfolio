import { useEffect } from "react";
function Testimonials(){
    useEffect(() => {
        document.title = "Hala Elkomy - Testimonials";
    }, []);
    return (
        <div className="testimonials">
        <h2>What Our Customers Say</h2>
        <p>"This product has changed my life!" - Happy Customer</p>
        <p>"Excellent service and quality." - Satisfied Client</p>
        <p>"I highly recommend this to everyone." - Loyal User</p>
        </div>
    );
}
export default Testimonials;