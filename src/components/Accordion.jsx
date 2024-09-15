import { useState } from "react";

export default function Accordion({ data }) {
  return (
    <div className="accordion">
      {data.map((el) => (
        <AccordionItem
          key={el.num}
          title={el.title}
          text={el.text}
          num={el.num}
        />
      ))}
    </div>
  );
}

function AccordionItem({ num, title, text }) {
  const [isOpen, setisOpen] = useState(false);

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
