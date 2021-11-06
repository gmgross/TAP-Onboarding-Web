import React,{useState} from 'react'
import { Modal, Container, Typography, Grid, TextField, Button } from '@material-ui/core'


const MyModal = ({ isModal, toggleModal, title, body }) => {

    return (
        
            <div class="relative top-40 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
               <div class="mt-3 text-center">
    
                <div class="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-red-100">                       
                        <svg class="h-6 w-6 text-red-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                        </svg>
                    </div>
                    <p class="text-indigo-900 text-2xl text-center font-medium font-sans">{title}  ya registrado</p>
                    <div class="mt-2 px-7 py-3">
                        <p class="text-sm text-gray-500">Por favor, use otro  {body}  para registrarse</p>
                    </div>
                    <div class="items-center px-4 py-3">
                        <Button onClick={toggleModal} type="submit" variant="contained" class="rounded-full bg-green-400 hover:bg-green-300 px-12 text-white font-bold py-2"                            >
                            Aceptar
                        </Button>
                    </div>
                </div>
            </div>
        
    )
}

export default MyModal