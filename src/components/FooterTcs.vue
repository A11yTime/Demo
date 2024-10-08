<template>
    <footer class="footer">
      <div class="footer-container">
        <div class="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Industries</a></li>
            <li><a href="#">Insights</a></li>
            <li><a href="#">Contact Us</a></li>
          </ul>
        </div>
        <div class="footer-section">
          <h4>Contact Us</h4>
          <p>Email: <a href="mailto:info@yourdomain.com">info@yourdomain.com</a></p>
          <p>Phone: <a href="tel:+1234567890">+1 234 567 890</a></p>
          <p>Address: 123 Business Rd, City, Country</p>
        </div>
        <div class="footer-section">
          <h4>Follow Us</h4>
          <div class="social-media">
            <a href="#" aria-label="Facebook" class="social-icon facebook">📘</a>
            <a href="#" aria-label="Twitter" class="social-icon twitter">🐦</a>
            <a href="#" aria-label="LinkedIn" class="social-icon linkedin">🔗</a>
            <a href="#" aria-label="Instagram" class="social-icon instagram">📸</a>
          </div>
        </div>
      </div>
      <div class="footer-bottom">
        <p>&copy; TATA Consultancy Services Limited.</p>
      </div>
    </footer>
  </template>
  
  <script>
  export default {
    name: 'FooterTcs'
  };
  </script>
  
  <style scoped>
  .footer {
    background-color: #003366; /* TCS dark blue background */
    color: #ffffff; /* White text */
    padding: 40px 20px;
  }
  
  .footer-container {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
  
  .footer-section {
    flex: 1;
    min-width: 200px; /* Minimum width for responsive design */
    margin: 10px;
  }
  
  .footer-section h4 {
    margin-bottom: 15px;
    font-size: 18px; /* Adjusted font size */
    font-weight: bold; /* Bold section titles */
    color: #ffcc00; /* Yellow color for headings */
  }
  
  .footer-section ul {
    list-style: none;
    padding: 0;
  }
  
  .footer-section ul li {
    margin: 5px 0;
  }
  
  .footer-section a {
    color: #ffffff; /* White links */
    text-decoration: none;
    transition: color 0.3s;
  }
  
  .footer-section a:hover {
    color: #ffcc00; /* Yellow highlight on hover */
  }
  
  .social-media {
    display: flex;
    gap: 10px;
  }
  
  .social-icon {
    width: 40px; /* Fixed width */
    height: 40px; /* Fixed height */
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #00509e; /* Background color for icons */
    border-radius: 50%; /* Circular icons */
    color: white; /* Icon color */
    font-size: 20px; /* Adjust icon size */
    transition: background-color 0.3s, transform 0.3s; /* Smooth transitions */
  }
  
  .social-icon:hover {
    background-color: #ffcc00; /* Highlight background on hover */
    transform: scale(1.1); /* Slightly increase size on hover */
  }
  
  .footer-bottom {
    text-align: center;
    margin-top: 20px;
    border-top: 1px solid #ffffff; /* White border on top */
    padding-top: 10px;
    font-size: 14px; /* Smaller text size */
  }
  </style>
  