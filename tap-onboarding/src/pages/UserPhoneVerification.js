import React,  {useState} from 'react'
import { Modal, Container, TextField, Button  } from '@mui/material/'
import AlertModal from '../components/AlertModal';
const UserPhoneVerification = ({ prevStep, nextStep, handleChange, values }) => {

    const urlEnvioSMS     = 'https://api.qa.auntap.io/public/check_code';
    var checkeo = false;
    const [error, setError] = useState(false);
    const [helper, setHelper] = useState('');
    const [openModal, setOpenModal] = useState(false);

    const Continue = async(e) => {
        setError(false);
        setHelper('');
        e.preventDefault();
        await verificacionCodigo();
        if(checkeo){
            nextStep();
        }else{
            setOpenModal(true);
        }
        
    }

    const Previous = e => {
        e.preventDefault();
        prevStep();
    }

    const verificacionCodigo = async() => {
        const celular = '+549' + values.phone;
        const codigo = values.oauth_token + values.oauth_token2 + values.oauth_token3 + values.oauth_token4 + values.oauth_token5 + values.oauth_token6; 
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ phone_number: celular,
                                   device_id: "test",
                                   code: codigo })
        };
        const response = await fetch(urlEnvioSMS, requestOptions);
        const json = await response.json();
        checkeo = json.isValid;
    }

    return (<div class="flex items-center h-screen w-full bg-teal-lighter bg-gray-200">
    <form class="w-full bg-white rounded shadow-2xl p-8 m-4 md:max-w-sm md:mx-auto">
        <Container component="main" maxWidth="xs">
            <div>
                <div class= "pt-6 pb-10">
                    <p class="text-indigo-900 text-xl text-center font-bold font-comfortaa">Ingresá el código</p>
                </div>
                <div class= "pt-6 pb-5">
                    <p class="text-gray-600 text-1xl text-center  font-comfortaa">Te lo enviamos por mensaje de texto</p>
                </div> 
                <form class= "pt-5 pb-10">        
                    <div class="flex flex-box pl-2 space-x-2">     
                        <TextField variant="outlined" placeholder="" onChange={handleChange('oauth_token')}  defaultValue={values.phoneVer1} class= "" />
                        <TextField variant="outlined" placeholder="" onChange={handleChange('oauth_token2')} defaultValue={values.phoneVer1} class= "" />
                        <TextField variant="outlined" placeholder="" onChange={handleChange('oauth_token3')} defaultValue={values.phoneVer1} class= "" />
                        <TextField variant="outlined" placeholder="" onChange={handleChange('oauth_token4')} defaultValue={values.phoneVer1} class= "" />
                        <TextField variant="outlined" placeholder="" onChange={handleChange('oauth_token5')} defaultValue={values.phoneVer1} class= "" />
                        <TextField variant="outlined" placeholder="" onChange={handleChange('oauth_token6')} defaultValue={values.phoneVer1} class= "" />
                    </div>
                    <div class = "pt-14 flex flex-col">
                        <div class="pb-2 pt-4">
                        <Button onClick={Continue} type="submit" variant="contained" class="btn-continue"                            >
                                Siguiente
                        </Button>
                        </div>
                        <div class = "pb-2">
                        <Button onClick={Previous} type="submit" variant="contained" class="btn-previous"                            >
                                Volver
                        </Button>
                        </div>
                    </div>
                </form>
            </div>
        </Container>
        <Modal open={openModal} onClose={() => setOpenModal(false)}>
                <AlertModal closeModal={setOpenModal} 
                    title={'El codigo no coincide'} 
                    body={'Por favor, intente nuevamente'} />
        </Modal>
    </form>
</div>



    )
}

export default UserPhoneVerification
