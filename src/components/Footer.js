import React from 'react'
import { Link } from 'react-router-dom';
import './style.css'

export default function Footer(props) {
    return (
        <div className="footer">
        <div className="container ">
            <div className="row justify-content-center">             
                <div className="col-4 offset-1 col-sm-2">
                    <h5>Links</h5>
                    <ul className="list-unstyled">
                    <li><Link to='/home'>World Data</Link></li>
                        <li><Link to='/india'>INDIA</Link></li>
                    </ul>
                </div>
                <div className="col-12 col-sm-8 align-self-center">
                    <div className="text-center">
                        <a className="btn btn-social-icon btn-linkedin" target="_blank" href="https://www.linkedin.com/in/rishugupta5/"><i className="fa fa-linkedin"></i></a>
                        <a className="btn btn-social-icon btn-twitter" target="_blank" href="https://twitter.com/theRishuGupta"><i className="fa fa-twitter"></i></a>
                        <a className="btn btn-social-icon btn-github" target="_blank" href="https://github.com/RISHU-GUPTA"><i className="fa fa-github"></i></a>
                        <a className="btn btn-social-icon" href="mailto:guptarishu04@gmail.com"><i className="fa fa-envelope-o"></i></a>
                    </div>
                </div>
            </div>
            <div className="row justify-content-center">             
                <div className="col-auto">
                    <p>© Copyright 2023. RISHU GUPTA</p>
                </div>
            </div>
        </div>
    </div>
    )
}
