import { useRouter } from "next/router";
import { useEffect } from "react";
import { useCookies } from "react-cookie";

export default function AuthProvider({ children }) {
  const router = useRouter();
  const [cookies] = useCookies();
  const isAuth = cookies["user"];

  useEffect(() => {
    if (!isAuth) {
      router.push("/login");
    }
  }, [isAuth]);

  return children;
}
