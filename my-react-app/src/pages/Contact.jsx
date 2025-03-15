import EmailForm from "../components/EmailForm";


const Contact = () => {
    return (

        <div className="Contact">

        <main>            

            <h2>Never miss another hyped sneaker release!</h2>
            <h3>Input a valid email address below:</h3>
            <EmailForm />
            <h3><a href="https://www.instagram.com" target="_blank">Instagram</a></h3>
            <h3><a href="https://www.twitter.com" target="_blank">Twitter</a></h3>

            <img src='https://prismhype.com/cdn/shop/collections/JORDAN.gif?v=1713695687' height="600px" width="500px"></img>

        </main>

        </div>
    );
        
    
    
    
  };
  
  export default Contact;