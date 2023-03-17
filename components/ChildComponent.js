import inter from "../src/app/page";
import GrandChildComponent from "./GrandChildComponent.js";

const ChildComponent = () => {
  return (
    <div className="borderbox">
      <h2 className={inter.className}>Child component</h2>
      <p className={inter.className}>Does not know or need the user value</p>
      <GrandChildComponent />
    </div>
  );
};
export default ChildComponent;
