import { StaticImage } from "gatsby-plugin-image";
import * as React from "react";
import Layout from "../components/layout";

const Portfolio = () => {
    return (
        <Layout pageTitle="Portfolio">
            <section>
                <h3>
                    <a href="https://passed.ai">Passed.AI</a> (React App/Chrome
                    Extension)
                </h3>
                <p>
                    <i>
                        Passed.AI combines an AI scan and a unique document
                        audit to empower teachers to defend the academic
                        integrity of their classroom from text generated by
                        tools like ChatGPT.
                    </i>
                </p>
                <StaticImage
                    layout="constrained"
                    width="600"
                    alt="Google Doc interface showing an AI score"
                    src="https://github.com/maxwellsquared/minimal-portfolio/blob/main/img/pai1.jpg?raw=true"
                />
                <p>
                    As part of a small team, I helped bring this startup to
                    market, and both our React app and vanilla JS Chrome
                    extension feature my work.
                </p>
                <StaticImage
                    layout="constrained"
                    width="600"
                    alt="Website showing Help section with search and YouTube instructional videos"
                    src="https://github.com/maxwellsquared/minimal-portfolio/blob/main/img/pai2.jpg?raw=true"
                />
                <p>
                    One of my responsibilities was building the Help section in
                    our extension (vanilla JS) and web app (React). I
                    dynamically loaded help text and YouTube video embed links
                    from Firebase so we can update our help content without
                    having to publish the whole app/extension. I also
                    implemented Algolia Search in our web app with custom
                    components.
                </p>
            </section>
            <section>
                <h3>
                    <a href="https://www.seedlingsforesteducation.com/">
                        Seedlings
                    </a>{" "}
                    (Website)
                </h3>
                <p>
                    Building websites for local businesses is one of my
                    favourite things to do. I find SME owners a lot of fun to
                    work with--their enthusiasm is contagious! Working with
                    Seedlings to build their new site was no exception.
                </p>
                <StaticImage
                    layout="constrained"
                    width="600"
                    alt="Seedlings website with happy child playing in nature."
                    src="https://github.com/maxwellsquared/minimal-portfolio/blob/main/img/seedlings1.png?raw=true"
                />
                <p>
                    I built this site from the ground up using the Squarespace
                    platform with some custom HTML/CSS/JavaScript. While I
                    generally prefer to work with something like NextJS, having
                    a low/no-code solution for updating the site was important
                    to the client so non-technical staff could perform content
                    updates. The client was thrilled, and the project came in
                    well under budget.
                </p>
                <StaticImage
                    layout="constrained"
                    width="600"
                    alt="Seedlings website with decorative pinecone and grass with daisies."
                    src="https://github.com/maxwellsquared/minimal-portfolio/blob/main/img/seedlings2.png?raw=true"
                />
                <p>
                    This project let me flex my design chops, which is always a
                    great opportunity. In addition to finding fun solutions for
                    displaying all the great photo assets the client had on
                    hand, I subtly updated the logo and designed these pinecone
                    decorative elements to the client's specifications.
                </p>
            </section>
            <section>
                <h3>Celestial Vermin Squadron (Game)</h3>
                <p>
                    I wanted to get better at Unity and C#, so I built this rail
                    shooter. It's still a work in progress, but it's playable
                    and I've learned a ton!{" "}
                    <a href="https://maxwellsquared.itch.io/celestial-vermin-squadron">
                        Here's a prototype
                    </a>{" "}
                    you can play in your browser.{" "}
                    <a href="/game">Here's a dev log</a> I wrote about building
                    the game. I'll be updating it as I add features!
                </p>
                <StaticImage
                    layout="constrained"
                    width="600"
                    alt="Unity interface showing a track and terrain"
                    src="https://github.com/maxwellsquared/minimal-portfolio/blob/main/img/track-movement-2.png?raw=true"
                />
                <p>
                    I used the Cinemachine dolly and track system parented to a
                    GameplayPlane object which contains the player, the camera,
                    and more.{" "}
                </p>

                <StaticImage
                    layout="constrained"
                    width="600"
                    alt="a cool spaceship from the back"
                    src="https://github.com/maxwellsquared/minimal-portfolio/blob/main/img/spaceship_beauty_back.png?raw=true"
                />
                <p>
                    Modelling low-poly assets in Blender is always a lot of fun,
                    and this was no exception! I particularly like the hero ship
                    and its glowing pink engines.
                </p>
                <StaticImage
                    layout="constrained"
                    width="600"
                    alt="Video game where a ship flies around a planet and shoots glowing targets."
                    src="https://github.com/maxwellsquared/minimal-portfolio/blob/main/img/Gameplay-2.png?raw=true"
                />
                <p>
                    To get a retro feel, I used a render texture to rerender
                    each frame of the game at 320x180. I wrote coroutines for
                    camera shake, which are all called differently when the
                    player shoots, boosts, or explodes.
                </p>
            </section>

            <section>
                <h3>
                    <a href="https://simplenpc.vercel.app">SimpleNPC</a> (React
                    App)
                </h3>
                <p>
                    <i>
                        SimpleNPC lets you generate Dungeons and Dragons NPCs on
                        the spot--for those times when your party just HAS to
                        know everything about those background characters you
                        didn't give a second thought.
                    </i>
                </p>
                <StaticImage
                    layout="constrained"
                    width="600"
                    alt="Mobile text interface with a randomly generated Dungeons and Dragons character, held in a fantasy tavern"
                    src="https://github.com/maxwellsquared/minimal-portfolio/blob/main/img/npc1.jpg?raw=true"
                />
                <p>
                    NPCs get randomly generated names, genders, occupations,
                    secrets/rumours, possessions and stat blocks (generated by
                    rolling 4d6 and dropping the lowest die, just like you would
                    IRL!).
                </p>
                <StaticImage
                    layout="constrained"
                    width="600"
                    alt="Text interface with a randomly generated Dungeons and Dragons character"
                    src="https://github.com/maxwellsquared/minimal-portfolio/blob/main/img/npc2.jpg?raw=true"
                />
            </section>
            <section>
                <h3>
                    <a href="https://www.boneandburl.ca">Bone and Burl</a>{" "}
                    (Website)
                </h3>
                <p>
                    Tessa Wright of Bone and Burl hand-crafts beautiful,
                    heirloom-quality wooden furniture and jewelry. She's an
                    incredible woodworker and the pieces she makes are a real
                    delight. I collaborated with a friend to build her a clean,
                    mobile-friendly website using NextJS to showcase her pieces
                    and attract clients for custom work.
                </p>
                <StaticImage
                    layout="constrained"
                    width="600"
                    alt="Website showing a closeup of a woman carving wood"
                    src="https://github.com/maxwellsquared/minimal-portfolio/blob/main/img/boneburl1.png?raw=true"
                />
                <p>
                    In addition to writing code and helping with branding, I
                    went over to Tessa's house and photographed her pieces. I
                    also took some slow-motion video of her working, which I
                    used for a hero video on the site. Seeing Tessa's work in
                    person made me realize how beautiful woodwork could be--she
                    enjoys combining dramatic textures like zebrawood with
                    exquisite joinery--and I knew the site had to communicate
                    that to visitors.
                </p>
            </section>

            <section>
                <h3>
                    <a href="http://www.cthulhuteachestyping.com">
                        Cthulhu Teaches Typing
                    </a>{" "}
                    (App/Game)
                </h3>
                <p>
                    <i>
                        Cthulhu Teaches Typing is a minimalist typing test made
                        for mechanical keyboard enthusiasts. You can log in to
                        save your results or even play against other users in
                        competitive multiplayer.
                    </i>
                </p>

                <p>
                    <i></i>
                </p>
                <StaticImage
                    layout="constrained"
                    width="600"
                    alt="Spooky yet minimalist website with icon of an abstract tentacled eldritch horror. The text is styled to remind the user of an old typewriter"
                    src="https://github.com/maxwellsquared/minimal-portfolio/blob/main/img/ctt1.jpg?raw=true"
                />
                <p>
                    Randomized words run off the right side of the page. As the
                    user types, the text shifts to the left side a word at a
                    time, evoking a vintage typewriter. If a word is incorrect,
                    it shakes and flashes red while a sound effect plays to let
                    the user know they made a mistake.
                </p>
                <StaticImage
                    layout="constrained"
                    width="600"
                    alt="Website with graphs about how fast a user can type"
                    src="https://github.com/maxwellsquared/minimal-portfolio/blob/main/img/ctt2.jpg?raw=true"
                />
                <p>
                    Logging in allows the user to view their stats (WPM and
                    accuracy) for their current keyboard as well as overall
                    stats across time. They can also create keyboards using a
                    variety of layouts and select different colours for the
                    keycaps and frame. You'll also notice the site has a light
                    and dark theme you can toggle.
                </p>
                <p>
                    Everything is stored in a PSQL database using a Ruby on
                    Rails backend.
                </p>
            </section>

            {/* <section>
                <h3>Brendan Boyd Puppetry (WIP)</h3>
                <p>
                    <i>
                        Brendan Boyd is an amazing puppet-maker and puppeteer
                        who you can see on Apple TV's{" "}
                    </i>
                    Fraggle Rock
                    <i>
                        {" "}
                        reboot. He's also working with me on his new website!
                        Here's a peek at our design process.
                    </i>
                </p>
                <StaticImage
                    layout="constrained"
                    width="600"
                    alt="Brendan Boyd, a handsome smiling young man with stubble wearing a knitted jacket, holds a grotesque but adorable puppet he made"
                    src="https://github.com/maxwellsquared/minimal-portfolio/blob/main/img/bjb1.jpg?raw=true"
                />
                <p>
                    Brendan builds and operates amazing puppets--and designs
                    some of the spookiest, most incredible haunted houses you'll
                    ever see. We've been friends for years and I've created
                    music for several of his productions, so when I realized he
                    didn't currently have a website I just had to put something
                    great together for this awesome human.
                </p>

                <StaticImage
                    layout="constrained"
                    width="600"
                    alt="A mockup with three different sections. Below is a caption that says 'IDEA: different designs for different services?' One design is for puppeteering and has squiggly bright 1990s shapes and a goofy soft puppet with eyes made from ping-pong balls; one is for puppet-making and is decorated with splatters of goo over a background of fake fur with a big picture of a ratty disheveled cat puppet in a priest costume from the movie The Exorcist; one is for haunted houses and has pictures of cobweb-covered skeletons and evil clowns in a dilapidated stone and wood mansion"
                    src="https://github.com/maxwellsquared/minimal-portfolio/blob/main/img/bjb2.jpg?raw=true"
                />
                <p>
                    This project is still early in the design stages (Halloween
                    is his busiest time of year!) but I wanted to share some of
                    the early work we've been putting together as this is one of
                    the most fun projects I've ever tackled. In the center of
                    the mockup above, you can see a still from Brendan's puppet
                    version of <i>The Exorcist</i>. You can also get an idea of
                    the way I like to design: providing the client with quick
                    mockups to get a better idea of what they're looking for,
                    then refining once I know I'm on the right track.
                </p>
            </section> */}
            <section>
                <h3>Reportex (Website)</h3>
                <p>
                    <i>
                        Reportex was a full-service legal services firm focusing
                        on court reporting. I was the Digital Content Director
                        and the internal lead on our site redesign. We were
                        bought in 2021 by Veritext, a big American firm. The
                        next year, I quit to go do programming full-time.
                    </i>
                </p>
                <StaticImage
                    layout="constrained"
                    width="600"
                    alt="Reportex website homepage with decorative image of a piece of sculpture"
                    src="https://github.com/maxwellsquared/minimal-portfolio/blob/main/img/reportex-1.jpg?raw=true"
                />
                <p>
                    This was an enormous project that took almost a year to
                    complete! I brought in a talented consultant to collaborate
                    with us on choosing new fonts, refining our colours, and
                    reimagining our brand. We knew the site would need to be
                    heavily edited by non-technical people, so we chose to use
                    use Wordpress to allow for code-free editing by just about
                    anyone.
                </p>
                <StaticImage
                    layout="constrained"
                    width="600"
                    alt="Reportex website homepage with decorative image of a piece of sculpture"
                    src="https://github.com/maxwellsquared/minimal-portfolio/blob/main/img/reportex2.jpg?raw=true"
                />
                <p>
                    Post-launch, I ended up coding quite a bit of functionality
                    from scratch to meet our growing needs. Some particular
                    favourites were a PHP program to automatically generate and
                    email us filled-in audio request forms for the Supreme Court
                    when a client ordered a transcript and an internal
                    procedures wiki with everything we needed to run our
                    offices.
                </p>
            </section>
        </Layout>
    );
};

export const Head = () => <title>Max Kuhn - Portfolio</title>;

export default Portfolio;
