import React from 'react'
import { Container, Typography, Grid, TextField, Button, InputAdornment, InputLabel, Input } from '@material-ui/core'
import MailOutlineIcon from '@material-ui/icons/MailOutline';
const UserAccount = ({ nextStep, handleChange, values }) => {

    const Continue = e => {
        e.preventDefault();
        nextStep();
    }
    return (
        <Container component="main" maxWidth="xs">
            <div>
                <Typography component="h1" variant="h5">
                    Para iniciar tu registro
                </Typography>
                <form>
                    <Grid container spacing={2}>
                        {/* email address */}                       
                        <Grid item xs={12}>
                            <TextField
                                //required
                                placeholder="nombre@email.com.ar"
                                label="Mail"
                                onChange={handleChange('email')}
                                defaultValue={values.email}
                                // variant="outlined"
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
                        <br />
                        <br />
                        {/* pin */}
                        <Grid item xs={12}>
                            <TextField
                                required
                                placeholder="Clave"
                                label="Ej. 1234"
                                onChange={handleChange('pin')}
                                defaultValue={values.pin}
                                // variant="outlined"
                                autoComplete="pin"
                                fullWidth
                                type="password"
                            />
                        </Grid>
                    </Grid>
                    <br />
                    <Button
                        onClick={Continue}
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        
                    >
                        Siguiente
                    </Button>
                </form>
            </div>
        </Container>
    )
}

export default UserAccount
