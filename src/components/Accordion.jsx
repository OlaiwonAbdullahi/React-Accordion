import { useState } from "react";

export default function Accordion({ data }) {
  const [curOpen, setCurOpen] = useState(null);
  return (
    <div className="accordion">
      {data.map((el) => (
        <AccordionItem
          curOpen={curOpen}
          onOpen={setCurOpen}
          key={el.num}
          title={el.title}
          num={el.num}
        >
          {el.text}
        </AccordionItem>
      ))}
      <AccordionItem
        curOpen={curOpen}
        onOpen={setCurOpen}
        key="test 1"
        title="What is React?"
        num={22}
      >
        <p>
          {" "}
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem,
          nihil!
        </p>
        <ul>
          <li>Lorem, ipsum.</li>
          <li>Lorem, ipsum.</li>
          <li>Lorem, ipsum.</li>
          <li>Lorem, ipsum.</li>
          <li>Lorem, ipsum.</li>
        </ul>
      </AccordionItem>
    </div>
  );
}

function AccordionItem({ num, title, children, curOpen, onOpen }) {
  const isOpen = num === curOpen;

  const handleIsOpen = () => {
    onOpen(isOpen ? null : num);
  };
  return (
    <div className={`item ${isOpen ? "open" : ""}`} onClick={handleIsOpen}>
      <p className="number">{num < 9 ? `0${num}` : num + 1}</p>
      <p className="title">{title}</p>
      <p className="icon">{isOpen ? "-" : "+"}</p>

      {isOpen && <div className="content-box">{children}</div>}
    </div>
  );
}
