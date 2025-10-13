import coin from "../assets/logo/coin-logo.png"

const Loader = () => {
    return (
        <>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
                <div className="loade animate-spin"><img src={coin} alt="" className="h-16 w-auto" /></div>
            </div>
        </>
    )
}

export default Loader