import React, { Fragment } from 'react';
import Nav from '../Nav/Nav';


const layout = ( props ) => (
    <Fragment>
        <Nav />
        <main> 
            { props.children }
        </main>
        <footer></footer>
    </Fragment>
);

export default layout;