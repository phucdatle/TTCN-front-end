import React from "react";
import { Link } from "react-router-dom";
import logo from '../FooterComponent/logo.jpg'
import { Image } from "antd";

const footerStyle = {
  backgroundColor: "rgb(217,217,217)",
  paddingTop: "4rem",
  borderTop: "2px solid black",
};

const gridColumnStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(2, 1fr)",
  gap: "1.5rem",
};

const gridItemStyle = {
  paddingBottom: "1rem",
};

const headingStyle = {
  fontSize: "20px",
  lineHeight: "1.75rem",
  fontWeight: "500",
  marginBottom: "1.25rem",
};

const linkStyle = {
  color: "rgb(26, 26, 26)",
  display: "block",
  width: "100%",
  textDecoration: "none",
  transition: "color 0.3s ease",
};



const addressStyle = {
  lineHeight: "1.75rem",
  marginTop: "0.75rem",
};

function FooterComponent() {
  const Links = [
    {
      title: "Company",
      links: [
        {
          name: "Home",
          link: "/",
        },
        {
          name: "About Us",
          // link: "/order",
        },
        {
          name: "Contact Us",
          link: "/contact-us",
        },
        {
          name: "Product",
          link: "/product-detail",
        },
      ],
    },
    {
      title: "Category",
      links: [
        {
          name: "Keycap",
          link: "#",
        },
        {
          name: "Mouses",
          link: "#",
        },
        {
          name: "Headphone",
          link: "#",
        },
        {
          name: "Keyboard",
          link: "#",
        },
      ],
    },
    {
      title: "My Account",
      links: [
        {
          name: "Dashboard",
          link: "/dashboard",
        },
        {
          name: "My Cart",
          link: "/favorites",
        },
        {
          name: "Profile",
          link: "/profile",
        },
        {
          name: "Change Password",
          link: "/password",
        },
      ],
    },
  ];

  return (
    <div style={footerStyle}>
      <div className="container mx-auto px-2">
        <div style={gridColumnStyle}>
          {Links.map((link, index) => (
            <div key={index} style={gridItemStyle}>
              <h1 style={headingStyle}>{link.title}</h1>
              <ul className="text-sm flex flex-col space-y-3">
                {link.links.map((text, index) => (
                  <li key={index} className="flex items-baseline">
                    <Link to={text.link} style={linkStyle}>
                      {text.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div style={gridItemStyle}>
            <Link to="/">
            <Image src={logo} style={{ width: '170px', height: '85px'}} preview={false} />
              
            </Link>
            <p style={addressStyle}>
              <span>
                Lorem 196 Andrew Road, Suite 200, <br /> New York, NY 10007
              </span>
              <br />
              <span>Tell: </span>
              <br />
              <span>Email: </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FooterComponent; 