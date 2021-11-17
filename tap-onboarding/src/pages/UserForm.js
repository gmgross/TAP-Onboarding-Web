import React, { Component } from 'react'
import UserMail from './UserMail';
import UserDeclarationExp from './UserDeclarationExp';
import UserDeclarationUif from './UserDeclarationUif';
import UserDetails from './UserDetails';
import UserDetailsConfirm from './UserDetailsConfirm';
import UserEnd from './UserEnd';
import UserPhone from './UserPhone';
import UserPhoneVerification from './UserPhoneVerification';
import UserPassword from './UserPassword';
import UserPasswordConfirm from './UserPasswordConfirm';
export default class UserForm extends Component {

    state = {
        step: 1,
        email: '',
        password:'',
        confirmPassword: '', 
        phone: '',
        oauth_token: '',
        oauth_token2: '',
        oauth_token3: '',
        oauth_token4: '',
        oauth_token5: '',
        oauth_token6: '',
        document_id:'',
        check_peype:'',
        first_name:'Carlos',
        last_name:'Lorenzo',
        is_exposed_person:'0',
        is_uif_person:'0'        
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
        const { email, password, confirmPassword, phone, oauth_token, oauth_token2, oauth_token3, oauth_token4, oauth_token5, oauth_token6, document_id, check_peype, first_name, last_name, is_exposed_person, is_uif_person } = this.state;
        const values = { email, password, confirmPassword, phone, oauth_token, oauth_token2, oauth_token3, oauth_token4, oauth_token5, oauth_token6, document_id, check_peype, first_name, last_name, is_exposed_person, is_uif_person}

        switch (step) {
            case 1:
                return (
                    <UserMail
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
                    <UserPasswordConfirm
                        prevStep={this.prevStep}
                        nextStep={this.nextStep}
                        handleChange={this.handleChange}
                        values={values}
                     />
                )    
            case 4:
                return (
                    <UserPhone
                        prevStep={this.prevStep}
                        nextStep={this.nextStep}
                        handleChange={this.handleChange}
                        values={values}
                    />
                )
            case 5:
                return (
                    <UserPhoneVerification
                        prevStep={this.prevStep}
                        nextStep={this.nextStep}
                        handleChange={this.handleChange}
                        values={values}
                    />
                )
            case 6:
                return (
                    <UserDetails
                        prevStep={this.prevStep}
                        nextStep={this.nextStep}
                        handleChange={this.handleChange}
                        values={values}
                    />
                )
            case 7:
                return (
                    <UserDetailsConfirm
                        prevStep={this.prevStep}
                        nextStep={this.nextStep}
                        handleChange={this.handleChange}
                        values={values}
                    />
                )
            case 8:
                return (
                    <UserDeclarationExp 
                        prevStep={this.prevStep}
                        nextStep={this.nextStep}
                        handleChange={this.handleChange}
                        values={values}
                    />
                )
            case 9:
                return (
                    <UserDeclarationUif
                        prevStep={this.prevStep}
                        nextStep={this.nextStep}
                        handleChange={this.handleChange}
                        values={values}
                    />
                )
                
            case 10:
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
            </div>
        )
    }
}
