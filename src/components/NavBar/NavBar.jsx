import { Link } from "react-router-dom";


const NavBar = () => {
    return (
        <div>
            <ul className="flex justify-center py-4 bg-slate-500 gap-10">
                <li>
                <Link to='/tabs'> React Tab</Link>
                </li>
               
                <li>
                    <Link to={'/animation'}>Animation</Link>
                </li>
                <li>
                    <Link to={'/slider'}>Image Slider</Link>
                </li>
            </ul>
        </div>
    );
};

export default NavBar;