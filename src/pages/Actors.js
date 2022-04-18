import React from "react";
import "./Actors.scss";
import { useState } from "react";
import ActorModal from "../components/ActorModal";

export default function Actors() {
  const actors = [
    {
      id: 1,
      name: "spiderman",
      description: "very good",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/9/90/Spiderman.JPG",
      price: 150,
    },

    {
      id: 2,
      name: "fyok",
      description: "super",
      image:
        "https://ekomfort.ru/wa-data/public/shop/products/22/80/18022/images/18774/18774.970.jpg",
      price: 100,
    },

    {
      id: 3,
      name: "turtles",
      description: "nice",
      image:
        "https://cdn.mos.cms.futurecdn.net/khRipjVa7SEL5ndKogPHjj-1200-80.jpg",
      price: 300,
    },

    {
      id: 4,
      name: "princess",
      description: "cute",
      image:
        "https://media-cldnry.s-nbcnews.com/image/upload/t_fit-1500w,f_auto,q_auto:best/newscms/2015_05/870341/150130-latin-disney-princess-wide.jpg",
      price: 100,
    },

    {
      id: 5,
      name: "minion",
      description: "funny",
      image:
        "https://p4.wallpaperbetter.com/wallpaper/291/597/215/5c1c970d40286-wallpaper-preview.jpg",
      price: 150,
    },

    {
      id: 6,
      name: "santa",
      description: "magic",
      image:
        "https://images.theconversation.com/files/302306/original/file-20191118-169393-r78x4o.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=675.0&fit=crop",
      price: 250,
    },
  ];

  const [selectedActor, setSelectedActor] = useState(null);
  const onOpen = (actor) => setSelectedActor(actor);
  const onClose = () => setSelectedActor(null);

  return (
    <div className="container">
      <div className="row">
        {actors.map((actor) => (
          <div className="col-4" key={actor.id}>
            <div className="actor card m-1">
              <h3>{actor.name}</h3>
              <img alt="image" src={actor.image} width={300} />
              <button onClick={() => onOpen(actor)}>Details</button>
            </div>
          </div>
        ))}
      </div>
      {selectedActor && <ActorModal actor={selectedActor} onClose={onClose} />}
    </div>
  );
}
