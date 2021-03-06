import React from 'react'
import { Container } from '@mui/material/'

const UserDeclarationExp = ({ prevStep, nextStep, handleChange, values }) => {

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
                        <div class="pt-5 pb-4">
                            <p class="text-secondary-500 500  text-xl text-center font-bold font-comfortaa">Declaraciones Juradas</p>
                        </div>

                        <div class="pt-2 pb-1">
                            <p class="text-gray-600 text-sm text-center font-comfortaa ">
                                ¿Sos una persona Expuesta Politicamente segun la nomina establicida en la Res. UIF N° 134/2018 y modificatorias?
                            </p>
                        </div>
                        <form class="pt-9 pb-10 place-content-evenly">
                            <div class="flex items-center mt-1 flex rounded-md shadow-sm bg-indigo-200 place-content-evenly bg-cover">
                                <label for="push-expuesta1" class="text-xs font-medium font-comfortaa text-indigo-800 py-1 pr-1">
                                    Si, soy una persona expuesta Politicamente
                                </label>
                                <input
                                    class="mr-2 focus:ring-indigo-500 text-indigo-600 border-gray-300"
                                    id="push-expuesta1"
                                    name="pushExpuesta"
                                    type="radio"
                                    value='1'
                                    checked={values.is_exposed_person === '1'}
                                    onChange={handleChange('is_exposed_person')} />
                            </div>
                            <div class="flex items-center mt-1 flex rounded-md shadow-sm bg-indigo-200 place-content-evenly">
                                <label for="push-expuesta2" class="text-xs font-medium font-comfortaa text-indigo-800 py-1 pr-1 ">
                                    No soy una persona expuesta Politicamente
                                </label>
                                <input
                                    class="mr-2 focus:ring-indigo-500 text-indigo-600 border-gray-300"
                                    id="push-expuesta2"
                                    name="pushExpuesta"
                                    type="radio"
                                    value='0'
                                    checked={values.is_exposed_person === '0'}
                                    defaultChecked
                                    onChange={handleChange('is_exposed_person')}
                                />
                            </div>

                            <div class="pt-10 flex flex-col">
                                <div class="pt-3 pb-2">
                                    <button class="btn-continue"
                                        onClick={Continue}
                                        type="submit"
                                        variant="contained">
                                        Siguiente
                                    </button>
                                </div>
                                <div class="pb-2">
                                    <button
                                        class="btn-previous" onClick={Previous}
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
        </div>
    )
}


export default UserDeclarationExp
