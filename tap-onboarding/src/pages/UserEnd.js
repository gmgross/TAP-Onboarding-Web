import React from 'react'
import { Container,Button} from '@mui/material/'


const UserEnd = ({ values, prevStep }) => {

    const LINK_TRACKEABLE = 'https://www.google.com'
    // const LINK_TRACKEABLE = 'https://click.auntap.com/5uO5/onboardingwebhttps://click.auntap.com/5uO5/onboardingweb'

    /*     const Continue = e => {
            e.preventDefault();
            nextStep();
        } */

    /*     const Previous = e => {
            e.preventDefault();
            prevStep();
        } */
    /*
        const opcionUif = Boolean(Number(values.is_uif_person)); //{opcionPersonaExpuesta +''}
        const opcionPersonaExpuesta = Boolean(Number(values.is_exposed_person));//{opcionUif+''}
    */
    return (
        <div class="flex items-center h-screen w-full bg-teal-lighter bg-gray-200">
            <form class="w-full bg-white rounded shadow-2xl p-8 m-4 md:max-w-sm md:mx-auto h-auto" >
                <Container component="main" maxWidth="xs">
                    <div>
                        <div class="pt-2 pb-4">
                            <p class="text-secondary-500  text-xl text-center font-bold font-comfortaa">¡ Felicitaciones, {values.check_peype == '1' ? values.peypeData.first_name : values.peypeData2.first_name } !</p>
                            <p class="text-secondary-500  text-xl text-center font-bold font-comfortaa">Ya tenes tu cuenta</p>
                        </div>

                        <div class="mx-auto flex items-center justify-center h-20 w-20 rounded-full bg-green-100">
                            <svg class="h-10 w-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                        </div>

                        <div class="pt-2 pb-2">
                            <p class="text-gray-600 text-xl text-center font-comfortaa">Se te envio un mail con los detalles de tu cuenta</p>
                        </div>


                        <form class="pt-2 pb-10">

                            <div class="pt-2 flex flex-col">
                                <div class="py-2 pt-4">
                                    <a href={' '} class='rounded-full bg-gray-300 hover:bg-gray-00 px-12 text-white font-comfortaa py-3'>
                                        Validar identidad </a>
                                </div>

                                <div class="py-2 pt-4">
                                    <a href={LINK_TRACKEABLE} class='rounded-full bg-secondary-500 hover:bg-secondary-400 px-12 text-white font-comfortaa py-3'>
                                        Descargar la App </a>
                                </div>

                                <div class="pb- pt-3">
                                    {/* <button
                                        onClick={Previous}
                                        type="submit"
                                        variant="contained"
                                        class="btn-previous">
                                            Volver
                                    </button> */}

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
