import "./contact.css";
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import { motion, useInView } from "motion/react";
import ContactSvg from "./ContactSvg";
import { useToast } from "./ToastContext"; // Only import useToast

const listVariant = {
  initial: {
    x: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.2,
    },
  },
};

const Contact = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { showSuccess, showError } = useToast(); // This will now work

  const ref = useRef();
  const form = useRef();

  // Test function - add this to test toasts manually
  const testToast = () => {
    console.log('🧪 Testing toast manually');
    showSuccess("Test toast message! 🎉");
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Debug: Check if environment variables are loaded
    console.log('Environment check:', {
      serviceId: import.meta.env.VITE_SERVICE_ID ? '✓ Found' : '✗ Missing',
      templateId: import.meta.env.VITE_TEMPLATE_ID ? '✓ Found' : '✗ Missing',
      publicKey: import.meta.env.VITE_PUBLIC_KEY ? '✓ Found' : '✗ Missing'
    });

    const templateParams = {
      name: form.current.name.value,
      email: form.current.email.value,
      message: form.current.message.value,
      time: new Date().toLocaleString(),
    };

    emailjs
      .send(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        templateParams,
        {
          publicKey: import.meta.env.VITE_PUBLIC_KEY,
        }
      )
      .then(
        () => {
          setIsLoading(false);
          form.current.reset();
          showSuccess("Your message has been sent successfully! 🎉");
          console.log('Email sent successfully!');
        },
        (error) => {
          console.log("EmailJS Error Details:", error);
          setIsLoading(false);
          showError("Failed to send message. Please try again. 😔");
        }
      );
  };

  const isInView = useInView(ref, { margin: "-200px" });

  return (
    // ✅ No ToastProvider here anymore
    <div className="contact" ref={ref}>
      <div className="cSection">
        <motion.form
          ref={form}
          onSubmit={sendEmail}
          variants={listVariant}
          animate={isInView ? "animate" : "initial"}
        >
          <motion.h1 variants={listVariant} className="cTitle">
            Let's keep in touch
          </motion.h1>
          
          {/* Add this test button temporarily */}
{/*           <button type="button" onClick={testToast} style={{marginBottom: '20px', background: 'blue', color: 'white', padding: '10px', borderRadius: '5px', border: 'none'}}>
            🧪 Test Toast
          </button> */}
          
          <motion.div variants={listVariant} className="formItem">
            <label htmlFor="name">Name</label>
            <input 
              type="text" 
              id="name"
              name="name" 
              placeholder="Your Name" 
              required 
            />
          </motion.div>
          
          <motion.div variants={listVariant} className="formItem">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="abc@gmail.com"
              required
            />
          </motion.div>
          
          <motion.div variants={listVariant} className="formItem">
            <label htmlFor="message">Message</label>
            <textarea
              rows={10}
              id="message"
              name="message"
              placeholder="Write your message..."
              required
            />
          </motion.div>
          
          <motion.button 
            variants={listVariant} 
            className="formButton"
            type="submit"
            disabled={isLoading}
          >
            {isLoading ? "Sending..." : "Send"}
          </motion.button>
        </motion.form>
      </div>
      <div className="cSection">
        <ContactSvg />
      </div>
    </div>
  );
};

export default Contact;
