import React from 'react'
import coder from "../assets/signupimg.jpg";
import { useSign } from '../Authcontext/Usesign';
import Signup from '../Components/Signup';
import Login2 from '../Components/Login2';

const Usersign = () => {
  const { signbehaviour } = useSign();
  return (<>
        <form>
             <div className="signupalign">
                <div>
            <img src={coder} alt="Signup page" />
          </div>
          <div className="signupwhole">
            <div className="signuppage">
          {!signbehaviour ?  <Login2/>:<Signup/> }
          </div>
          </div>
             </div>
        </form>
  </>);
}

export default Usersign