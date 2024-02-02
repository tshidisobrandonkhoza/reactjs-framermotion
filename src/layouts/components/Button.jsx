import { NavLink } from "react-router-dom"
const Button = ({ title, button }) => {
    return (
        <div className="button-box">
            <h2>{title} </h2>
            <div className="button-wrapper">
                {
                    button && button.map((btn, ind) => {
                        // var link = btn[1] ? `/${btn[1]}` : '/';
                        // var label = btn[0] ? btn[0] : null;
                        const [label = null, link = '/'] = btn;
                        return (
                            <button key={ind}><NavLink to={link}>{label}</NavLink></button>
                        );
                    })
                }
              
            </div>
        </div>
    )
}

export default Button
