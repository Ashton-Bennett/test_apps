import { useContext } from "react";
import { UserContext } from "@/app/page";

export default function Header() {
  const user = useContext(UserContext);
  return (
    <>
      Welcome, <span style={{ color: "red" }}>{user}</span>&nbsp;from the header
      component.
    </>
  );
}
