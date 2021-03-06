import React, { useState } from 'react'
import { Container, TextField } from '@mui/material/'
import AlertModal from '../components/AlertModal';

const UserPhone = ({ prevStep, nextStep, handleChange, values }) => {
    const urlOriginalBase = process.env.REACT_APP_CHECK_PHONE
    const urlEnvioSMS = process.env.REACT_APP_CHECK_SEND_SMS_CODE
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


    const Continue = async (e) => {
        e.preventDefault();
        //validatePhone();
        if (validatePhone()) {
            await phoneExistDb()
            if (telefonoExistente === false) {
                e.preventDefault();
                sendSMS();
                nextStep();
            } else {
                e.preventDefault();
                setOpenModal(true);
            };
        }
    }

    const sendSMS = async () => {
        const celular = '+549' + values.phone;
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                phoneNumber: celular,
                device_id: "test"
            })
        };
        const response = await fetch(urlEnvioSMS, requestOptions);
    }
    const phoneExistDb = async () => {
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
                        <div class="pt-6 pb-10">
                            <p class="text-secondary-500 500  text-xl text-center font-bold font-comfortaa">
                                Ingresá tu celular</p>
                        </div>

                        <div class="pt- pb-5">
                            <p class="text-gray-600 text-1xl text-center font-comfortaa">
                                Lo necesitamos para enviarte un código de verificación</p>
                        </div>

                        <form class="pt-5 pb-10">
                            <TextField error={error} helperText={helper} id="textPhone" variant="outlined" placeholder="1123456789"
                                label="Celular" onChange={handleChange('phone')} onKeyUp={validatePhone} onBlur={validatePhone}
                                autoComplete="phone" defaultValue={values.phone} fullWidth />

                            <div class="pt-6 pb-2">
                                <p class="text-gray-400 text-xs text-left font-comfortaa">
                                    EscribÍ tu celular con código de área sin cero ni 15</p>
                            </div>

                            <div class="pt-6 flex flex-col">
                                <div class="pt-2 pb-2">
                                    <button class="btn-continue" onClick={Continue} type="submit" variant="contained">
                                        Siguiente
                                    </button>
                                </div>
                                <div class="pb-2">
                                    <button class="btn-previous" onClick={Previous} type="submit" variant="contained">
                                        Volver
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </Container>
            </form>
            <AlertModal
                open={openModal}
                closeModal={setOpenModal}
                title={'Celular ya registrado'}
                body={'Por favor, use otro número para registrarse'}
            />
        </div>
    )
}
export default UserPhone
