function CircleWave() {
    this.name = "circle-wave";
    this.particles = [];

    this.draw = function() {
        /*circle-wave set to have black background with red line,
        three stoke weight */
        push();
        background(0, 0, 0);
        stroke(255, 0, 0);
        strokeWeight(3);
        angleMode(DEGREES);
        noFill();


        //setting the circle-wave in the middle of the screen
        translate(width / 2, height / 2);

        fourier.analyze();
        amp = fourier.getEnergy(10, 500);

        //get the array of wave form data
        var wave = fourier.waveform();

        //looping waveform data to create two circle
        for (var t = -1; t <= 1; t += 2) {
            beginShape();
            for (var i = 0; i <= 180; i += 5) {
                //create an index that map the for loop variable to the index that we want 
                var index = floor(map(i, 0, 180, 0, wave.length - 1));
                //to create a circle, I use the index to map to the waveform  
                var r = map(wave[index], -1, 1, 150, 260);
                //x and y coordinate will be equal to the value of he index 
                var x = r * sin(i) * t;
                var y = r * cos(i);
                vertex(x, y);
            }
            endShape();
        }

        //the particled is pushed the particles array
        var p = new Particle();
        this.particles.push(p);
        //put show method on all particles
        for (var i = this.particles.length - 1; i >= 0; i--) {
            if (!this.particles[i].edges()) {
                this.particles[i].update(amp > 700);
                this.particles[i].show();
            } else {
                this.particles.splice(i, 1);
            }
        }

        angleMode(RADIANS);
        pop();
    };
}

//particles class 
class Particle {
    constructor() {
        //position of the particle located around waveform 
        this.pos = p5.Vector.random2D().mult(200);
        this.vel = createVector(0, 0);
        //acceleration vector will have the same direction as position vector
        this.acc = this.pos.copy().mult(random(0.0001, 0.00001));
        //random width of the particles
        this.w = random(3, 5);
        //random the color of the particles
        this.color = [random(200, 255), random(200, 255), random(200, 255)];
    }
    //adding acceleration to the velocity and to position  
    update(cond) {
        this.vel.add(this.acc);
        this.pos.add(this.vel);
        if (cond) {
            this.pos.add(this.vel);
            this.pos.add(this.vel);
            this.pos.add(this.vel);
        }
    }
    /*this method remove the particles from the array, the method will return true if
    the particle exceed the boundaries 
    */
    edges() {
        if (
            this.pos.x < -width / 2 ||
            this.pos.x > width / 2 ||
            this.pos.y < -height / 2 ||
            this.pos.y > height / 2
        ) {
            return true;
        } else {
            return false;
        }
    }
    //show the particle on the canvas
    show() {
        noStroke();
        fill(this.color);
        ellipse(this.pos.x, this.pos.y, this.w);
    }
}