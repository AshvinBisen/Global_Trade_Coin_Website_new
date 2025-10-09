const Wave = ({
    colorTop, colorBottom
}) => {
    return (
        <>
            <svg viewBox="0 0 3598 364" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect y="40.9089" width="3597.81" height="282.181" fill="url(#paint0_linear_435_13)" />
                <path
                    d="M0 170.002C1781.27 610.91 1834.18 -191.543 3597.81 170.002V364.001C3597.81 364.001 1405.03 364.001 0 364.001V170.002Z"
                    fill={colorBottom} />
                <path
                    d="M3597.81 149.909C1825.36 -202.817 1763.63 590.817 0.00027903 149.908L0.000292135 0.000246781C0.000292135 0.000246781 2192.78 0.000102094 3597.81 0.000224926L3597.81 149.909Z"
                    fill={colorTop} />
                <defs>
                    <linearGradient id="paint0_linear_435_13" x1="-2.40645e-06" y1="175.169" x2="3590.32" y2="9.68072" gradientunits="userSpaceOnUse">
                        <stop stopColor="#FFA200">
                            <stop offset="0.489" stopColor="#FFD996">
                                <stop offset={1} stopColor="#FFA200">
                                </stop></stop></stop></linearGradient>

                </defs>
            </svg>
        </>
    )
}

export default Wave