import React from 'react'
import {SidebarContainer , Icon , CloseIcon , SidebarWrapper , SidebarMenu , SidebarLink , SideBtnWrap , SideBarRoute} from './SideBarElements'

export default function SideBar({isOpen , toggle}) {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to='about' onClick={toggle}
                                smooth={true}
                                duration={500}
                                spy={true}
                                exact='true'
                                offset={-80}
                                activeClass='active'                    
                    >About</SidebarLink>
                    <SidebarLink to='projects' onClick={toggle}
                                smooth={true}
                                duration={500}
                                spy={true}
                                exact='true'
                                offset={-80}
                                activeClass='active'                    
                    >Projects</SidebarLink>                    
                    <SidebarLink to='technology' onClick={toggle}
                                smooth={true}
                                duration={500}
                                spy={true}
                                exact='true'
                                offset={-80}
                                activeClass='active'                    
                    >Technology</SidebarLink>
                </SidebarMenu>   
                <SideBtnWrap>
                    <SideBarRoute href="mailto:bharatsingh1036@gmail.com">E-mail</SideBarRoute>
                </SideBtnWrap>                            
            </SidebarWrapper>
        </SidebarContainer>
    )
}
