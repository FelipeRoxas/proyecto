import {Persona} from '@/interfaces/IPersonas'
import React, {useState} from 'react'

export const mostrarDatos = () => {
        const miStorage = window.localStorage
        const [personas, setPersonas] = useState<Personas[]>([])
        useEffect(()=>{
            console.log("Hola")
            let listadoStr = miStroage.getItem("personas")
            if(listadoStr!= null){
              let listado JSON.parse(listadoStr)
              setPersonas(listado)
              console.log(personas)
            }
        
          }, [])
    return(
        <div>mostrarDatos</div>
    )
}
export default mostrarDatos