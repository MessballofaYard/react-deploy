import "./Sidebar.scss";
import { Link } from "react-router-dom";
import DashboardIcon from '@mui/icons-material/Dashboard';
import GroupIcon from '@mui/icons-material/Group';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';
import CategoryIcon from '@mui/icons-material/Category';

const Sidebar = () => {
  return(
    <div className="sidebar">
        <div className="top">
            <Link to="/">
                <span className="logo">Store</span>
            </Link>
        </div>
        <hr />
        <div className="center">
            <ul>
                <p className="title">MAIN</p>
                <li>
                    <DashboardIcon className="icon"/>
                    <span>Dashboard</span>
                </li>
                <p className="title">LIST</p>
                <Link to="/users">
                    <li>
                        <GroupIcon className="user"/>
                        <span>Users</span>
                    </li>
                </Link>
                <Link to="/products">
                    <li>
                        <ShoppingCartIcon className="product"/>
                        <span>Products</span>
                    </li>
                </Link>
                <li>
                    <MenuBookIcon className="order"/>
                    <span>Orders</span>
                </li>
                <Link to="/category">
                    <li>
                        <CategoryIcon className="category"/>
                        <span>Category</span>
                    </li>
                </Link>
                <p className="title">USER</p>
                <li>
                    <AccountCircleIcon className="profile"/>
                    <span>Profile</span>
                </li>
                <li>
                    <LogoutIcon className="logout"/>
                    <span>Logout</span>
                </li>
            </ul>
        </div>
        <div className="bottom">
            <div className="colorOption"></div>
            <div className="colorOption"></div>
        </div>
    </div>
  );
};

export default Sidebar;