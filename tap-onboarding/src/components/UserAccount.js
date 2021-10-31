import React, {useState} from 'react'
import { Container, Typography, Grid, TextField, Button, InputAdornment, InputLabel, Input } from '@material-ui/core'
import MailOutlineIcon from '@material-ui/icons/MailOutline';
const UserAccount = ({ nextStep, handleChange, values }) => {
    const urlOriginal = 'https://api.qa.auntap.io/public/check_user?email[equals]=' 
    const [errorMail, setErrorMail] = useState(false);
    const [ayudaError, setAyudaError] = useState('');
    var mailExistente=1;

    const Continue = async(e) => {
        e.preventDefault();
        await verificacionMail()
        if (mailExistente == false ) { 
            e.preventDefault();
            nextStep();
        }else{
            e.preventDefault();
            setErrorMail(true);
            setAyudaError("El mail ya esta asociado a un usuario existente")
        };
       
    }
    const verificacionMail = async() => {
        var url = urlOriginal + values.email;
        const response = await fetch(url);
        const json = await response.json();
        mailExistente = json.exist;
    }
    

    return (
        <div class="flex items-center h-screen w-full bg-teal-lighter bg-gray-200">
            <form class="w-full bg-white rounded shadow-2xl p-8 m-4 md:max-w-sm md:mx-auto h-auto">
                <Container component="main" maxWidth="xs">
                    <div>
                        <div class= "pt-6 pb-10">
                            <p class="text-indigo-900 text-2xl text-center font-sans">Para iniciar tu registro</p>
                        </div>
                        <div class= "pt-6 pb-5">
                            <p class="text-indigo-800 text-1xl text-center font-sans">Ingresá tu mail</p>
                        </div>
                        <form class= "pt-5 pb-10">  
                                <TextField
                                    error={errorMail}
                                    helperText={ayudaError}
                                    id="textMail"
                                    label="nombre@email.com.ar"
                                    placeholder="nombre@email.com.ar"
                                    onChange={handleChange('email')}
                                    defaultValue={values.email}
                                    autoComplete="email"
                                    fullWidth                      
                                    InputProps={{
                                        startAdornment: (
                                            <InputAdornment position="start">
                                            <MailOutlineIcon />
                                            </InputAdornment>
                                        ),
                                        }}
                                    
                                />
                            <div class = "pt-24 py-14">
                                <Button onClick={Continue} type="submit" variant="contained" class="rounded-lg bg-indigo-400 hover:bg-indigo-300 px-9 text-white font-bold py-2"                            >
                                    Siguiente
                                </Button>
                            </div>
                        </form>
                    </div>
                </Container>
            </form>
        </div>


    )
}

export default UserAccount
