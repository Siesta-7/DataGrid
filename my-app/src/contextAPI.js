import {createContext, useEffect, useState} from 'react'

export const InfoContext = createContext()

export const InfoContextProvider = ({children})=>{

    /*Daha önce localStorage'a depolanmış DataGridUser adında bir list varsa
    bunu currentUser state'ine ata, yoksa "" ata.*/

    const [currentUser, setCurrentUser] = useState(JSON.parse(localStorage.getItem("DataGridUser")) || "")

    /*box isminde bir state olsun ve başlangıç değeri false olsun.Kullanıcı tabloya veri eklemek
     için 'Yeni hesap ekle' butonuna bastığı zaman box state'in değeri true olacak.*/

    const [showBox, setShowBox] = useState(false)

    /*currentUser state'i oluştuğunda ve ardından değiştiği her zaman mevcut değerini,
     localStorage'da DataGridUser isminde bir değişken oluşturup içerisine ata. */

    useEffect(() => {
        localStorage.setItem("DataGridUser", JSON.stringify(currentUser))
    }, [currentUser])

    /*InfoContextProvider ile sarmalanan tüm componentların, oluşturulan state değerlerini
     kullanıp manipüle edebilmesi için hepsini value propsuna aktar.*/
    return <InfoContext.Provider value = {{currentUser, setCurrentUser, showBox, setShowBox}}>
        {children}
    </InfoContext.Provider>
}
