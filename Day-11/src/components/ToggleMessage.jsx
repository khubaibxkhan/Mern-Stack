import { useState } from "react"

export const ToggleMessage = () => {
    const [showMessage , setShowMessage] = useState(false);
    const [showList , setShowList] = useState(true)

    const handleClick = () => {
        setShowMessage(!showMessage);
    }

    const handleListClick = () => {
        setShowList(!showList);
    }
    const list = ["HTML", "CSS","Java-script","react","node" ]

  return (
    <div>
        {showMessage && <p>this is a hidden message</p>}
        <button onClick={handleClick}>{showMessage ? "Hide-message" : "Show-message"}</button>

        {
            showList && <ul>{list.map( (item,i) => (
                <li key={i}>{item}</li>
            ))}</ul>
        }
        <button onClick={handleListClick}>{showList ? "Hide-List" : "Show-List"}</button>
    </div>
  )
}

export default ToggleMessage
