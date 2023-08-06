import React from "react";
import Header from "../Header";
import { Link } from "react-router-dom";
// import styles from '../Header.module.scss'


const Home = () => {
    
    return (
        <>
            <Header />
            <button>
                <Link to={'/jordan/page/1'}>
                    Click Here
                </Link>
            </button>
        </>
    )
}

export default Home