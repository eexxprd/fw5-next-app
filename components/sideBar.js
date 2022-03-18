import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { IoGridOutline } from 'react-icons/io5'
import { VscArrowUp } from 'react-icons/vsc'
import { HiPlus } from 'react-icons/hi'
import { RiUser3Line } from 'react-icons/ri'
import styles from './sideBar.module.css'

const SideBar = () => {
  const route = useRouter()
  const [active, setActive] = useState('/')
  useEffect(() => {
    setActive(route.pathname)
  }, [route.pathname])
  const menu = [
    { link: '/', name: 'Dashboard', icon: IoGridOutline },
    { link: '/transfer', name: 'Transfer', icon: VscArrowUp },
    { link: '/topup', name: 'Topup', icon: HiPlus },
    { link: '/profile', name: 'Profile', icon: RiUser3Line },
  ]
  return (
    <>
      <style jsx>
        {`
      .nav {
        background-color: white;
        border-radius: 25px;
        list-style-type: none;
      }
      .nav li {
        margin: 10px 0;
      }
      .nav li a{
        color: rgba(58, 61, 66, 0.8);
        padding-left: 10px;
        text-decoration: none;
        border-left: 3px solid transparent;
      }
      .nav li a.active{
        color: #6379F4;
        border-color: #6379F4;
      }
      `}
      </style>
      <ul className='nav'>
        {menu.map(item => {
          const Icon = item.icon
          return (
            <li key={item.name}>
              <Link href={item.link}>
                <a className={active === item.link ? 'active' : ''}>
                  <Icon className='me-3' />
                  {item.name}
                </a>
              </Link>
            </li>
          )
        })}
      </ul>
    </>
  )
}

export default SideBar