import { Menu, X } from "lucide-react"
import { useState } from "react"
import { NavLink } from "react-router-dom"



const NavLinks = () => {
    return (
        <>
            <NavLink to="/ProductsPage">
                <div className="hover:text-white text-sm">Products</div>
            </NavLink>

            <NavLink to="/ShoppingCartPage">
                <div className="hover:text-white text-sm">Shopping Cart</div>
            </NavLink>

            <NavLink to="/LoginPage">
                <div className="hover:text-white text-sm">Login Page</div>
            </NavLink>
        </>
    )
}

const Nav = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false)

    const toggleNavBar = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
            <nav className="flex justify-end md:w-1/3">
                <div className="text-gray-200 hidden w-full justify-between md:flex">
                    <NavLinks />
                </div>
                <div className="block md:hidden">
                    <button onClick={toggleNavBar}>
                        {isOpen ? <X color="#fff" /> : <Menu color="#fff" />}
                    </button>
                </div>
            </nav>

        </>
    )

}

export default Nav