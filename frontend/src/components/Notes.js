import React from 'react'

function Notes({  handledeletenote, handleeditnote, note }) {
  return (
    <div className="card" style={{ width: "18rem" }}>
      <div className="card-body">
        <h5 className="card-title">{note.title}</h5>
        <p className="card-text">{note.description}</p>
        <button onClick={() => handledeletenote(note._id)} type="button" className="btn btn-danger btn-sm">Delete</button>
        <button onClick={()=>handleeditnote(note)} type="button" className="btn btn-primary btn-sm mx-2">Edit</button>


      </div>

    </div>
  )
}

export default Notes