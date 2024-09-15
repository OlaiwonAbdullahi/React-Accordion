import Accordion from "./components/Accordion";
import { faqs } from "./Data";
export default function App() {
  return (
    <div>
      <Accordion data={faqs} />
    </div>
  );
}
