import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import ReactPlayer from "react-player/youtube";
export const Admin = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8080/admin/serial").then((res) => {
      setData(res.data);
    });
  }, []);

  return (
    <>
      <div style={{ marginTop: "60px" }}>
        {data?.map((el) => (
          <div
            style={{
              color: "white",
              backgroundColor: "red",
              textAlign: "center",
              padding: "10px",
              marginTop: "20px",
            }}
          >
            <h1 key={el._id}>{el.title}</h1>
            <ReactPlayer url={el.url} />
          </div>
        ))}
      </div>
    </>
  );
};
