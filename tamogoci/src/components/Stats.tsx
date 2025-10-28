
export const Stats:React.FC<{value:number,name:string,image:string}> =({value,name,image})=>{
  return (
    <div className="health">
             <div className="health-image">
              <button className={`${name} stats-image`}><img src={image}></img></button>
             </div>
             <div className="healt-information">
              <h2>{name}</h2>
             </div>
             <div className="progress-bar">
              <p>{value}/100</p>
              <progress value={value} max={100}></progress>
             </div>
            </div>
  )
}

