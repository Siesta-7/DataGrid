import "./app.scss"
import {useContext} from 'react'
import { InfoContext } from "./contextAPI.js"
import {Box} from "./components/Box.js"
import {headers} from "./data.js"
import 'devextreme/dist/css/dx.light.css';

import  { DataGrid,
          Column,
          SearchPanel,
          Pager,
          Paging,
          
} from 'devextreme-react/data-grid';


function App() {
  
  //Context API'ya atanan global değişkenleri çekme
  const {currentUser, showBox, setShowBox} = useContext(InfoContext)

  //Yeni hesap ekle butonuna basıldığı zaman box state'in değeri tam true olsun.
  const handleClick = () =>{
    setShowBox(true)
  }

  return (
    <div className="App">
      
      <button className="buttonAdd" onClick={handleClick}><i class="material-icons plus" >add</i>Yeni hesap ekle</button>
      <DataGrid 
        dataSource={currentUser}   
        columnAutoWidth={true}
        showRowLines={true}
        allowColumnResizing={true}
        wordWrapEnabled={true}
        columnHidingEnabled={true}>

        <SearchPanel className="Search" visible={true} highlightCaseSensitive={true} />
        
        { /*Data.js'den çekilen kolon başlık isimlerinin, listeden map() ile tek tek 
          ele alınıp girilmesi */

        headers.map(header=>(<Column dataField={header} />)) }

        <Pager showNavigationButtons={true} displayMode="compact"  />
        <Paging defaultPageSize={6} />
      </DataGrid>

      { 
      //useContext'te tanımlanan box state'i true olmuşsa Box componentini göster.
      showBox && <Box/>
      }
    </div>
  );
}

export default App;
