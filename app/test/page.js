"use client"

import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Test() {
  const router = useRouter();

  function callAnimation() {
    console.log("aaaaa")
    router.push("/geral")
  }

  useEffect(() => {
    window.addEventListener("wheel", callAnimation);

    return () => {
      window.removeEventListener("wheel", callAnimation);
    };
  }, []);

  return <div>{router.pathname}</div>;
}
