import uwalogo from "../assets/UWA_logo.svg";

const UWALogo = ({ size, color, className, alt }) => <img
    src={uwalogo}
    alt={alt}
    width={size}
    height={size}
    className={className}
/>

export default UWALogo 