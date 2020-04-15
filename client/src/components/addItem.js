import React, { Component } from 'react';
import axios from 'axios';

class AddItem extends Component {
    state = {
        task : ""
    }

    addTaskHandler = (e) =>{
        this.setState({ [ e.target.name ] : e.target.value })

    }

    submitHandler = (e) =>{
        e.preventDefault();
        console.log(this.state)
        axios.post('http://localhost:5000/api/task', this.state)
        .then((res) =>{
            console.log(res)
        })
        .catch( err =>{
            console.log(err)
        })
    }
    render(){
        return(
            <form className="form-inline w-50 p-3 mx-auto  " onSubmit={this.submitHandler}>
            <div className="form-group ">
            <input type="text"  name = "task" 
            className="form-control  "  
            value={this.state.task} 
            onChange = {this.addTaskHandler}
            placeholder="Enter a task" autocomplete='off'/>
            </div>
            <button type="submit" 
                className="btn btn-primary ml-1 my-1 mb-2">Add task</button>
            </form> 
        )
    }
}

export default  AddItem