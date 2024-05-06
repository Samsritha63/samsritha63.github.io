import React from 'react';
import './styles.scss';

const Contact = () => {
  return (
    <div className="contact__content">
      <div className="contact__content__header-text">Contact Information</div>
      <div className="contact__content__info">
        <div className="contact__content__info__item">
          <br />
          <br />
          <br />
          <br />
          <strong>Name:</strong> Dharani Samsritha Pasumarthi
        </div>
        
        <div className="contact__content__info__item">
          <strong>Designation:</strong> Frontend Developer
        </div>
        <br />
        <br />
        <div className="contact__content__info__item">
          <strong>Email:</strong> <a href="mailto:samsritha.63@gmail.com">samsritha.63@gmail.com</a>
        </div>
        <br />
        <br />
        <div className="contact__content__info__item">
          <strong>Phone:</strong> <a href="tel:+917036730747">+91 7036730747</a>
        </div>
        <br />
        <br />
        <div className="contact__content__info__item">
          <strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/dharani-samsritha/">Dharani Samsritha</a>
        </div>
        <br />
        <br />
        {/* <div>
        <img src={Image} alt="Photo" />
        </div> */}
      </div>
    </div>
  );
};

export default Contact;
