import React from 'react'
import { Link } from "react-router-dom"
import "./Navbar.css"
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRightToBracket, faHome, faPen } from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {
  return (
    <nav>
        <Link to="/"><FontAwesomeIcon icon={faHome} />ホーム</Link>
        <Link to="/createpost"><FontAwesomeIcon icon={faPen} />記事投稿</Link>
        <Link to="/login"><FontAwesomeIcon icon={faArrowRightToBracket} />ログイン</Link>

    </nav>
  )
}

export default Navbar