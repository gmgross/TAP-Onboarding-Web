import React from 'react'
import { Container, Typography, Grid, TextField, Button } from '@material-ui/core'

const UserDeclaration = ({ prevStep, handleChange, values, nextStep }) => {

    const Previous = e => {
        e.preventDefault();
        prevStep();
    }
    const Continue = e => {
        e.preventDefault()
        // nextStep();
    }
    return (
        <div class="flex items-center h-screen w-full bg-teal-lighter bg-gray-200">
            <form class="w-full bg-white rounded shadow-2xl p-8 m-4 md:max-w-sm md:mx-auto">
                <Container component="main" maxWidth="xs">
                    <div>
                        <div class= "pt-3 pb-4">
                            <p class="text-indigo-900 text-3xl text-center font-sans">Declaraciones Juradas</p>
                        </div>
                        <div class= "pt-2 pb-1"> 
                            <p class="text-indigo-800 text-sm text-center font-sans ">¿Sos una persona Expuesta Politicamente segun la nomina establicida en la Res. UIF N° 134/2018 y modificatorias? (*)</p>
                        </div>
                        <form class= "pt-5 pb-10 place-content-evenly">  
                                <div class="flex items-center mt-1 flex rounded-md shadow-sm bg-indigo-200 place-content-evenly bg-cover">
                                    <label for="push-expuesta1" class="text-sm font-medium text-indigo-800">
                                    Si, soy una persona expuesta Politicamente
                                    </label>
                                    <input id="push-expuesta1" name="push-expuesta" type="radio" class="mr-2 focus:ring-indigo-500 text-indigo-600 border-gray-300"/>
                                </div>
                                <div class="flex items-center mt-1 flex rounded-md shadow-sm bg-indigo-200 place-content-evenly">
                                    <label for="push-expuesta2" class="text-sm font-medium text-indigo-800 ">
                                    No soy una persona expuesta Politicamente
                                    </label>
                                    <input id="push-expuesta2" name="push-expuesta" type="radio" class="mr-2 focus:ring-indigo-500 text-indigo-600 border-gray-300"/>
                                </div>     
                            <div class= "pt-6 pb-5">
                            <p class="text-indigo-800 text-sm text-center font-sans">¿Desarrollas una actividad incluida en el articulo 20 de la ley 25246 y sus modificatorias y/o complementarias? (*)</p>
                        </div>   
                                <div class="flex items-center mt-1 flex rounded-md shadow-sm bg-indigo-200 place-content-evenly bg-cover">
                                    <label for="push-uif" class="text-sm font-medium text-indigo-800">
                                    Si, soy sujeto obligado ante la Unidad de Información Financiera
                                    </label>
                                    <input id="push-uif" name="push-uif" type="radio" class="mr-2 focus:ring-indigo-500 text-indigo-600 border-gray-300"/>
                                </div>
                                <div class="flex items-center mt-1 flex rounded-md shadow-sm bg-indigo-200 place-content-evenly">
                                    <label for="push-uif2" class="text-sm font-medium text-indigo-800 break-words">
                                    No soy sujeto obligado ante la Unidad de Información Financiera
                                    </label>
                                    <input id="push-uif2" name="push-uif" type="radio" class="mr-2 focus:ring-indigo-500 text-indigo-600 border-gray-300"/>
                                </div>   
                                <div class = "flex flex-col">
                            <div class="py-2">
                            <Button onClick={Continue} type="submit" variant="contained" class="rounded-lg bg-indigo-500 hover:bg-indigo-400 px-10 text-white font-bold py-2"                            >
                            Declarar
                            </Button>
                            </div>
                            <div>
                            <Button onClick={Previous} type="submit" variant="contained" class="rounded-lg bg-green-400 hover:bg-green-300 px-12 text-white font-bold py-2"                            >
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


export default UserDeclaration
