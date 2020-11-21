import React from 'react'
import {InfoContainer , InfoWrapper , InfoRow , Column1 , Column2 , TextWrapper , TopLine , Heading , Subtitle , ImgWrap , Img} from './InfoElements'

export default function info({id,lightBg,imgStart,topLine,lightText,headline,darkText,description,img}) {
    return (
        <>
           <InfoContainer lightBg={lightBg} id={id}>
               <InfoWrapper>
                   <InfoRow imgStart={imgStart}>
                       <Column1>
                          <TextWrapper>
                              <TopLine>{topLine}</TopLine>
                              <Heading lightText={lightText}>{headline}</Heading>
                              <Subtitle darkText={darkText}>{description}</Subtitle>
                             
                          </TextWrapper>
                       </Column1>
                       <Column2>
                          <ImgWrap>
                             <Img src={img} alt='file not available'/>
                          </ImgWrap>
                       </Column2>
                   </InfoRow>
               </InfoWrapper>
           </InfoContainer> 
        </>
    )
}
