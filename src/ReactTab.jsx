import { useState } from "react";


const ReactTab = () => {

    const [toggle, setToggle] = useState(1)

    const updateToggle = (id) => {
        setToggle(id)
        console.log(`${id} Clicked`);
    }

    return (
        <div>
            <h2>1. React Tab Concept</h2>
            <div className="container">
                <div className="tab-btn">
                    <button className={toggle === 1 ? "clicked-btn" : "btn"} onClick={() => updateToggle(1)}>TAB1</button>
                    <button className={toggle === 2 ? "clicked-btn" : "btn"} onClick={() => updateToggle(2)}>TAB2</button>
                    <button className={toggle === 3 ? "clicked-btn" : "btn"} onClick={() => updateToggle(3)}>TAB3</button>
                </div>
                <div className={toggle === 1 ? "show-content bg-purple" : "content"}>
                    <h1>TAB 1</h1>
                    <p>Content 1 <br /> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam, voluptatibus!</p>
                </div>
                <div className={toggle === 2 ? "show-content bg-yellow" : "content"}>
                    <h1>TAB 2</h1>
                    <p>content 2 <br /> Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium iste quod, vero id nam corporis! Accusamus quibusdam nulla eos optio! Eligendi tenetur doloremque quidem consectetur ullam adipisci possimus assumenda illo quam aliquid eius ratione, culpa, dignissimos reiciendis veritatis eaque? Aliquam?</p>
                </div>
                <div className={toggle === 3 ? "show-content bg-blue" : "content"}>
                    <h1>TAB 3</h1>
                    <p> Content 3 <br />Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus deleniti repellendus quia sit vel atque est neque cumque reprehenderit voluptate nostrum natus inventore voluptatibus explicabo quos ad eveniet, placeat mollitia.</p>
                </div>
            </div>
        </div>
    );
};

export default ReactTab;