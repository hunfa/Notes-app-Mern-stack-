import React from 'react'
import axios from 'axios';
function AddNote(props) {

  const handleaddnoten=()=>{
    
    
    const title=document.getElementById("title").value
    const description=document.getElementById("description").value
  axios.post(`http://localhost:5000/api/addnote`, { title,description },{headers:{token:localStorage.getItem("token")}})
  .then(res => {
    console.log(res.data);
    
    if(res.data.success)
    {props.fetchnotes();
      document.getElementById("title").value="";
      document.getElementById("description").value="";
    }
    
  });
  
}




  return (
    <>
    <div className="container my-4">
        <h2>Add a Note</h2>
    <div className="mb-3">
  <label htmlFor="exampleFormControlInput1" className="form-label">Enter Title</label>
  <input type="text" className="form-control" id="title"/>
</div>
<div className="mb-3">
  <label htmlFor="exampleFormControlTextarea1" className="form-label">Enter Description</label>
  <textarea className="form-control" id="description" rows="3"></textarea>
</div>
<button onClick={handleaddnoten} type="button" className="btn btn-primary">Add Note</button>


</div>
    </>
  )
}

export default AddNote