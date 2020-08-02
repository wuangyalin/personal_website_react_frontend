import styled from 'styled-components';
import { Button, Modal } from 'react-bootstrap';


export const WorksModal = styled(Modal)`
    text-align: center;
    & .tab-content{
        font-size: 15px;
        text-align: left;
    }
    & h3, .h4{
        font-family: "Roboto Slab", serif;
        font-weight: 500;
        line-height: 1.1;
        color: inherit;
        margin-top: 22px;
        margin-bottom: 22px;
        font-size: 1.75rem;
    }
`;

export const Section = styled.section`
    position: relative;
    padding-top: 60px;
    padding-bottom: 60px;
    text-align: center;
    &.text-gradient{
        background: #222222;
        color: #fff;
        background-image: -webkit-linear-gradient(top, #555555 0%, #333333 100%);
        background-image: linear-gradient(to bottom, #555555 0%, #333333 100%);
        background-repeat: repeat-x;
    }
    &.skillList{
        & .icon{
            color: #aaa;
            font-size: 60px;
            text-align: center;
            text-shadow: 5px 5px 0 #333;
        }
        & p{
            font-size: 15px;
            text-align: left;
            &.lead{
                font-size: 1.25rem;
                font-weight: 300;
                text-align: center;
            }
        }
        & h3{
            margin-top: 22px;
            margin-bottom: 22px;
            font-family: "Roboto Slab", serif;
            font-weight: 500;
            line-height: 1.1;
            color: inherit;
        }
    }
`;

export const GradientSection = styled(Section)`
    background: #222222;
    color: #fff;
    background-image: -webkit-linear-gradient(top, #555555 0%, #333333 100%);
    background-image: linear-gradient(to bottom, #555555 0%, #333333 100%);
    background-repeat: repeat-x;
`;


export const SectionTitle = styled.h2`
    display: inline-block;
    font-size: 50px;
    font-weight: 100;
    padding: 10px 0;
    margin-bottom: 44px;
    text-align: center;
    border-bottom: solid 1px #ccc;
    border-top: solid 1px #ccc;
    text-transform: uppercase;
    line-height: 1.2;
`;

export const SocialLink = styled.span`

    &.resume a:hover{
        color: #4285f4;
    }
    &.github a:hover{
        color: #6e5494;
    }
    &.linkedin a:hover{
        color: #4285f4;
    }
`;
export const GreyImg = styled.img`
    filter: grayscale(50%);
`;

export const FilterBtn = styled(Button)`
    border: 1px solid;
`;

export const GalleryProject = styled.div`
    position: relative;
    margin: 0 auto;
    margin-top: 10px;
    width: 250px;
    height: 200px;
    overflow: hidden;
    
    & .gallery_image{
        display: block;
        width: 100%;
        height: auto;
        -webkit-filter: grayscale(50%);
        filter: grayscale(50%);
    }
`;
export const SingleProject = styled.div`
    & .gallery_image{
        display: block;
        width: 100%;
        height: auto;
        -webkit-filter: grayscale(50%);
        filter: grayscale(50%);
    }
`;