import React from 'react'
import style from './Footer.module.css'
import {Link} from 'react-router-dom'
import FooterImg from '../../Images/morev-footer.png'

export default function Footer() {
    return (
        <div>
            <footer className={style.footer}>
                <div className={style.container}>
                    <div className={style.row}>
                    <div className={style["footer-col"]}>
                        {/* <img
                            src={FooterImg}
                            height="75"
                            width="250"
                            alt=""
                            />
                        <h4>© MO-REV 2021</h4>
                        {/* <h4>Company</h4> */}
                        <ul>
                            <li>
                                <img
                                    src={FooterImg}
                                    height="75"
                                    width="250"
                                    alt=""
                                />
                            </li>
                            {/* <li><Link to="/">About us</Link></li>
                            <li><Link to="/">Our services</Link></li>
                            <li><Link to="/">Privacy policy</Link></li>
                            <li><Link to="/">Affiliate program</Link></li> */}
                        </ul>
                    </div>
                    <div className={style["footer-col"]}>
                        <h4>get help</h4>
                        <ul>
                        <li><Link to="/">FAQ</Link></li>
                        <li><Link to="/">Shipping</Link></li>
                        <li><Link to="/">Returns</Link></li>
                        <li><Link to="/">Order status</Link></li>
                        <li><Link to="/">Payment options</Link></li>
                        </ul>
                    </div>
                    <div className={style["footer-col"]}>
                        <h4>follow us</h4>
                        <div className={style["social-links"]}>
                        <Link to="/"><i className="fab fa-facebook-f" /></Link>
                        <Link to="/"><i className="fab fa-twitter" /></Link>
                        <Link to="/"><i className="fab fa-instagram" /></Link>
                        <Link to="/"><i className="fab fa-linkedin-in" /></Link>
                        </div>
                    </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}
