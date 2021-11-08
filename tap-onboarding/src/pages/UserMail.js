import React, {useState} from 'react'
import {Modal, Container, TextField, Button, InputAdornment} from '@mui/material/'
import MailOutlineOutlinedIcon from '@mui/icons-material/MailOutlineOutlined';

import AlertModal from '../components/AlertModal';



const UserMail = ({ nextStep, handleChange, values }) => {
    const urlOriginal = 'https://api.qa.auntap.io/public/check_user?email[equals]=' 
    var mailExistente=1;

    const [error, setError] = useState(false);
    const [helper, setHelper] = useState('');

    const [openModal, setOpenModal] = useState(false);
    
    function validateMail() {
        let result = true;
        setError(false);
        setHelper('');
        
        if (!values.email) {
            setError(true);
            setHelper("Por favor, completa tu mail");
            result = false;
        
        } else {
          var pattern = new RegExp(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()\\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/); 
          result = pattern.test(values.email);
      
          if (!result) {
            setError(true);
            setHelper("Direccion de mail invalida.");
            result = false;
          } 
        } 
        return result;
    }

    const Continue = async(e) => {
        e.preventDefault();
        //validateMail();
        if(validateMail()){
            await mailExistDb()
            if (mailExistente === false ) { 
                e.preventDefault();
                nextStep();
            }else{
                e.preventDefault();
                setOpenModal(true);
            };
        }
    }
 
    const mailExistDb = async() => {
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
                            <p class="text-indigo-900 text-xl text-center font-bold font-comfortaa">Para iniciar tu registro</p>
                        </div>
                        <div class= "pt-6 pb-5">
                            <p class="text-gray-600 text-1xl text-center font-comfortaa">Ingresá tu mail</p>
                        </div>
                        <form class= "pt-5 pb-10" >  
                                <TextField
                                    error={error}
                                    helperText={helper}
                                    id="textMail"
                                    variant="outlined"
                                    placeholder="nombre@email.com.ar"
                                    label="Email"
                                    onChange={handleChange('email')}
                                    onKeyUp={validateMail}
                                    onBlur={validateMail}
                                    defaultValue={values.email}
                                    autoComplete="email"
                                    fullWidth                      
                                    InputProps={{
                                        startAdornment: (
                                            <InputAdornment position="start">
                                            < MailOutlineOutlinedIcon />
                                            </InputAdornment>
                                        ),
                                    }}
                                    
                                />
                            <div class = "pt-24 py-14">
                                <Button 
                                    class="btn-continue"
                                    //class="btn-continue"
                                    onClick={Continue} 
                                    type="submit" 
                                    variant="contained">
                                        Siguiente
                                </Button>
                            </div>
                        </form>
                    </div>
                </Container>
            </form>
            
            <Modal open={openModal} onClose={() => setOpenModal(false)} >
                <AlertModal closeModal={setOpenModal} 
                    title={'Mail ya registrado'} 
                    body={'Por favor, use otro mail para registrarse'} />
            </Modal>
        </div>
    )
}

export default UserMail
