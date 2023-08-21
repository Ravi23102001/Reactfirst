import React from 'react'

function Style(Probs) {
   
  return (
    
    <div className="col-lg-3">
    <div className="card mt-3" style={{height:"450px"}}>
      <img src={Probs.imgurl} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{Probs.title}{Probs.id}</h5>
        <p className="card-text">{Probs.para}</p>
        <a href="#" className="btn btn-primary">
          {Probs.btn}
        </a>
      </div>
    </div>
  </div>
  )
}

export default Style