import React, { useEffect, useState } from 'react'

const  App =()=>{

    const [num,setNum]=useState(0);
    
    useEffect(()=>{
        // alert("clicked");
        document.title=`you clicked me ${num} times`
    },[num])

return (<>

<button onClick={()=>{
    setNum(num+1);
}}>
    click me{num}
</button>

</>
)
};

export default App;
