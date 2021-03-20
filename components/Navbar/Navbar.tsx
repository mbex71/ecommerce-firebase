import Link from 'next/link'

const Navbar = () =>{
    return (
        <div className="flex flex-row bg-red-100">
            <Link href="/">
                <a>Home</a>
            </Link>
            <Link href="/">
                <a>Home</a>
            </Link>
            <Link href="/">
                <a>Home</a>
            </Link>
        </div>
    )
}

export default Navbar;