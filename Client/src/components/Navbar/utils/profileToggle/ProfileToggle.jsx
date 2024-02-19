import React from 'react'
import { Container, Image } from './style'

const ProfileToggle = ({profileOpen , setProfileOpen}) => {
  return (
    <Container onMouseEnter={()=>setProfileOpen(true)} onMouseLeave={()=>setProfileOpen(false)}>
      <Image src='https://avatars.mds.yandex.net/i?id=b507a2b8d9382967a186c654f1eeaa74-5262078-images-taas-consumers&n=27&h=480&w=480' alt='profile-image'/>
    </Container>
  )
}

export default ProfileToggle