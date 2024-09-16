import { useState } from "react";

export default function Accordion({ data }) {
  const [curOpen, setisOpen] = useState(1);
  return (
    <div className="accordion">
      {data.map((el) => (
        <AccordionItem
          curOpen={curOpen}
          onOpen={setisOpen}
          key={el.num}
          title={el.title}
          text={el.text}
          num={el.num}
        />
      ))}
    </div>
  );
}

function AccordionItem({ num, title, text, curOpen, onOpen }) {
  const isOpen = num === curOpen;

  const handleIsOpen = () => {
    setisOpen(!isOpen);
  };
  return (
    <div className={`item ${isOpen ? "open" : ""}`} onClick={handleIsOpen}>
      <p className="number">{num < 9 ? `0${num}` : num + 1}</p>
      <p className="title">{title}</p>
      <p className="icon">{isOpen ? "-" : "+"}</p>

      {isOpen && <div className="content-box">{text}</div>}
    </div>
  );
}
