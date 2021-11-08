import React, {useState} from 'react'
import { Modal, Container, TextField, Button } from '@material-ui/core'
import AlertModal from './AlertModal';

const UserPhone = ({ prevStep, nextStep, handleChange, values }) => {
    const urlOriginalBase = 'https://api.qa.auntap.io/public/check_user?phone[equals]=' 
    var telefonoExistente;

    
    const [error, setError] = useState(false);
    const [helper, setHelper] = useState('');

    const [openModal, setOpenModal] = useState(false);

    function validatePhone() {
        let result = true;
        setError(false);
        setHelper('');
        
        if (!values.phone) {
            setError(true);
            setHelper("Por favor, completa tu número de celular");
            result = false;
        
        } else {
          var pattern = new RegExp(/^([0-9]{10,11})$/); 
          result = pattern.test(values.phone);
      
            if (!result) {
                setError(true);
                setHelper("Número de celular invalido.");
                result = false;
            } 
        } 
        return result;
    }


    const Continue = async(e) => {
        e.preventDefault();
        //validatePhone();
        if(validatePhone()){
            await phoneExistDb()
            if (telefonoExistente === false ) { 
                e.preventDefault();
                nextStep();
            }else{
                e.preventDefault();
                setOpenModal(true);
            };
        }
    }


    const phoneExistDb = async() => {
        var url = urlOriginalBase + values.phone;
        const response = await fetch(url);
        const json = await response.json();
        telefonoExistente = json.exist;
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
                            <p class="text-indigo-900 text-xl text-center font-bold font-comfortaa">Ingresá tu celular</p>
                        </div>
                        <div class= "pt-6 pb-5">
                            <p class="text-gray-600 text-1xl text-center font-comfortaa">Lo necesitamos para enviarte un código de verificación</p>
                        </div>
                        <form class= "pt-6 pb-10">   
                            <TextField 
                                error={error}
                                helperText={helper}
                                id="textPhone"
                                variant="outlined" 
                                placeholder="1123456789" 
                                label="Celular"
                                onChange={handleChange('phone')}
                                onKeyUp={validatePhone}
                                onBlur={validatePhone}
                                autoComplete="phone" 
                                defaultValue={values.phone} 
                                fullWidth
                            />
                            
                            <div class= "pt-6 pb-2">
                            <p class="text-gray-400 text-xs text-left font-comfortaa">EscribÍ tu celular con código de área sin cero ni 15</p>
                        </div>

                            <div class = "pt-3 flex flex-col">
                            <div class="pt-2 pb-2">
                            <Button onClick={Continue} type="submit" variant="contained" class="rounded-full bg-indigo-900 hover:bg-indigo-800 px-9 text-white font-comfortaa py-2"                            >
                                    Siguiente
                            </Button>
                            </div>
                            <div class="pb-2">
                            <Button onClick={Previous} type="submit" variant="contained" class="rounded-full bg-green-500 hover:bg-green-400 px-12 text-white font-comfortaa py-2"                            >
                                    Volver
                            </Button>
                            </div>
                            </div>
                        </form>
                    </div>
                </Container>
            </form>
            <Modal open={openModal} onClose={() => setOpenModal(false)}>
                <AlertModal closeModal={setOpenModal} title={'Celular ya registrado'} body={'Por favor, use otro número para registrarse'} />
            </Modal>
        </div>
    )
}
export default UserPhone
