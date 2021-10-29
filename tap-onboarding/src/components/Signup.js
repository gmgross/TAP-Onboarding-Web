import React, { Component } from 'react'
import UserAccount from './UserAccount';
import UserDeclaration from './UserDeclaration';
import UserDetails from './UserDetails';
import UserDetailsConfirm from './UserDetailsConfirm';
import UserPhone from './UserPhone';
import UserPhoneVerification from './UserPhoneVerification';
import UserPassword from './UserPassword';
export default class Signup extends Component {

    state = {
        step: 1,
        email: '',
        pin: '',
        phone: '',
        dni:'',
        password:''
    }

    // vuelve al paso anterior
    prevStep = () => {
        const { step } = this.state;
        this.setState({ step: step - 1 });
    }

    // proceda al siguiente paso
    nextStep = () => {
        const { step } = this.state;
        this.setState({ step: step + 1 });
    }

    // manejar cambio de campo 
    handleChange = input => e => {
        this.setState({ [input]: e.target.value });
    }

    render() {
        const { step } = this.state;
        const { email, pin, name, lastName,dni } = this.state;
        const values = { email, pin, name, lastName,dni }

        switch (step) {
            case 1:
                return (
                    <UserAccount
                        nextStep={this.nextStep}
                        handleChange={this.handleChange}
                        values={values}
                    />
                )
                case 2:
                    return (
                        <UserPassword
                            prevStep={this.prevStep}
                            nextStep={this.nextStep}
                            handleChange={this.handleChange}
                            values={values}
                        />
                    )
            case 3:
                return (
                    <UserPhone
                        prevStep={this.prevStep}
                        nextStep={this.nextStep}
                        handleChange={this.handleChange}
                        values={values}
                    />
                )
            case 4:
                return (
                    <UserPhoneVerification
                        prevStep={this.prevStep}
                        nextStep={this.nextStep}
                        handleChange={this.handleChange}
                        values={values}
                    />
                )
            case 5:
                return (
                    <UserDetails
                        prevStep={this.prevStep}
                        nextStep={this.nextStep}
                        handleChange={this.handleChange}
                        values={values}
                    />
                )
            case 6:
                return (
                    <UserDetailsConfirm
                        prevStep={this.prevStep}
                        nextStep={this.nextStep}
                        handleChange={this.handleChange}
                        values={values}
                    />
                )
            case 7:
                return (
                    <UserDeclaration 
                    prevStep={this.prevStep}
                    handleChange={this.handleChange}
                    values={values}
                    />
                )
            default:
            // do nothing
        }


        return (
            <div>
                <h1>Registrarse</h1>
            </div>
        )
    }
}
