import inter from "../src/app/page";
import { UserContext } from "../src/app/page";
import { useContext } from "react";

const GrandChildComponent = () => {
  const user = useContext(UserContext);
  return (
    <div className="borderbox">
      <h2 className={inter.className}>Grandchild</h2>
      <p className={inter.className}>
        <p>Gets value directly from provider</p>
        <br></br>
        Current User:<span style={{ color: "red" }}>{user}</span>
      </p>
    </div>
  );
};
export default GrandChildComponent;
