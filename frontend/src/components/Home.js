import React,{useState,useEffect} from 'react'
import AddNote from './AddNote'
import Notes from './Notes'

import axios from 'axios';

function Home() {

const  [notes, setnotes] = useState([])

useEffect(() => {
  fetchnotes();
 
}, [])

const fetchnotes=()=>{
  axios.get(`http://localhost:5000/api/getnotes`,{headers:{token:localStorage.getItem("token")}})
.then(res => {
  console.log(res.data);
  setnotes(res.data);
  
});
}

const handledeletenote=(ID)=>{
  
  axios.delete(`http://localhost:5000/api/deletenote`,{headers:{token:localStorage.getItem("token")},data:{id:ID}})
  .then(res => {
    console.log(res.data);
   if(res.data.success)
   fetchnotes();
  });

}

const [note, setnote] = useState({title:"",description:"",id:""})

const handleeditnote=(currentNote)=>{

  setnote({title:currentNote.title,description:currentNote.description,id:currentNote._id});
  document.getElementById("modalEdit").click();

}

const onChange=(e)=>{

setnote({...note,[e.target.name]:e.target.value})
}

const handleclick=()=>{
console.log(note);
axios.put(`http://localhost:5000/api/updatenote`,{title:note.title,id:note.id,description:note.description},{headers:{token:localStorage.getItem("token")}})
  .then(res => {
    console.log(res.data);
   if(res.data.success)
  { fetchnotes();
    document.getElementById("closebtn").click();
  }
  });
}

  return (
    <>
    
    <AddNote fetchnotes={fetchnotes}/>
    <div className="container">
    <div className="row">
    {notes.map((element,index)=>{
      return   <div key={index} className="col my-2"> <Notes handledeletenote={handledeletenote} handleeditnote={handleeditnote} note={element}/> </div>
    }
   
    )}
    </div>



    <button style={{display:"none"}} type="button" id='modalEdit' className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
          Launch demo modal
        </button>


        <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">
                <div className="mb-3">
                  <label htmlFor="exampleFormControlInput1" className="form-label">Title</label>
                  <input onChange={onChange} type="email" className="form-control" id="title" name='title' value={note.title} />
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleFormControlTextarea1" className="form-label">Description</label>
                  <textarea onChange={onChange} value={note.description} name="description" className="form-control" id="desc" rows="3"></textarea>
                </div>
              </div>
              <div className="modal-footer">
                <button type="button" id='closebtn' className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button onClick={handleclick}  type="button" className="btn btn-primary">Save changes</button>
              </div>
            </div>
          </div>
        </div>



    </div>
    </>
  )
}

export default Home