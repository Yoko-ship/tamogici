import { useEffect, useState } from "react";
import { useAppSelect } from "../store/hooks";
import Button from "./Button";
import { Stats } from "./Stats";

const pets = [
  {
    id: 1,
    name: "Fluffy",
    image:
      "https://cdn.prod.website-files.com/6600e1eab90de089c2d9c9cd/669726ef5242a23882952518_663fc2a1da49d30b9a44e774_image_3cN5ZzSm_1715403464233_raw.jpeg",
    description: "Мягкий и ленивый кот,  любит спать и мурлыкать рядом.",
    stats: { health: 80, happiness: 90, energy: 60, speed: 40 },
  },
  {
    id: 2,
    name: "Spike",
    image:
      "https://aiartshop.com/cdn/shop/files/a-real-like-dog-ai-image-animal-art-235.webp?v=1712248701",
    description: "Весёлый и энергичный пёс,  обожает играть с мячом.",
    stats: { health: 95, happiness: 85, energy: 100, speed: 55 },
  },
  {
    id: 3,
    name: "Nibbles",
    image:
      "https://img.freepik.com/premium-photo/hamster-is-singing-into-microphone_783884-831.jpg",
    description: "Маленький хомяк с большим  аппетитом и любопытством.",
    stats: { health: 70, happiness: 75, energy: 50, speed: 80 },
  },
  {
    id: 4,
    name: "Blaze",
    image:
      "https://creator.nightcafe.studio/jobs/5QFOTOKx0VRRiUErMKLw/5QFOTOKx0VRRiUErMKLw-ROko6.jpg",
    description: "Мини-дракон с добрым сердцем, но огненным нравом.",
    stats: { health: 100, happiness: 65, energy: 85, speed: 70 },
  },
];

interface Data {
  id: number;
  name: string;
  image: string;
  description: string;
  stats: {
    health: number;
    happiness: number;
    energy: number;
    speed: number;
  };
}

function Main() {
  const id = useAppSelect((state) => state.id.id);
  const [data, setData] = useState<Data[]>();
  const [petAction,setPetAction] = useState('');

  useEffect(() => {
    const updatedElement = pets.filter((info) => info.id === id);
    setData(updatedElement);
  }, [id]);


  useEffect(() =>{
    if(petAction){
      const timer = setTimeout(() => setPetAction(''),2000)
      return ()=> clearTimeout(timer)
    }
  },[petAction])

  const handler = (type:string) =>{
    if (type === "health"){
      if(data![0].stats.health < 90){
        const updatedElement = data?.map(obj => ({
          ...obj,
          stats:{
            ...obj.stats,
            health: obj.stats.health + 1
          }
        }))  
        setData(updatedElement)
        const chewSound = new Audio("src\\assets\\eating-sound-effect-36186.mp3")
        chewSound.play()
        setPetAction("eating")
      }
    }
    if(type === 'energy'){
      if(data![0].stats.energy < 95){
        const updatedElement = data?.map(obj => ({
          ...obj,
          stats:{
            ...obj.stats,
            energy: obj.stats.energy + 1
          }
        }))  
        setData(updatedElement)
        const sleepSound = new Audio("src\\assets\\yawn-sfx-417708.mp3")
        sleepSound.play()
        setPetAction("sleeping")
      }
    }
    if(type === 'happiness'){
      if(data![0].stats.happiness < 94){
        const updatedElement = data?.map(obj => ({
          ...obj,
          stats:{
            ...obj.stats,
            happiness: obj.stats.happiness + 1
          }
        }))  
        setData(updatedElement)
        const happinnessSound = new Audio("src\\assets\\shorttabbypurr-43723.mp3")
        happinnessSound.play()
        setPetAction("happiness")
      }
    }
    if(type === "speed"){
      if(data![0].stats.speed < 90){
        const updatedElement = data?.map(obj => ({
          ...obj,
          stats:{
            ...obj.stats,
            speed: obj.stats.speed + 1
          }
        }))  
        setData(updatedElement)
        const speedSound = new Audio("src\\assets\\bar-increase-cartoon-funny-jump-384919.mp3")
        speedSound.play()
        setPetAction('play')
      }
    }

  }

  return (
    <>
      {data?.length && (
        <div className="container">
          <div className="main-container">
            {data?.map((pet) => (
              <section className="pets-information" key={pet.id}>
                <div className="img">
                  <img src={pet.image} className={`pet-image ${petAction ? `animate-${petAction}` : ""}`}></img>
                </div>
                <div className="information">
                  <h2>{pet.name}</h2>
                  <p>{pet.description}</p>
                </div>
              </section>
            ))}

            <div className="grids">
              <Button image="src\\assets\\dish.png" hanlder={() => handler("health")}/>
              <Button image="src\\assets\\moon.png" hanlder={() => handler("energy")}/>
              <Button image="src\\assets\\console.png" hanlder={() => handler('speed')}/>
              <Button image="src\assets\caress.png" hanlder={() => handler("happiness")}/>
            </div>
          </div>
          <div className="stats main-stats">
            <section>
              {data?.map((stats) => (
                <div key={stats.id}>
                  <Stats
                    value={stats.stats.health}
                    image="src\assets\cardiogram.png"
                    name="Health"
                  ></Stats>
                  <Stats value={stats.stats.happiness} name="Happiness" image="src\assets\smiling-face.png"></Stats>
                  <Stats value={stats.stats.energy} name="Energy" image="src\assets\flash.png"></Stats>
                  <Stats value={stats.stats.speed} name="Speed" image="src\assets\speed.png"></Stats>
                </div>
              ))}
            </section>
          </div>
        </div>
      )}
    </>
  );
}

export default Main;
