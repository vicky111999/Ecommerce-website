import { useState } from "react"
import { Authcontext } from "./Authcontext"

export const AuthProvider = ({children})=>{
    const [signbehaviour,setSignbehaviour] = useState(false)
    return(
        <Authcontext.Provider value={{signbehaviour,setSignbehaviour}}>
            {children}
        </Authcontext.Provider>
    )
}