import { HeaderStyle } from "./Header.style";
import lighter from "../assets/lighter.png";

export default function Header() {
  return (
    <>
      <HeaderStyle>
        <img src={lighter} />
      </HeaderStyle>
    </>
  );
}
