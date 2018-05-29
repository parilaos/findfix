import React, { Component } from 'react';
import Input from '../../Componets/UI/input/input';
import Button from '../../Componets/UI/Button/Button';
import Spinner from '../../Componets/UI/Spinner/Spinner';
import axios from '../../axios-api';
import { Cookies } from 'react-cookie';

const cookies = new Cookies();

class Details extends Component {


state = {
    shop : {
        first_name: {elementType : 'input',
                elementConfig : {
                    type : 'text',
                    placeholder : 'Όνομα υπευθύνου'
                },
                value : ''
            },
        last_name: {elementType : 'input',
        elementConfig : {
            type : 'text',
            placeholder : 'Επώνυμο υπευθύνου'
        },
        value : ''
    },
        formal_name : {elementType : 'input',
        elementConfig : {
            type : 'text',
            placeholder : 'Επωνυμία επιχείρησης'
        },
        value : ''
    },
        name : {elementType : 'input',
        elementConfig : {
            type : 'text',
            placeholder : 'Διακριτικός τίτλος'
        },
        value : ''
    },
    route: {elementType : 'input',
        elementConfig : {
            type : 'text',
            placeholder : 'Όδός'
        },
        value : ''
    },
    street_number: {elementType : 'input',
        elementConfig : {
            type : 'text',
            placeholder : 'Αριθμός'
        },
        value : ''
    },
    locality: {elementType : 'input',
        elementConfig : {
            type : 'text',
            placeholder : 'Πόλη'
        },
        value : ''
    },
    postal_code: {elementType : 'input',
        elementConfig : {
            type : 'text',
            placeholder : 'Τ.Κ.'
        },
        value : ''
    },
    
    phone_number: {elementType : 'input',
        elementConfig : {
            type : 'text',
            placeholder : 'Τηλέφωνο καταστήματος'
        },
        value : ''

    },
    site: {elementType : 'input',
        elementConfig : {
            type : 'text',
            placeholder : 'website url'
        },
        value : ''
    },
    vat: {elementType : 'input',
        elementConfig : {
            type : 'text',
            placeholder : 'Α.Φ.Μ'
        },
        value : ''
    },
    tax_office: {elementType : 'input',
        elementConfig : {
            type : 'text',
            placeholder : 'Δ.Ο.Υ'
        },
        value : ''
    },

    },
    loading: false,
    error : false,
    errorMessage : null,
}

orderHandler = ( event ) => {
    event.preventDefault();
    this.setState( { loading: true } );
    const formData = {};
    for (let formElementIdentifier in this.state.shop) {
        formData[formElementIdentifier] = this.state.shop[formElementIdentifier].value;
    }
    const details = {
        first_name : formData.first_name,
        last_name : formData.last_name,
        formal_name : formData.formal_name,
        name : formData.name,
        route : formData.route,
        street_number : formData.street_number,
        locality : formData.locality,
        postal_code : formData.postal_code,
        phone_number : formData.phone_number,
        site : formData.site,
        vat : formData.vat,
        tax_office : formData.tax_office,
        partner: cookies.get('partnerId') 
        
    }
    axios.post( '/shop', details )
        .then( response => {
            this.setState( { loading: false } );
            this.props.history.replace('/dashboard')
        } )
        .catch( error => {
            this.setState( { loading: false, error : true,
                errorMessage : error.response.data.message});
        } );
}


inputChangedHandler = (event, inputIdentifier) => {
    const updatedOrderForm = {
        ...this.state.shop
    };
    const updatedFormElement = { 
        ...updatedOrderForm[inputIdentifier]
    };
    updatedFormElement.value = event.target.value;
    updatedOrderForm[inputIdentifier] = updatedFormElement;
    this.setState({shop: updatedOrderForm});

}

render () {
    let error = null;
    if(this.state.error) {
         error = <div className="alert alert-warning" role="alert" >{this.state.errorMessage}</div>
    }

    const formElementsArray = [];
    for (let key in this.state.shop) {
        formElementsArray.push({
            id: key,
            config: this.state.shop[key]
        });
    }
    let form = (
        <form onSubmit={this.orderHandler}>
            {formElementsArray.map(formElement => (
                <Input 
                    key={formElement.id}
                    elementType={formElement.config.elementType}
                    elementConfig={formElement.config.elementConfig}
                    value={formElement.config.value}
                    changed={(event) => this.inputChangedHandler(event, formElement.id)} />
            ))}
               <Button btnType="Success">Αποθήκευση</Button>

        </form>
    );
    if ( this.state.loading ) {
        form = <Spinner />;
    }
    return (
        <div>
            <div className="container">
                <div className="col-lg-6 offset-lg-3 col-md-6 offset-md-3 col-s-12 col-xs-12">
                    <h4>Πες μας περισσότερα στοιχεία</h4>
                    {error}
                    {form}
                </div>
            </div>
        </div>
    );
}
}

  export default Details;