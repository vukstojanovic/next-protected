import Link from "next/link";
import { logout } from "../utils/logout";
import { useCookies } from "react-cookie";

export default function Nav() {
  const [cookies, setCookie, removeCookie] = useCookies();

  return (
    <nav>
      <h3>Logo</h3>
      <div>
        <span>
          <Link href="/">Home</Link>
        </span>
        <span>
          <Link href="/about">About</Link>
        </span>
        <span>
          <Link href="/contact">Contact</Link>
        </span>
        <span onClick={() => removeCookie("user")}>Logout</span>
      </div>
    </nav>
  );
}
