import { useEffect, useState } from "react";
import { readMessage } from "../utils/contract";

export default function Home() {
  const [message, setMessage] = useState("Loading...");

  useEffect(() => {
    async function fetchMsg() {
      try {
        const msg = await readMessage();
        setMessage(msg);
      } catch (err) {
        console.error(err);
        setMessage("Error fetching message");
      }
    }
    fetchMsg();
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>📬 Blockchain Message</h1>
      <p>{message}</p>
    </div>
  );
}
