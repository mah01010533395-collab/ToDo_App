// import LoanForm from './LoanForm'
import './App.css';
import { v4 as uuidv4 } from 'uuid';
import { TodosContext } from './TodosContext'; 
import { useState } from 'react';
import { TodoList } from './TodoList';
import { ThemeProvider } from '@emotion/react';
import { createTheme } from '@mui/material';
// import axios from 'axios';
// import Header from './Header';
// import Post from "./Post";
// import SideMenu  from './SideMenu';
const theme = createTheme({
  typography:{

  },
  palette:{
    primary:{
      main:"#d83125ff"
    }
  }
})
const initiaTodos =[{
    id:uuidv4(),
    title:"قراءه كتاب ",
    details:"ينمثةيينصخثين",
    iscompleted: false
},
{
    id:uuidv4(),
    title:"قراءه كتاب ",
    details:"ينمثةيينصخثين",
    iscompleted: false
},
{
    id:uuidv4(),
    title:"قراءه كتاب ",
    details:"ينمثةيينصخثين",
    iscompleted: false
}];

function App() {
       const[todos,settodos]=useState(initiaTodos);
  return (
    <ThemeProvider theme={theme}>
    <div className="App" style={{ direction:"rtl",   display:"flex", justifyContent:"center",alignItems:"center", height:"100vh"}} >

 <TodosContext.Provider value={{todos,settodos}} >
    <TodoList/>
    </TodosContext.Provider>
     
     
     
     
     
     
     
     
     
     
     
     
     
     
      {/* <Header/> */}
     {/* <div style={{width:"100%"}}> */}
{/* <LoanForm/> */}
{/* <axios/>      post container */}
{/* <div style={{width:"70%"}}> */}
{/* <Post />
<Post /> 
<Post />
<Post />
<Post />
<Post />
 <Post /> */}
  {/*post container ====*/}
{/* </div>

<div style={{width:"40%" ,marginLeft:"59%",
  marginTop:"-150%",display:"flex",
  justifyContent:"center",alignItems:"center" ,height:"400px", border:"solid teal 5px,",position:"relative",
  flexWrap:"wrap",

}}>
  {/*SIDE MENU CONTAINER */}

      {/* <SideMenu  />
        <SideMenu  />
 <SideMenu  />
  <SideMenu  />
<SideMenu  />
  <SideMenu  />
  <SideMenu  />
  <SideMenu  /> */}
    {/*post SIDE MENU CONTAINER==== */}
 
{/* </div> */}
      
     </div>
      </ThemeProvider>

    //   */}




  
  
  
    
  );
}

export default App;

