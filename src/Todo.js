import { Button,Typography,TextField } from '@mui/material';
import Card from '@mui/material/Card';
import Grid from '@mui/material/GridLegacy';
  import CardContent from '@mui/material/CardContent';
  // start delete 
  
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
  //    {/*START ICON*/}

   import './App.css'; 
   import { useContext,useState } from 'react';
   import { TodosContext } from './TodosContext';
  import CheckIcon from '@mui/icons-material/Check';
import { IconButton } from '@mui/material';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
export default function Todo({todo,handelCheck}) {
const { todos, settodos } = useContext(TodosContext);
const[showUpdateDialog,setShowUpdateDialog]=useState(false);
const[updateTodo,setUpdateTodo]=useState({title:todo.title,details:todo.details});

const[showDeleteDialog,setShowDeleteDialog]=useState(false)
function handelDeleteConfirm(){
   const updatedTodos = todos.filter((t)=>{
    if (t.id === todo.id){
      return false;    }else{
        return true;
      }
   });
   settodos(updatedTodos);
   localStorage.setItem("todos",JSON.stringify(updatedTodos) )

}
function handelUpdateConfirm(){
 const updatedTodos = todos.map((t)=>{
  if (t.id===todo.id) {return {
    ...t,title: updateTodo.title, details:updateTodo.details
  };
    
  } else {
    return t
  }
 })  
 settodos(updatedTodos);
 setShowUpdateDialog(false)
 localStorage.setItem("todos",JSON.stringify(updatedTodos) )

}

function handelUpdateClose(){
 setShowUpdateDialog (false);
 }  
function handelClose(){
  setShowDeleteDialog(false);
 }  
function handelDeleteClick(){
    setShowDeleteDialog(true);
   }
   function handelUpdateClick(){
    setShowUpdateDialog(true);
   }

function handelCheckClick(todoId){
    const updatedTodos =todos.map((t)=>{
      if(t.id===todo.id){
        t.iscompleted=!t.iscompleted 
      }
      return t;
    });
    settodos (updatedTodos)
    localStorage.setItem("todos",JSON.stringify(updatedTodos) )

  }

  return (<>
  {/* { start delete todo} */}
  <Dialog style={{
    direction:"rtl"
  }}
  onClose={handelClose}
        open={showDeleteDialog}
        // onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          هل انت متاكد من الحذف المهمه؟
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
لا يمكنك التراجع عن الحذف بعد اتمامه
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handelClose} >اغلاق</Button>
          <Button onClick={handelDeleteConfirm} autoFocus>
           نعم قم. بالحذف
          </Button>
        </DialogActions>
      </Dialog>
  {/* { end delete todo} */}
  {/* start updeted  */}
   <Dialog style={{
    direction:"rtl"
  }}
  onClose={handelUpdateClose}
        open={showUpdateDialog}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          تعديل مهمه       </DialogTitle>
        <DialogContent>
         <TextField
              autoFocus
              required
              margin="dense"
              id="name"
              name=""
              label="عنوان المهمه"
              fullWidth
              variant="standard"
              value={updateTodo.title}
              onChange={((e)=>{

             setUpdateTodo({...updateTodo,title:e.target.value }) })}
            />
            <TextField
              autoFocus
              required
              margin="dense"
              id="name"
              name=""
              label="التفاصيل"
              type="email"
              fullWidth
              variant="standard"
               value={updateTodo.details}
              onChange={((e)=>{

             setUpdateTodo({...updateTodo,details:e.target.value }) })}
 
            />
        </DialogContent>
        <DialogActions>
          <Button onClick={handelUpdateClose} >اغلاق</Button>
          <Button onClick={handelUpdateConfirm} autoFocus>
           تحديث
          </Button>
        </DialogActions>
      </Dialog>
    {/* end updeted  */}
{/* start card */}
    <Card  className="todoCard"sx={{ marginTop:"35px",minWidth: 275, background:"#283593", color:"white" }}>
      <CardContent>
        <Grid container spacing={1}>
        <Grid  xs={8}>
       <Typography variant='h4' sx={{textAlign:"right",textDecoration:todo.iscompleted?"line-through":"none"}} >
{todo.title}        </Typography>
        <Typography variant='body1' sx={{textAlign:"right"}} >
{todo.details}        </Typography>
        </Grid>
                 {/*start action*/}

        <Grid  xs={4} display="flex" justifyContent="space-around" alignItems="center">
          <IconButton onClick={()=>{
            handelCheckClick();
          }}  className='iconButton' aria-label='delete' style={{color:todo.iscompleted?"white":"#8bc34a",background:todo.iscompleted?"#8bc34a":"white",border:"solid  #8bc34a 3px"}}>
          <CheckIcon/>
          </IconButton >
           <IconButton onClick={handelUpdateClick} className='iconButton' aria-label='delete' style={{color:"#1769aa",background:"white",border:"solid  #1769aa 3px"}}>
          <EditOutlinedIcon/>
          </IconButton>
           <IconButton onClick={handelDeleteClick} className='iconButton' aria-label='delete' style={{color:"#ee272eff",background:"white",border:"solid  #ee272eff 3px"}}>
          <DeleteOutlinedIcon/>
          </IconButton>
        </Grid>
                 {/*end action*/}

      </Grid>

          </CardContent>
     
    </Card>
    {/* end card */}
  </>
  )}