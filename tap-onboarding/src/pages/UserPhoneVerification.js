import React,  {useState, useRef} from 'react'
import { Modal, Container, TextField, Button  } from '@mui/material/'
import AlertModal from '../components/AlertModal';
const UserPhoneVerification = ({ prevStep, nextStep, handleChange, values }) => {

    const urlEnvioSMS     = 'https://api.qa.auntap.io/public/check_code';
    var checkeo = false;
    const [error, setError] = useState(false);
    const [helper, setHelper] = useState('');
    const [openModal, setOpenModal] = useState(false);

    const [oauth_token, setOauth_token] = useState([0,1]);

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

 /*    const clickEvent = (first, last) =>{
        if (first.value.length) {
            document.getElementById(last).focus();
        }
    } */ 

    const inputRef1 = useRef();

    return (<div class="flex items-center h-screen w-full bg-teal-lighter bg-gray-200">
    <form class="w-full bg-white rounded shadow-2xl p-8 m-4 md:max-w-sm md:mx-auto">
        <Container component="main" maxWidth="xs">
            <div>
                <div class= "pt-6 pb-10">
                    <p class="text-secondary-500  text-xl text-center font-bold font-comfortaa">Ingresá el código</p>
                </div>
                <div class= "pt-6 pb-5">
                    <p class="text-gray-600 text-1xl text-center  font-comfortaa">Te lo enviamos por mensaje de texto {values.oauth_token}</p>
                </div> 
                <form class= "pt-5 pb-10">        
                    <div class="flex flex-box pl-2 space-x-2">     
                        <TextField variant="outlined" /* id='1' onKeyUp={clickEvent(this, '2')} */ inputProps={{ maxLength:1 }} onChange={handleChange([...values.oauth_token, 'oauth_token'])}/>
                        <TextField variant="outlined" /* id='2' onKeyUp={clickEvent(this, '3')} */ inputProps={{ maxLength:1 }} onChange={handleChange([...values.oauth_token, 'oauth_token'])} />
                        <TextField variant="outlined" /* id='3' onKeyUp={clickEvent(this, '4')} */ inputProps={{ maxLength:1 }} onChange={handleChange('oauth_token3')} />
                        <TextField variant="outlined" /* id='4' onKeyUp={clickEvent(this, '5')} */ inputProps={{ maxLength:1 }} onChange={handleChange('oauth_token4')} />
                        <TextField variant="outlined" /* id='5' onKeyUp={clickEvent(this, '6')} */ inputProps={{ maxLength:1 }} onChange={handleChange('oauth_token5')} />
                        <TextField variant="outlined" id='6'  inputProps={{ maxLength:1 }} onChange={handleChange('oauth_token6')}/>
                    </div>
                    <div class = "pt-14 flex flex-col">
                        <div class="pb-2 pt-4">
                        <Button onClick={Continue} type="submit" variant="contained" class="btn-continue">
                                Siguiente
                        </Button>
                        </div>
                        <div class = "pb-2">
                        <Button onClick={Previous} type="submit" variant="contained" class="btn-previous">
                                Volver
                        </Button>
                        </div>
                    </div>
                </form>
            </div>
        </Container>
        <AlertModal 
            open={openModal}
            closeModal={setOpenModal} 
            title={'El codigo no coincide'} 
            body={'Por favor, intente nuevamente'} 
        />
        
    </form>
</div>



    )
}

export default UserPhoneVerification
