import "./box.scss"
import { useContext, useState } from "react"

import { InfoContext } from "../contextAPI"
import {headers} from "../data.js"
export const Box = ()=> {

    //useContext ile contextAPI'daki istenilen verileri çağır.
    const {currentUser, setCurrentUser, setShowBox} = useContext(InfoContext)
    const [inputs, setInputs] = useState({})
    
    /*Kullanıcı hangi input'a bir değer giriyorsa o inputun name ve value değerlerini,
        key:value olacak şekilde 'inputs' object state'ine ata.
    */
    const changeHandle = (e)=>{
        setInputs({
            ...inputs,
            [e.target.name]:e.target.value
        })
    }

    const handleClick = ()=>{

        /*Kullanıcı, kaydet butonuna bastığında inputların hepsi boşsa Box component'ı ekranda
        durmaya devam etsin, aksi halde kaybolsun*/

        setShowBox(Object.values(inputs).length !== 0 ? false : true)


        /*Kullanıcı 3 input'a da herhangi bir değer girmemişse currentUser değişmesin
        ve boş satır eklenmesinin önüne geçilsin*/

        Object.values(inputs).length !== 0 && setCurrentUser([...currentUser, inputs])

    }

  return (

    <div class="Box" >
        <i onClick={()=>setShowBox(false)} class="material-icons closeIcon" >close</i>
        {headers.map(item=>(
            <div className="inputs">
                <label>{item}</label>
                <input name={item} onChange={changeHandle} /> 
            </div>     
        ))}
        <div className="buttons">
            <button onClick={()=>setShowBox(false)} >Vazgeç</button>
            <button onClick={handleClick}>Kaydet</button>
        </div>
        
    </div>
  )
}

