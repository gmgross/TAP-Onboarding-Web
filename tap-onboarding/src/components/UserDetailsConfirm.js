import React from 'react'
import { Container, Grid , Button, Checkbox, TextField,  } from '@material-ui/core'
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
const UserDetailsConfirm = ({ prevStep, nextStep, handleChange, values }) => {
    const Continue = e => {
        e.preventDefault();
        nextStep();
    }

    const Previous = e => {
        e.preventDefault();
        prevStep();
    }
    const [selected, setSelected] = React.useState(false);

    return (
        <div class="flex items-center h-screen w-full bg-teal-lighter bg-gray-200">
            <form class="w-full bg-white rounded shadow-2xl p-8 m-4 md:max-w-sm md:mx-auto">
                <Container component="main" maxWidth="xs">
                    <div>
                        <div class= "pt-6 pb-10">
                            <p class="text-indigo-900 text-3xl text-center font-sans">Confirmá tu nombre</p>
                        </div>
                        <div class= "pt-6 pb-5">
                            <p class="text-indigo-800 text-2xl text-center font-sans">DNI: {values.dni}</p>
                        </div>
                        <form class= "pt-5 pb-10">
                            {/* email address */}                       
                            <Grid item xs={12}>
                                <div class="flex items-center mt-1 flex rounded-md shadow-sm bg-indigo-200 px-3">
                                    <label for="push-name1" class="mr-32 ml-6 block text-base font-medium text-indigo-800">
                                            Juan Perez
                                    </label>
                                    <input id="push-name1" name="push-names" type="radio" class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"/>
                                </div>
                                
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

export default UserDetailsConfirm
