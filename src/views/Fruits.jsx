import { Link } from "react-router-dom";
import { useStateContext } from "../utils/Context/ContextProvider";


const Fruits = () => {

  const { addFruits, fruit } = useStateContext();

  const _fruits = ['Apple', 'Banana ', 'Mango', 'Guava'];

  return (
    <div>
      Fruits

      <ul>
        {_fruits.map((item, ind) => {
          let checkActive = fruit.fruits.includes(item) ? '-- ' : null
          return (
            <li key={ind} onClick={() => addFruits(item)}>
              {checkActive} {item}
            </li>
          )
        })}
      </ul>

      {fruit.fruits.length !== 0 && (
        <div className="button-wrap">

          <button><Link to="/packaging">Next </Link></button>

        </div>
      )}
    </div>
  )
}

export default Fruits
