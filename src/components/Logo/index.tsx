import LogoIcon from "@/asset/logo/logo.svg"
import { LogoWrapper } from "./style"

const Logo = () => {
    return <LogoWrapper>
        <img src={LogoIcon} alt=""/>
        <h1>
            RKAI 1
        </h1>
    </LogoWrapper>
}

export default Logo;