import React from 'react';
import InputButton from '../UI/input/InputButton'

const choose = ( props ) => {
    let transformedIngredients = Object.keys( props.searchComponents )
        .map( igKey => {
            console.log(igKey.value);
            return [...Array( props.searchComponents[igKey] )].map( ( items, i ) => {
                return <InputButton key={igKey + i} value={items} />; //ta items einai ta values
            } );
        } )
       
   
    return (
        <div>

            {transformedIngredients}

        </div>
    );
};

export default choose;