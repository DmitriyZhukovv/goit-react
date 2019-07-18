import React , { Component } from 'react';
import FormEditor from './FormEditor/FormEditor';
import shortId from 'shortid';
import TaskList from './TaskList/TaskList'
import Search from './Search/Search'


// const SearchUserInput = (tasks, search) => {
//     return tasks.filter(elem => 
//         elem.value.toLowerCase().includes(search.toLowerCase())
//     );
// }

export default class App extends Component {
    state = {
        tasks : [],
        search : ''
    };

    // componentDidMount ()  {
    //     const getTask = localStorage.getItem()
    //     console.log("componentDidUpdate");
    // };


    // componentDidUpdate (prevProps, prevState)  {
    //     if(prevState.tasks !== this.state.tasks) {
    //         localStorage.setItem("tasks", JSON.stringify(this.state.tasks));
    //     };
    // };



    getTask = task => {
        const newArr = {...task, id: shortId()};
        this.setState(prevState => ({
            tasks: [...prevState.tasks, ...newArr]}))
        // console.log(this.state)
    };

    onFilterSearch = e => {
        this.setState({filter : e.target.value})
        console.log(this.state);
    };

    searchTasks = ({target}) => {
        this.searchTasks({search : target.value})
    };

    deleteTask = id => {
        console.log(id)
        this.setState(prevState => 
            ({tasks : 
                prevState.tasks.filter(elem => elem.id !==id)
            })
        )
    };

    SearchUserInput = (tasks, search) => {
        return tasks.filter(elem =>
            elem.value.toLowerCase().includes(search.toLowerCase())
            )
    };

    updatePriority = (id, priority) => {
        this.setState(prevState =>({tasks :
            prevState.tasks.map(...elem => 
                elem.id === id ? {...elem, priority: priority} : elem
            )
        }))
    }

    render(){
        const { tasks } = this.state;
        const FindInput = this.SearchUserInput(tasks, /* search */);
        console.log(FindInput)

        return (
            <>
                <FormEditor onGetTask = {this.getTask} />
                <Search onSearchTask = {this.searchTasks} />
                <TaskList 
                    tasks = {tasks} 
                    onDeleteItem = {this.deleteTask} 
                    onUpdatePriority= {tasks} />
                </>
        );
    }  
}