import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (






let initialStatePersona:Persona ={
  nombre: ''
  apellido: ''
}

export default function Home() {
  const miStroage = windows.localStorage;
  const[persona, setPersona] = useState(inicialStatePersona)
  const[personas,setPersonas] = useState <Persona[]>([])
  useEffect(()=>{
    console.log("Hola")
    let listadoStr = miStroage.getItem("personas")
    if(listadoStr!= null){
      let listado JSON.parse(listadoStr)
      setPersonas(listado)
      console.log(personas)
    }

  }, [])

  const handlePersona = (name:string,value:string)=>{
    console.log(name)
    console.log(value)
    //aca aplicac validaciones
    setPersona(
      {...persona, [name] : value}
    )
  };
  const handleRegistrar = ()=>{
    miStroage.setItem("persona", JSON.stringify([...personas,persona]))
  }

  return (
    <form>
      <h1>{persona.nombre} {persona.apellido}</h1>
        <label>Nombre:</label></br>
        <input type='text'
            name="nombre"
            placeholder={(e)}


    </form>
  )
}








  );
}
