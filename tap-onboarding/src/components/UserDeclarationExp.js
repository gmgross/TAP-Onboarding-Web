import React from 'react'
import { Container, Typography, Grid, TextField, Button } from '@material-ui/core'

const UserDeclaration = ({ prevStep, nextStep, handleChange, values }) => {

    const Continue = e => {
        e.preventDefault();
        nextStep();
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
                        <div class= "pt-5 pb-4">
                            <p class="text-indigo-900 text-xl text-center font-bold font-comfortaa">Declaraciones Juradas</p>
                        </div>
                        <div class= "pt-2 pb-1"> 
                            <p class="text-gray-600 text-sm text-center font-comfortaa ">¿Sos una persona Expuesta Politicamente segun la nomina establicida en la Res. UIF N° 134/2018 y modificatorias?</p>
                        </div>
                        <form class= "pt-9 pb-10 place-content-evenly">  
                            <div class="flex items-center mt-1 flex rounded-md shadow-sm bg-indigo-200 place-content-evenly bg-cover">
                                <label for="push-expuesta1" class="text-sm font-medium font-comfortaa text-indigo-800">
                                Si, soy una persona expuesta Politicamente
                                </label>
                                <input id="push-expuesta1" name="push-expuesta" type="radio" class="mr-2 focus:ring-indigo-500 text-indigo-600 border-gray-300"/>
                            </div>
                            <div class="flex items-center mt-1 flex rounded-md shadow-sm bg-indigo-200 place-content-evenly">
                                <label for="push-expuesta2" class="text-sm font-medium font-comfortaa text-indigo-800 ">
                                No soy una persona expuesta Politicamente
                                </label>
                                <input id="push-expuesta2" name="push-expuesta" type="radio" class="mr-2 focus:ring-indigo-500 text-indigo-600 border-gray-300"/>
                            </div>     
                            <div class = "pt-16 flex flex-col">
                                <div class="pt-3 pb-2">
                                    <Button onClick={Continue} type="submit" variant="contained" class="rounded-full bg-indigo-900 hover:bg-indigo-800 px-9 text-white font-comfortaa py-2"                            >
                                            Siguiente
                                    </Button>
                                </div>
                                <div class = "pb-2">
                                    <Button onClick={Previous} type="submit" variant="contained" class="rounded-full bg-green-500 hover:bg-green-400 px-12 text-white font-comfortaa py-2"                            >
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
