import React, { Component } from 'react';
import axios from '../../axios-api';

import InputButton from '../../Componets/UI/input/InputButton';
import History from '../../Componets/History/History';
import { Category } from '../../Config/Category';
import { Brands } from '../../Config/Brands';
import { Issues } from '../../Config/Issues';


class Search extends Component {
  state= {
    category : '' ,
    brand : '' ,
    issue: '' ,
    errorStatus : false
}



categoryHandler = (event) => {
this.setState({category : event.target.value});
sessionStorage.setItem('category',event.target.value);
} 

brandHandler = (event) => {
  this.setState({brand : event.target.value});
  sessionStorage.setItem('brand',event.target.value);
  } 

componentDidUpdate() {
  if (document.getElementById('issues')) {
    document.getElementById('issues').value = '';}
}

issueHandler = (event) => {
  this.setState({issue : event.target.value});
  sessionStorage.setItem('issue',event.target.value);

  } 

  issueButtonHandler = () => {
    this.setState({issue : this.issueValue.value});
    sessionStorage.setItem('issue',this.issueValue.value);

    } 
  

searchHandler = () => {
  const data = sessionStorage.getItem('locality')
  axios.get('/shop/'+data)
  .then(response => {
    sessionStorage.setItem('shops', JSON.stringify(response.data));
    this.props.history.replace('/shops');
  })
  .catch( (error) => {
    // this.props.history.replace('/');  
    this.setState({errorStatus : true});
  });
  console.log(data);
}

render() {
let element =null;
let history = null;
if ( this.state.category === '') {
  history = (<div className="row">
              <History name="Περιοχή" value={sessionStorage.getItem('locality')} />
            </div>);
    element = (
        <div className="col-lg-8 offset-lg-2 col-md-8 offset-md-2 col-s-12 col-xs-12">
            <p className="lead">Τι θέλεις να επισκευάσεις;</p>                
                {Category.map( Category => {return (<InputButton key={Category} choice={this.categoryHandler} value={Category}/>);})}
        </div>);
} 
else if (this.state.brand === '') {
    const categoryName = this.state.category;
    let brandSearch = Brands[categoryName];
    if (brandSearch) { 
      history = (<div className="row">
              <History name="Περιοχή" value={sessionStorage.getItem('locality')} />
              <History name="Κατηγορία" value={this.state.category}/>
              </div>);
      element = (
      <div className="col-lg-8 offset-lg-2 col-md-8 offset-md-2 col-s-12 col-xs-12">
      <p className="lead">Επέλεξε Μάρκα</p>                
          {brandSearch.map( brandlName => {return (<InputButton key={brandlName} choice={this.brandHandler} value={brandlName}/>);})}
      </div>) }
    else  { 
      history = (<div className="row">
              <History name="Περιοχή" value={sessionStorage.getItem('locality')} />
              <History name="Κατηγορία" value={this.state.category}/>
              </div>);
     element = (
      <div className="col-lg-8 offset-lg-2 col-md-8 offset-md-2 col-s-12 col-xs-12">
      <p className="lead">Τι μάρκα είναι;</p>                
      <div className="input-group mb-3">
        <input type="text" className="form-control" placeholder="π.χ Apple..." value=""/>
        <div className="input-group-append">
          <button className="btn btn-outline-secondary" type="button" onClick={this.brandHandler}>Επόμενο</button>
        </div>
      </div>
      </div>) }
} else if (this.state.issue === '') {
  let issueSearch=Issues[this.state.category];
  if (issueSearch) {
    history = (<div className="row">
    <History name="Περιοχή" value={sessionStorage.getItem('locality')} />
    <History name="Κατηγορία" value={this.state.category}/>
    <History name="Μάρκα" value={this.state.brand} />

    </div>);
    element = (
      <div className="col-lg-8 offset-lg-2 col-md-8 offset-md-2 col-s-12 col-xs-12">
      <p className="lead">Επέλεξε βλάβη</p>                
          {issueSearch.map(issueName => {return (<InputButton key={issueName} choice={this.issueHandler} value={issueName}/>);})}
      </div>) }
      else{
        history = (<div className="row">
        <History name="Περιοχή" value={sessionStorage.getItem('locality')} />
        <History name="Κατηγορία" value={this.state.category}/>
        <History name="Μάρκα" value={this.state.brand} />
        </div>);
        element = (
        <div className="col-lg-8 offset-lg-2 col-md-8 offset-md-2 col-s-12 col-xs-12">
        <p className="lead">Ποιό είναι το πρόβλημα;</p>                
        <div className="input-group mb-3">
          <input type="text" className="form-control" placeholder="π.χ. σπασμένη οθόνη" id="issues" ref= {el => this.issueValue = el} />
          <div className="input-group-append">
            <button className="btn btn-outline-secondary" type="button" onClick={ (e) =>{ this.issueButtonHandler();}}>Επόμενο</button>
          </div>
        </div>
        </div>)}
} else { 
  history = (<div className="row">
          <History name="Περιοχή" value={sessionStorage.getItem('locality')} />
          <History name="Κατηγορία" value={this.state.category}/>
          <History name="Μάρκα" value={this.state.brand} />
          <History name="Πρόβλημα" value={this.state.issue} />
          </div>);
  element =(
  <div className="col-lg-8 offset-lg-2 col-md-8 offset-md-2 col-s-12 col-xs-12">
    <input type="button" className="btn btn-outline-info btn-block" onClick={this.searchHandler} value="Αναζήτηση" />  
  </div>
)}

let error = null;
    if(this.state.errorStatus) {
       error = <div className="alert alert-warning" role="alert" >Ουπς! κάτι δεν πηγε καλά. </div>
    }

return(
    
        <div className="starter-template">
          <div className="container">
            <div className="card">
              <div className="card-body">
                 {history}
              </div>
            </div>
            <div className="card">
              <div className="card-body">
                { element }
              </div>
            </div>
            { error }
          </div>
        </div>
);
}
}

export default Search;