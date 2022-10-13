import { Link } from "react-router-dom";

function navbar() {
  return (
    <>
        <div>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/dashboard">Dashboard</Link>
                </li>
            </ul>
            <hr />
        </div>
    </>
  )
}

export default navbar