import React, { Component } from 'react';
import Timeline from 'react-image-timeline';
require('react-image-timeline/dist/timeline.css');

class Main extends Component {

    render() {
        const { events } = this.props;
        return (
            <div className={"MainContainer"}>
                <Timeline events={events} customHeader={CustomHeader}/>
            </div>
        );
    }
}


const CustomHeader = props => {
    console.log(props);
    const date = props.event.date;
    return (
      <div className="custom-header">
        <h3>{props.event.title}</h3>
        <p className={"custom-header-date"}>{`${date.getFullYear()}. ${date.getMonth()}. ${date.getDate()}`}</p>
      </div>
    );
  };
  

export default Main;