import styled from 'styled-components'

export const ContactContainer = styled.div`
    background : #0c0c0c ;
    position : absolute;
    display : grid ;
    height : 100% ;
    width : 100%;
 
`;

export const ContactWrapper = styled.div`
    display : grid;
    position : absolute : 
    justify-content : center;
    @media screen and (max-width:768px){
        grid-template-columns : 1fr ;
        justify-content : center;
    }
`;

export const ContactDetails = styled.div`
    color : #fff;
    display : grid ;
    font-size : 2rem;
    justify-content : center ;
    align-items : center; 
    @media screen and (max-width: 768px){
        font-size : 1rem;
    }

`;

// export const Img = styled.img`
//     height : 100%;
//     width : 100%;
//     border-radius :20px;
//     align-items : center ;

//     @media screen and (max-width: 768px){
//         height : 55%;
//         width :50%;
//     }
// `;

export const SocialLinks = styled.div`
    display : flex ;
    justify-content : space-around;
    align-items : center;
`;

export const SocialLinkIcon = styled.a`
    color : #fff;
    font-size : 24px;
`;

export const SideBtnWrap = styled.div`
    display : flex ;
    justify-content : center ;
`;

export const SideBarRoute = styled.a`
    border-radius : 50px ;
    background : #01bf71;
    white-space : nowrap ;
    padding : 16px 64px ;
    color : #010606 ;
    font-size : 16px ;
    outline : none ;
    border : none ;
    cursor : pointer ;
    transition : all 0.2s ease-in-out ;
    text-decoration : none ;

    &:hover{
        transition : all 0.2s ease-in-out ;
        background : #fff;
        color : #010606;
    }
`;