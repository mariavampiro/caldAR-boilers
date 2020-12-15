import React, { Component } from 'react';
import '../css/BoilerItem.css';

export class BoilerItem extends Component {
    render() {
        return (
            <tr>
                <td>{this.props.boiler.id}</td>
                <td>{this.props.boiler.status}</td>
                <td>{this.props.boiler.typeId}</td>
                <td>{this.props.boiler.comment}</td>
                <td>
                    <button onClick={this.props.deleteBoiler.bind(this,this.props.boiler.id)}>Delete</button>
                </td>
            </tr>
        )
    }
}

export default BoilerItem
