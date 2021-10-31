import React from 'react'
import { Container, Typography, Grid, TextField, Button } from '@material-ui/core'
const UserPhoneVerification = ({ prevStep, nextStep, handleChange, values }) => {
    const Continue = e => {
        e.preventDefault();
        nextStep();
    }

    const Previous = e => {
        e.preventDefault();
        prevStep();
    }
    return (<div class="flex items-center h-screen w-full bg-teal-lighter bg-gray-200">
    <form class="w-full bg-white rounded shadow-2xl p-8 m-4 md:max-w-sm md:mx-auto">
        <Container component="main" maxWidth="xs">
            <div>
                <div class= "pt-6 pb-10">
                    <p class="text-indigo-900 text-2xl text-center font-medium font-sans">Ingresá el código</p>
                </div>
                <div class= "pt-6 pb-5">
                    <p class="text-gray-500 text-1xl text-center  font-sans">Te lo enviamos por mensaje de texto</p>
                </div>
                <form class= "pt-5 pb-10">        
                    <div class="flex flex-box pl-2 space-x-2">     
                        <TextField variant="outlined" placeholder="" onChange={handleChange('phoneVer1')} defaultValue={values.phoneVer1} class= "" />
                        <TextField variant="outlined" placeholder="" onChange={handleChange('phoneVer1')} defaultValue={values.phoneVer1} class= "" />
                        <TextField variant="outlined" placeholder="" onChange={handleChange('phoneVer1')} defaultValue={values.phoneVer1} class= "" />
                        <TextField variant="outlined" placeholder="" onChange={handleChange('phoneVer1')} defaultValue={values.phoneVer1} class= "" />
                        <TextField variant="outlined" placeholder="" onChange={handleChange('phoneVer1')} defaultValue={values.phoneVer1} class= "" />
                        <TextField variant="outlined" placeholder="" onChange={handleChange('phoneVer1')} defaultValue={values.phoneVer1} class= "" />
                    </div>
                    <div class = "pt-20 flex flex-col">
                        <div class="pb-2 pt-4">
                        <Button onClick={Continue} type="submit" variant="contained" class="rounded-full bg-indigo-500 hover:bg-indigo-400 px-9 text-white font-bold py-2"                            >
                                Siguiente
                        </Button>
                        </div>
                        <div class = "pb-2">
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

export default UserPhoneVerification
