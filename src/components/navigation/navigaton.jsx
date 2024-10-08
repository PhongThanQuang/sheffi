import {FiHeart} from "react-icons/fi";
import { AiOutlineShoppingCart, AiOutlineUserAdd } from "react-icons/ai";
import "./navigation.css"

const Navigation = ({handleInputChange,query}) => {
    return (
        <nav>
            <div className="nav-container col-4">
                <input type="text"
                    className="search-input"
                    onChange={handleInputChange}
                    value={query}
                    placeholder="Enter your search here" />
            </div>
            <div className="profile-container">
                <a href="#">
                    FEEDBACK
                </a>
            </div>
        </nav>
    )
}

export default Navigation;