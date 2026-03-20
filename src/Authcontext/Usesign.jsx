import { useContext } from "react";
import { Authcontext } from "./Authcontext";

export const useSign =()=>useContext(Authcontext)
