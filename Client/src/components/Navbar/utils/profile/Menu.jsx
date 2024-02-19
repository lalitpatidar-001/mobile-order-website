import React, { useContext } from 'react'
import { Container, Option, Text, Wrapper } from './style'
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';
import NotificationsActiveOutlinedIcon from '@mui/icons-material/NotificationsActiveOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import PowerSettingsNewOutlinedIcon from '@mui/icons-material/PowerSettingsNewOutlined';
import { Link } from 'react-router-dom';
import { userContext } from '../../../../context/userContext';

const Menu = ({ profileOpen, setProfileOpen }) => {
  const {isLoggedIn} = useContext(userContext)
  return (
    <Container onMouseEnter={() => (setProfileOpen(true))} onMouseLeave={() => (setProfileOpen(false))}>
      <Option><Wrapper><AccountCircleOutlinedIcon style={{ fontSize: 18 }} /><Text>Profile</Text></Wrapper></Option>
      <Link to={`/order/${isLoggedIn?._id}`} style={{textDecoration:"none" , color:"inherit"}}>
      <Option><Wrapper><Inventory2OutlinedIcon style={{ fontSize: 18 }} /><Text>Orders</Text></Wrapper></Option>
      </Link>
      <Option><Wrapper><NotificationsActiveOutlinedIcon style={{ fontSize: 18 }} /><Text>Notifications</Text></Wrapper></Option>
      <Option><Wrapper><SettingsOutlinedIcon style={{ fontSize: 18 }} /><Text>Settings</Text></Wrapper></Option>
      <Option><Wrapper><PowerSettingsNewOutlinedIcon style={{ fontSize: 18 }} /><Text>Logout</Text></Wrapper></Option>
    </Container>
  )
}

export default Menu