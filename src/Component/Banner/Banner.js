import React from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import './Banner.css'

const Banner = () => {
    return (
        <div className="container">
            <div className="row banner pt-4 d-flex">
                <div className="col-md-6  col-sm-12">
                    <h1 className="pt-5 mt-5 pb-3 text-color-r"> Adventure Awaits </h1>
                    <p className="fw-bold pb-5">No matter who you’re looking to travel with, you can depend on our 2,500 trusted operators to make sure everything’s taken care of.</p>
                    <Link  as={HashLink}
                    to="/campBlog"
                    className="banner-buttons pe-3 mb-5 ps-3 p-2"><a className="p-3" href=""> VISIT NOW </a></Link>
                    
                </div>
                <div>

                </div>
            </div>
            
        </div>
    );
};

export default Banner;