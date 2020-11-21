import React,{useState} from 'react'
import {HeroContainer , HeroBg , VideoBg ,HeroContent , HeroH1 , HeroP , HeroBtnWrapper , ArrowForward , ArrowRight , Button} from './HeroSectionElements'
import video from '../../videos/video.mp4'

export default function Hero() {
    const [hover , setHover] = useState(false);

    const onHover = () => {
        setHover(!hover);
    }

    return (
        <>
            <HeroContainer>
                <HeroBg>
                    <VideoBg autoPlay loop muted src={video} type='video/mp4' />
                </HeroBg>
                <HeroContent>
                    <HeroH1>I'm a Front End Developer</HeroH1>
                    <HeroP>
                        I'm passionate about technology. I have keen interest in web technology. Code flows in my veins .
                    </HeroP>
                    <HeroBtnWrapper>
                        <Button to='/contact' onMouseEnter={onHover} onMouseLeave={onHover} >
                            Contact Me {hover ? <ArrowForward /> : <ArrowRight />}
                        </Button>
                    </HeroBtnWrapper>
                </HeroContent>
            </HeroContainer>
        </>
    )
}
