import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

class ItemsList extends Component {
    state = {
        list : [ ]
    }
    componentDidMount(){
        axios.get('http://localhost:5000/api/task')

        .then((res) =>{
            console.log(res.data.data)
            this.setState({ list  : res.data.data })

        })
        

    }

    onDelete = (_id) => {
        let data =this.state.list.filter(function(item){
            return item._id === _id
        })
        let id = data[0]._id
        // console.log(id)
       
        axios.delete(`http://localhost:5000/api/task/${id}`)
        
        .then((res) =>{
            console.log(res.data.data)

            // this.setState({ list  : res.data.data })

        })
    
    }
    render(){

        return(
            <ul className = "list-group w-50 p-3 mx-auto font-weight-bold  ">
             {this.state.list.map(({ _id,task} ) =>(
                    <li className= "list-group-item" key={_id}>
                        <button 
                        className= "btn btn-danger btn-group btn-group-sm mr-3"
                        onClick = {this.onDelete.bind(this, _id)}
                        >Delete</button>{task}</li>
                ))} 
            </ul>
        )
    }
}

export default ItemsList;