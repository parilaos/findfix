import React, { Component } from 'react';

import InputButton from '../../Componets/UI/input/InputButton';
import History from '../../Componets/History/History';
import { Brands }  from '../../Config/Brands'
import { Category } from '../../Config/Category';
import { Models } from '../../Config/Models';
import { Issues } from '../../Config/Issues';

class Search extends Component {
  state= {
    category : '' ,
    brand : '' ,
    model : '' ,
    issue: '' ,
}



categoryHandler = (event) => {
this.setState({category : event.target.value});
sessionStorage.setItem('category',event.target.value);
} 

brandHandler = (event) => {
  this.setState({brand : event.target.value});
  sessionStorage.setItem('brand',event.target.value);
  } 

modelHandler = (event) => {
  this.setState({model : event.target.value});
  console.log(this.state.model);
  sessionStorage.setItem('model',event.target.value);
  } 


  modelButtonHandler = () => {
    this.setState({model : this.modelValue.value});
    sessionStorage.setItem('model', this.modelValue.value);

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
  const data = sessionStorage;
  console.log(data);
}

render() {
let element =null;
if ( this.state.category === '') {
    element = (
        <div className="col-lg-8 offset-lg-2 col-md-8 offset-md-2 col-s-12 col-xs-12">
            <p className="lead">Τι θέλεις να επισκευάσεις;</p>                
                {Category.map( Category => {return (<InputButton key={Category} choice={this.categoryHandler} value={Category}/>);})}
        </div>)
} 
else if (this.state.brand === '') {
    const categoryName = this.state.category;
    let brandSearch = Brands[categoryName];
    if (brandSearch) { element = (
      <div className="col-lg-8 offset-lg-2 col-md-8 offset-md-2 col-s-12 col-xs-12">
      <p className="lead">Επέλεξε Μάρκα</p>                
          {brandSearch.map( brandlName => {return (<InputButton key={brandlName} choice={this.brandHandler} value={brandlName}/>);})}
      </div>) }
    else  {  element = (
      <div className="col-lg-8 offset-lg-2 col-md-8 offset-md-2 col-s-12 col-xs-12">
      <p className="lead">Τι μάρκα είναι;</p>                
      <div className="input-group mb-3">
        <input type="text" className="form-control" placeholder="π.χ Apple..." value=""/>
        <div className="input-group-append">
          <button className="btn btn-outline-secondary" type="button" onClick={this.brandHandler}>Επόμενο</button>
        </div>
      </div>
      </div>) }
} else if (this.state.model === '') {
  let brandName = this.state.brand;
  let modelSearch =Models[brandName];
  if (modelSearch) {
  element = (
    <div className="col-lg-8 offset-lg-2 col-md-8 offset-md-2 col-s-12 col-xs-12">
    <p className="lead">Επέλεξε Μοντέλο</p>                
        {modelSearch.map( modelName => {return (<InputButton key={modelName} choice={this.modelHandler} value={modelName}/>);})}
    </div>) }
    else {element = (
      <div className="col-lg-8 offset-lg-2 col-md-8 offset-md-2 col-s-12 col-xs-12">
      <p className="lead">Ποιό μοντέλο έχεις;</p>                
      <div className="input-group mb-3">
        <input type="text" className="form-control" placeholder="π.χ 6s plus" ref= {el => this.modelValue = el}  />
        <div className="input-group-append">
          <button className="btn btn-outline-secondary" type="button" onClick={ (e) =>{ this.modelButtonHandler();}}>Επόμενο</button>
        </div>
      </div>
      </div>)}
} else if (this.state.issue === '') {
  let issueSearch=Issues[this.state.category];
  if (issueSearch) {
    element = (
      <div className="col-lg-8 offset-lg-2 col-md-8 offset-md-2 col-s-12 col-xs-12">
      <p className="lead">Επέλεξε βλάβη</p>                
          {issueSearch.map(issueName => {return (<InputButton key={issueName} choice={this.issueHandler} value={issueName}/>);})}
      </div>) }
      else{
        
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
} else { element =(
  <div className="col-lg-8 offset-lg-2 col-md-8 offset-md-2 col-s-12 col-xs-12">
    <input type="button" className="btn btn-outline-info btn-block" onClick={this.searchHandler} value="Αναζήτηση" />  
  </div>
)}


return(
    
        <div className="starter-template">
        {this.state.category}
        {this.state.brand}
        {this.state.model}
        {this.state.issue}
                { element }
        </div>

);
}
}

export default Search;