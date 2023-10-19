import React from 'react';
import {Logo} from '../components/';
import main from '../assets/images/main.svg';
import Wrapper from '../assets/wrappers/LandingPage' 
import {Link} from 'react-router-dom';

const Landing = () => {
    return (
      <Wrapper>
        <nav>
     <Logo/>
        </nav>
        <div className='container page'>
          {/* info */}
          <div className='info'>
            <h1>
              job <span>tracking</span> app
            </h1>
            <p> Chambray DSA enamel pin yuccie try-hard crucifix tbh shaman. Master cleanse flexitarian before they sold out meh, tattooed PBR&B salvia. Deep v four loko yr actually.</p>
            <Link to='/register' className='btn btn-hero'>Login/Register</Link>
          </div>
          <img src={main} alt='job hunt' className='img main-img' />
        </div>
      </Wrapper>
    );
  };
  
  export default Landing;