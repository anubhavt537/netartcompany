import React from 'react'
import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneSquare } from '@fortawesome/free-solid-svg-icons';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
export default function Footer() {
  return (
    <div>
     <footer className="footer">

        <div className="footer-content">
           <span><FontAwesomeIcon icon={faPhoneSquare} />
           Toll-Free: 1-800-123-4567
           </span>
<span>
<FontAwesomeIcon icon={faGlobe} />
          <a href="https://www.facebook.com/yourcompany" target="_blank" rel="noopener noreferrer" >
        
            www.facebook.com
          </a>
          </span>
          <span>
          <FontAwesomeIcon icon={faGlobe} />
          www.crigroups.com
          </span>
       
        </div>
      </footer>
        
    </div>
  )
}
