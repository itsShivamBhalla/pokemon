import React, { useEffect, useState } from 'react';
import axios from 'axios';

const App =()=>{

    const [num,setNum]=useState();
    const [name,setName] = useState();
    const [move,setMoves]=useState();
    const [moveNum,setMoveNum]=useState();
    // const [moveName, setMoveName]=useState();

    useEffect(()=>{
        async function getData(){
            const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${num}`);
            
            setName(res.data.name);
            setMoves(res.data.moves.length);
            console.log(res);
            // setMoveName(res.data.moves.[{moveNum}].move.name);
        }
        getData();
        
    })


    return(<>
    <h1> <span style={{color: 'red', textTransform:"capitalize"}} >{name}</span> I choose You!!</h1>
    <h1> I am <span style={{color: 'red', textTransform:"capitalize"}} >{name}</span> </h1>
    <h1> I have <span style={{color: 'red'}} >{move}</span> moves</h1>

    <select value={num} onChange={(event)=>{
        setNum(event.target.value)
    }}>
    <option style={{display:"none"}}>-- select an option --</option>
        <option value="1">1</option>
        <option value="25">25</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="6">6</option>
    </select>
    <h1>Check my move</h1>

    <input type='number' placeholder="Choose move number" onChange={(event)=>{
        setMoveNum(event.target.value);
    }}/>

<h1>My move number {moveNum}</h1>
{/* <h1>My move name is {moveName}</h1> */}
   
    </>)
}

export default App;

// unfortunatly move name is not working as all related code is commented above rn i am unable to find a solution that what should i pass with json @ line 19 setMoveName(res.data.moves.[{moveNum}].move.name) if somehow moveNum digit will be passed to this array object then specific name of move can be obtained