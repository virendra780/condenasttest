import React, { Component } from 'react';

class App extends Component {
  state = {
    news: []
  }

  componentDidMount() {
    fetch('http://localhost:3001/news')
    .then(res => res.json())
    .then((data) => {
      console.log(data.articles);
      this.setState({ news: data.articles })
    })
    .catch(console.log)
  }

  render() {
    return (
      <div className="container">
       <div className="col-xs-12">
       <h1>Latest News</h1>
       {this.state.news.map((item) => (
         <div className="card">
           <div className="card-body">
             <h5 className="card-title">{item.author}</h5>
             <h6 className="card-subtitle mb-2 text-muted">
             {item.title}
             <p>
               {item.description}
             </p>
             </h6>
           </div>
         </div>
       ))}
       </div>
      </div>
   );
  }
}
export default App;