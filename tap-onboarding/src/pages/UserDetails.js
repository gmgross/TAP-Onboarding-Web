import React, { useState } from 'react'
import { Container, TextField } from '@mui/material/'
import AlertModal from '../components/AlertModal';

const UserDetails = ({ prevStep, nextStep, handleChange, values }) => {
    const urlOriginalBase = process.env.REACT_APP_CHECK_DOCUMENT_ID
    const urlPeyPe = process.env.REACT_APP_PEYPE
    var dniExistente;

    const [error, setError] = useState(false);
    const [helper, setHelper] = useState('');

    const [openModal, setOpenModal] = useState(false);

    function validateDocument_id() {
        let result = true;
        setError(false);
        setHelper('');

        if (!values.document_id) {
            setError(true);
            setHelper("Por favor, completa tu número de DNI");
            result = false;
        } else {
            var pattern = new RegExp(/^([0-9]{6,8})$/);
            result = pattern.test(values.document_id);

            if (!result) {
                setError(true);
                setHelper("Número de DNI invalido.");
                result = false;
            }
        }
        return result;
    }



    const Continue = async (e) => {
        e.preventDefault();
        //validateDocument_id();
        if (validateDocument_id()) {
            await document_idExistDb()
            if (dniExistente === false) {
                await lecturaPeyPe()
                e.preventDefault();
                nextStep();
            } else {
                e.preventDefault();
                setOpenModal(true);
            };
        }
    }

    const lecturaPeyPe = async () => {
        // var url = urlPeyPe + values.document_id;
        // const response = await fetch(url);
        // const json = await response.json();
        // values.peypeData.activity_type      = json[0].activity_type;
        // values.peypeData.address            = json[0].address;
        // values.peypeData.birthdate          = json[0].birthdate;
        // values.peypeData.cuit               = json[0].cuit;
        // values.peypeData.dni                = json[0].dni;
        // values.peypeData.earnings_predictor = json[0].earnings_predictor;
        // values.peypeData.first_name         = json[0].first_name;
        // values.peypeData.full_name          = json[0].full_name;
        // values.peypeData.gender             = json[0].gender;
        // values.peypeData.last_name          = json[0].last_name;
        // values.peypeData.postal_address     = json[0].postal_address;
        // values.peypeData.province           = json[0].province;
        // if(json[1] != undefined){
        // values.peypeData2.activity_type      = json[1].activity_type;
        // values.peypeData2.address            = json[1].address;
        // values.peypeData2.birthdate          = json[1].birthdate;
        // values.peypeData2.cuit               = json[1].cuit;
        // values.peypeData2.dni                = json[1].dni;
        // values.peypeData2.earnings_predictor = json[1].earnings_predictor;
        // values.peypeData2.first_name         = json[1].first_name;
        // values.peypeData2.full_name          = json[1].full_name;
        // values.peypeData2.gender             = json[1].gender;
        // values.peypeData2.last_name          = json[1].last_name;
        // values.peypeData2.postal_address     = json[1].postal_address;
        // values.peypeData2.province           = json[1].province;
        // }

        values.peypeData.activity_type = "MONOTRIBUTO"
        values.peypeData.address = "CIUDAD AUTONOMA DE BUENOS AIRE , PJECOPENHAGUE 1511, 1431"
        values.peypeData.birthdate = "1997-08-08"
        values.peypeData.cuit = "20405418100"
        values.peypeData.dni = "40541810"
        values.peypeData.earnings_predictor = "R20"
        values.peypeData.first_name = "GERMAN ARIEL"
        values.peypeData.full_name = "GERMAN ARIEL MARTINEZ GROSS"
        values.peypeData.gender = "M"
        values.peypeData.last_name = "MARTINEZ GROSS"
        values.peypeData.postal_address = "1431"
        values.peypeData.province = "CIUDAD AUTONOMA DE BUENOS AIRE"

        values.peypeData2.activity_type =  "MONOTRIBUTO"
        values.peypeData2.address =  "CIUDAD AUTONOMA DE BUENOS AIRE , PJECOPENHAGUE 1511, 1431"
        values.peypeData2.birthdate =  "1997-08-08"
        values.peypeData2.cuit =  "20405418100"
        values.peypeData2.dni = "40541810"
        values.peypeData2.earnings_predictor =  "R20"
        values.peypeData2.first_name =  "NATALIA CECILIA"
        values.peypeData2.full_name = "NATALIA CECILIA MARTINEZ GROSS"
        values.peypeData2.gender =  "M"
        values.peypeData2.last_name =  "MARTINEZ GROSS"
        values.peypeData2.postal_address = "1431"
        values.peypeData2.province =  "CIUDAD AUTONOMA DE BUENOS AIRE"



    }

    const document_idExistDb = async () => {
        var url = urlOriginalBase + values.document_id;
        const response = await fetch(url);
        const json = await response.json();
        dniExistente = json.exist;
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
                            <p class="text-secondary-500 500 500 500  text-xl text-center font-bold font-comfortaa">
                                Asociá tu DNI</p>
                        </div>

                        <div class="pt-6 pb-5">
                            <p class="text-gray-600 text-1xl text-center font-comfortaa">
                                Queremos aseguarnos que nadie se haga pasar por vos</p>
                        </div>

                        <form class="pt-5 pb-10">
                            <TextField
                                error={error}
                                helperText={helper}
                                id="textDetails"
                                variant="outlined"
                                placeholder="11111111"
                                label="DNI"
                                onChange={handleChange('document_id')}
                                onKeyUp={validateDocument_id}
                                onBlur={validateDocument_id}
                                autoComplete="document_id"
                                defaultValue={values.document_id}
                                fullWidth
                            />

                            <div class="pt-16 flex flex-col">
                                <div class="pt-2 pb-2">
                                    <button
                                        class="btn-continue"
                                        onClick={Continue}
                                        type="submit"
                                        variant="contained">
                                        Siguiente
                                    </button>
                                </div>
                                <div class="pb-2">
                                    <button
                                        class="btn-previous"
                                        onClick={Previous}
                                        type="submit"
                                        variant="contained">
                                        Volver
                                    </button>
                                </div>
                            </div>
                        </form>
                        <AlertModal
                            open={openModal}
                            closeModal={setOpenModal}
                            title={'El DNI ya esta asociado a un usuario existente'}
                            body={''}
                        />
                    </div>
                </Container>
            </form>
        </div>
    )
}

export default UserDetails
