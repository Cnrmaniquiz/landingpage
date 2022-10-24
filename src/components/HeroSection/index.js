import React, {useState} from 'react'
import { ArrowForward, ArrowRight, HeroBg, HeroBtnWrapper, HeroContainer, HeroContent, HeroH1, HeroP, VideoBg } from './HeroElements';
import Video from '../../videos/video.mp4';
import { Button } from '../ButtonElement';
const HeroSection = () => {

    const [hover, setHover] = useState (false);
    const onHover= () => {
        setHover(!hover);
    }
  return (
    <HeroContainer id="home">
        <HeroBg>
            <VideoBg autoPlay loop muted src= {Video} type='video/mp4' />
        </HeroBg>
        <HeroContent>
            <HeroH1>World Class Printing Services</HeroH1>
            <HeroP>
                Sign in, explore and add to cart! We guarantee quality printing services just for you.
            </HeroP>
            <HeroBtnWrapper>
                <Button to='signup' onMouseEnter={onHover} onMouseLeave={onHover} primary='true' dark='true'  
                  smooth={true} 
                  duration={500} 
                  spy={true} 
                  exact='true'  >
                    Get started {hover? <ArrowForward/> :<ArrowRight/>}
                </Button>
            </HeroBtnWrapper>
        </HeroContent>
    </HeroContainer>
  )
}

export default HeroSection;