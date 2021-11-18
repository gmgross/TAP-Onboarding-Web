import React from 'react'
import { Container } from '@mui/material/'
import axios from "axios"
 
const UserDeclarationUif = ({ prevStep, handleChange, values, nextStep }) => {

    const Previous = e => {
        e.preventDefault();
        prevStep();
    }
    const Continue = e => {
        e.preventDefault()
        if (values.is_uif_person) {
            nextStep();
        }
        const to = values.email;
        const template_id = "d-4b19647f44fc489d87ddef4e5937e66d"

        try {
            axios.post("http://localhost:3000/api/mail", { to, template_id })
        } catch (err) {
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
        </div>
    )
}


export default UserDeclarationUif
