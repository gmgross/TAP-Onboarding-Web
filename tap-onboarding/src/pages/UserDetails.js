import React, {useState} from 'react'
import { Container, TextField, Button } from '@mui/material/'
import AlertModal from '../components/AlertModal';

const UserDetails = ({ prevStep, nextStep, handleChange, values }) => {
    const urlOriginalBase = process.env.REACT_APP_CHECK_DOCUMENT_ID 
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
    
    
    
    const Continue = async(e) => {
        e.preventDefault();
        //validateDocument_id();
        if(validateDocument_id()){
            await document_idExistDb()
            if (dniExistente === false ) { 
                e.preventDefault();
                nextStep();
            }else{
                e.preventDefault();
                setOpenModal(true);
            };
        }
    }
    
    const document_idExistDb = async() => {
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
                        <div class= "pt-6 pb-10">
                            <p class="text-secondary-500 500 500 500  text-xl text-center font-bold font-comfortaa">
                                Asociá tu DNI</p>
                        </div>

                        <div class= "pt-6 pb-5">
                            <p class="text-gray-600 text-1xl text-center font-comfortaa">
                                Queremos aseguarnos que nadie se haga pasar por vos</p>
                        </div>

                        <form class= "pt-5 pb-10">
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

                            <div class = "pt-16 flex flex-col">
                                <div class="pt-2 pb-2">
                                    <Button 
                                        class="btn-continue"
                                        onClick={Continue} 
                                        type="submit" 
                                        variant="contained"> 
                                            Siguiente
                                    </Button>
                                </div>
                                <div class = "pb-2">
                                    <Button 
                                        class="btn-previous"
                                        onClick={Previous} 
                                        type="submit" 
                                        variant="contained">
                                            Volver
                                    </Button>
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
