import { useState } from "react";
import "./pets.css";
import { Stats } from "./Stats";
import { useAppDispatch } from "../store/hooks";
import { getId } from "../store/data";
import { useNavigate } from "react-router";

const pets = [
  {
    id: 1,
    name: "Fluffy",
    image:
      "https://cdn.prod.website-files.com/6600e1eab90de089c2d9c9cd/669726ef5242a23882952518_663fc2a1da49d30b9a44e774_image_3cN5ZzSm_1715403464233_raw.jpeg",
    description: "Мягкий и ленивый кот, <br/> любит спать и мурлыкать рядом.",
    stats: { health: 80, happiness: 90, energy: 60,speed:40 },
  },
  {
    id: 2,
    name: "Spike",
    image:
      "https://aiartshop.com/cdn/shop/files/a-real-like-dog-ai-image-animal-art-235.webp?v=1712248701",
    description: "Весёлый и энергичный пёс, <br/> обожает играть с мячом.",
    stats: { health: 95, happiness: 85, energy: 100,speed:55 },
  },
  {
    id: 3,
    name: "Nibbles",
    image:
      "https://img.freepik.com/premium-photo/hamster-is-singing-into-microphone_783884-831.jpg",
    description: "Маленький хомяк с большим <br/> аппетитом и любопытством.",
    stats: { health: 70, happiness: 75, energy: 50,speed:80},
  },
  {
    id: 4,
    name: "Blaze",
    image:
      "https://creator.nightcafe.studio/jobs/5QFOTOKx0VRRiUErMKLw/5QFOTOKx0VRRiUErMKLw-ROko6.jpg",
    description: "Мини-дракон с добрым сердцем,<br/> но огненным нравом.",
    stats: { health: 100, happiness: 65, energy: 85 ,speed:70},
  },
];

function Pets() {
  const [count, setCount] = useState(0);

  const [showStats, setShowStats] = useState(false);
  const navigate = useNavigate()
  const dispatch = useAppDispatch()

  const nextHanlder = () => {
    if (count >= 0) {
      setCount((prevElement) => prevElement + 1);
    }
    if (count >= 3) {
      setCount(0);
    }
  };
  const prevHanlder = () => {
    if (count >= 0) {
      setCount((prevElement) => prevElement - 1);
    }
    if (count <= 0) {
      setCount(3);
    }
  };



  const chooseHanlder = (id:number) =>{
    dispatch(getId(id))
    navigate('/')

  }

  return (
    <main className="pets-container">
      <div className="pets-main">
        <section className="texts">
          <h1>CHOOSE A PET</h1>
          <p>Choose the one who is closest to you</p>
        </section>

        <section className="pets-information">
          <div className="img">
            <img src={pets[count].image} className="choose-pet"></img>
          </div>
          <div className="information">
            <p
              dangerouslySetInnerHTML={{ __html: pets[count].description }}
            ></p>
          </div>
        </section>

        <div className="confirm-btn">
          <button className="info-btn" onClick={() => setShowStats(!showStats)}>
            INFORMATION
          </button>
          <button className="choose-btn" onClick={() => chooseHanlder(pets[count].id)}>CHOOSE</button>
        </div>

        <div className="next-prev">
          <button className="prev" onClick={prevHanlder}>
            ⬅️ Предыдущий
          </button>
          <button className="next" onClick={nextHanlder}>
            Следующий ➡️
          </button>
        </div>
      </div>

      {showStats && (
        <div className="pets-stats">
          <section className="pets-information">
            <div className="img">
              <img src={pets[count].image} className="choose-pet"></img>
            </div>
          </section>
          
          <section className="stats">
            <Stats value={pets[count].stats.health} name="Health" image="src\\assets\\cardiogram.png" />
            <Stats value={pets[count].stats.energy} name="Energy" image="src\\assets\\flash.png" />
            <Stats value={pets[count].stats.happiness} name="Happiness" image="src\\assets\\smiling-face.png" />
            <Stats value={pets[count].stats.speed} name="Speed" image="src\\assets\\speed.png" />
          </section>
        </div>
      )}
    </main>
  );
}

export default Pets;
