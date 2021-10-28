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
        <Container component="main" maxWidth="xs">
            <div>
                <Typography component="h1" variant="h5">
                Ingresá tu celular
                </Typography>
                <form>
                    <Grid container spacing={2}>

                        {/* phone */}
                        <Grid item xs={12} >
                            <TextField                             
                                placeholder="Celular"
                                label="Ej. 11 2345 6789"
                                type="number"
                                onChange={handleChange('phone')}
                                defaultValue={values.phone}
                                fullWidth
                            />
                        </Grid>
                        
                        <Grid item xs={12} sm={6}>
                            <Button
                                onClick={Previous}
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="primary"
                            >
                                Atrás
                            </Button>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Button
                                onClick={Continue}
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="primary"
                            >
                                Siguiente
                            </Button>
                        </Grid>
                    </Grid>
                </form>
            </div>
        </Container>
    )
}
export default UserPhone
