import React, { useState, useEffect } from 'react';
import Nav from './Nav.jsx';
import Actor from './Actor.jsx';

const App = () => {
    const [actorId, setActorId] = useState('');
    const [actorInfo, setActorInfo] = useState([]);
    const [actorRatings, setActorRatings] = useState([]);
    const [actorGenres, setActorGenres] = useState([]);

    const handleClickActorId= (id) => {
        setActorId(id)
    }

    useEffect(()=> {
        if(actorId != '') {
            fetch(`https://classes.codingbootcamp.cz/assets/classes/workouts/actor-o-matic/actor/${actorId}`)
                .then(res => res.json())
                .then(data => {
                setActorInfo(data);
                });
            fetch(`https://classes.codingbootcamp.cz/assets/classes/workouts/actor-o-matic/actor/${actorId}/ratings`)
                .then(res => res.json())
                .then(data => {
                setActorRatings(data);
                });
            fetch(`https://classes.codingbootcamp.cz/assets/classes/workouts/actor-o-matic/actor/${actorId}/genres`)
                .then(res => res.json())
                .then(data => {
                setActorGenres(data);
                });
        }
    }, [actorId])

    return (
        <div>
            <Nav 
            onClick={handleClickActorId}
            />
            <Actor
            actorInfo={actorInfo}
            actorRatings={actorRatings}
            actorGenres={actorGenres}
            />

        </div>
    )
}
export default App;