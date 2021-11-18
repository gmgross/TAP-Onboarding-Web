import React, {useState} from 'react'
import { Container } from '@mui/material/'
import AlertModal from '../components/AlertModal';
const UserDetailsConfirm = ({ prevStep, nextStep, handleChange, values }) => {
    const [openModal, setOpenModal] = useState(false);

    const Continue = e => {
        e.preventDefault();
        if(document.getElementById("push-name1").checked){
            nextStep();
        }else{
            if (document.getElementById("push-name2")!= undefined){
                if (document.getElementById("push-name2").checked){
                    // handleChange('check_peype');
                    // values.check_peype = "2";
                    // values.peypeData.activity_type      = values.peypeData2.activity_type;
                    // values.peypeData.address            = values.peypeData2.address;
                    // values.peypeData.birthdate          = values.peypeData2.birthdate;
                    // values.peypeData.cuit               = values.peypeData2.cuit;
                    // values.peypeData.dni                = values.peypeData2.dni;
                    // values.peypeData.earnings_predictor = values.peypeData2.earnings_predictor;
                    // values.peypeData.first_name         = values.peypeData2.first_name;
                    // values.peypeData.full_name          = values.peypeData2.full_name;
                    // values.peypeData.gender             = values.peypeData2.gender;
                    // values.peypeData.last_name          = values.peypeData2.last_name;
                    // values.peypeData.postal_address     = values.peypeData2.postal_address;
                    // values.peypeData.province           = values.peypeData2.province;
                    nextStep();
                }else{
                    setOpenModal(true);
                }
            }else{
                setOpenModal(true);
            }
        }

    }

    const Previous = e => {
        e.preventDefault();
        prevStep();

    }
    const [selected, setSelected] = React.useState(false);


    return (
        <div class="flex items-center h-screen w-full bg-teal-lighter bg-gray-200">
            <form class="w-full bg-white rounded shadow-2xl p-8 m-4 md:max-w-sm md:mx-auto">
                <Container component="main" maxWidth="xs">
                    <div>
                        <div class="pt-6 pb-10">
                            <p class="text-secondary-500 500 500  text-xl text-center font-bold font-comfortaa">Confirmá tu nombre</p>
                        </div>
                        <div class="pt-5 pb-5">
                            <p class="text-gray-600 text-1xl text-center font-comfortaa">DNI: {values.document_id}</p>
                        </div>
                        <form class="pt-5 pb-9 place-content-evenly">
                            <div class="flex items-center mt-1 flex rounded-md shadow-sm bg-indigo-200 px-3 place-content-evenly">
                                <label for="push-name1" class="block text-sm font-medium font-comfortaa text-secondary-500">
                                    {values.peypeData.full_name}
                                </label>
                                <input id="push-name1" name="push-names" type="radio" value='1' onChange={handleChange('check_peype')} checked={values.check_peype === '1'} />
                            </div>
                            {values.peypeData2.full_name != '' ?
                                <div id="segundaPersona" class="flex items-center mt-1 flex rounded-md shadow-sm bg-indigo-200 px-3 place-content-evenly">
                                    <label for="push-name2" class="block text-sm font-medium font-comfortaa text-secondary-500">
                                        {values.peypeData2.full_name}
                                    </label>
                                    <input id="push-name2" name="push-names" type="radio"value='2'onChange={handleChange('check_peype')} checked={values.check_peype === '2'} />
                                </div>
                                : <div> </div>}




                            <div class="pt-14 flex flex-col">
                                <div class="pt-12 pb-2">
                                    <button onClick={Continue} type="submit" variant="contained" class="btn-continue"                            >
                                        Siguiente
                                    </button>
                                </div>
                                <div class="pb-3">
                                    <button onClick={Previous} type="submit" variant="contained" class="btn-previous"                            >
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
                title={'Error'} 
                body={'Seleccione un valor'} 
            /> 
        </div>
    )
}

export default UserDetailsConfirm
