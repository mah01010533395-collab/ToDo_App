import * as React from 'react';
import {Button, Typography } from '@mui/material';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import Card from '@mui/material/Card';
import Grid from '@mui/material/GridLegacy';
import TextField from '@mui/material/TextField';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
// components
import { v4 as uuidv4 } from 'uuid';

import Todo from './Todo';
import { TodosContext } from './TodosContext';
import { useState,useContext,useEffect } from 'react';

export  function TodoList() {
const {todos,settodos} = useContext(TodosContext)
     const [titleInput,setTitleInput]=useState("");
      const [disPlayedTodosType,setDisPlayedTodosType]=useState("all");
const completedTodos = todos.filter(t => t.iscompleted);
const notCompletedTodos = todos.filter(t => !t.iscompleted);

let todosToBeRendered = todos;

if (disPlayedTodosType === "completed") {
  todosToBeRendered = completedTodos;
} else if (disPlayedTodosType === "non-completed") 
  {  todosToBeRendered = notCompletedTodos
   }else{
    todosToBeRendered = todos
   }
   
     const todosJsx= todosToBeRendered.map((t) =>{
        return<Todo key={t.id} todo={t}  />
    })
  
 function changeDisplayedType(e){
   setDisPlayedTodosType(e.target.value)
 }
    function handleAddClick(){
const newTodo = {
    id:uuidv4(),
    title: titleInput,
    details:"",
    iscompleted: false
  
}
const updatedTodos= [...todos,newTodo]
settodos(updatedTodos)
localStorage.setItem("todos",JSON.stringify(updatedTodos) )
setTitleInput("")
    }
 
  useEffect(()=>{
     const storageTodos = JSON.parse(localStorage.getItem("todos")) ;
  settodos(storageTodos);
  }, [settodos] );
    return (
  

      <Container maxWidth="sm" >
        
       <Card style={{
        maxHeight:"80vh",overflow:"scroll"
       }} sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography variant='h2' >
         مهامي  
        </Typography>
         <Divider  />
          {/* START BUTTON */}
          <ToggleButtonGroup style={{direction:"ltr",marginTop:"25px"}}
      value={disPlayedTodosType }
      exclusive
       onChange={changeDisplayedType}
      aria-label="text alignment"
      color='primary ؤ '
    >
      <ToggleButton value="non-completed" aria-label="left aligned">
       غير المنجز
      </ToggleButton>
      <ToggleButton value="completed" aria-label="centered">
       المنجز
      </ToggleButton>
      <ToggleButton value="all" aria-label="right aligned">
   الكل
      </ToggleButton>
      
    </ToggleButtonGroup>
    {/* END BUTTON*/}
     {/* START TODOS*/}
   {todosJsx}
     {/* END TODOS*/}
              {/*start grid*/}
 <Grid  style={{marginTop:"20px"}} container spacing={0}>
        <Grid sx={{display:"flex",justifyContent:"space-around",alignItems:"center"}
        } xs={8}>  <TextField value={titleInput} onChange={(e)=>{setTitleInput(e.target.value)}} style={{width:"100%"}}
         id="outlined-basic" label="عنوان المهمه" variant="outlined" /></Grid>
 
         <Grid sx={{display:"flex"
            , justifyContent:"space-around",alignItems:"center"}} 
            xs={4}>   <Button disabled={titleInput.length===0} onClick={()=>{
               handleAddClick();
            }}  style={{width:"85%", height:"100%"}}variant="contained">اضافه</Button></Grid>

 </Grid>
 
         {/*end grid*/}

      </CardContent>
      <CardActions>
        
      </CardActions>
    </Card>
      </Container>
   
  );
}