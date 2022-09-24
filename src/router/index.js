import { BrowserRouter,Routes,Route } from "react-router-dom"


import Login from "../pages/Login"

//nuestro router va a ser un componente el cual se encargue de retornar las rutas de su respectvia vista 

const Router =()=>{

    return(
        <BrowserRouter>        
        <Routes>
            {/* publicas */}
           
            <Route path="login" element={<Login/>}/>
          
          

            {/* privadas */}


        </Routes>      
        
        
        </BrowserRouter>
    )

}



export default Router;