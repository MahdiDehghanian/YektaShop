import React, { useContext, useEffect, useState } from 'react'
import { useThemeHook } from '../GlobalComponents/ThemeProvider';
import { AiFillFacebook ,AiFillLinkedin, AiOutlineGoogle, AiFillTwitterCircle, AiFillGithub, AiFillHome} from "react-icons/ai";



function Footer() {
  const [theme] = useThemeHook();


  return (
    <footer className={`${theme ? 'text-dark-primary bg-light-black' : 'text-light-primary bg-light'} page-footer font-small blue p-4 mb-0 mainFooter`}
    style={{  }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between' }} className='px-4' > <p>Get connected with us on social networks:</p>
        <div>
          <AiFillGithub size="2rem"/>
          <AiFillTwitterCircle size="2rem" />
          <AiOutlineGoogle size="2rem" />
          <AiFillFacebook size="2rem" />
          <AiFillLinkedin size="2rem" />
        </div>
      </div>
      <hr />
      <div className="container-fluid text-center text-md-left">
        <div className="row">
          <div className="col-md-6 mt-md-0 mt-3">
            <h5 className="text-uppercase">Yekta Shop</h5>
            <p>Here you can use rows and columns to organize your footer content.</p>
          </div>

          <hr className="clearfix w-100 d-md-none pb-0" />

          <div className="col-md-3 mb-md-0 mb-3">
            <h5 className="text-uppercase">USEFUL LINKS</h5>
            <ul className="list-unstyled">
              <li><a  href="#!">Pricing</a></li>
              <li><a href="#!">Help</a></li>
            </ul>
          </div>

          <div className="col-md-3 mb-md-0 mb-3">
            <h5 className="text-uppercase">CONTACT</h5>
            <ul className="list-unstyled">
              <li><a href="#!">New York, NY 10012, US</a></li>
              <li><a href="#!"> info@example.com</a></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer-copyright text-center py-3 mt-0 mb-0">© 2020
        <a href="https://github.com/MahdiDehghanian"> Moodi</a>
      </div>

    </footer>

  );
}

export default Footer