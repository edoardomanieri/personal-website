import React from "react";

function Progress(props){
  const winWidth = window.innerWidth;
  const progressQuery = () =>{
    if(winWidth && winWidth > 767){
      return(<span
        className="mi-progress-active"
        style={props.isVisible ? {width: `${props.percentage}%`} : {width: 0}}
      ></span>)
    }
    return(<span className="mi-progress-active" style={{width: `${props.percentage}%`}}></span>)
  }
  return (
    <div className="mi-progress">
      <h6 className="mi-progress-title">{props.title}</h6>
    </div>
  );
}

export default Progress;
