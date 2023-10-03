import React from "react";
import styles from './navStyles.module.css'
import Image from "next/image";
import Link from "next/link";
import Icon from '/src/images/iCON 7 1.png'



export default function NavBar(){
    return(
        <>
        <nav className={styles.nav}>
            <div className={styles.logo}> 
            <Link href={"/"}><Image src={Icon} alt="icon" className= {styles.img}/></Link>
            <Link href={"/"} className={styles.logo_heading}>HelpMeOut</Link>
            </div>

            <div className={styles.center_nav}>
            <h3  className={styles.center_item}>Features</h3>
            <h3  className={styles.center_item}>How It Works</h3>
            </div>

            <div className={styles.left}>
          <Link href={"/signin"} className={styles.left_item}>Get Started</Link>  
            </div>
            </nav>
        </>
    )
}