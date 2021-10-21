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
    return (
        <Container component="main" maxWidth="xs">
            <div>
                <Typography component="h1" variant="h5">
                Verifica tu celular
                </Typography>
                <form>
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
                    
                </form>
            </div>
        </Container>
    )
}

export default UserPhoneVerification
