import { useEffect } from "react";
function Services () {
  useEffect(() => {
    document.title = "Hala Elkomy - Services";
  }, []);
  return (
    <div>
      <h2>Our Services</h2>
      <p>We offer a wide range of services to meet your needs.</p>
      <ul>
        <li>Service 1</li>
        <li>Service 2</li>
        <li>Service 3</li>
      </ul>
    </div>
  );
}
export default Services;