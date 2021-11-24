import React from 'react'
import style from './Footer.module.css'
import {Link} from 'react-router-dom'

export default function Footer() {
    return (
        <div>
            <footer className={style.footer}>
                <div className={style.container}>
                    <div className={style.row}>
                    <div className={style["footer-col"]}>
                        <h4>Company</h4>
                        <ul>
                        <li><Link to="/">About us</Link></li>
                        <li><Link to="/">Our services</Link></li>
                        <li><Link to="/">Privacy policy</Link></li>
                        <li><Link to="/">Affiliate program</Link></li>
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
                    {/* <div className={style["footer-col"]}>
                        <h4>online shop</h4>
                        <ul>
                        <li><Link to="/">Watch</Link></li>
                        <li><Link to="/">Bag</Link></li>
                        <li><Link to="/">Shoes</Link></li>
                        <li><Link to="/">Dress</Link></li>
                        </ul>
                    </div> */}
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
