import * as React from "react";
import Layout from "../components/layout";
import { StaticImage } from "gatsby-plugin-image";

const Game = () => {
    return (
        <Layout pageTitle="Dev Log">
            <section>
                <p>
                    I've always been really inspired by small, arcade-style
                    games. From the Newgrounds era to the Vampire Survivors
                    phenomenon, my favourite thing about them is that they make
                    game design feel like something achievable by a single
                    hobbyist. It's great motivation for learning. This year
                    (2023) I decided to build my own 3D game and write down what
                    I learned. It's now{" "}
                    <a href="https://maxwellsquared.itch.io/celestial-vermin-squadron">
                        playable in browser
                    </a>
                    , and I've written about my development process right here.
                </p>
                <StaticImage
                    layout="constrained"
                    width="600"
                    alt="Video game where a ship flies around a planet and shoots glowing targets."
                    src="https://github.com/maxwellsquared/minimal-portfolio/blob/main/img/Gameplay-2.png?raw=true"
                />
                <p>
                    It's not done yet: I still have a lot of features to add,
                    but you can fly a ship around and shoot things with mostly
                    complete effects and controls and scoring. As of the latest
                    update, there are enemies which kill you if you crash into
                    them and a life system--run out and there's a game over
                    screen which pops you back to the main menu, where you can
                    pick a different level.
                </p>
                <h2>Initial Planning</h2>

                <p>
                    I started by thinking about a simple gameplay loop I was
                    reasonably sure I could accomplish in a few weeks while
                    teaching myself some new programming concepts. I've been
                    wanting to build a Survivors-like for a while; the mechanics
                    are simple yet satisfying, and I can think of a ton of ways
                    to tweak them slightly and end up with a whole new game. I
                    decided that combining bullet-heaven-style upgrades with
                    rail shooting à la Star Fox 64 would be something fun,
                    original, and within my capabilities.
                </p>
                <p>
                    So: Star Fox 64, but you go around the level in an endless
                    loop until there are too many enemies and you die, and the
                    more you upgrade your ship, the more enemies you can handle.
                </p>

                <p>
                    I find when building projects that my favourite approach is
                    to start with a minimum viable product and then add features
                    and functionality. Eventually, I settled on the following
                    objectives for my MVP:
                </p>
                <ul>
                    <li>Have a rail system moving the camera along…</li>
                    <li>
                        …where the player can move horizontally and vertically
                        while the gameplay plane moves through the level (think
                        Star Fox 64)...
                    </li>
                    <li>And can fire bullets in a straight line…</li>
                    <li>To kill bad guys.</li>
                </ul>

                <p>
                    I know that I tend to get caught up having fun with details,
                    and adding a bunch of cool weapons and upgraded stats was
                    something that I'd absolutely get bogged down in. I'm
                    looking forward to setting that up after the initial
                    mechanics are rock-solid, but for now I'm keeping the
                    roguelike stuff for later, once I finish adding a simple
                    upgrade system.
                </p>

                <h2>Gameplay Plane and Movement</h2>

                <p>
                    My first task was to implement a gameplay plane that moved
                    along on rails, with the player able to control horizontal
                    and vertical movement of their ship.
                </p>

                <p>
                    One of my first big design decisions was that I wanted the
                    player to move in a loop through the level instead of having
                    a linear track with a beginning and end. I liked the idea of
                    the player's progress being measured in terms of time, not
                    space--it would make playing the same levels over and over
                    feel more natural, and it meant that I could design my
                    levels without needing to keep tight integration with the
                    rest of what I was doing.
                </p>

                <p>
                    This did mean that I'd need to make sure that when the rail
                    for my rail shooter made a turn, I'd have to keep the player
                    and camera pointing the right way:
                </p>
                <StaticImage
                    layout="constrained"
                    width="600"
                    alt="Game interface on a track with a camera and a rocket ship"
                    src="https://github.com/maxwellsquared/minimal-portfolio/blob/main/img/track-movement.png?raw=true"
                />

                <p>
                    I decided the easiest solution for this would be to put
                    everything into a GameplayPlane object which I would send
                    down a track. Inside the GameplayPlane would be the camera,
                    player, and anything else I needed. I would use local values
                    like transform.localPosition to move things relative to the
                    mine cart everything was crammed into.
                </p>

                <p>
                    I also decided to use Cinemachine's dolly track and dolly
                    cart to build my track--I found a Mix and Jam video where
                    they used this setup and it looked like it would fit my
                    needs nicely, so I stole the idea. The track system is very
                    handy and let me easily set up a track around the terrain
                    I'd quickly sculpted. I took the idea a step further by
                    making it an endless loop.
                </p>

                <StaticImage
                    layout="constrained"
                    width="600"
                    alt="Unity interface showing a track and terrain"
                    src="https://github.com/maxwellsquared/minimal-portfolio/blob/main/img/track-movement-2.png?raw=true"
                />

                <p>
                    It came paired with a dolly cart, and I put a reference to
                    that cart in the GameplayPlane script. Once per frame (on
                    Update()), the GameplayPlane object would move itself to
                    wherever the dollyCart was and match the dollyCart's
                    side-to-side rotation. Here's what that looks like in code:
                </p>
                <code>
                    {" "}
                    void Update() <br />
                    &#123;
                    <br />
                    {"\u00A0"}transform.position = dollyCart.position; <br />{" "}
                    <br />
                    {"\u00A0"}// match dollycart's side-to-side rotation
                    <br />
                    {"\u00A0"}Vector3 newRotation = transform.eulerAngles;
                    <br />
                    {"\u00A0"}newRotation.y = dollyCart.transform.eulerAngles.y;
                    <br />
                    {"\u00A0"}transform.eulerAngles = newRotation;
                    <br />
                    &#125;
                </code>

                <p>
                    All the other stuff in the cart, being children, would
                    automatically be moved and rotated as well. The player
                    object also got a function to move horizontally or
                    vertically: if joystick or mouse input was detected, it
                    would put that input into a variable h or v and pass it
                    along to a LocalMove function along with a speed value,
                    which added those variables as a Vector3 to the object's
                    transform.localPosition. (
                    <em>
                        Note: this movement functionality is currently not in
                        the live build--I have a simplified, mouse-only version
                        right now while I'm working on mouse controls!
                    </em>
                    )
                </p>
                <p>
                    Next in LocalMove(), a ClampPosition() function would be
                    called which clamps the player object's position within the
                    camera's viewport:
                </p>
                <code>
                    Vector3 pos =
                    Camera.main.WorldToViewportPoint(transform.position);
                    <br />
                    pos.x = Mathf.Clamp01(pos.x);
                    <br />
                    pos.y = Mathf.Clamp01(pos.y); <br />
                    transform.position = Camera.main.ViewportToWorldPoint(pos);{" "}
                    <br />
                </code>
                <p>
                    {" "}
                    Camera.main returns the main camera in the scene, and the
                    WorldToViewportPoint() method takes in a world space
                    coordinate and returns a corresponding coordinate in
                    normalized viewport space. This means that the pos variable
                    will have values between 0 and 1 for both the x and y axes,
                    where (0,0) is the bottom-left corner of the camera's
                    viewport, and (1,1) is the top-right corner.
                </p>
                <p>
                    First we declare a Vector3 variable named “pos” and assign
                    to it the position of the object in Camera.main's normalized
                    viewport space. The bottom-left corner of the camera
                    viewport is (0,0) and the top-right corner is (1,1), so we
                    use Mathf.Clamp01 to make sure both our x and y values for
                    our pos variable are between 0 and 1. We take our normalized
                    pos variable and use the ViewportToWorldPoint() function on
                    our main camera to turn those viewport space coordinates
                    into world coordinates, and then we pass that into
                    transform.position to move our object in the world to a nice
                    safe location within our viewport.
                </p>
                <p>
                    The end result is a flat plane that the player can move
                    within, travelling along a looping track. I gave my player
                    object a public float forwardSpeed and a reference to the
                    dolly cart so I could set the speed of the gameplay plane by
                    calling a simple function:
                </p>
                <code>
                    void SetSpeed(float x)
                    <br />
                    &#123;
                    <br />
                    {"\u00A0"}dolly.m_Speed = x;
                    <br />
                    &#125;
                    <br />
                </code>

                <p>
                    I'd use this later to let the player boost and stop them
                    when they died, but for the moment I just called it on
                    Start().
                </p>

                <h2>Making It Pretty, Pretty Early</h2>
                <p>
                    I'm putting it here to make it sound like I did the
                    responsible thing and started by using a plain cube for
                    movement until I had the mechanics down, but I was actually
                    messing around in Blender way before I should have. I
                    modelled a simple spaceship with a silhouette designed to
                    catch the player's eye from the rear:
                </p>

                <StaticImage
                    layout="constrained"
                    width="600"
                    alt="a cool spaceship from the back"
                    src="https://github.com/maxwellsquared/minimal-portfolio/blob/main/img/spaceship_beauty_back.png?raw=true"
                />

                <p>
                    I spent less time on the front and side profile, as the
                    player would only rarely see them, but was inspired by some
                    of the sharp body lines on modern cars:
                </p>
                <StaticImage
                    layout="constrained"
                    width="600"
                    alt="a cool spaceship from the front"
                    src="https://github.com/maxwellsquared/minimal-portfolio/blob/main/img/spaceship_beauty_side.png?raw=true"
                />
                <p>
                    These renders are in front of the skybox that I also made
                    around then, combining pictures of clouds with a starfield I
                    generated from noise and some NASA public-domain images of
                    planets and moons which I recolored and filtered to look
                    like they were hanging in the sky above an alien planet.
                </p>
                <p>
                    I find that switching up what I'm doing like this is a great
                    way to stay motivated. If I'm stuck on a programming task,
                    working on a creative task is a great way to get some
                    distance from it--when I come back to what I was doing, I
                    often find myself coming up with solutions that had
                    previously eluded me.
                </p>

                <h2>Shooting</h2>

                <p>
                    I'd previously built an Asteroids clone in Unity, and I
                    thought I would steal some of its shooting functionality and
                    adapt it for 3D.
                </p>

                <p>
                    In Yasssteroids (my yassified Asteroids clone), I used a
                    Bullet prefab with a rigidbody, a box collider, something to
                    render, and a script. The script has a public float for
                    speed and maxLifetime. On Awake() it figures out where its
                    rigidbody is and makes a reference to it; its big trick is a
                    method called Project(Vector2 direction) which adds force to
                    that rigidbody using the direction provided as well as its
                    speed value, then calls Destroy on itself after its max
                    lifetime. It also has an OnCollisionEnter2D method which
                    just destroys it: targets check if they're hit by bullets,
                    bullets don't check if they're hit by targets.
                </p>

                <p>
                    Over in the player object, I made a Shoot() method which
                    sets a vector for the current position plus an offset to get
                    around collision issues. I then instantiate a new bullet
                    using the bullet prefab, the variable I just made for the
                    position, and the player's rotation before calling that
                    bullet's Project() method and passing in the
                    transform.forward of the parent object.
                </p>

                <p>It was fairly simple to adapt this for 3D:</p>

                <code>
                    private void Shoot() <br />
                    &#123;
                    <br />
                    {"\u00A0"}Vector3 shootPos = new
                    Vector3(transform.position.x, transform.position.y,
                    transform.position.z + shootOffset);
                    <br />
                    {"\u00A0"}PlayerBullet bullet =
                    Instantiate(this.bulletPrefab, shootPos,
                    this.transform.rotation);
                    <br />
                    {"\u00A0"}Physics.IgnoreCollision(bullet.GetComponent&lt;
                    Collider&gt; (), GetComponent&lt; Collider&gt; ());
                    <br />
                    {"\u00A0"}bullet.Project(this.transform.forward);
                    <br />
                    &#125;
                </code>

                <p>
                    The biggest issue that I ran into was that I had a rigidbody
                    and a collider on the bullets, and I had a rigidbody and a
                    collider on my player spaceship to prepare it for detecting
                    collisions with the ground. The ship would sometimes collide
                    with bullets occasionally; I was planning on just spawning
                    bullets out of the player collider using the offset I
                    mentioned previously, but I decided it would be better to
                    simply set up a Physics.IgnoreCollision() between the
                    collider in the player object and the one in the bullet.
                </p>
                <h2>My Many Enemies</h2>

                <p>
                    To make sure the rest of the mechanics were solid, I chose
                    to start with simple static targets as enemies. I modelled
                    these targets in Blender, and used very few polygons to make
                    sure I could use a mesh collider without too much trouble.
                </p>

                <p>
                    I planned on having enemies travel around the same track as
                    the player, but in the opposite direction:
                </p>
                <StaticImage
                    layout="constrained"
                    width="600"
                    alt="diagram of two spaceships on a track, pointed at each other"
                    src="https://github.com/maxwellsquared/minimal-portfolio/blob/main/img/track_movement_3.png?raw=true"
                />
                <p>
                    I spawn targets with a dolly cart called EnemyCart. It's a
                    dolly going on the same track as the player but backwards,
                    with a script that initialises an enemy every few seconds at
                    a random offset from the track. This means that as the
                    player moves along the track, they will constantly fly into
                    enemies. I started with a static target--a nice low-hanging
                    fruit to see if my approach worked!
                </p>

                <p>
                    These static targets are based on a prefab which references
                    my GameManager and a particle system prefab called
                    “Splosion.” It has an OnCollisionEnter which, if it collides
                    with a target and the colliding object has the
                    “PlayerBullet” tag, spawns the Splosion particle system,
                    calls a method on the GameManager which adds one to the
                    score, and then destroys itself. The splosion prefab,
                    helpfully, has a particle system which automatically
                    destroys itself once the animation finishes so I don't have
                    to do any fancy scripting to it.
                </p>
                <p>
                    When it came time to add actual enemies, I built a system
                    that acts similar to the target spawner, except instead of
                    actually travelling along the dolly track, it just spawns
                    enemies a fixed distance along the track from the player.
                    Each enemy prefab has a cart, and when they're spawned,
                    their cart is attached to the dolly track. Their prefab also
                    has an invisible focal point just ahead of them on the
                    track. Making the ships aim at this focal point ahead of
                    them is an easy way of making their movement look dynamic,
                    like they're drifting around a racetrack! Each enemy gets a
                    script similar to the target.
                </p>
                <h2>Boost and Camera Shake</h2>
                <p>
                    I added boost to the PlayerController script by checking in
                    Update() if the player was pressing the right mouse button.
                    When the boost button is first pushed, isBoosting is set to
                    true, SetSpeed() is called with forwardSpeed * 2 as an
                    argument, and a looping particle system called
                    boostParticles starts playing. The particle system is a game
                    object which is a child of the Player object, and when boost
                    starts, the player object calls the .Play() method on its
                    reference to the boostParticles object. When the button goes
                    up, isBoosting is set to false, speed returns to
                    forwardSpeed, and the .Stop() method is called on
                    boostParticles.
                </p>

                <p>
                    To make it clear that the player was going really fast, I
                    added a reference to the virtual camera I'd included in the
                    GameplayPlane, and at the start of Update() set that virtual
                    camera's m_Lens.FieldOfView to a variable which I increased
                    over time (if not boosting, that variable decreases over
                    time). The code for this is all still pretty messy, and one
                    of the next things I do is going to be to break it into
                    separate functions instead of just cramming Update() full of
                    stuff.
                </p>

                <p>
                    It wasn't enough, though, and I realized that the boost
                    function needed camera shake. I had to use a coroutine to
                    implement this in the script I put on my camera object:
                </p>
                <code>
                    public IEnumerator Shake(float duration, float magnitude)
                    <br />
                    &#123;
                    <br />
                    {"\u00A0"}Vector3 originalPos = transform.localPosition;
                    <br />
                    {"\u00A0"}float elapsed = 0.0f;
                    <br />
                    {"\u00A0"}while (elapsed &lt; duration)
                    <br />
                    {"\u00A0"}&#123;
                    <br />
                    {"\u00A0"}
                    {"\u00A0"}float x = Random.Range(-1f, 1f) * magnitude;
                    <br />
                    {"\u00A0"}
                    {"\u00A0"}float y = Random.Range(-1f, 1f) * magnitude;
                    <br />
                    <br />
                    {"\u00A0"}
                    {"\u00A0"}transform.localPosition = new Vector3(x, y,
                    originalPos.z);
                    <br />
                    {"\u00A0"}
                    {"\u00A0"}elapsed += Time.deltaTime;
                    <br />
                    <br />
                    {"\u00A0"}
                    {"\u00A0"}// before continuing to the next iteration of the
                    while loop, wait for the next frame <br />
                    {"\u00A0"}
                    {"\u00A0"}yield return null;
                    <br />
                    {"\u00A0"}&#125;
                    <br />
                    <br />
                    {"\u00A0"}transform.localPosition = originalPos;
                    <br />
                    &#125;
                    <br />
                </code>

                <p>
                    Our Shake function is a coroutine--an ongoing thing that
                    lets you pause and pick up where you left off, which makes
                    running a bunch of things at the same time easier. This
                    mostly means that calling it is a little weird: in the
                    player object, instead of just calling
                    cameraShake.Shake(duration, magnitude) I have to use
                    StartCoroutine(cameraShake.Shake(duration, magnitude)), at
                    the top it says IEnumerator, and I can put yield return null
                    in my while loop to have Unity put a bookmark in what it's
                    doing and pick it up on the next frame. The rest of the
                    function just sets a variable to the original local position
                    of the object and another one to an elapsed time of zero,
                    then moves the camera's localPosition around slightly
                    (amplified by the magnitude passed in) until the proper
                    duration is hit, at which point it resets its local
                    position.
                </p>

                <p>
                    For this Shake coroutine, I shake the camera on the local x
                    and y axes, but I decided to add a little camera knockback
                    to make the player's shots feel bigger, so I copied the
                    coroutine but only moved along the Z axis to simulate
                    recoil. I then started this coroutine (with a smaller
                    magnitude and shorter duration) every time the player object
                    called Shoot().
                </p>

                <p>
                    Both of these uses of camera shake make the game feel much
                    more responsive to the player's inputs.
                </p>
                <h2>Game Logic and MVC Pattern</h2>

                <p>
                    At this point, the game was starting to get relatively
                    complicated, and I had a lot of features yet to implement! I
                    decided to attempt a model-view-controller pattern to stay
                    organized. I would have a GameManager object to serve as a
                    model, keeping the score and business logic of the game; a
                    canvas which would display information to the player; and
                    then the player object as a controller to take input and
                    send information to the GameController.
                </p>

                <p>
                    The GameManager currently just keeps track of the player
                    score and lives, but will include upgrades, elapsed level
                    time, and other player progress information in future. It
                    keeps a score variable and has an UpdateScore method which
                    takes in an integer, adds that integer to the score, and
                    updates a scoreText UI element with the score information.
                </p>

                <p>
                    As the game gets more complicated, organizing functionality
                    like this will really start to come in handy!
                </p>

                <h2>Loading Levels</h2>

                <p>
                    I use Unity's asynchronous scene load function to bring in
                    new scenes for the main menu, level loading, game over, and
                    returning to the main menu from a game over. Originally, I
                    was calling a function that started a coroutine where I
                    could 1. load asynchronously, 2. immediately disable setting
                    a new active scene, and then 3. once my async operation's{" "}
                    <i>.progress</i> property was at 90 percent (meaning it was
                    mostly loaded, but not yet set active), I would 4. wait for
                    a keypress (still in the coroutine) and only then would I
                    set the active scene to the new one.
                </p>
                <p>
                    This made the game feel a little smoother, but I was running
                    into huge headaches getting player input into the
                    asynchronous load coroutine. After doing some testing, I
                    found that load times weren't enough of an issue to justify
                    the added complication. At some point in future I might go
                    back to my original idea, but I found myself writing a
                    function to loop through an enum of all the scenes then
                    unloading all the scenes that <i>weren't</i> the active one,
                    and I realized it was getting too complicated for this
                    little game when using the regular asynchronous load worked
                    fine.
                </p>

                <h2>Player Death and Resurrection</h2>

                <p>
                    I'd made some cute terrain, but it was frustrating flying
                    into it and seeing that it was as hollow as a store-brand
                    chocolate bunny. I needed a function to crash the player's
                    ship.
                </p>

                <p>
                    I started with another particle system to represent the
                    explosion as the player's ship hit anything with the
                    "ground" tag (particle systems are fun!). I made a simple
                    additive blend material, which I also applied to my boost
                    particle system.
                </p>

                <p>
                    Over in the player object, I made a PlayerDeath() function
                    which sets some big red text in the middle of the screen to
                    read “D E A D,” stops the boost particles, sets speed to
                    zero, and plays the death particles. Of course, I had to add
                    a big camera shake. I then invoked a PlayerRespawn()
                    function I made that reversed everything, cleared the text,
                    and reset the player position to right back on the track.
                </p>

                <p>
                    I quickly realized that with the way I'd set up my control
                    functions, a dead player could still move, boost, and shoot,
                    so I added an isAlive variable, set it to false on death,
                    and required it to operate any of the controls.
                </p>

                <p>
                    To add a little more pizzazz, I set useGravity to true on
                    the player's rigidBody and gave them an upwards pop, which
                    was unrealistic but funny.
                </p>
                <p>
                    If the player runs out of lives, the PlayerDeath() function
                    will call a GameOver() function that loads the Game Over
                    scene after a couple seconds (before the respawn function is
                    called). At some point I'm going to have the respawn
                    function check if it can run programmatically, but for now I
                    just skirt the issue by running GameOver() after two seconds
                    and Respawn() after four.
                </p>

                <h2>Fun with Render Textures</h2>

                <p>
                    I'd always thought there was something cool about
                    low-resolution games played on a CRT. I tried to get a bit
                    of that analog-style funk into my visuals by throwing some
                    dithering and noise onto a post-processing volume, then
                    adding bloom and carefully calibrating emissive textures and
                    the skybox to make sure that I was getting only the stuff I
                    wanted to glow. I added a tiny bit of chromatic aberration
                    and lens distortion to again mimic that feel, but it was
                    still lacking.
                </p>

                <p>
                    The trick that got me what I was really looking for was
                    projecting everything onto a render texture at 320 x 180
                    resolution (the N64 commonly rendered games at 320x240, but
                    320x180 fits a 16:9 aspect ratio and looks nice on 1080p and
                    4k monitors) and turning off anti-aliasing to get nice sharp
                    pixels.
                </p>
                <p>
                    The current build of the game has the low-res effect
                    disabled as I realized the way I was getting the mouse
                    position was sending the position of the mouse on the
                    320x180 render texture, not the 1920x1080 screen, so the
                    player's movement was drastically limited. I'll fix this in
                    a future build and possibly add a toggle for the effect in
                    an options menu, but for now you get a peek at the assets in
                    dazzlingly high resolution.
                </p>

                <h2>Sound and Music</h2>
                <p>
                    The most important thing to me about a game is how it feels
                    moment-to-moment, and sound is a huge component of that. I
                    knew I wanted blippy, lo-fi effects. I have some experience
                    with synthesizers, and I found a new software synth called
                    LabChirp which is optimized for sound effects instead of
                    music. I combined saw, square, and sine waves and noise with
                    a few different filters and envelopes to make a combination
                    of bleeps, zaps, and explosions. To make them hit a little
                    harder for ears used to modern sound design, I brought them
                    into Audacity, added a bit of compression and EQ, and
                    layered them with each other and with field recordings
                    sourced from royalty-free community sources.
                </p>
                <p>
                    When it came time to actually put the sounds in the game, I
                    began with the enemy death sound and was puzzled as to why
                    it wasn't working. I realized the way I had set it up made a
                    solution difficult: enemies delete their game object on
                    death, so the audio source that started playing the death
                    sound was gone as soon as the enemy was. I decided to attach
                    the audio source to the enemy explosion particle system
                    prefab, instead, which worked perfectly as the particle
                    system deletes itself after it finishes playing (which is
                    well after the sound finishes).
                </p>
                <p>
                    Adding sounds to the player for death and shooting was much
                    simpler, as the player object persists throughout the game,
                    but I did add a function that randomizes the volume and
                    pitch of the shooting sound slightly to make it sound less
                    repetitive. For the boost sound, I took a brief white noise
                    sound with a natural fade-out and wrote a function to play
                    it at a fixed interval while boosting, then played around
                    with that interval until it sounded good.
                </p>
                <p>
                    I made some original music in Ableton and in each scene
                    threw a different track on an audio source and set it to
                    play on awake. After enabling "loop," there was my game
                    music. In the future I'd really like to implement side-chain
                    compression on the music so that the volume ducks when the
                    player shoots or something blows up to make it punchier, but
                    it seems like audio mixing isn't supported well in WebGL and
                    it's really important for me to be able to just send people
                    a link to play this in their browser.
                </p>

                <h2>Environmentalism</h2>

                <p>
                    To make the game world feel a little more alive, I added two
                    larger dolly tracks outside the play area and brought in
                    more ships I made in Blender: a small fighter craft which
                    will be an enemy in future, and a massive capital ship. It
                    adds some much-needed depth to the scene:
                </p>
                <StaticImage
                    layout="constrained"
                    width="600"
                    alt="lots of spaceships flying around with a big one in the distance"
                    src="https://github.com/maxwellsquared/minimal-portfolio/blob/main/img/Gameplay-4.png?raw=true"
                />
                <p>
                    The fighters operate in small swarms, and I used the
                    transform.LookAt function to rotate them at a target
                    slightly ahead of them on the track, which makes them swoop
                    around elegantly and hides the fact that they're on rails.
                </p>
                <p>
                    Later, I started adding large cuboid objects intruding into
                    the player's path to serve as wrecked buildings and (in part
                    of the level) a city the player has to fly through. The
                    dolly track system made it easy to throw obstacles into the
                    player's path to navigate around, and I just tagged them
                    with "ground" so they automatically make the player crash if
                    they run into them. Copy-pasting them and randomly adjusting
                    the height of the cuboid objects gave me a pretty good
                    little city, and I sunk a few of them just enough that the
                    player can skim them as they fly through. I threw some enemy
                    ships on a loop around the city as well, and once I get some
                    textures and effects going (fires? plumes of black smoke?
                    screams?) it should be pretty exciting.
                </p>
                <p>
                    For a second level, I modified the scene for my first level.
                    I felt if I was going to have a planet level, I should have
                    a space level, and a little manipulation of the built-in
                    procedural sky gave me a cool sort of sunset-in-low-orbit
                    effect. I modeled some big torn-up space stations and upped
                    the difficulty by using them to box in the player a little.
                    To fake a night sky effect, I drew a tiny star texture and
                    projected it as a hemisphere around the player using a
                    particle system. The effect is a lot more realistic than a
                    skybox would be unless I was using unreasonably large
                    textures.
                </p>
                <h2>Deployment</h2>
                <p>
                    I decided to build the game for WebGL, which is very handy
                    for getting it onto somewhere like itch.io. Being able to
                    play the game with a click of a button is a huge time saver,
                    and it's also a lot more convenient for people to try out.
                    Unity made it easy to add a splash screen.
                </p>

                <h2>Next Steps</h2>
                <p>
                    My next step is to add a bomb for players which moves along
                    an arc-shaped path and detonates when it hits something. As
                    you can tell from the screenshots, I'm also going to need to
                    figure out how much post-processing I can get away with
                    before it starts looking like an Xbox 360 game.
                </p>
            </section>
        </Layout>
    );
};

export const Head = () => <title>Building a Game</title>;

export default Game;
