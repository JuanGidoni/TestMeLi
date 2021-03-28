import { useRef } from 'react'
import Image from '../../atoms/Image'
import Input from '../../atoms/Input'
import searchIcon from '../../assets/search.png'
import miniLogo from '../../assets/mini_logo.png'
import menuIcon from '../../assets/menu.png'
import Button from '../../atoms/Button'
import { Link } from 'react-router-dom'

const URL = process.env.REACT_APP_BACKEND_URL || 'http://localhost'
const PORT = process.env.REACT_APP_BACKEND_PORT || 5000

const MenuSearch = ({ logo, searchPlaceHolder, icon, sideToggle, setSideToggle, setProducts, inputValue, setInputValue }) => {
    const searchProducts = async (e) => {
        try {
            const fetchData = await fetch(`${URL}:${PORT}/v1/search/${e}`)
            const response = await fetchData.json()
            setProducts(response)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className="d-flex flex-md-fill flex-row p-1 align-items-md-center justify-content-md-center">
            <div className="first-menu-mobile d-flex justify-content-center align-items-center pl-4 pl-md-0">
                <Link to="/">
                    <Image src={miniLogo} className="menu-meli-miniLogo" />
                </Link>
            </div>
            <Link to="/">
                <Image src={logo} className="menu-meli-logo" />
            </Link>
            <div className="seachBar d-flex flex-fill">
                <Input placeholder={searchPlaceHolder} className="w-100 ml-5 menu-meli-search" setInputValue={setInputValue} />
                <div className="icon d-flex h-100 justify-content-center align-items-center p-3 bg-white cursor-pointer" onClick={() => searchProducts(inputValue)}>
                    <img src={searchIcon} alt={searchPlaceHolder} className="icon-search" />
                </div>
            </div>
            <div className="d-flex align-items-md-center justify-content-md-center align-content-end">
                <Image src={icon} className="menu-meli-ad" />
                <Button type="sideMenu" onClick={() => setSideToggle(!sideToggle)} className="d-block d-md-none btn align-content-end">
                    <Image src={menuIcon} className="icon-search" />
                </Button>
            </div>
        </div>
    )
}

export default MenuSearch
