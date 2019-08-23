import React, { useState } from "react";
import Heading from "./Heading";
import Reset from "./Reset";

const data = [
  { text: "Hello world" },
  { text: "Hello Galaxy" },
  { text: "Hello Universe" }
];

function App() {
  const [count, updateCount] = useState(40);

  return (
    <div>
      {/* <Heading text="Hello World" />
      <Heading text="Hello Universe" /> */}
      <Heading text={`Count: ${count}`} />

      {data.map((item, index) => {
        return <Heading key={index} text={item.text} />;
      })}

      <h4>Current count: {count}</h4>
      <button onClick={() => updateCount(count + 1)}>Increment</button>
      <button onClick={() => updateCount(count - 1)}>Decrement</button>
      <Reset changeTheCountValue={updateCount} />

      {count === 42 && (
        <p>
          You have found the answer to the ultimate question of life, the
          universe, and everything.
        </p>
      )}
    </div>
  );
}

export default App;
