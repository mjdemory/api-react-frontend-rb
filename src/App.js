import React from 'react';
import logo from './logo.svg';
import './App.css';
import New_Post from "./components/New_Post";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts:[],
  };
}

componentDidMount() {
  this.SeeAll()
}

BoastView = () => {
  fetch("http://127.0.0.1:8000/api/roastboast/BoastViewSet/")
  .then(res => res.json())
  .then(data => this.setState ({posts:data}))
}

RoastView = () => {
  fetch("http://127.0.0.1:8000/api/roastboast/RoastViewSet/")
  .then(res => res.json())
  .then(data => this.setState ({posts:data}))

}

MostPopularView = () => {
  fetch("http://127.0.0.1:8000/api/roastboast/VoteScoreViewSet/")
  .then(res => res.json())
  .then(data => this.setState ({posts:data}))
}

SeeAll = () => {
  fetch("http://127.0.0.1:8000/api/roastboast/")
  .then(res => res.json())
  .then(data => this.setState ({posts:data}))

}

render() {
  return(
    <div>
      <New_Post/>
      <button onClick={this.SeeAll}>See All</button>
      <button onClick={this.BoastView}>View Boasts</button>
      <button onClick={this.RoastView}>View Roasts</button>
      <button onClick={this.MostPopularView}>Most Popular Posts</button>
      <ul>
          {this.state.posts.map(p=>(
          <div>
            <ul>
              <li>
                  <h3>This is a:</h3>{p.choices ? "Boast":"Roast"},
                  <h3>Message:</h3>{p.body},
                  <h3>Upvote:</h3>{p.upvote},
                  <h3>Downvote:</h3>{p.downvote},
                  <h3>Total Votes:</h3>{p.vote_score}
              </li>
            </ul>
          </div>
          ))}
      </ul>
    </div>
    )

  };  
}

export default App;
