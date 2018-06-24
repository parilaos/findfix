import React from 'react';

const history = ( props ) => (

    // <div class="col-xs-3 col-md-3 col-s-3 col-l-3 col-xl-3">
        <div className="chips">
            <div className="chip">{props.value}
                <button type="button" className="chip-remove"  onClick={props.delete}>
                </button>
            </div>
        </div>
    // </div>
);

export default history;