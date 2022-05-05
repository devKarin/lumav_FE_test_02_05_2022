import { useRef, useEffect } from 'react';

const Canvas = props => {
    const canvasRef = useRef(null);

    let allStars = [];
    const STARCOUNT = 800;
    const MINRADIUS = 0.2;
    const MAXRADIUS = 1.7;

    // For user interaction
    const MOUSE = {
        x: undefined,
        y: undefined
    }

    const PROXIMITY = 65; // Stars proximity range in px to make them move faster
    const MINOPACITY = 0.5;
    const MAXOPACITY = 0.2;
    const SPARKLE = 1; // Opacity for stars to create sparkling effect

    useEffect(() => {
        const CANVAS = canvasRef.current;
        CANVAS.width = window.innerWidth;
        CANVAS.height = window.innerHeight;
        let context = CANVAS.getContext("2d");

        // Resize the canvas dynamically
        window.addEventListener("resize", function (event) {
            CANVAS.width = window.innerWidth;
            CANVAS.height = window.innerHeight;
            initialize();
        });

        // Listen for mousemoves
        window.addEventListener("mousemove", function (event) {
            MOUSE.x = event.x;
            MOUSE.y = event.y;
        });

        // Init the starry nightsky
        function initialize() {
            // Clean up the stars array before generating new one
            allStars = [];
            // Generate for every star object its own properties
            for (let i = 0; i < STARCOUNT; i++) {
                let x = Math.random() * CANVAS.width;
                let y = Math.random() * CANVAS.height;
                let velocity = (Math.random() - Math.random() * 0.5) * 8;
                let radius = (Math.random() * MAXRADIUS) + MINRADIUS;
                let rgbSet = {
                    // TODO: DRY
                    colorR: Math.floor(Math.random() * 256),
                    colorG: Math.floor(Math.random() * 256),
                    colorB: Math.floor(Math.random() * 256),
                    opacity: (Math.random() * MINOPACITY) + MAXOPACITY
                }
                let angle = 0;
                // The center of the simplified orbit
                let circleCenterX = x;
                let circleCenterY = y;
                // Transform angle into radians, calculate necessary ratios and multiply with radius (hypotenuse)
                let newX = radius * Math.cos(angle * (Math.PI / 180));
                let newY = radius * Math.sin(angle * (Math.PI / 180));
                allStars.push(new Star(x, y, velocity, radius, rgbSet, angle, circleCenterX, circleCenterY, newX, newY));
            }
        }

        // Create starry nightsky by defining a Star object
        function Star(x, y, velocity, radius, rgbSet, angle, circleCenterX, circleCenterY, newX, newY) {
            this.x = x;
            this.y = y;
            this.velocity = velocity;
            this.radius = radius;
            this.color = `rgb(${rgbSet.colorR}, ${rgbSet.colorG}, ${rgbSet.colorB}, ${rgbSet.opacity})`;
            this.angle = angle;
            this.circleCenterX = circleCenterX;
            this.circleCenterY = circleCenterY;
            this.newX = newX;
            this.newY = newY;

            // Create star
            this.create = function () {
                context.beginPath();
                context.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
                context.fillStyle = this.color;
                context.fill();
            }

            // Make the star circle on its orbit
            this.update = function () {
                this.newX = this.radius * Math.cos(this.angle * (Math.PI / 180));
                this.newY = this.radius * Math.sin(this.angle * (Math.PI / 180));
                // New x and y values to the orbit center.
                this.x = this.newX + this.circleCenterX;
                this.y = this.newY + this.circleCenterY;
                // In case sin and cos it is not necessary to reset the angle - works for > 360 also.
                this.angle += this.velocity;
                this.color = `rgb(${rgbSet.colorR}, ${rgbSet.colorG}, ${rgbSet.colorB}, ${Math.random() * (MAXOPACITY - MINOPACITY) + MINOPACITY})`;

                // Add user interactivity - if the mouse is in the certain range from stars centre, increase the orbiting velocity and create a new fireworks object
                if (MOUSE.x - this.x < PROXIMITY && MOUSE.x - this.x > -PROXIMITY && MOUSE.y - this.y < PROXIMITY && MOUSE.y - this.y > -PROXIMITY) {
                    this.velocity = this.velocity * 10;
                    this.color = `rgb(${rgbSet.colorR}, ${rgbSet.colorG}, ${rgbSet.colorB}, ${SPARKLE})`;

                    // Reset the velocity and opacity
                } else if (this.velocity >= 8 || this.velocity <= -4) {
                    this.velocity = (Math.random() - Math.random() * 0.5) * 8;
                    this.color = `rgb(${rgbSet.colorR}, ${rgbSet.colorG}, ${rgbSet.colorB}, ${Math.random() * (MAXOPACITY - MINOPACITY) + MINOPACITY})`;
                }
                this.create();
            }
        }
        let animationFrameId;
        function animate() {
            animationFrameId = requestAnimationFrame(animate);
            // Clears the whole canvas before next animation round
            context.clearRect(0, 0, window.innerWidth, window.innerHeight);
            allStars.forEach(individualStar => individualStar.update());
        }

        // Make the resizing and animation happen
        initialize();
        animate();
        return () => {
            window.cancelAnimationFrame(animationFrameId);
        }
    }, []);

    return <canvas ref={canvasRef} {...props} />
}
export default Canvas