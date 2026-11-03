import Logo from "../assets/logo.png"

function Header() {
    return (
        <>
            <header className="header">
                <div className="header-logo">
                    <img src={Logo} alt="" />
                    <span>Chef Claude</span>
                </div>
            </header>
        </>
    );
}

export default Header;