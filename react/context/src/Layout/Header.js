import { Link } from "react-router-dom"
import useSignOut from "react-auth-kit/hooks/useSignOut";
import { useWorkContext } from "../Context/WorkContext";

export default function Header() {
  const { isAuthenticated, setIsAuthenticated } = useWorkContext();
  // const isAuthenticated = useIsAuthenticated();
  const signOut = useSignOut();
  // const navigate = useNavigate();

  const handleSignOut = () => {
    setIsAuthenticated(false)
    signOut();
  }

  return (
    <>
      {isAuthenticated ? (
        <div className="bg-black flex justify-center items-center h-16 gap-2 text-white">
          <img src="./assets/modify-white.png" alt="pen-to-square icon" />
          <p>Mode édition</p>
        </div>) : (
        <> </>
      )
      }
      <header className="w-5/6 flex justify-between text-base font-normal pt-10 mx-auto">
        <div>
          <Link to="/">
            <img src="/assets/bruel-logo.png" width={213} height={42} alt="Logo" />
          </Link>
        </div>
        <nav className="text-lg">
          <ul className="flex gap-8 items-center ">
            {/* Links */}
            <li className="hover:font-semibold cursor-pointer">projets</li>
            <li className="hover:font-semibold cursor-pointer">contact</li>
            {isAuthenticated ? (
              <li className="hover:font-semibold cursor-pointer" onClick={handleSignOut}>logout</li>
            ) : (
              <Link to="/login" className="hover:font-semibold">login</Link>
            )}
            <li className=" cursor-pointer"><img src="/assets/vector.png" alt="Instagram logo" /></li>
          </ul>
        </nav>
      </header>
    </>
  )
}