import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className="footer" id='footer'>
        <div className='footer-content'>
            <div className="footer-content-left">
               <img src={assets.logo} alt=''/>
               <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod, itaque. Dolores eos voluptates eveniet cum pariatur laborum cupiditate quo illum rem vero omnis ab quos, assumenda consequatur doloremque aspernatur harum.</p>
               <div className="footer-social-icons">
                 <img src={assets.facebook_icon} alt=''/>
                 <img src={assets.twitter_icon} alt=''/>
                 <img src={assets.linkedin_icon} alt=''/>
               </div>
            </div>
            <div className="footer-content-right">
                <h2>COMPANY</h2>
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Delivery</li>
                    <li>Privacy policy</li>
                </ul>
            </div>
            <div className='footer-content-right'>
                <h2>GET IN TOUCH</h2>
                <ul>
                    <li>+1-212-456-789</li>
                    <li>contact@tomato.com</li>
                </ul>
            </div>
            <hr/>
            <p className='footer-copyright'>Copyright 2024</p>
            <hr/>
            
        </div>
        
    </div>
  )
}

export default Footer