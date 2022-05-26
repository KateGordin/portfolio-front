import React from "react";
import "./Actors.scss";
import { useState, useEffect } from "react";
import ActorModal from "../components/ActorModal";
import { useSelector, useDispatch } from "react-redux";
import { selectActors } from "../store/actors/selectors";
import { getAllActors } from "../store/actors/actions";

export default function Actors() {
  const dispatch = useDispatch();
  const actors = useSelector(selectActors);

  //get all actors (function from actions)
  const getActors = async () => dispatch(getAllActors);

  useEffect(() => {
    getActors();
  }, []);

  const [selectedActor, setSelectedActor] = useState(null);
  const onOpen = (actor) => setSelectedActor(actor);
  const onClose = () => setSelectedActor(null);

  return (
    <div className="container cards">
      <div className="row ">
        {actors.map((actor) => (
          <div
            className="col-4 cards__one"
            key={actor.id}
            onClick={() => onOpen(actor)}
          >
            <div className="actor card m-1 col text-center">
              <h3>{actor.name}</h3>
              <img alt="actor" src={actor.image} width={300} />
            </div>
          </div>
        ))}
      </div>
      {selectedActor && <ActorModal actor={selectedActor} onClose={onClose} />}
    </div>
  );
}
