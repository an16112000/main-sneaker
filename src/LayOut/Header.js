import React, {useState} from "react";
import styles from './Header.module.scss'
import { Link } from "react-router-dom";

export const dataType = [
    {
        id: 1,
        title: 'Jordan',
        type: 'jordan'
    },
    {
        id: 2,
        title: 'Air Force 1',
        type: 'airforce1'
    },
    {
        id: 3,
        title: 'Air Max',
        type: 'airmax'
    },
    {
        id: 4,
        title: "Dunk",
        type: 'dunk'
    }
]

const Header = () => {
    const [code, setCode] = useState('')
    const [size, setSize] = useState('size');


    const handleClick = () => {
        setCode('')
        // setSize('')
        window.scrollTo({
            top: 0,
            behavior: `smooth`
        })
    }

    // function handleChoose(e) {
    //     const value = e.target.innerHTML
    //     setModal(true)
    //     setSubmitCode('')
    //     setType(value)
    // }

    function onChangeValue(e) {
        setCode(e.target.value)
    }
    function onChangeSize(e) {
        setSize(e.target.value)
    }
    return (
        <div className={styles.header}>
            <div className={styles.type}>
                {
                    dataType.map(
                        item => {
                            return <Link
                            key={item.id}
                            to={`/${item.type}/page/1`}
                            // onClick={(e) => handleChoose(e)}
                                className={styles.itemHeader}
                            >
                                {item.title}
                            </Link>
                        }
                    )
                }
            </div>
            <div className={styles.search}>
                <input
                    placeholder='Code...'
                    className={styles.input}
                    value={code}
                    onChange={(e) => onChangeValue(e)}
                />
                <input
                    placeholder='Size...'
                    className={styles.input}
                    style={{ width: '50px' }}
                    value={size}
                    onChange={(e) => onChangeSize(e)}
                />
                <Link
                    className={styles.btn}
                    onClick={handleClick}
                    to={`/product/${code}/${size}`}
                >
                    Submit
                </Link>
            </div>
            <div className={styles.filter}>
            </div>


        </div>
    )
}


export default Header;