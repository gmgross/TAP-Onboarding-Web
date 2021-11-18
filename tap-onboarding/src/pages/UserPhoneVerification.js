import React, { useState } from 'react'
import { Container, TextField } from '@mui/material/'
import AlertModal from '../components/AlertModal';
const UserPhoneVerification = ({ prevStep, nextStep, handleChange, values }) => {


    const inputP = { pattern: "[0-9]*", maxLength: 1 }

    const urlEnvioSMS = process.env.REACT_APP_CHECK_CODE
    var checkeo = false;
    const [error, setError] = useState(false);
    const [helper, setHelper] = useState('');
    const [openModal, setOpenModal] = useState(false);

    const [oauth_token, setOauth_token] = useState([0, 1]);

    const Continue = async (e) => {
        setError(false);
        setHelper('');
        e.preventDefault();
        await verificacionCodigo();
        if (checkeo) {
            handleChange('validated')
            nextStep();
        } else {
            setOpenModal(true);
        }

    }

    const Previous = e => {
        e.preventDefault();
        prevStep();
    }

    const verificacionCodigo = async () => {
        const celular = '+549' + values.phone;
        const codigo = values.oauth_token + values.oauth_token2 + values.oauth_token3 + values.oauth_token4 + values.oauth_token5 + values.oauth_token6;
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                phone_number: celular,
                device_id: "test",
                code: codigo
            })
        };
        const response = await fetch(urlEnvioSMS, requestOptions);
        const json = await response.json();
        checkeo = json.isValid;
    }

    function handleChangePIN(e) {
        const { maxLength, value, name } = e.target;
        const [fieldName, fieldIndex] = name.split("-");

        let fieldIntIndex = parseInt(fieldIndex, 10);

        // Check if no of char in field == maxlength
        if (value.length >= maxLength) {

            // It should not be last input field
            if (fieldIntIndex < 6) {

                // Get the next input field using it's name
                const nextfield = document.querySelector(
                    `input[name=field-${fieldIntIndex + 1}]`
                );

                // If found, focus the next field
                if (nextfield !== null) {
                    nextfield.focus();
                }
            }
        }

        if (value.length == 0) {

            // It should not be first input field
            if (fieldIntIndex > 1) {

                // Get the prev input field using it's name
                const prevfield = document.querySelector(
                    `input[name=field-${fieldIntIndex - 1}]`
                );

                // If found, focus the next field
                if (prevfield !== null) {
                    prevfield.focus();

                }

            }
        }
    }

    return (<div class="flex items-center h-screen w-full bg-teal-lighter bg-gray-200">
        <form class="w-full bg-white rounded shadow-2xl p-8 m-4 md:max-w-sm md:mx-auto">
            <Container component="main" maxWidth="xs">
                <div>
                    <div class="pt-6 pb-10">
                        <p class="text-secondary-500  text-xl text-center font-bold font-comfortaa">Ingresá el código</p>
                    </div>
                    <div class="pt-6 pb-5">
                        <p class="text-gray-600 text-1xl text-center  font-comfortaa">Te lo enviamos por mensaje de texto</p>
                    </div>
                    <form class="pt-5 pb-10">
                        <div class="flex flex-box pl-2 space-x-2">
                            <TextField
                                name="field-1" length="1"
                                type="text"
                                variant="outlined"
                                placeholder=""
                                onChange={handleChange('oauth_token')}
                                defaultValue={values.oauth_token}
                                class=""
                                inputProps={inputP}
                                onKeyUp={e => handleChangePIN(e)}
                            />

                            <TextField
                                name="field-2" length="1"
                                type="text"
                                variant="outlined"
                                placeholder=""
                                onChange={handleChange('oauth_token2')}
                                defaultValue={values.oauth_token2}
                                class=""
                                inputProps={inputP}
                                onKeyUp={e => handleChangePIN(e)}
                            />
                            <TextField
                                name="field-3" length="1"
                                type="text"
                                variant="outlined"
                                placeholder=""
                                onChange={handleChange('oauth_token3')}
                                defaultValue={values.oauth_token3}
                                class=""
                                inputProps={inputP}
                                onKeyUp={e => handleChangePIN(e)}
                            />
                            <TextField
                                name="field-4" length="1"
                                type="text"
                                variant="outlined"
                                placeholder=""
                                onChange={handleChange('oauth_token4')}
                                defaultValue={values.oauth_token4}
                                class=""
                                inputProps={inputP}
                                onKeyUp={e => handleChangePIN(e)}
                            />
                            <TextField
                                name="field-5" length="1"
                                type="text"
                                variant="outlined"
                                placeholder=""
                                onChange={handleChange('oauth_token5')}
                                defaultValue={values.oauth_token5}
                                class=""
                                inputProps={inputP}
                                onKeyUp={e => handleChangePIN(e)}
                            />
                            <TextField
                                name="field-6" length="1"
                                type="text"
                                variant="outlined"
                                placeholder=""
                                onChange={handleChange('oauth_token6')}
                                defaultValue={values.oauth_token6}
                                class=""
                                inputProps={inputP}
                                onKeyUp={e => handleChangePIN(e)}
                            />
                        </div>
                        <div class="pt-14 flex flex-col">
                            <div class="pb-2 pt-4">
                                <button onClick={Continue} type="submit" variant="contained" class="btn-continue">
                                    Siguiente
                                </button>
                            </div>
                            <div class="pb-2">
                                <button onClick={Previous} type="submit" variant="contained" class="btn-previous">
                                    Volver
                                </button>
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
