import inter from "../src/app/page";
import ChildComponent from "./ChildComponent";

const Component = () => {
  return (
    <div className="borderbox">
      <h2 className={inter.className}>Component</h2>
      <p className={inter.className}>Doesnt know the value of user.</p>
      <ChildComponent />
    </div>
  );
};

export default Component;
