import React, { Component } from 'react';
import Input from '../../Componets/UI/input/input';
import Button from '../../Componets/UI/Button/Button';
import Spinner from '../../Componets/UI/Spinner/Spinner';
import axios from '../../axios-api';

class Reset extends Component {


state = {
    partner : {
        newPassword: {elementType : 'input',
                elementConfig : {
                    type : 'password',
                    placeholder : 'Νέος κωδικός'
                },
                value : ''
            },
            verifyPassword: {elementType : 'input',
            elementConfig : {
                type : 'password',
                placeholder : 'Επιβεβαίωση κωδικού'
            },
            value : ''
        }

    },
    loading: false,
    error : false,
    errorMessage : null,
}

orderHandler = ( event ) => {
    event.preventDefault();
    this.setState( { loading: true } );
    const formData = {};
    for (let formElementIdentifier in this.state.partner) {
        formData[formElementIdentifier] = this.state.partner[formElementIdentifier].value;
    }
    const reset = {
        verifyPassword: formData.verifyPassword,
        newPassword : formData.newPassword
    }

    const { match: { params } } = this.props;

    axios.post( `/partner/reset/${params.token}`, reset )
        .then( response => {
            this.setState( { loading: false } );
            this.props.history.replace('/login')
        } )
        .catch( error => {
            this.setState( { loading: false, error : true,
                errorMessage : error.response.data.message});
        } );
}


inputChangedHandler = (event, inputIdentifier) => {
    const updatedOrderForm = {
        ...this.state.partner
    };
    const updatedFormElement = { 
        ...updatedOrderForm[inputIdentifier]
    };
    updatedFormElement.value = event.target.value;
    updatedOrderForm[inputIdentifier] = updatedFormElement;
    this.setState({partner: updatedOrderForm});

}

render () {
    let error = null;
    if(this.state.error) {
       error = <div className="alert alert-warning" role="alert" >{this.state.errorMessage}</div>
    }

    const formElementsArray = [];
    for (let key in this.state.partner) {
        formElementsArray.push({
            id: key,
            config: this.state.partner[key]
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
                    <h4>Αλλαγή κωδικού</h4>
                    {error}
                    {form}
                </div>
            </div>
        </div>
    );
}
}

  export default Reset;