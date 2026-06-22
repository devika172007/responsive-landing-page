import { useState } from "react";

function Contact() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Contact Page</h1>

      <h2>Count: {count}</h2>

      <button onClick={() => setCount(count + 1)}>
        Increase
      </button>
    </>
  );
}

export default Contact;