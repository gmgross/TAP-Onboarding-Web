import React from 'react'
import { Container, Typography, Grid, TextField, Button } from '@material-ui/core'

const UserDeclaration = ({ prevStep, handleChange, values }) => {

    const Previous = e => {
        e.preventDefault();
        prevStep();
    }
    return (
        <Container component="main" maxWidth="xs">
            <div>
                <Typography component="h1" variant="h5">
                    Declaración jurada
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


                </form>
            </div>
        </Container>
    )
}


export default UserDeclaration
