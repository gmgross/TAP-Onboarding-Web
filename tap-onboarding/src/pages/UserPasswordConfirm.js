import React, {useState} from 'react'
import { Container, Grid, TextField, Button } from '@material-ui/core'

const UserPasswordConfirm = ({ prevStep, nextStep, handleChange, values }) => {
    const [error, setError] = useState(false);
    const [helper, setHelper] = useState('');
    
    function confirmPassword() {
        let result = true;
      
        if (values.password !== values.confirmPassword) {
            setError(true);
            setHelper("La clave no concide");
            result = false;
        } 
        return result;
      }
    
    const Continue = e => {
        e.preventDefault();
        confirmPassword();
        if(confirmPassword()){
            nextStep();
        }
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
                        <div class= "pt-6 pb-10">
                            <p class="text-indigo-900 text-xl text-center font-bold font-comfortaa">Creá tu clave de acceso</p>
                        </div>
                        <div class= "pt-6 pb-5">
                            <p class="text-gray-600 text-1xl text-center font-comfortaa">Repetí tu clave</p>
                        </div>
                        <form class= "pt-5 pb-10">
                                                
                            <Grid item xs={12}>
                                <TextField
                                    error={error}
                                    helperText={helper}
                                    id="textPassword"
                                    variant="outlined"
                                    label="Clave"
                                    placeholder="1234"
                                    onChange={handleChange('confirmPassword')}
                                    //defaultValue={values.confirmPassword}
                                    //autoComplete="confirmPassword"
                                    fullWidth
                                />
                                
                            </Grid>
                            <div class = "pt-20 flex flex-col">
                            <div class="py-2 pt-4">
                            <Button onClick={Continue} type="submit" variant="contained" class="btn-continue"                            >
                                    Siguiente
                            </Button>
                            </div>
                            <div class="pb-2">
                            <Button onClick={Previous} type="submit" variant="contained" class="btn-previous"                            >
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

export default UserPasswordConfirm
