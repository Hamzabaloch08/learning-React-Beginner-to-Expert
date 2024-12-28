import { useState } from "react";
import "./App.css";
import Card from "../components/card";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className="flex gap-3">
      <Card
        img="https://media.post.rvohealth.io/wp-content/uploads/2021/06/lizard-iguana-1200x628-facebook.jpg"
        imgName="Lizard"
        title="Lizard Img"
        graph="Lizards are diverse reptiles found in many environments, ranging from small geckos to large monitors. They help control insect populations and some can regenerate lost tails."
      />

      <Card
        img="https://images.unsplash.com/photo-1540573133985-87b6da6d54a9?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bW9ua2V5fGVufDB8fDB8fHww"
        imgName="Monkey"
        title="Monkey Img"
        graph="Monkeys are intelligent primates that live in diverse habitats, from forests to savannas. They are social animals known for their agility and use of tools."
      />
    </div>
  );
}

export default App;
