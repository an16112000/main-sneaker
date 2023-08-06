import React from "react";
import Layout from "..";
import Header from "../Header";
import styles from '../Header.module.scss'
import { useParams } from "react-router-dom";



const DetailSneaker = () => {
    let { sneakerId, sneakerSize } = useParams()
    if(sneakerSize === 'size') {
        sneakerSize = ''
    }
    return (
        <>
            <Header />
            <div className={styles.wrapper}>
                <Layout submitCode={sneakerId} size={sneakerSize} />
            </div>
        </>
    )
}

export default DetailSneaker