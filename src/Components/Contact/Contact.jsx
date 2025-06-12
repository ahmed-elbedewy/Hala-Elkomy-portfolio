import { useEffect } from "react";
function Contact() {
    useEffect(() => {
        document.title = "Hala Elkomy - Contact Us";
    }, []);
    return (
        <>
            <div className="container">
                <h1>Contact Page</h1>
                <p>This is the contact page where you can reach us.</p>
            </div>
        </>
    );
}
export default Contact