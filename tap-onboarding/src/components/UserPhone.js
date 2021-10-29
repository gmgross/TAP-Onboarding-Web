import React from 'react'
import { Container, Typography, Grid, TextField, Button } from '@material-ui/core'



const UserPhone = ({ prevStep, nextStep, handleChange, values }) => {

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
                            <p class="text-indigo-900 text-3xl text-center font-sans">Ingresá tu celular</p>
                        </div>
                        <div class= "pt-6 pb-5">
                            <p class="text-indigo-800 text-2xl text-center font-sans">Lo necesitamos para enviarte un código de verificación</p>
                        </div>
                        <form class= "pt-5 pb-10">               
                            <Grid item xs={12} >
                            <TextField                             
                                placeholder="Celular"
                                label="Ej. 11 2345 6789"
                                // type="number"
                                onChange={handleChange('phone')}
                                defaultValue={values.phone}
                                fullWidth
                            />
                        </Grid>
                            <div class = "pt-24 flex flex-col">
                            <div class="py-2">
                            <Button onClick={Continue} type="submit" variant="contained" class="rounded-lg bg-indigo-500 hover:bg-indigo-400 px-10 text-white font-bold py-2"                            >
                                    Siguiente
                            </Button>
                            </div>
                            <div>
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
export default UserPhone
