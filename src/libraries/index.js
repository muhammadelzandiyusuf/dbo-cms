import ReactDOM from "react-dom";
import moment from "moment";
import axios from "axios";
import thunk from "redux-thunk";
import { Helmet } from "react-helmet";

// React Icon
import { AiOutlineLeft, AiOutlineRight, AiOutlineMenu, AiOutlineHome, AiOutlineTeam, AiTwotoneCalendar } from 'react-icons/ai';

// Assets Image
import LogoDBOImage from "assets/images/logo.png";
import userImage from "assets/images/logo.png";

export { ReactDOM, moment, axios, thunk, AiOutlineLeft, AiOutlineRight, LogoDBOImage, userImage, AiOutlineMenu, Helmet,
    AiOutlineHome, AiOutlineTeam, AiTwotoneCalendar
};

export * from "react";
export * from "react-router-dom";
export * from "redux";
export * from "react-redux";