import React , { Component } from 'react';
import '../css/UpdateBoiler.css';

class UpdateForm extends Component {

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
        const updatedBoiler = {
            id: this.state.id,
            status: this.state.status,
            typeId: this.state.typeId,
            comment: this.state.comment,
        }
        this.props.updateForm(updatedBoiler);
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
                <div id = 'updateDiv'>
                    <h3 id = 'updateTitle'>
                        Update Boiler: 
                    </h3>
                    <ul>
                        <li>
                            <label htmlFor="id">Id:</label>
                            <input type="number" id="id" placeholder="....." value={this.state.id} onChange={this.changeValue} required/>
                        </li>
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

export default UpdateForm;