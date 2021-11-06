import React, {useState} from 'react'
import { Modal, Container, Typography, Grid, TextField, Button } from '@material-ui/core'
import MyModal from './MyModal';

const UserPhone = ({ prevStep, nextStep, handleChange, values, isModal, toggleModal }) => {
    const urlOriginalBase = 'https://api.qa.auntap.io/public/check_user?phone[equals]=' 
    var telefonoExistente;

    const [error, setError] = useState(false);
    const [helper, setHelper] = useState('');

    function validatePhone() {
        let result = true;
      
        if (!values.phone) {
            setError(true);
            setHelper("Por favor, completa tu número de celular");
            result = false;
        
        } else {
          var pattern = new RegExp(/^([0-9]{10})$/); 
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
        validatePhone();
        if(validatePhone()){
            await phoneExistDb()
            if (telefonoExistente == false ) { 
                e.preventDefault();
                nextStep();
            }else{
                e.preventDefault();
                toggleModal();
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
                            <p class="text-indigo-900 text-2xl text-center  font-medium font-sans">Ingresá tu celular</p>
                        </div>
                        <div class= "pt-6 pb-5">
                            <p class="text-gray-500 text-1xl text-center font-sans">Lo necesitamos para enviarte un código de verificación</p>
                        </div>
                        <form class= "pt-6 pb-10">   
                            <TextField 
                                error={error}
                                helperText={helper}
                                id="textPhone"
                                variant="outlined" 
                                placeholder="11 2345 6789" 
                                label="Celular"
                                onChange={handleChange('phone')}   
                                defaultValue={values.phone} 
                                fullWidth
                            />
                            
                            <div class= "pt-6 pb-2">
                            <p class="text-gray-400 text-xs text-left font-sans">EscribÍ tu celular con código de área sin cero ni 15</p>
                        </div>

                            <div class = "pt-3 flex flex-col">
                            <div class="pt-2 pb-2">
                            <Button onClick={Continue} type="submit" variant="contained" class="rounded-full bg-indigo-500 hover:bg-indigo-400 px-9 text-white font-bold py-2"                            >
                                    Siguiente
                            </Button>
                            </div>
                            <div class="pb-2">
                            <Button onClick={Previous} type="submit" variant="contained" class="rounded-full bg-green-400 hover:bg-green-300 px-12 text-white font-bold py-2"                            >
                                    Volver
                            </Button>
                            </div>
                            </div>
                        </form>
                    </div>
                </Container>
            </form>
            <Modal open={isModal} onClose={toggleModal} >
                <MyModal title={'Télefono'} body={'número'}>
                </MyModal>
            </Modal> 

        </div>
    )
}
export default UserPhone
