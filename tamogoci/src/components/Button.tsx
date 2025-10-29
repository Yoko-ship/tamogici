import type React from "react";

export const Button:React.FC<{image:string,hanlder:()=> void}> = ({image,hanlder}) =>{
  return (
    <div className="grid">
      <button onClick={hanlder}>
        <img src={image}></img>
      </button>
    </div>
  );
}

export default Button;
