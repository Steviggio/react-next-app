import React from "react";
import axios from "axios";
import useSignIn from "react-auth-kit/hooks/useSignIn";
import { useNavigate } from "react-router";
import { useWorkContext } from "./WorkContext";


const SignInComponent = () => {
  const { setIsAuthenticated } = useWorkContext();
  const navigate = useNavigate();
  const signIn = useSignIn();
  const [formData, setFormData] = React.useState({ email: "", password: "" });

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5678/api/users/login", formData);
      console.log(res)
      if (res.status === 200 && res.data.token) {
        const isSignedIn = signIn({
          auth: {
            token: res.data.token,
            type: "Bearer"
          },
          // refresh: res.data.token,
          userState: {
            name: "Sophie Bluel",
            uid: 1
          }
        });
        console.log(isSignedIn)
        if (isSignedIn) {
          setIsAuthenticated(true)
          navigate("/");
        } else {
          throw new Error("Sign-in failed");
        }
      } else {
        throw new Error("Email or password incorrect!");
      }

    } catch (error) {
      console.error("Login error:", error);
    }
  };

  return (
    <>
      <form onSubmit={onSubmit} className="flex flex-col justify-center items-center font-normal gap-12 text-sm">
        <h3 className="text-greenBtns font-semibold text-4xl ">Log in</h3>
        <div className="flex flex-col w-72 gap-5 text-base">
          <div className="flex flex-col gap-2">
            <label htmlFor="email">E-mail</label>
            <input
              className="w-full h-10 p-2"
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="password">Mot de passe</label>
            <input
              className="w-full h-10 p-2"
              type="password"
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
            />
          </div>
          <input className="bg-greenBtns text-white w-40 h-10 rounded-full mx-auto mt-2 cursor-pointer" type="submit" value="Se connecter" />
        </div>
        {/* Using a span to avoid linter error */}
        <span  className="font-semibold">Mot de passe oublié ?</span>
      </form>
    </>
  );
};

export default SignInComponent;
