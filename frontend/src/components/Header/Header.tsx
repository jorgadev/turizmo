import { useUserContext } from "@/context/UserContext";
import React from "react";

type Props = {};

export default function Header({}: Props) {
  const { user, setUser } = useUserContext();

  console.log(user);

  return <div>Header</div>;
}
