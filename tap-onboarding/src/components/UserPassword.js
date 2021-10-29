import React from 'react'
import { Container, Typography, Grid, TextField, Button, InputAdornment, InputLabel, Input } from '@material-ui/core'
import MailOutlineIcon from '@material-ui/icons/MailOutline';
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
            <form class="w-full bg-white rounded shadow-2xl p-8 m-4 md:max-w-sm md:mx-auto">
                <Container component="main" maxWidth="xs">
                    <div>
                        <div class= "pt-6 pb-10">
                            <p class="text-indigo-900 text-2xl text-center font-sans">Creá tu clave de acceso</p>
                        </div>
                        <div class= "pt-6 pb-5">
                            <p class="text-indigo-800 text-1xl text-center font-sans">Ingresá tu clave</p>
                        </div>
                        <form class= "pt-5 pb-10">
                            {/* email address */}                       
                            <Grid item xs={12}>
                                <TextField
                                    label="4 digitos"
                                    placeholder="1234"
                                    onChange={handleChange('password')}
                                    defaultValue={values.password}
                                    autoComplete="password"
                                    fullWidth
                                />
                                
                            </Grid>
                            <div class = "pt-20 flex flex-col">
                            <div class="py-2">
                            <Button onClick={Continue} type="submit" variant="contained" class="rounded-lg bg-indigo-500 hover:bg-indigo-400 px-10 text-white font-bold py-2"                            >
                                    Siguiente
                            </Button>
                            </div>
                            <div class="py-">
                            <Button onClick={Previous} type="submit" variant="contained" class="rounded-lg bg-green-400 hover:bg-green-300 px-12 text-white font-bold py-2"                            >
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
