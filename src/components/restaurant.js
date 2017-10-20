import React from 'react';


class Restaurant extends React.Component {
  constructor(){
    super();
    this.state = {
      restaurants: []
    }
  }

  componentDidMount(){
    fetch('https://adams-eatandreview.herokuapp.com/restaurants')
    .then(function(response) {
      return response.json();
    })
    .then((obj) => {
      this.setState({restaurants: obj})
      console.log(obj)
    })
  }
  render() {
    return (
      <div>
      {this.state.restaurants.map((x) =>
        <div className="squares">
          <center><a href="/restaurants/`${x.id}`">{x.name}</a></center>
          <h5>{x.city}, {x.state}</h5>
          </div>
        )}
      </div>
    );
  }
}


export default Restaurant;
