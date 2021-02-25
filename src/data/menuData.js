import React from "react";
import { Link } from "react-router-dom";

export const primaryMenu = [
  { name: "Home", render: () => <Link to="/">Home</Link> },
  { name: "Details", render: () => <Link to="/details">Details</Link> },
  { name: "Charts", render: () => <Link to="/charts">Charts</Link> },
  { name: "Capacity", render: () => <Link to="/capacity">Capacity</Link> }
];

export const secondaryMenu = [
  {
    name: "Settings",
    items: [
      { name: "Permissions", href: "/" },
      { name: "Manage account", href: "/" }
    ]
  }
];

export const search = {
  onSubmit: () => {}
};
