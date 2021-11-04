import React, {useState} from 'react'
import {Modal, Container, Typography, Grid, TextField, Button, InputAdornment, InputLabel, Input } from '@material-ui/core'
import MailOutlineIcon from '@material-ui/icons/MailOutline';



const UserMail = ({ nextStep, handleChange, values }) => {
    const urlOriginal = 'https://api.qa.auntap.io/public/check_user?email[equals]=' 
    const [errorMail, setErrorMail] = useState(false);
    const [ayudaError, setAyudaError] = useState('');
    var mailExistente=1;


    const [modal, setModal] = useState (false)

    const openCloseModal = () => {
        setModal(!modal);
    }

    const body =(
        <div class="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
	        <div class="mt-3 text-center">
                <div class="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100">
                    <svg
                        class="h-6 w-6 text-green-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M5 13l4 4L19 7"
                        ></path>
                    </svg>
                </div>
                <p class="text-indigo-900 text-2xl text-center font-medium font-sans">Mail ya registrado</p>
                <div class="mt-2 px-7 py-3">
                    <p class="text-sm text-gray-500">Por favor, use otro mail para registrarse</p>
                </div>
                <div class="items-center px-4 py-3">
                    <Button onClick={openCloseModal} type="submit" variant="contained" class="rounded-full bg-green-400 hover:bg-green-300 px-12 text-white font-bold py-2"                            >
                        Aceptar
                    </Button>
                </div>
	        </div>
        </div>
    )



    const Continue = async(e) => {
        e.preventDefault();
        await verificacionMail()
        if (mailExistente == false ) { 
            e.preventDefault();
            nextStep();
        }else{
            e.preventDefault();
            openCloseModal();
            /* setErrorMail(true);
            setAyudaError("El mail ya esta asociado a un usuario existente") */
        };
       
    }
    const verificacionMail = async() => {
        var url = urlOriginal + values.email;
        const response = await fetch(url);
        const json = await response.json();
        mailExistente = json.exist;
    }
    

    return (
        <div class="flex items-center h-screen w-full bg-teal-lighter bg-gray-200">
            <form class="w-full bg-white rounded shadow-2xl p-8 m-4 md:max-w-sm md:mx-auto h-auto">
                <Container component="main" maxWidth="xs">
                    <div>
                        <div class= "pt-6 pb-10">
                            <p class="text-indigo-900 text-2xl text-center font-medium font-sans">Para iniciar tu registro</p>
                        </div>
                        <div class= "pt-6 pb-5">
                            <p class="text-gray-500 text-1xl text-center font-sans">Ingresá tu mail</p>
                        </div>
                        <form class= "pt-5 pb-10">  
                                <TextField
                                    error={errorMail}
                                    helperText={ayudaError}
                                    id="textMail"
                                    variant="outlined"
                                    label="Email"
                                    placeholder="nombre@email.com.ar"
                                    onChange={handleChange('email')}
                                    defaultValue={values.email}
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
                            <div class = "pt-24 py-14">
                            <Button onClick={Continue} type="submit" variant="contained" class="rounded-full bg-indigo-500 hover:bg-indigo-400 px-9 text-white font-bold py-2">
                                    Siguiente
                                </Button>
                            </div>
                        </form>
                    </div>
                </Container>
            </form>

            <div>
            {/* <Button onClick={openCloseModal}>Open modal</Button> */}
            <Modal
                open={modal}
                onClose={openCloseModal}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                {body}

            </Modal>
            </div>    
        </div>
    )
}

export default UserMail
