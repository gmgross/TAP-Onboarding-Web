import React, {useState} from 'react'
import { Container } from '@mui/material/'
import axios from "axios"
import AlertModal from '../components/AlertModal';

const UserDeclarationUif = ({ prevStep, handleChange, values, nextStep }) => {
    const urlOriginalBase = process.env.REACT_APP_REGISTER 
    var terminarRegistro = false;
    const [openModal, setOpenModal] = useState(false);

    const Previous = e => {
        e.preventDefault();
        prevStep();
    }
    const Continue = async(e) => {
        e.preventDefault()
        if(values.is_uif_person) {
            await createUser()
            if (terminarRegistro){
                nextStep();
            }else{
                e.preventDefault();
                setOpenModal(true);
            }
            
        }
        const to = values.email;
        const template_id = "d-4b19647f44fc489d87ddef4e5937e66d"

            try{
                 axios.post("http://localhost:3000/api/mail", {to, template_id})
            }catch(err){
            }
    }
    const createUser = async() =>{
        values.phone = '1164172212';
        values.email = 'germanmartinezgros@outlook.com'
        values.password = '1234'
        const celular = '+549' + values.phone;
        var is_exposed_person = "true", street_number = "", street = "",department ="", aux=0;
        const direccion = values.peypeData.address.split(",")
        department = direccion[0];
        const calleYNumero = direccion[1].split(" ");
        const longitud = calleYNumero.length;
        street_number = calleYNumero[longitud - 1];
        do {
            street = street + calleYNumero[aux];
            aux++;
        }while (aux < longitud - 1)
        if(values.is_exposed_person == 0){
            is_exposed_person = false;
        }
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({  phone:              celular,
                                    email:              values.email,
                                    password:           values.password,
                                    username:           celular,
                                    oauthtoken:         "oauthtoken",
                                    first_name:         values.peypeData.first_name,
                                    last_name:          values.peypeData.last_name,
                                    document_id:        values.document_id,
                                    is_exposed_person:  is_exposed_person,
                                    address:            values.peypeData.address,
                                    birthdate:          values.peypeData.birthdate,
                                    cuit:               values.peypeData.cuit,
                                    postal_address:     values.peypeData.postal_address,
                                    province:           values.peypeData.province,
                                    location: {
                                        location: {
                                            lat:        "",
                                            lng:        ""
                                        },
                                        street_number:  street_number,
                                        street:         street,
                                        deparment:      department,
                                        province:       values.peypeData.province,
                                        country:        "AR",
                                        postal_address: values.peypeData.postal_address,
                                        address:        values.peypeData.address
                                    },
                                    province_id:        "",
                                    nick:               "WEB",
                                    device_id:          "00000000"
                                })
        };
        const response = await fetch(urlOriginalBase, requestOptions);
        if (response.status != 400){
            terminarRegistro = true;
        }
        
    }

    return (
        <div class="flex items-center h-screen w-full bg-teal-lighter bg-gray-200">
            <form class="bg-white rounded shadow-2xl p-8 m-4 md:max-w-sm md:mx-auto">
                <Container component="main" maxWidth="xs">
                    <div>
                        <div class="pt-5 pb-4">
                            <p class="text-secondary-500 500  text-xl text-center font-bold font-comfortaa">
                                Declaraciones Juradas
                            </p>
                        </div>

                        <div class="pt-2 pb-1">
                            <p class="text-gray-600 text-sm text-center font-comfortaa ">
                                ¿Desarrollas una actividad incluida en el articulo 20 de la ley 25246 y sus modificatorias y/o complementarias?
                            </p>
                        </div>

                        <form class="pt-9 pb-10 place-content-evenly">
                            <div class="flex items-center mt-1 flex rounded-md shadow-sm bg-indigo-200 place-content-evenly bg-cover">
                                <label for="push-uif" class="text-xs font-center text-indigo-800 break-words font-comfortaa py-3 pr-1 ">
                                    Si, soy sujeto obligado ante la UIF
                                </label>

                                <input
                                    class="mr-2 focus:ring-indigo-500 text-indigo-600 border-gray-300"
                                    id="push-uif"
                                    name="push-uif"
                                    type="radio"
                                    value='1'
                                    checked={values.is_uif_person === '1'}
                                    onChange={handleChange('is_uif_person')}
                                />
                            </div>

                            <div class="flex items-center mt-1 flex rounded-md shadow-sm bg-indigo-200 place-content-evenly">
                                <label for="push-uif2" class="text-xs font-center text-indigo-800 break-words font-comfortaa py-3 pr-1">
                                    No soy sujeto obligado ante la UIF
                                </label>

                                <input
                                    class="mr-2 focus:ring-indigo-500 text-indigo-600 border-gray-300 justify-self-end "
                                    id="push-uif2"
                                    name="push-uif"
                                    type="radio"
                                    value='0'
                                    checked={values.is_uif_person === '0'}
                                    defaultChecked
                                    onChange={handleChange('is_uif_person')}
                                />
                            </div>

                            <div class="pt-11 flex flex-col">
                                <div class="pt-1 pb-2">
                                    <button class="btn-continue"
                                        onClick={Continue}
                                        type="submit"
                                        variant="contained">
                                        Declarar
                                    </button>
                                </div>
                                <div class="pb-1">
                                    <button class="btn-previous"
                                        onClick={Previous}
                                        type="submit"
                                        variant="contained">
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
                title={'Error en el registro'} 
                body={'Por favor, intente nuevamente mas tarde'} 
            /> 
        </div>
    )
}


export default UserDeclarationUif
