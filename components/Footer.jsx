import React from 'react';
import '../components/css/footer.css';

const Footer = () => {
  return (
    <div style={{width:'100%',backgroundColor:'#3c3c3c'}}>
      <div className="footer1">
      <div className="about1">
        <h4>ABOUT US</h4>
        <p>Bihar State Load Despatch Centre<br />
        BSPTCL (A Government of Bihar Undertaking)</p>
        <h4>GST & CIN DETAILS</h4>
        <p>GST No. :- 10AAFCB2393H1Z1<br />
        CIN No. :- U74110BR2012SGC018889</p>
      </div>
      <div className="others">
        <h4>OTHERS</h4>
        <p><a href="#">Feedback</a></p>
        <p><a href="#">Disclaimer</a></p>
        <p><a href="#">Upload Documents</a></p>
        <p><a href="#">RTI</a></p>
      </div>
      <div className="contact1">
        <h4>CONTACT US</h4>
        <div className="contact-info" style={{width:'100%'}}>
          <p>📍 Bihar State Load Despatch Centre,4th Floor, Vidyut Bhawan, Bailey Road, Patna-1</p>
          <p>✉ feedback.biharsldc@gmail.com</p>
          <p>☎ (+91) 0612-2504442</p>
          <p>☎ (+91) 0612-2504305 (FAX)</p>
        </div>
      </div>
    </div>
    </div>
    
  );
};

export default Footer;
