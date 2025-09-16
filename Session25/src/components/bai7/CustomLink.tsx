import { Link } from "react-router-dom";

const CustomLink = () => {
  return (
    <div>
      <h3>Go to:</h3>
      <Link to="/home-page">Home Page</Link>
    </div>
  );
};

export default CustomLink;