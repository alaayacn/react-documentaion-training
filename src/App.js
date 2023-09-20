import { useState } from "react";
import "./App.css";

let user = {
  name: "Alaa",
  img: "https://wearetechwomen.com/wp-content/uploads/2021/02/shutterstock_1239969316.jpg",
};
const products = [
  { title: "Cabbage", isFruit: false, id: 1 },
  { title: "Garlic", isFruit: false, id: 2 },
  { title: "Apple", isFruit: true, id: 3 },
];

function MyButton({ handleClick, count }) {
  return (
    <div>
      <button onClick={handleClick}>I'm a button</button>;<p>{count}</p>
    </div>
  );
}
function App() {
  const [count, setCount] = useState(0);
  function handleClick() {
    setCount(count + 1);
  }
  return (
    <>
      <h1 className="about">About</h1>
      <p>
        Hello {user.name}
        <br />
        How do you do?
      </p>
      <img src={user.img} alt={"photo of " + user.name} className="image" />
      {products.map((product) => (
        <li
          key={product.id}
          style={{ color: product.isFruit ? "yellow" : "red" }}
        >
          {product.title}
        </li>
      ))}
      <MyButton handleClick={handleClick} count={count} />
      <MyButton handleClick={handleClick} count={count} />
    </>
  );
}

export default App;
