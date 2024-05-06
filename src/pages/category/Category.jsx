import "./category.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Widget from "../../components/widget/Widget";
import Mydatatable from "../../components/mydatatable/mydatatable";

const Category = () => {
  return (
    <div className="Category">
        <Sidebar />
        <div className="mydataContainer">
            <Navbar />
            <div classname="top_widgets">
                <Widget type="user" />
                <Widget type="order" />
                <Widget type="earning" />
                <Widget type="balance" />
            </div>
            <div className="bottom_datatable">
              <Mydatatable />
            </div>
        </div>
    </div>
  )
}

export default Category;