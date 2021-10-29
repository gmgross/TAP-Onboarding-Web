import React from 'react'
import { Container, Typography, Grid, TextField, Button, InputAdornment, InputLabel, Input } from '@material-ui/core'
import MailOutlineIcon from '@material-ui/icons/MailOutline';
const UserAccount = ({ nextStep, handleChange, values }) => {

    const Continue = e => {
        e.preventDefault();
        nextStep();
    }
    return (
        <div class="flex items-center h-screen w-full bg-teal-lighter bg-gray-200">
            <form class="w-full bg-white rounded shadow-2xl p-8 m-4 md:max-w-sm md:mx-auto">
                <Container component="main" maxWidth="xs">
                    <div>
                        <div class= "pt-6 pb-10">
                            <p class="text-indigo-900 text-3xl text-center font-sans">Para iniciar tu registro</p>
                        </div>
                        <div class= "pt-6 pb-5">
                            <p class="text-indigo-800 text-2xl text-center font-sans">Ingresá tu mail</p>
                        </div>
                        <form class= "pt-5 pb-10">
                            {/* email address */}                       
                            <Grid item xs={12}>
                                <TextField
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
                                
                            </Grid>
                            <div class = "pt-24">
                                
                                <div class="py-9">
                                <Button onClick={Continue} type="submit" variant="contained" class="rounded-lg bg-indigo-400 hover:bg-indigo-300 px-10 text-white font-bold py-2"                            >
                                    Siguiente
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

export default UserAccount
