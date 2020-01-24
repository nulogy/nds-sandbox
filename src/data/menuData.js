import React from "react";
import {
  Link
} from "react-router-dom";

export const primaryMenu = [
    { name: 'Home',  render:  () => <Link to="/">Home</Link>},
    { name: 'Details',  render:  () => <Link to="/details">Details</Link>},
    { name: 'Custom',  render:  () => <Link to="/custom">Custom</Link>},
  ];
  
  export const secondaryMenu = [
    {
      name: 'Settings',
      items: [
        { name: 'Permissions', href: '/' },
        { name: 'Manage account', href: '/' },
      ],
    },
  ];

  export const search = {
    onSubmit: () => {},
  };