import React, { Component } from 'react';
import Input from '../../Componets/UI/input/input';
import Button from '../../Componets/UI/Button/Button';
import Spinner from '../../Componets/UI/Spinner/Spinner';
import axios from '../../axios-api';


class Forgot extends Component {


state = {
    partner : {
        email: {elementType : 'input',
                elementConfig : {
                    type : 'email',
                    placeholder : 'Email'
                },
                value : ''
            }

    },
    loading: false,
    error : false,
    errorMessage : null,
    messageStatus : false,
    message : null,
}

orderHandler = ( event ) => {
    event.preventDefault();
    this.setState( { loading: true } );
    const formData = {};
    for (let formElementIdentifier in this.state.partner) {
        formData[formElementIdentifier] = this.state.partner[formElementIdentifier].value;
    }
    const forgot = {
        email: formData.email,
    }
    axios.post( '/partner/forgot', forgot )
        .then( response => {
            this.setState( { loading: false, messageStatus : true,
                message : response.data.message});
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
               <Button btnType="Success">Αποστολή</Button>

        </form>
    );
    if ( this.state.loading ) {
        form = <Spinner />;
    }

    if (this.state.messageStatus) {
        form= <div className="alert alert-success" role="alert" >{this.state.message}</div>
    }
    return (
        <div>
            <div className="container">
                <div className="col-lg-6 offset-lg-3 col-md-6 offset-md-3 col-s-12 col-xs-12">
                    <h4>Ανάκτηση κωδικού</h4>
                    {error}
                    {form}
                </div>
            </div>
        </div>
    );
}
}

  export default Forgot;