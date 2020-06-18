import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';

class Blog extends Component{
  constructor(props){
    super(props)
    this.state = {
      articles: []
    }    
  }

  componentDidMount(){
    let promesa = fetch('https://jsonplaceholder.typicode.com/posts')

    promesa.then(response => response.json()).then(data=>{
      console.log(data)
      this.setState({
        articles: data
      })
      
    })
  }

  render(){
    return(
      <div>
        {
          this.state.articles.map((article)=>{
            return <div classname="card" style ={backgroundColor:'red',color:'yelo'}><p>{article.title}</p></div>
          })
        }
      </div>
    )
  }
}

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <div>
        <Blog/>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
