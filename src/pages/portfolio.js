import { StaticImage } from 'gatsby-plugin-image';
import * as React from 'react';
import Layout from '../components/layout';

const Portfolio = () => {
    return (
        <Layout pageTitle="Portfolio">
            <section>
                <h3>Brendan Boyd (WIP)</h3>
                <p><i>Brendan Boyd is an amazing puppet-maker and puppeteer who you can see on Apple TV's </i>Fraggle Rock<i> reboot. He's also working with me on his new website! Here's a  peek at our design process.</i></p>
                <StaticImage width="600" alt="Brendan Boyd, a handsome smiling young man with stubble wearing a knitted jacket, holds a grotesque but adorable puppet he made" src="https://github.com/maxwellsquared/minimal-portfolio/blob/main/img/bjb1.jpg?raw=true"/>
                <p>Brendan builds and operates amazing puppets--and designs some of the spookiest, most incredible haunted houses you'll ever see. We've been friends for years and I've created music for several of his productions, so when I realized he didn't currently have a website I just had to put something great together for this awesome human.</p>

                <StaticImage width="600" alt="A mockup with three different sections. Below is a caption that says 'IDEA: different designs for different services?' One design is for puppeteering and has squiggly bright 1990s shapes and a goofy soft puppet with eyes made from ping-pong balls; one is for puppet-making and is decorated with splatters of goo over a background of fake fur with a big picture of a ratty disheveled cat puppet in a priest costume from the movie The Exorcist; one is for haunted houses and has pictures of cobweb-covered skeletons and evil clowns in a dilapidated stone and wood mansion" src="https://github.com/maxwellsquared/minimal-portfolio/blob/main/img/bjb2.jpg?raw=true"/><p>This project is still early in the design stages (Halloween is his busiest time of year!) but I wanted to share some of the early work we've been putting together as this is one of the most fun projects I've ever tackled. In the center of the mockup above, you can see a still from Brendan's puppet version of <i>The Exorcist</i>. You can also get an idea of the way I like to design: providing the client with quick mockups to get a better idea of what they're looking for, then refining once I know I'm on the right track.</p>

            </section>

            <section>
                <h3><a href="http://www.cthulhuteachestyping.com">Cthulhu Teaches Typing</a></h3>
                <p><i>Cthulhu Teaches Typing is a minimalist typing test made for mechanical keyboard enthusiasts. You can log in to save your results or even play against other users in competitive multiplayer.</i></p>

                <p><i></i></p>
                <StaticImage width="600" alt="Spooky yet minimalist website with icon of an abstract tentacled eldritch horror. The text is styled to remind the user of an old typewriter" src="https://github.com/maxwellsquared/minimal-portfolio/blob/main/img/ctt1.jpg?raw=true"/>
                <p>Randomized words run off the right side of the page. As the user types, the text shifts to the left side a word at a time, evoking a vintage typewriter. If a word is incorrect, it shakes and flashes red while a sound effect plays to let the user know they made a mistake.</p>
                <StaticImage width="600" alt="Website with graphs about how fast a user can type" src="https://github.com/maxwellsquared/minimal-portfolio/blob/main/img/ctt2.jpg?raw=true"/>
                <p>Logging in allows the user to view their stats (WPM and accuracy) for their current keyboard as well as overall stats across time. They can also create keyboards using a variety of layouts and select different colours for the keycaps and frame. You'll also notice the site has a light and dark theme you can toggle.</p>
                <p>Everything is stored in a PSQL database using a Ruby on Rails backend.</p>
            </section>
            <section>
                <h3><a href="https://www.reportex.ca">Reportex</a></h3>
                <p><i>Reportex was a full-service legal services firm focusing on court reporting. I was the Digital Content Director and the internal lead on our site redesign. We were bought in 2021 by a big American firm. The next year, I quit to go do programming full-time.</i></p>
                <StaticImage width="600" alt="Reportex website homepage with decorative image of a piece of sculpture" src="https://github.com/maxwellsquared/minimal-portfolio/blob/main/img/reportex-1.jpg?raw=true"/>
                <p>This was an enormous project that took almost a year to complete! I brought in an external consultant to collaborate on fonts, colours, and branding. We knew the site would need to be heavily edited by non-technical people, so we built it using Wordpress to allow for code-free editing by just about anyone.</p>
                <StaticImage width="600" alt="Reportex website homepage with decorative image of a piece of sculpture" src="https://github.com/maxwellsquared/minimal-portfolio/blob/main/img/reportex2.jpg?raw=true"/>
                <p>I ended up having to code quite a bit of functionality from scratch. Some particular favourites were a PHP program to automatically generate and email us filled-in audio request forms for the Supreme Court when a client ordered a transcript and an internal procedures wiki with everything we needed to run our offices.</p>
            </section>

        </Layout>
    )
}

export const Head = () => <title>Max Kuhn - Portfolio</title>

export default Portfolio