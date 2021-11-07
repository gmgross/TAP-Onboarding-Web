import React, {useState} from 'react'
import {Modal, Container, TextField, Button, InputAdornment} from '@material-ui/core'
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import MyModal from './MyModal';



const UserMail = ({ nextStep, handleChange, values }) => {
    const urlOriginal = 'https://api.qa.auntap.io/public/check_user?email[equals]=' 
    var mailExistente=1;

    const [error, setError] = useState(false);
    const [helper, setHelper] = useState('');

    const [openModal, setOpenModal] = useState(false);
    
    function validateMail() {
        let result = true;
      
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
        validateMail();
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
                            <p class="text-indigo-900 text-2xl text-center font-medium font-sans">Para iniciar tu registro</p>
                        </div>
                        <div class= "pt-6 pb-5">
                            <p class="text-gray-500 text-1xl text-center font-sans">Ingresá tu mail</p>
                        </div>
                        <form class= "pt-5 pb-10">  
                                <TextField
                                    error={error}
                                    helperText={helper}
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
            
            <Modal open={openModal} onClose={() => setOpenModal(false)} >
                <MyModal closeModal={setOpenModal} title={'Mail ya registrado'} body={'Por favor, use otro mail para registrarse'} />
            </Modal>
        </div>
    )
}

export default UserMail
