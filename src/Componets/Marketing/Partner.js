import React from 'react';
import { Link } from 'react-router-dom';

const partner = () => {
    return (
    <div className="partner">
        <div className="container">
            <div className="row">
                <div className="col-lg-8 col-md-4  col-s-8 col-xs-12">
                    <img src="../../img/tech-guy.png"  alt="partner" height="400px;"/>
                </div>
                <div className="col-lg-4 col-md-4 col-s-4 col-xs-12">
                    <p style = {{paddingTop :'40px'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis in tortor ut neque feugiat porta. Mauris in fermentum diam, vitae porttitor orci. Donec accumsan ex vitae mi mattis, et hendrerit odio rutrum. Donec mi ante, ullamcorper id pulvinar quis, tempus sit amet leo. Suspendisse potenti. Nunc elit orci, commodo eget facilisis a, fermentum condimentum urna. Morbi interdum, augue nec accumsan sollicitudin, ex mi fringilla orci, eget auctor est odio non erat.</p>
                    <Link to='/partner' style={{textDecoration : 'none'}}><button type="button" className="btn btn-outline-findfix btn-block">Εγγραφή</button></Link>
                </div>
            </div>
        </div>
    </div>
    )
}

export default partner;
