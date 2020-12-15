import React , { Component } from 'react';
import '../css/AddBoiler.css';

class AddBoiler extends Component {

    state = {
        id: '',
        status: '',
        typeId: '',
        comment: '',
    }

    changeValue = (e) => {
        this.setState({ [e.target.id]: e.target.value });
    }

    submition = (e) => {
        e.preventDefault();
        const newBoiler = {
            id: this.state.id,
            status: this.state.status,
            typeId: this.state.typeId,
            comment: this.state.comment,
        }
        this.props.addBoiler(newBoiler);
        this.setState( {
            id: '',
            status: '',
            typeId: '',
            comment: '',
        });
    }

    render() {
        return (
            <form onSubmit={this.submition}>
                <div id = 'addNewDiv'>
                    <h3 id = 'addNewTitle'>
                        Add new boiler
                    </h3>
                    <ul>
                        <li>
                            <label htmlFor="status">Status:</label>
                            <input type="text" id="status" placeholder="....." value={this.state.status} onChange={this.changeValue} required/>
                        </li>
                        <li>
                            <label htmlFor="typeId">Boiler Type:</label>
                            <input type="number" id="typeId" placeholder="....." value={this.state.typeId} onChange={this.changeValue} required/>
                        </li>
                        <li>
                            <label htmlFor="comment">Comment:</label>
                            <input type="text" id="comment" placeholder="....." value={this.state.comment} onChange={this.changeValue} required />
                        </li>
                    </ul>
                    <input type="submit" value="Submit" />
                </div>
            </form>
        )
    }
}

export default AddBoiler;