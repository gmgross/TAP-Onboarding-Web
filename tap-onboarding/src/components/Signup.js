import React, { Component } from 'react'
import UserAccount from './UserAccount';
import UserDeclaration1 from './UserDeclaration1';
import UserDeclaration2 from './UserDeclaration2';
import UserDetails from './UserDetails';
import UserDetailsConfirm from './UserDetailsConfirm';
import UserEnd from './UserEnd';
import UserPhone from './UserPhone';
import UserPhoneVerification from './UserPhoneVerification';
import UserPassword from './UserPassword';
export default class Signup extends Component {

    state = {
        step: 1,
        email: '',
        password:'', 
        phone: '',
        oauth_token: '',
        document_id:'', //document_id
        check_peype:'',
        first_name:'vacio',
        last_name:'',
        is_exposed_person:'',
        is_uif_person:''        
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
        const { email, password, phone, oauth_token, document_id, check_peype, first_name, last_name, is_exposed_person, is_uif_person } = this.state;
        const values = { email, password, phone, oauth_token, document_id, check_peype, first_name, last_name, is_exposed_person, is_uif_person}

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
                    <UserDeclaration1 
                    prevStep={this.prevStep}
                    nextStep={this.nextStep}
                    handleChange={this.handleChange}
                    values={values}
                    />
                )
                case 8:
                    return (
                        <UserDeclaration2
                        prevStep={this.prevStep}
                        nextStep={this.nextStep}
                        handleChange={this.handleChange}
                        values={values}
                        />
                    )
                
                case 9:
                    return (
                        <UserEnd
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
                <h1>Hola Mundo!</h1>
            </div>
        )
    }
}
