import './RegistrationForm.scss'


import React, { Component } from 'react';

class RegistrationForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: ''
        };
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        console.log('form is submitted. Email value is', this.state.email);
    }

    handleEmailChange(event) {
        console.log('email was changed', event.target.value);
        this.setState({email: event.target.value});
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit} className="emailForm">
                <input
                    className="inputForm"
                    type="text"
                    placeholder="your e-mail"
                    value={this.state.email}
                    onChange={this.handleEmailChange}
                />
                <button className="btnForm">
                    <svg
                        width="11px" height="18px">
                        <path fillRule="evenodd"  fill="rgb(255, 255, 255)"
                              d="M9.845,8.640 L0.922,0.150 C0.712,-0.051 0.375,-0.051
                              0.165,0.150 C-0.045,0.349 -0.045,0.670 0.165,0.870 L8.708,8.999
                              L0.165,17.128 C-0.045,17.328 -0.045,17.649 0.165,17.848
                              C0.268,17.947 0.407,18.000 0.541,18.000 C0.676,18.000
                              0.815,17.950 0.918,17.848 L9.842,9.357 C10.052,9.161 10.052,8.837 9.845,8.640 Z"/>
                    </svg>
                </button>
            </form>
        );
    }
}

export default RegistrationForm;