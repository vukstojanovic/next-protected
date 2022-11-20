import { login } from "../utils/login";
import { useCookies } from "react-cookie";
import { useRouter } from "next/router";

export default function Login() {
  const [cookies, setCookie] = useCookies();
  const router = useRouter();

  return (
    <div>
      <h1>Login page</h1>
      <button
        onClick={() => {
          setCookie("user", "Vuk");
          router.push("/");
        }}
      >
        Login
      </button>
    </div>
  );
}
