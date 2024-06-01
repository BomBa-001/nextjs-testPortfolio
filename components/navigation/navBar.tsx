const NavBar = () => {
    return <>
        <nav className="flex justify-between items-center h-[70px] ">
            <a href="/" className="logo">BomBa</a>
            <ul className="flex justify-between gap-2">
                <li><a href="/">home</a></li>
                <li><a href="/about">about</a></li>
                <li><a href="/skiles">skiles</a></li>
                <li><a href="/contact">contact</a></li>
            </ul>
            <ul className="flex justify-between gap-2">
                <li><a href="/login">login</a></li>
            </ul>
        </nav>

    </>;
};
export default NavBar;
