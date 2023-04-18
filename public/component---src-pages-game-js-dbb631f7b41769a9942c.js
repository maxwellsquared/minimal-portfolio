"use strict";(self.webpackChunkminimal_portfolio=self.webpackChunkminimal_portfolio||[]).push([[930],{5470:function(e,t,a){a.r(t),a.d(t,{Head:function(){return i}});var n=a(7294),o=a(8285),l=a(3723),i=function(){return n.createElement("title",null,"Building a Game")};t.default=function(){return n.createElement(o.Z,{pageTitle:"Building a Game"},n.createElement("section",null,n.createElement("p",null,'Over the past year, I\'ve fallen in love with a new kind of video game: something halfway between a traditional indie roguelike and a classic arcade game (take your pick of "classic": Newgrounds flash titles, 1980s coin-op games, or mobile games from the early App Store era). These things are snackable, usually with simple graphics (Vampire Survivors, probably the biggest example of the genre, started with art from an asset pack) and satisfying mechanics that offer some kind of persistent upgrades as incentive to complete bite-sized runs. If triple-A games are bloated early-70s prog rock albums, these games are the first Ramones album: 29 minutes long, recorded in a week for $6400, and nothing but bangers. Like that Ramones album, the best part is that it makes you think, “Hey, I could do this,” so I did.'),n.createElement(l.S,{width:"600",alt:"Video game where a ship flies around a planet and shoots glowing targets.",src:"https://github.com/maxwellsquared/minimal-portfolio/blob/main/img/Gameplay-2.png?raw=true",__imageData:a(3178)}),n.createElement("p",null,"Or, at least, I'm doing it. It's not done yet: I still have a lot of features to add, but you can fly a ship around and shoot things with mostly complete effects and controls and scoring."),n.createElement("p",null,"Here's my process so far."),n.createElement("h2",null,"Initial Planning"),n.createElement("p",null,"I started by thinking about a simple gameplay loop I was reasonably sure I could accomplish in a few weeks while teaching myself some new programming concepts. I've been wanting to build a Survivors-like for a while; the mechanics are simple yet satisfying, and I can think of a ton of ways to tweak them slightly and end up with a whole new game. I decided that combining bullet-heaven-style upgrades with rail shooting à la Star Fox 64 would be something fun, original, and within my capabilities."),n.createElement("p",null,"I find when building projects that my favourite approach is to start with a minimum viable product and then add features and functionality. Eventually, I settled on the following objectives for my MVP:"),n.createElement("ul",null,n.createElement("li",null,"Have a rail system moving the camera along…"),n.createElement("li",null,"…where the player can move horizontally and vertically while the gameplay plane moves through the level (think Star Fox 64)..."),n.createElement("li",null,"And can fire bullets in a straight line…"),n.createElement("li",null,"To kill bad guys.")),n.createElement("p",null,"I know that I tend to get caught up having fun with details, and adding a bunch of cool weapons and upgraded stats was something that I'd absolutely get bogged down in. I'm looking forward to setting that up after the initial mechanics are rock-solid, but for now I'm keeping the roguelike stuff for later."),n.createElement("h2",null,"Gameplay Plane and Movement"),n.createElement("p",null,"My first task was to implement a gameplay plane that moved along on rails, with the player able to control horizontal and vertical movement of their ship."),n.createElement("p",null,"One of my first big design decisions was that I wanted the player to move in a loop through the level instead of having a linear track with a beginning and end. I liked the idea of the player's progress being measured in terms of time, not space--it would make playing the same levels over and over feel more natural, and it meant that I could design my levels without needing to keep tight integration with the rest of what I was doing."),n.createElement("p",null,"This did mean that I'd need to make sure that when the rail for my rail shooter made a turn, I'd have to keep the player and camera pointing the right way:"),n.createElement(l.S,{width:"600",alt:"Game interface on a track with a camera and a rocket ship",src:"https://github.com/maxwellsquared/minimal-portfolio/blob/main/img/track-movement.png?raw=true",__imageData:a(719)}),n.createElement("p",null,"I decided the easiest solution for this would be to put everything into a GameplayPlane object which I would send down a track. Inside the GameplayPlane would be the camera, player, and anything else I needed. I would use local values like transform.localPosition to move things relative to the mine cart everything was crammed into."),n.createElement("p",null,"I also decided to use Cinemachine's dolly track and dolly cart to build my track--I found a Mix and Jam video where they used this setup and it looked like it would fit my needs nicely, so I stole the idea. The track system is very handy and let me easily set up a track around the terrain I'd quickly sculpted."),n.createElement(l.S,{width:"600",alt:"Unity interface showing a track and terrain",src:"https://github.com/maxwellsquared/minimal-portfolio/blob/main/img/track-movement-2.png?raw=true",__imageData:a(2415)}),n.createElement("p",null,"It came paired with a dolly cart, and I put a reference to that cart in the GameplayPlane script. Once per frame (on Update()), the GameplayPlane object would move itself to wherever the dollyCart was and match the dollyCart's side-to-side rotation. Here's what that looks like in code:"),n.createElement("code",null," ","void Update() ",n.createElement("br",null),"{",n.createElement("br",null)," ","transform.position = dollyCart.position; ",n.createElement("br",null)," ",n.createElement("br",null)," ","// match dollycart's side-to-side rotation",n.createElement("br",null)," ","Vector3 newRotation = transform.eulerAngles;",n.createElement("br",null)," ","newRotation.y = dollyCart.transform.eulerAngles.y;",n.createElement("br",null)," ","transform.eulerAngles = newRotation;",n.createElement("br",null),"}"),n.createElement("p",null,"All the other stuff in the cart, being children, would automatically be moved and rotated as well. The player object also got a function to move horizontally or vertically: if joystick or mouse input was detected, it would put that input into a variable h or v and pass it along to a LocalMove function along with a speed value, which added those variables as a Vector3 to the object's transform.localPosition."),n.createElement("p",null,"Next in LocalMove(), a ClampPosition() function would be called which clamps the player object's position within the camera's viewport:"),n.createElement("code",null,"Vector3 pos = Camera.main.WorldToViewportPoint(transform.position);",n.createElement("br",null),"pos.x = Mathf.Clamp01(pos.x);",n.createElement("br",null),"pos.y = Mathf.Clamp01(pos.y); ",n.createElement("br",null),"transform.position = Camera.main.ViewportToWorldPoint(pos);"," ",n.createElement("br",null)),n.createElement("p",null," ","Camera.main returns the main camera in the scene, and the WorldToViewportPoint() method takes in a world space coordinate and returns a corresponding coordinate in normalized viewport space. This means that the pos variable will have values between 0 and 1 for both the x and y axes, where (0,0) is the bottom-left corner of the camera's viewport, and (1,1) is the top-right corner."),n.createElement("p",null,"First we declare a Vector3 variable named “pos” and assign to it the position of the object in Camera.main's normalized viewport space. The bottom-left corner of the camera viewport is (0,0) and the top-right corner is (1,1), so we use Mathf.Clamp01 to make sure both our x and y values for our pos variable are between 0 and 1. We take our normalized pos variable and use the ViewportToWorldPoint() function on our main camera to turn those viewport space coordinates into world coordinates, and then we pass that into transform.position to move our object in the world to a nice safe location within our viewport."),n.createElement("p",null,"The end result is a flat plane that the player can move within, travelling along a looping track. I gave my player object a public float forwardSpeed and a reference to the dolly cart so I could set the speed of the gameplay plane by calling a simple function:"),n.createElement("code",null,"void SetSpeed(float x)",n.createElement("br",null),"{",n.createElement("br",null)," ","dolly.m_Speed = x;",n.createElement("br",null),"}",n.createElement("br",null)),n.createElement("p",null,"I'd use this later to let the player boost and stop them when they died, but for the moment I just called it on Start()."),n.createElement("p",null,"Mouse controls are still pretty bad, so the game should be played with a controller, but adding decent mouse controls is next on my list."),n.createElement("h2",null,"Making It Pretty, Pretty Early"),n.createElement("p",null,"I'm putting it here to make it sound like I did the responsible thing and started by using a plain cube for movement until I had the mechanics down, but I was actually messing around in Blender way before I should have. I modelled a simple spaceship with a silhouette designed to catch the player's eye from the rear:"),n.createElement(l.S,{width:"600",alt:"a cool spaceship from the back",src:"https://github.com/maxwellsquared/minimal-portfolio/blob/main/img/spaceship_beauty_back.png?raw=true",__imageData:a(5911)}),n.createElement("p",null,"I spent less time on the front and side profile, as the player would only rarely see them, but was inspired by some of the sharp body lines on modern cars:"),n.createElement(l.S,{width:"600",alt:"a cool spaceship from the front",src:"https://github.com/maxwellsquared/minimal-portfolio/blob/main/img/spaceship_beauty_side.png?raw=true",__imageData:a(5519)}),n.createElement("p",null,"These renders are in front of the skybox that I also made around then, combining pictures of clouds with a starfield I generated from noise and some NASA public-domain images of planets and moons which I recolored and filtered to look like they were hanging in the sky above an alien planet."),n.createElement("h2",null,"Shooting"),n.createElement("p",null,"I'd previously built an Asteroids clone in Unity, and I thought I would steal some of the functionality and adapt it for 3D."),n.createElement("p",null,"In Yasssteroids (my yassified Asteroids clone), I used a Bullet prefab with a rigidbody, a box collider, something to render, and a script. The script has a public float for speed and maxLifetime. On Awake() it figures out where its rigidbody is and makes a reference to it; its big trick is a method called Project(Vector2 direction) which adds force to that rigidbody using the direction provided as well as its speed value, then calls Destroy on itself after its max lifetime. It also has an OnCollisionEnter2D method which just destroys it: targets check if they're hit by bullets, bullets don't check if they're hit by targets."),n.createElement("p",null,"Over in the player object, I made a Shoot() method which sets a vector for the current position plus an offset to get around collision issues. I then instantiate a new bullet using the bullet prefab, the variable I just made for the position, and the player's rotation before calling that bullet's Project() method and passing in the transform.forward of the parent object."),n.createElement("p",null,"It was fairly simple to adapt this for 3D:"),n.createElement("code",null,"private void Shoot() ",n.createElement("br",null),"{",n.createElement("br",null)," ","Vector3 shootPos = new Vector3(transform.position.x, transform.position.y, transform.position.z + shootOffset);",n.createElement("br",null)," ","PlayerBullet bullet = Instantiate(this.bulletPrefab, shootPos, this.transform.rotation);",n.createElement("br",null)," ","Physics.IgnoreCollision(bullet.GetComponent< Collider> (), GetComponent< Collider> ());",n.createElement("br",null)," ","bullet.Project(this.transform.forward);",n.createElement("br",null),"}"),n.createElement("p",null,"The biggest issue that I ran into was that I had a rigidbody and a collider on the bullets, and I had a rigidbody and a collider on my player spaceship to prepare it for detecting collisions with the ground. The ship would sometimes collide with bullets occasionally; I was planning on just spawning bullets out of the player collider using the offset I mentioned previously, but I decided it would be better to simply set up a Physics.IgnoreCollision() between the collider in the player object and the one in the bullet."),n.createElement("h2",null,"My Many Enemies"),n.createElement("p",null,"To make sure the rest of the mechanics were solid, I chose to start with simple static targets as enemies. I modelled these targets in Blender, and used very few polygons to make sure I could use a mesh collider without too much trouble."),n.createElement("p",null,"My eventual plan is for the enemies to essentially travel around the same track as the player, but in the opposite direction:"),n.createElement(l.S,{width:"600",alt:"diagram of two spaceships on a track, pointed at each other",src:"https://github.com/maxwellsquared/minimal-portfolio/blob/main/img/track_movement_3.png?raw=true",__error:'No data found for image "https://github.com/maxwellsquared/minimal-portfolio/blob/main/img/track_movement_3.png?raw=true"\n              undefinedCould not read image data file "C:\\Users\\Max\\Documents\\Coding\\minimal-portfolio\\.cache\\caches\\gatsby-plugin-image\\1532026783.json". \nThis may mean that the images in "C:\\Users\\Max\\Documents\\Coding\\minimal-portfolio\\src\\pages\\game.js" were not processed.\nPlease ensure that your gatsby version is at least 2.24.78.'}),n.createElement("p",null,"I spawn enemies with a dolly cart called EnemyCart. It's a dolly going on the same track as the player but backwards, with a script that initialises an enemy every few seconds at a random offset from the track. This means that as the player moves along the track, they will constantly fly into enemies. For now, it spawns static targets, but it will eventually spawn different kinds of enemies who move and shoot back."),n.createElement("p",null,"These static targets are based on a prefab which references my GameManager and a particle system prefab called “Splosion.” It has an OnCollisionEnter which, if it collides with a target and the colliding object has the “PlayerBullet” tag, spawns the Splosion particle system, calls a method on the GameManager which adds one to the score, and then destroys itself. The splosion prefab, helpfully, has a particle system which automatically destroys itself once the animation finishes so I don't have to do any fancy scripting to it."),n.createElement("h2",null,"Boost and Camera Shake"),n.createElement("p",null,"I added boost to the PlayerController script by checking in Update() if the player was pressing the B button on the gamepad. When the B button is first pushed, isBoosting is set to true, SetSpeed() is called with forwardSpeed * 2 as an argument, and a looping particle system called boostParticles starts playing. The particle system is a game object which is a child of the Player object, and when boost starts, the player object calls the .Play() method on its reference to the boostParticles object. When the B button goes up, isBoosting is set to false, speed returns to forwardSpeed, and the .Stop() method is called on boostParticles."),n.createElement("p",null,"To make it clear that the player was going really fast, I added a reference to the virtual camera I'd included in the GameplayPlane, and at the start of Update() set that virtual camera's m_Lens.FieldOfView to a variable which I increased over time (if not boosting, that variable decreases over time). The code for this is all still pretty messy, and one of the next things I do is going to be to break it into separate functions instead of just cramming Update() full of stuff."),n.createElement("p",null,"It wasn't enough, though, and I realized that the boost function needed camera shake. I had to use a coroutine to implement this in the script I put on my camera object:"),n.createElement("code",null,"public IEnumerator Shake(float duration, float magnitude)",n.createElement("br",null),"{",n.createElement("br",null)," ","Vector3 originalPos = transform.localPosition;",n.createElement("br",null)," ","float elapsed = 0.0f;",n.createElement("br",null)," ","while (elapsed < duration)",n.createElement("br",null)," ","{",n.createElement("br",null)," "," ","float x = Random.Range(-1f, 1f) * magnitude;",n.createElement("br",null)," "," ","float y = Random.Range(-1f, 1f) * magnitude;",n.createElement("br",null),n.createElement("br",null)," "," ","transform.localPosition = new Vector3(x, y, originalPos.z);",n.createElement("br",null)," "," ","elapsed += Time.deltaTime;",n.createElement("br",null),n.createElement("br",null)," "," ","// before continuing to the next iteration of the while loop, wait for the next frame ",n.createElement("br",null)," "," ","yield return null;",n.createElement("br",null)," ","}",n.createElement("br",null),n.createElement("br",null)," ","transform.localPosition = originalPos;",n.createElement("br",null),"}",n.createElement("br",null)),n.createElement("p",null,"Our Shake function is a coroutine--an ongoing thing that lets you pause and pick up where you left off, which makes running a bunch of things at the same time easier. This mostly means that calling it is a little weird (in the player object, instead of just calling cameraShake.Shake(duration, magnitude) I have to use StartCoroutine(cameraShake.Shake(duration, magnitude)), at the top it says IEnumerator, and I can put yield return null in my while loop to have Unity put a bookmark in what it's doing and pick it up on the next frame. The rest of the function just sets a variable to the original local position of the object and another one to an elapsed time of zero, then moves the camera's localPosition around slightly (amplified by the magnitude passed in) until the proper duration is hit, at which point it resets its local position."),n.createElement("p",null,"For this Shake coroutine, I shake the camera on the local x and y axes, but I decided to add a little camera knockback to make the player's shots feel bigger, so I copied the coroutine but only moved along the Z axis to simulate recoil. I then started this coroutine (with a smaller magnitude and shorter duration) every time the player object called Shoot()."),n.createElement("p",null,"Both of these uses of camera shake make the game feel much more responsive to the player's inputs."),n.createElement("h2",null,"Game Logic and MVC Pattern"),n.createElement("p",null,"At this point, the game was starting to get relatively complicated, and I had a lot of features yet to implement! I decided to attempt a model-view-controller pattern to stay organized. I would have a GameManager object to serve as a model, keeping the score and business logic of the game; a canvas which would display information to the player; and then the player object as a controller to take input and send information to the GameController."),n.createElement("p",null,"The GameManager currently just keeps track of the player score, but will include lives, upgrades, elapsed level time, and other player progress information in future. It keeps a score variable and has an UpdateScore method which takes in an integer, adds that integer to the score, and updates a scoreText UI element with the score information."),n.createElement("p",null,"As the game gets more complicated, organizing functionality like this will really start to come in handy."),n.createElement("h2",null,"Player Death and Resurrection"),n.createElement("p",null,"I'd made some cute terrain, but it was frustrating flying into it and seeing that it was as hollow as a store-brand chocolate bunny. I needed a function to crash the player's ship."),n.createElement("p",null,"I started with another particle system to represent the explosion as the player's ship hit the planet (particle systems are fun!). I made a simple additive blend material, which I also applied to my boost particle system."),n.createElement("p",null,"Over in the player object, I made a PlayerDeath() function which sets some big red text in the middle of the screen to read “D E A D,” stops the boost particles, sets speed to zero, and plays the death particles. Of course, I had to add a big camera shake. I then invoked a PlayerRespawn() function I made that reversed everything, cleared the text, and reset the player position to right back on the track."),n.createElement("p",null,"I quickly realized that with the way I'd set up my control functions, a dead player could still move, boost, and shoot, so I added an isAlive variable, set it to false on death, and required it to operate any of the controls."),n.createElement("p",null,"To add a little more pizzazz, I set useGravity to true on the player's rigidBody and gave them an upwards pop, which was unrealistic but funny."),n.createElement("h2",null,"Fun with Render Textures"),n.createElement("p",null,"I'd always thought there was something cool about low-resolution games played on a CRT. I tried to get a bit of that analog-style funk into my visuals by throwing some dithering and noise onto a post-processing volume, then adding bloom and carefully calibrating emissive textures and the skybox to make sure that I was getting only the stuff I wanted to glow. I added a tiny bit of chromatic aberration and lens distortion to again mimic that feel, but it was still lacking."),n.createElement("p",null,"The trick that got me what I was really looking for was projecting everything onto a render texture at 320 x 180 resolution (the N64 commonly rendered games at 320x240, but 320x180 fits a 16:9 aspect ratio and looks nice on 1080p and 4k monitors) and turning off anti-aliasing to get nice sharp pixels."),n.createElement("h2",null,"Environmentalism"),n.createElement("p",null,"To make the game world feel a little more alive, I added two larger dolly tracks outside the play area and brought in more ships I made in Blender: a small fighter craft which will be an enemy in future, and a massive capital ship. It adds some much-needed depth to the scene:",n.createElement(l.S,{width:"600",alt:"lots of spaceships flying around with a big one in the distance",src:"https://github.com/maxwellsquared/minimal-portfolio/blob/main/img/Gameplay-4.png?raw=true",__imageData:a(2819)}),"The fighters operate in small swarms, and I used the transform.LookAt function to rotate them at a target slightly ahead of them on the track, which makes them swoop around elegantly and hides the fact that they're on rails."),n.createElement("h2",null,"Deployment"),n.createElement("p",null,"I decided to build the game to WebGL, which is very handy for getting it onto somewhere like itch.io (it's actually there already in prototype form--if you email me, I'll give you the password to try it). Being able to play the game with a click of a button is a huge time saver, and it's also a lot more convenient for people to try out."),n.createElement("h2",null,"Next Steps"),n.createElement("p",null,"My next step is to add a bomb for players which moves along an arc-shaped path and detonates when it hits something. I'm also planning on adding sound effects and music. As you can tell from the screenshots, I'm also going to need to figure out how much post-processing I can get away with before it starts looking like an Xbox 360 game.")))}},5519:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#b8c8c8","images":{"fallback":{"src":"/static/e21ce65ffc1a1a90eaedc26f6833aeef/8cae6/spaceship_beauty_side.png","srcSet":"/static/e21ce65ffc1a1a90eaedc26f6833aeef/82a03/spaceship_beauty_side.png 150w,\\n/static/e21ce65ffc1a1a90eaedc26f6833aeef/f7cdc/spaceship_beauty_side.png 300w,\\n/static/e21ce65ffc1a1a90eaedc26f6833aeef/8cae6/spaceship_beauty_side.png 600w,\\n/static/e21ce65ffc1a1a90eaedc26f6833aeef/bb8ee/spaceship_beauty_side.png 1200w","sizes":"(min-width: 600px) 600px, 100vw"},"sources":[{"srcSet":"/static/e21ce65ffc1a1a90eaedc26f6833aeef/6689f/spaceship_beauty_side.webp 150w,\\n/static/e21ce65ffc1a1a90eaedc26f6833aeef/dc425/spaceship_beauty_side.webp 300w,\\n/static/e21ce65ffc1a1a90eaedc26f6833aeef/381e5/spaceship_beauty_side.webp 600w,\\n/static/e21ce65ffc1a1a90eaedc26f6833aeef/edb28/spaceship_beauty_side.webp 1200w","type":"image/webp","sizes":"(min-width: 600px) 600px, 100vw"}]},"width":"600","height":338}')},719:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#585858","images":{"fallback":{"src":"/static/447654cb31f5bb97ccdb6e4defa7f017/5284d/track-movement.png","srcSet":"/static/447654cb31f5bb97ccdb6e4defa7f017/3626d/track-movement.png 150w,\\n/static/447654cb31f5bb97ccdb6e4defa7f017/acde8/track-movement.png 300w,\\n/static/447654cb31f5bb97ccdb6e4defa7f017/5284d/track-movement.png 600w,\\n/static/447654cb31f5bb97ccdb6e4defa7f017/ba5f6/track-movement.png 1200w","sizes":"(min-width: 600px) 600px, 100vw"},"sources":[{"srcSet":"/static/447654cb31f5bb97ccdb6e4defa7f017/74f8c/track-movement.webp 150w,\\n/static/447654cb31f5bb97ccdb6e4defa7f017/3dc06/track-movement.webp 300w,\\n/static/447654cb31f5bb97ccdb6e4defa7f017/939e2/track-movement.webp 600w,\\n/static/447654cb31f5bb97ccdb6e4defa7f017/0174b/track-movement.webp 1200w","type":"image/webp","sizes":"(min-width: 600px) 600px, 100vw"}]},"width":"600","height":394}')},2819:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#183848","images":{"fallback":{"src":"/static/2ef05cf290fb2a3f62844247f7cfd2de/34435/Gameplay-4.png","srcSet":"/static/2ef05cf290fb2a3f62844247f7cfd2de/82a03/Gameplay-4.png 150w,\\n/static/2ef05cf290fb2a3f62844247f7cfd2de/36e4e/Gameplay-4.png 300w,\\n/static/2ef05cf290fb2a3f62844247f7cfd2de/34435/Gameplay-4.png 600w,\\n/static/2ef05cf290fb2a3f62844247f7cfd2de/d4479/Gameplay-4.png 1200w","sizes":"(min-width: 600px) 600px, 100vw"},"sources":[{"srcSet":"/static/2ef05cf290fb2a3f62844247f7cfd2de/6689f/Gameplay-4.webp 150w,\\n/static/2ef05cf290fb2a3f62844247f7cfd2de/bf45f/Gameplay-4.webp 300w,\\n/static/2ef05cf290fb2a3f62844247f7cfd2de/3266f/Gameplay-4.webp 600w,\\n/static/2ef05cf290fb2a3f62844247f7cfd2de/160d6/Gameplay-4.webp 1200w","type":"image/webp","sizes":"(min-width: 600px) 600px, 100vw"}]},"width":"600","height":335}')}}]);
//# sourceMappingURL=component---src-pages-game-js-dbb631f7b41769a9942c.js.map