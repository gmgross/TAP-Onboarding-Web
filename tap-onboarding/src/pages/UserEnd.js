import React from 'react'
import { Container,Button } from '@material-ui/core'



const UserEnd = ({ prevStep, values }) => {

    const Continue = e => {
        e.preventDefault();
        //nextStep();
    }
    const Previous = e => {
        e.preventDefault();
        prevStep();
    }
    return (
        <div class="flex items-center h-screen w-full bg-teal-lighter bg-gray-200">
            <form class="w-full bg-white rounded shadow-2xl p-8 m-4 md:max-w-sm md:mx-auto h-auto" >
                <Container component="main" maxWidth="xs">
                    <div>

                        <div class= "pt-2 pb-4">
                            <p class="text-indigo-900 text-xl text-center font-bold font-comfortaa">¡ Felicitaciones, {values.first_name} !</p>
                            <p class="text-indigo-900 text-xl text-center font-bold font-comfortaa">Ya tenes tu cuenta</p>
                        </div>

                        <div class="mx-auto flex items-center justify-center h-20 w-20 rounded-full bg-green-100">
                            <svg class="h-10 w-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                        </div>
                            
                        <div class= "pt-2 pb-2">
                            <p class="text-gray-600 text-xl text-center font-comfortaa">Se te envio un mail con los detalles de tu cuenta</p>
                        </div>
                                                  

                        <form class= "pt-2 pb-10">   
                            
                            <div class = "pt-2 flex flex-col">
                                <div class="py-2 pt-4">
                                    <Button 
                                        class="rounded-full bg-gray-300 hover:bg-gray-00 px-12 text-white font-comfortaa py-2"
                                        onClick={Continue} 
                                        type="submit" 
                                        variant="contained">
                                            Validar identidad
                                    </Button>
                                </div>

                                <div class="py-2 pt-4">
                                    <Button 
                                        onClick={Continue} 
                                        type="submit" 
                                        variant="contained" 
                                        class=" rounded shadow rounded-full bg-gray-300 hover:bg-gray-00 px-12 text-white font-comfortaa py-2">
                                            Descargar la App
                                    </Button>
                                </div>

                                <div class="pb-2 pt-4">
                                    <Button 
                                        onClick={Previous} 
                                        type="submit" 
                                        variant="contained" 
                                        class="btn-previous">
                                            Volver
                                    </Button>
                                </div>
                            </div>
                        </form>
                    </div>
                </Container>
            </form>
        </div>
    )
}

export default UserEnd
