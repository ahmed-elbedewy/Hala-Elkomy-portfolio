import { useEffect } from "react";
function About() {
    useEffect(() => {
        document.title = "Hala Elkomy - About Us";
    }, []);

    return (
        <>
            <div >
                <h1>About Us</h1>
                <p>We are a team of passionate developers dedicated to building amazing applications.</p>
                <p>Our mission is to create user-friendly and innovative solutions that make life easier.</p>
            </div>
        </>
    );
}
export default About;
