import React, { useState, useContext } from "react";
import Card from "../components/Card";
import { CreateTheme } from "../context/ThemeProvider";

const Dashboard = ({ products }) => {
  const [productstate, setProductstate] = useState(products);
  const { theme } = useContext(CreateTheme);

  return (
    <div
      className={`min-vh-100 py-5 ${
        theme === "light" ? "bg-light text-dark" : "bg-dark text-light"
      }`}
    >
      {/* Page Title */}
      <div className="container text-center mb-5">
        <h2 className="fw-bold">Shop Our Collection</h2>
        <p className="text-muted">
          Discover trending products across all categories
        </p>
      </div>

      {/* Categories */}
      <div className="container d-flex flex-wrap justify-content-center mb-4">
        {productstate.map((product, index) => (
          <span
            key={index}
            className="badge rounded-pill bg-secondary mx-2 my-2 px-3 py-2"
            style={{ fontSize: "0.9rem" }}
          >
            {product.category}
          </span>
        ))}
      </div>

      {/* Products */}
      <div className="container">
        <div className="row g-4">
          {productstate.map((product, index) => (
            <div className="col-12 col-md-6 col-lg-3" key={index}>
              <Card product={product} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
