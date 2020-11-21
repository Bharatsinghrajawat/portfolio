import React,{useState,useEffect} from 'react'
import{ Nav , NavbarContainer , NavLogo , MobileIcon , NavMenu , NavItem , NavLinks , NavBtn , NavBtnLink } from './NavbarElements';
import {FaBars} from 'react-icons/fa';
import {animateScroll as scroll} from 'react-scroll';
import Pdf from '../../images/Newresume.pdf';
export default function NavBar({toggle}) {
    const [scrollNav , setScrollNav] = useState(false);
    const changeNav = () => {
        if(window.scrollY >= 80){
            setScrollNav(true)
        }else{
            setScrollNav(false)
        } 
    };
    useEffect(() => {
        window.addEventListener('scroll',changeNav);
        console.log("useEffect from navbar for scroll changed");
    },[scrollNav]);

    const toggleHome = () => {
        scroll.scrollToTop();
    }

    return (
        <>
            <Nav scrollNav={scrollNav}>
                <NavbarContainer>
                    <NavLogo to='/' onClick={toggleHome}>
                        Portfolio
                    </NavLogo>
                    <MobileIcon onClick={toggle}>
                        <FaBars />
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to='about'
                                smooth={true}
                                duration={500}
                                spy={true}
                                exact='true'
                                offset={-80}
                                activeClass='active'
                            >About</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='projects'
                                smooth={true}
                                duration={500}
                                spy={true}
                                exact='true'
                                offset={-80}
                                activeClass='active'                            
                            >Projects</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='technology'
                                smooth={true}
                                duration={500}
                                spy={true}
                                exact='true'
                                offset={-70}
                                activeClass='active'                            
                            >Technology</NavLinks>
                        </NavItem>
                    </NavMenu>
                    <NavBtn>
                        <NavBtnLink href={Pdf} type="application/octet-stream" target='_blank' download>Resume</NavBtnLink>
                    </NavBtn>
                </NavbarContainer>
            </Nav>
        </>
    )
}
