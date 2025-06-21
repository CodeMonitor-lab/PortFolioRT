import React from 'react'
import AdminImage from '../../assets/bgrImg.png'
// import genImg from '../../assets/gen2.jpeg'
import genImg from '../../assets/pirpgrad.png'
import Styles from './ProfileImage.module.css'

const ProfileImage = () => {
  return (
    <main>
        <section className=' flex justify-center' >
            <img className={Styles.image_radius} width={300} height={300} src={genImg} alt="Profile-Image" />
        </section>
    </main>
  )
}

export default ProfileImage