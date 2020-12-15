import React, { Component } from 'react';
import BoilerItem from './BoilerItem';
import propTypes from 'prop-types';
import '../css/Boilers.css';

class Boilers extends Component {
  render() {
    return (
      <div>
        <table>
          <caption>Boilers</caption>
          <tbody>
            <tr>
              <th>Id</th>
              <th>Status</th>
              <th>Boiler Type</th>
              <th>Comment</th>
              <th>Delete</th>
            </tr>
            {this.props.boilers.map(boiler => <BoilerItem key={boiler.id} boiler={boiler} deleteBoiler={this.props.deleteBoiler} updateButton={this.props.updateButton} />)}
          </tbody>
        </table>
      </div>

    );
  }
}

Boilers.propTypes = {
  boilers: propTypes.array.isRequired
}

export default Boilers;
