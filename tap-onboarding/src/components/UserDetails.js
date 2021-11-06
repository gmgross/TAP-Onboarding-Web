import React,{useState} from 'react'
import { Modal, Container, Typography, Grid, TextField, Button } from '@material-ui/core'
import MyModal from './MyModal';

const UserDetails = ({ prevStep, nextStep, handleChange, values, isModal, toggleModal }) => {
    const urlOriginalBase = 'https://api.qa.auntap.io/public/check_user?document_id[equals]=' 
    var dniExistente;
    
    const [error, setError] = useState(false);
    const [helper, setHelper] = useState('');
    
    function validateDocument_id() {
        let result = true;
      
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
        validateDocument_id();
        if(validateDocument_id()){
            await document_idExistDb()
            if (dniExistente == false ) { 
                e.preventDefault();
                nextStep();
            }else{
                e.preventDefault();
                toggleModal();
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
                            <p class="text-indigo-900 text-2xl text-center font-medium font-sans">Asociá tu DNI</p>
                        </div>
                        <div class= "pt-6 pb-5">
                            <p class="text-gray-500 text-1xl text-center font-sans">Queremos aseguarnos que nadie se haga pasar por vos</p>
                        </div>
                        <form class= "pt-5 pb-10">
                                <TextField 
                                    error={error}
                                    helperText={helper}
                                    id="textDetails"
                                    variant="outlined"  
                                    placeholder="11111111"
                                    label="DNI" 
                                    defaultValue={values.document_id} 
                                    onChange={handleChange('document_id')} 
                                    autoComplete="document_id" 
                                    fullWidth
                                />

                            <div class = "pt-16 flex flex-col">
                                <div class="pt-2 pb-2">
                                    <Button onClick={Continue} type="submit" variant="contained" class="rounded-full bg-indigo-500 hover:bg-indigo-400 px-9 text-white font-bold py-2"                            >
                                            Siguiente
                                    </Button>
                                </div>
                                <div class = "pb-2">
                                    <Button onClick={Previous} type="submit" variant="contained" class="rounded-full bg-green-400 hover:bg-green-300 px-12 text-white font-bold py-2"                            >
                                            Volver
                                    </Button>
                                </div>
                            </div>
                        </form>
                        <Modal open={isModal} onClose={toggleModal} >
                            <MyModal title={'El DNI ya esta asociado a un usuario existente'} body={''}>
                            </MyModal>
                        </Modal> 
                    </div>
                </Container>
            </form>
        </div>
    )
}

export default UserDetails
