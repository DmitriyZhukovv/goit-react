import React , {Component} from 'react';
import style from './FormEditor.css'

export default class FormEditor extends Component {
    state = {
        value: "",
        priority : "",
    };

    saveStateValue = ({target}) => {
        const {name} = target;     
        this.setState ({[name]: target.value})
    }

    formSubmit = evt => {
        evt.preventDefault() ;
        this.reset ();
        this.props.onGetTask({...this.state})
    }

    reset = () => {
        this.state ({value : ""})
    }
    
    render () {
        const {value} = this.state;
        return (
            <form className = { style.conteinerForm } onSubmit = {this.formSubmit}>
                <input
                name = "value"
                value = {value}
                className = {style.input} 
                />

                <select />

            </form>
        )
    };
}