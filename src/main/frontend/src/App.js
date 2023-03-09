import {useEffect, useState} from "react";
import axios from "axios";

function App() {
  const [data, setData] = useState("");
  const getData = async () => {
    await axios.get("http://localhost:8080/main")
        .then((res) => {
          setData(res.data);
        })
  }
  useEffect(() => {
    getData();
  }, []);
  return (
      <><img src={`${process.env.PUBLIC_URL}/src/rabbit.jpg`}/>
        <div className="App">
          {data}
        </div></>
  );
}

export default App;
