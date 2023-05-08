import { useState } from 'react';
import "./App.css"
const NewApi = () => {
    const[data, setData] = useState({});

    const newPress = () => {
        fetch(`https://randomuser.me/api`)
        .then(res => res.json())
        .then((result) => {
            setData(result);
            console.log(result);
        })
    }

  return (
    <div id="container">
        <div id="secondContainer">
            <button id="btn" onClick={newPress}>Click Here</button>

            {Object.values(data).length > 0 &&
                    <>
                        <p id="name">Name: {data.results[0].name.title}.{data.results[0].name.first} {data.results[0].name.last}</p>
                        <p id="pn">Phone Number: {data.results[0].phone}</p>
                        <img id='img' src={data.results[0].picture.large}/>
                    </>}
        </div>
    </div>
  )
}

export default NewApi;
