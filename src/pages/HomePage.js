import React,{useState} from 'react'
import Hero from '../components/HeroSection/Hero';
import { homeObjOne , homeObjThree} from '../components/infoSection/Data';
import Info from '../components/infoSection/Info'
import NavBar from '../components/navbar/NavBar'
import Projects from '../components/projects/Projects';
import SideBar from '../components/sidebar/SideBar'

export default function HomePage() {
    const [isOpen , setIsOpen] = useState(false);
    console.log("isOpen before toggle " + isOpen);
    const toggle = () => {
        setIsOpen(!isOpen);
    }
    return (
        <>
            {isOpen? <SideBar isOpen={isOpen} toggle={toggle} /> : null}
            
            <NavBar toggle={toggle}/>
            <Hero />
            <Info {...homeObjOne} />
            {/* <Info {...homeObjTwo} /> */}
            <Projects />
            <Info {...homeObjThree} />
        </>
    )
}
