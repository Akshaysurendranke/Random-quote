import React, { Component }  from 'react';
import QuotesTest from '../Components/QuotesTest';
import QuotesAuthor from '../Components/QuotesAuthor'
import './Quotes.css'
import Button from '../Components/Button';
import axios from 'axios';

class Quotes extends Component {
  state = {
    quote : "The Richness , is the Richness of a soul",
    author: "Prophet Muhammed (Please be up on him)",
    quotesData : [],
    color : "rgb(243 , 156 , 18)",
  };

  // create a random color using HEX value

  randomcolor = () =>{
    let colorPatterns = '1234567890ABCDEF';
    let color = '#';
   for (let i = 0 ; i < 6 ; i++){
    color +=colorPatterns[Math.floor(Math.random()*16)];
   }
   return color;

  }

  componentDidMount(){
    if(this.state.quotesData.length>0){
      return
    }else{
      this.fetchquotes()
    }
    
  }

//Fetching the quote using API (axios)

  fetchquotes = ()=>{
    axios.get(
      "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json"
    ).then((res)=>{
      const quotesData = [...res.data.quotes];
      const color = this.randomcolor;
      document.body.style.color = color;
      document.body.style.backgroundColor = color;

      this.setState({
        quotesData:quotesData,
        
      });
    }).catch((error)=>console.log(error));
  }

  //Handle click

 Handleclick = ()=>{
  
  let randomIndex = Math.floor(Math.random()*16);
   const color = this.randomcolor();
      document.body.style.color = color;
      document.body.style.backgroundColor = color;
  let {quote,author} = this.state.quotesData[randomIndex];


  this.setState({
    quote:quote,
    author:author,
    color:color,

  });
}


  render()
  {
    return (
      <div id='quote-box'>
          <QuotesTest quote={this.state.quote} color={this.state.color}/>
          <QuotesAuthor author={this.state.author} color = {this.state.color} />
          <Button Handleclick = {this.Handleclick}
           color={this.state.color} 
           
           />
      </div>
    )
  }
}

export default Quotes