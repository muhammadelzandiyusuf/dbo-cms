import ReactDOM from "react-dom";
import moment from "moment";
import axios from "axios";
import thunk from "redux-thunk";
import { Helmet } from "react-helmet";
import Notifications from "react-notify-toast";

// React Icon
import { AiOutlineLeft, AiOutlineRight, AiOutlineMenu, AiOutlineTeam, AiOutlineShoppingCart } from 'react-icons/ai';
import { GiFactory } from 'react-icons/gi';

// Assets Image
import LogoDBOImage from "assets/images/logo.png";
import userImage from "assets/images/user.png";

export { ReactDOM, moment, axios, thunk, AiOutlineLeft, AiOutlineRight, LogoDBOImage, userImage, AiOutlineMenu, Helmet,
    AiOutlineTeam, Notifications, AiOutlineShoppingCart, GiFactory
};

export * from "react";
export * from "react-router-dom";
export * from "redux";
export * from "react-redux";