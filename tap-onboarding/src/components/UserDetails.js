import React,{useState} from 'react'
import { Container, Typography, Grid, TextField, Button } from '@material-ui/core'
const UserDetails = ({ prevStep, nextStep, handleChange, values }) => {
    const urlOriginalBase = 'https://api.qa.auntap.io/public/check_user?document_id[equals]=' 
    const [errorBase, setErrorBase] = useState(false);
    const [ayudaErrorBase, setAyudaErrorBase] = useState('');
    var dniExistente;
    const Continue = async(e) => {
        e.preventDefault();
        await verificacionBase()
        if(dniExistente == false){
            nextStep();
        } else{
            e.preventDefault();
            setErrorBase(true);
            setAyudaErrorBase("El DNI ya esta asociado a un usuario existente")
        }
    }
    const verificacionBase = async() => {
        var url = urlOriginalBase + values.dni;
        const response = await fetch(url);
        const json = await response.json();
        dniExistente = json.exist;
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
                            <p class="text-indigo-900 text-2xl text-center font-sans">Asociá tu DNI</p>
                        </div>
                        <div class= "pt-6 pb-5">
                            <p class="text-indigo-800 text-1xl text-center font-sans">Queremos aseguarnos que nadie se haga pasar por vos</p>
                        </div>
                        <form class= "pt-5 pb-10">
                            {/* email address */}                       
                            <Grid item xs={12}>
                                <TextField
                                    type = "number"
                                    error={errorBase}
                                    helperText={ayudaErrorBase}
                                    defaultValue={values.dni}
                                    label="DNI"
                                    placeholder="11.111.111"
                                    onChange={handleChange('dni')}
                                    autoComplete="dni"
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

export default UserDetails
