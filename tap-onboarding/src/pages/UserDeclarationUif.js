import React from 'react'
import { Container, Button } from '@mui/material/'

const UserDeclarationUif = ({ prevStep, handleChange, values, nextStep }) => {

    const Previous = e => {
        e.preventDefault();
        prevStep();
    }
    const Continue = e => {
        e.preventDefault()
        nextStep();
    }
    return (
        <div class="flex items-center h-screen w-full bg-teal-lighter bg-gray-200">
            <form class="bg-white rounded shadow-2xl p-8 m-4 md:max-w-sm md:mx-auto">
                <Container component="main" maxWidth="xs">
                    <div>
                        <div class="pt-5 pb-4">
                            <p class="text-indigo-900 text-xl text-center font-bold font-comfortaa">Declaraciones Juradas</p>
                        </div>
                        <div class="pt-2 pb-1">
                            <p class="text-gray-600 text-sm text-center font-comfortaa ">     ¿Desarrollas una actividad incluida en el articulo 20 de la ley 25246 y sus modificatorias y/o complementarias?</p>
                        </div>
                        <form class="pt-9 pb-10 place-content-evenly">

                            <div class="flex items-center mt-1 flex rounded-md shadow-sm bg-indigo-200 place-content-evenly bg-cover">
                                <label for="push-uif" class="text-sm font-medium text-indigo-800 font-comfortaa py-3 pr-1 ">
                                    Si, soy sujeto obligado ante la UIF
                                </label>
                                <input id="push-uif" name="push-uif" type="radio" class="mr-2 focus:ring-indigo-500 text-indigo-600 border-gray-300" />
                            </div>
                            <div class="flex items-center mt-1 flex rounded-md shadow-sm bg-indigo-200 place-content-evenly">
                                <label for="push-uif2" class="text-sm font-medium text-indigo-800 break-words font-comfortaa py-3 ">
                                    No soy sujeto obligado ante la UIF
                                </label>
                                <input id="push-uif2" name="push-uif" type="radio" class="mr-2 focus:ring-indigo-500 text-indigo-600 border-gray-300 justify-self-end " />
                            </div>
                            <div class="pt-16 flex flex-col">
                                <div class="pt-1 pb-2">
                                    <Button
                                        class="btn-continue"
                                        onClick={Continue}
                                        type="submit"
                                        variant="contained">
                                        Declarar
                                    </Button>
                                </div>
                                <div class="pb-1">
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
                    </div>
                </Container>
            </form>
        </div>
    )
}


export default UserDeclarationUif
