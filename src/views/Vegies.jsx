import { Link } from "react-router-dom";
import { useStateContext } from "../utils/Context/ContextProvider";

const Vegies = () => {
    const { addVegies, vegie } = useStateContext();

    const _vegies = ['Potato', 'Bean', 'Lettuce', 'Spinach'];
  
    return (
      <div>
       Vegies
  
        <ul>
          {_vegies.map((item, ind) => {
            let checkActive = vegie.vegies.includes(item) ? '-- ' : null
            return (
              <li key={ind} onClick={() => addVegies(item)}>
                {checkActive} {item}
              </li>
            )
          })}
        </ul>
  
        {vegie.vegies.length !== 0 && (
          <div className="button-wrap">
  
            <button><Link to="/packaging">Next </Link></button>
  
          </div>
        )}
      </div>
    )
}

export default Vegies 