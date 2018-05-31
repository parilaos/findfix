import React, { Component } from 'react';

import InputButton from '../../Componets/UI/input/InputButton';
import History from '../../Componets/History/History';
import { Brands }  from '../../Config/Brands'
import { Category } from '../../Config/Category';
import { Models } from '../../Config/Models';

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
  sessionStorage.setItem('model',event.target.value);
  } 

issueHandler = (event) => {
  this.setState({issue : event.target.value});
  sessionStorage.setItem('issue',event.target.value);
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
    console.log(brandSearch);
    element = (
      <div className="col-lg-8 offset-lg-2 col-md-8 offset-md-2 col-s-12 col-xs-12">
      <p className="lead">Επέλεξε Μοντέλο</p>                
          {brandSearch.map( brandlName => {return (<InputButton key={brandlName} choice={this.brandHandler} value={brandlName}/>);})}
      </div>) 
} else if (this.state.model === '') {
  let brandName = this.state.brand;
  let modelSearch =Models[brandName];
  console.log(modelSearch);
  element = (
    <div className="col-lg-8 offset-lg-2 col-md-8 offset-md-2 col-s-12 col-xs-12">
    <p className="lead">Επέλεξε Μοντέλο</p>                
        {modelSearch.map( modelName => {return (<InputButton key={modelName} choice={this.modelHandler} value={modelName}/>);})}
    </div>) 
}

return(
    
        <div className="starter-template">
                { element }
        </div>

);
}
}

export default Search;