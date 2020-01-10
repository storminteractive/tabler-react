import React, { Fragment, Component } from 'react';
import './App.css';
import EventList from './components/EventList';
import Header from './components/Header';
import Footer from './components/Footer';

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
       filter: ''
    }
  }
  
  updateFilter(e){
    console.log(`Will update filter to: ${e.target}`);
    this.setState({
      filter: e.target
    })
  }
  
  render(){
            return (
              <Fragment>
                <div
                  className="page-main"
                  id="page-main"
                >
                  <Header updateFilter={this.updateFilter}/>
                  <EventList f={this.state.filter} />
                </div>
                <Footer/>
              </Fragment>
            );
          }
}

export default App;
