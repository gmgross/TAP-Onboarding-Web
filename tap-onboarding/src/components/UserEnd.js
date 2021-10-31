import React from 'react'
import { Container, Typography, Grid, TextField, Button, InputAdornment, InputLabel, Input } from '@material-ui/core'
import AccountCircleTwoToneIcon from '@mui/icons-material/AccountCircleTwoTone';
import { indigo } from '@mui/material/colors';
import { green } from '@mui/material/colors';


const UserPassword = ({ prevStep, nextStep, handleChange, values }) => {

    const Continue = e => {
        e.preventDefault();
        nextStep();
    }
    const Previous = e => {
        e.preventDefault();
        prevStep();
    }
    return (
        <div class="flex items-center h-screen w-full bg-teal-lighter bg-gray-200">
            <form class="w-full bg-white rounded shadow-2xl p-8 m-4 md:max-w-sm md:mx-auto h-auto" >
                <Container component="main" maxWidth="xs">
                    <div>

                        <div class= "pt-2 pb-4">
                            <p class="text-indigo-900 text-2xl text-center font-medium font-sans">¡ Felicitaciones, {values.first_name } !</p>
                            <p class="text-indigo-900 text-2xl text-center font-medium font-sans">Ya tenes tu cuenta</p>
                        </div>

                        <div class= "pt-2 pb-10">
                           imagen
                            
                        </div>
                            
                        <div class= "pt-2 pb-2">
                            <p class="text-gray-500 text-xl text-center font-sans">Se te envio un mail con los detalles de tu cuenta</p>
                        </div>
                                                  

                        <form class= "pt-2 pb-10">   
                            
                            <div class = "pt-2 flex flex-col">
                                <div class="py-2 pt-4">
                                    <Button onClick={Previous} type="submit" variant="contained" class="rounded-full bg-indigo-500 hover:bg-indigo-400 px-9 text-white font-bold py-2"                            >
                                        Validar identidad
                                    </Button>
                                </div>
                                <div class="py-2 pt-4">
                                    <Button onClick={Previous} type="submit" variant="contained" class="rounded-full bg-indigo-500 hover:bg-indigo-400 px-9 text-white font-bold py-2"                            >
                                        Descargar la App
                                    </Button>
                                </div>
                                <div class="pb-2 pt-4">
                                    <Button onClick={Previous} type="submit" variant="contained" class="rounded-full bg-green-400 hover:bg-green-300 px-12 text-white font-bold py-2"                            >
                                            Volver
                                    </Button>
                                </div>
                            </div>
                        </form>
                    </div>
                </Container>
            </form>
        </div>
    )
}

export default UserPassword
