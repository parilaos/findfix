import React, { Fragment } from 'react';
import Nav from '../Nav/Nav';


const layout = ( props ) => (
    <Fragment>
        <Nav />
        <main> 
            { props.children }
        </main>
        <footer>
            <div style={{textAlign : 'center',color : '#fff'}}>2018 © made with ♥ by FindFix Team</div>
        </footer>
    </Fragment>
);

export default layout;