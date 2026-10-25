import {createRoot} from "react-dom/client"
import reactIcon from "./assets/icon.webp"
import "./index.css"

const root = createRoot(document.getElementById("root"));

root.render(
  <div className="page-wrapper">
    <img src={reactIcon} alt="React logo" width={100} />

    <h1 className="heading h1">
      Fun facts about React
    </h1>

    <ul>
      <li>Was first released in 2013</li>
      <li>Was originally created by Jordan Walke</li>
      <li>Has well over 100K stars on GitHub</li>
      <li>Is maintained by Meta</li>
      <li>Powers thousands of enterprise aps, including mobile apps</li>
    </ul>
  </div>
)

console.log(<h1>Hello world!</h1>)