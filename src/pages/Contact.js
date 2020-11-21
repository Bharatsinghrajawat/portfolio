import React from 'react'
import {ContactContainer , ContactWrapper , ContactDetails , Img , SocialLinks , SocialLinkIcon , SideBtnWrap , SideBarRoute} from './ContactElements'
import {FaInstagram , FaLinkedin , FaGithub} from 'react-icons/fa'
import profile from '../images/profile.jpg'
const Contact = () => {
    return (
        <>
            <ContactContainer>
                <ContactWrapper>
                <Img src={profile} alt='not available' />                    
                    <ContactDetails>
                        <p>Name  : Bharat Singh Rajawat</p>
                        <p>Email : bharatsingh1036@gmail.com</p>
                        <p>Age   : 23 </p>
                        <p>From  : Udaipur , Rajasthan , India</p>
                        <p>Mob.  : 9001544747</p>
                        <SocialLinks>
                            <SocialLinkIcon href='https://www.instagram.com/bharat.singh_rajawat/' target='_blank' aria-label='Instagram'>
                                <FaInstagram />
                            </SocialLinkIcon>
                            <SocialLinkIcon href='https://www.linkedin.com/in/bharat-singh-rajawat-9a00b61a5' target='_blank' aria-label='Linkedin'>
                                <FaLinkedin />
                            </SocialLinkIcon>  
                            <SocialLinkIcon href='https://github.com/Bharatsinghrajawat' target='_blank' aria-label='Github'>
                                <FaGithub />
                            </SocialLinkIcon>   
                        </SocialLinks> 
                <SideBtnWrap>
                    <SideBarRoute href="mailto:bharatsingh1036@gmail.com">E-mail</SideBarRoute>
                </SideBtnWrap>                                                                  
                    </ContactDetails>                    
                </ContactWrapper>
            </ContactContainer>
        </>
    )
}

export default Contact
