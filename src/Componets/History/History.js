import React from 'react';

const history = ( props ) => (

        <div className="chips">
            <div className="chip">{props.value}
                <button type="button" className="chip-remove"  onClick={props.delete}>
                </button>
            </div>
        </div>
);

export default history;