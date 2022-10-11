import * as React from 'react';
import Layout from '../components/layout';

const AboutPage = () => {
    return (
        <Layout pageTitle="About">
            <p>Hi! I'm Max, and I'm a programmer and designer. I'm originally from the Bay Area, but I moved to Vancouver to go to UBC where I studied English, art, and film while volunteering for CiTR 101.9FM campus/community radio.
            </p>
            <p>After a decade of working in marketing and communications, I realised that writing code was the part of my work I loved the most, so I made the slightly terrifying decision to quit my awesome job and take a coding bootcamp.
            </p>
            <p>Some things that are important to me:</p>
            <ul>
                <li>Accessibility - I want everybody to be able to enjoy the things I've made!</li>
                <li>Design - I like beautiful things that are easy to use!</li>
                <li>Collaboration - I love working with all kinds of people to make awesome stuff!</li>
                <li>Community - I've received <em>so</em> much support from my local community and I love giving back!</li>
            </ul>
            <p>Some of my interests and hobbies include:</p>
            <ul>
                <li>VR/AR</li>
                <li>AI/machine learning</li>
                <li>Modelling and rendering in Blender 3D</li>
                <li>Graphic design</li>
                <li>3D printing</li>
                <li>Making music with synthesizers, laptops, and traditional instruments</li>
                <li>Deejaying (I used to be a full-time nightclub DJ!)</li>
                <li>Campus/community radio</li>
                <li>Drag (especially local performers!)</li>
                <li>Painting little plastic elves</li>
            </ul>

        </Layout>
    )
}

export const Head = () => <title>About Me</title>

export default AboutPage