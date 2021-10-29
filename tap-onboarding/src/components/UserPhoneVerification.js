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
                    <p class="text-indigo-900 text-3xl text-center font-sans">Ingresá el código</p>
                </div>
                <div class= "pt-6 pb-5">
                    <p class="text-indigo-800 text-2xl text-center font-sans">Te lo enviamos por mensaje de texto</p>
                </div>
                <form class= "pt-5 pb-10">        
                    <div class="flex flex-box pl-1">       
                    <Grid item xs={1} >
                    <TextField                     
                    
                        variant="outlined"
                        placeholder=""
                        onChange={handleChange('phone')}
                        defaultValue={values.phone}
                        class= ""
                    />
                    </Grid>
                    <Grid item xs={1} >
                    <TextField         
                        variant="outlined"                    
                        placeholder=""
                        onChange={handleChange('phone')}
                        defaultValue={values.phone}
                        class= "pl-4"
                    />
                    </Grid>
                    <Grid item xs={1} >
                    <TextField     
                        variant="outlined"                        
                        placeholder=""
                        onChange={handleChange('phone')}
                        defaultValue={values.phone}
                        class= "pl-8"
                    />
                    </Grid>
                    <Grid item xs={1} >
                    <TextField             
                        variant="outlined"                
                        placeholder=""
                        onChange={handleChange('phone')}
                        defaultValue={values.phone}
                        class= "pl-12"
                    />
                    </Grid>
                    <Grid item xs={1} >
                    <TextField               
                        variant="outlined"              
                        placeholder=""
                        onChange={handleChange('phone')}
                        defaultValue={values.phone}
                        class= "pl-16"
                    />
                    </Grid>
                    <Grid item xs={1} >
                    <TextField         
                        variant="outlined"                    
                        placeholder=""
                        onChange={handleChange('phone')}
                        defaultValue={values.phone}
                        class= "pl-20"
                    />
                    </Grid>
                    <Grid item xs={1} >
                    <TextField         
                        variant="outlined"                    
                        placeholder=""
                        onChange={handleChange('phone')}
                        defaultValue={values.phone}
                        class= "pl-24"
                    />
                    </Grid>
                    </div>
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

export default UserPhoneVerification
