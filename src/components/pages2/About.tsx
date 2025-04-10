import { useEffect } from "react";

declare global {
  // This is a TypeScript declaration file that allows us to add custom properties to the global window object.
  interface Window {
    // This interface extends the Window object to include a property called TagCanvas.
    TagCanvas: any; // This property can be of any type, but we will use it as a function to start the TagCanvas animation.
  }
}

const About = () => {
  useEffect(() => {
    //useEffect is used to run some JavaScript code when the page loads.

    const script = document.createElement("script"); // Create a new script element
    script.src =
      "https://cdn.jsdelivr.net/npm/jquery-tagcanvas@2.9.0/tagcanvas.min.js"; // Load the TagCanvas library
    script.onload = () => {
      // When the script is loaded
      if (window.TagCanvas) {
        // Check if TagCanvas is available
        try {
          window.TagCanvas.Start("myCanvas", "tags", {
            // Initialize TagCanvas with the canvas and tags elements
            textColour: null, // random colorful text
            outlineColour: "transparent", // transparent outline
            reverse: true, // Rotate in reverse direction.
            depth: 0.8, // depth of the text
            maxSpeed: 0.05, // maximum speed of the text
            initial: [0.1, 0.1], // // initial position of the text
            wheelZoom: false, // disable zooming with the mouse wheel
            shape: "sphere", // 3D Sphere
          });
        } catch (e) {
          // If there is an error, log it to the console
          console.log("Canvas error:", e); // Log the error to the console
        }
      }
    };
    document.body.appendChild(script); // Append the script to the body to load it
  }, []);

  return (
    <div className="flex flex-col items-center justify-center bg-gray-900 text-white p-6 md:p-10 min-h-screen">
      <div className="flex flex-col md:flex-row justify-between items-center w-full max-w-6xl">
        {/* Left Section */}
        <div className="md:w-1/2 mb-6 md:mb-0">
          <div className="text-4xl text-red-300 font-bold mb-4 text-center md:text-left">
            <span className="text-blue-400">Abo</span>ut
          </div>
          <p className="text-lg text-gray-400 mb-4 text-center md:text-left">
            I am a passionate web developer with a interest in creating dynamic
            and responsive web applications. I have experience in various web
            technologies and frameworks,including
            HTML,CSS,JavaScript,React,TypeScript,etc.
          </p>
          <p className="text-lg text-gray-400 mb-4 text-center md:text-left">
          </p>
        </div>

        {/* Right Section */}
        <div className="md:w-1/2 flex justify-center relative">
          <div
            id="myCanvasContainer"
            className="w-[400px] h-[400px] mx-auto relative"
          >
            <canvas
              id="myCanvas"
              className="bg-transparent"
              width="400"
              height="400"
            ></canvas>
          </div>
          <div id="tags" className="hidden">
            <ul>
              <li>
                <a href="#">javascript</a>
              </li>
              <li>
                <a href="#">react</a>
              </li>
              <li>
                <a href="#">html</a>
              </li>
              <li>
                <a href="#">css</a>
              </li>
              <li>
                <a href="#">redux</a>
              </li>
              <li>
                <a href="#">github</a>
              </li>
              <li>
                <a href="#">vs code</a>
              </li>
              <li>
                <a href="#">website</a>
              </li>
              <li>
                <a href="#">cypress</a>
              </li>
              <li>
                <a href="#">jest</a>
              </li>
              <li>
                <a href="#">javascript</a>
              </li>
              <li>
                <a href="#">react-routing</a>
              </li>
              <li>
                <a href="#">react</a>
              </li>
              <li>
                <a href="#">es6+</a>
              </li>
              <li>
                <a href="#">javascript</a>
              </li>
              <li>
                <a href="#">react</a>
              </li>
              <li>
                <a href="#">html</a>
              </li>
              <li>
                <a href="#">css</a>
              </li>
              <li>
                <a href="#">redux</a>
              </li>
              <li>
                <a href="#">github</a>
              </li>
              <li>
                <a href="#">vs code</a>
              </li>
              <li>
                <a href="#">website</a>
              </li>
              <li>
                <a href="#">cypress</a>
              </li>
              <li>
                <a href="#">jest</a>
              </li>
              <li>
                <a href="#">javascript</a>
              </li>
              <li>
                <a href="#">react</a>
              </li>
              <li>
                <a href="#">es6+</a>
              </li>
            </ul>
            {/* <ul>
              <li>
                <a href="#">
                  <img
                    src="src\images\abstract-blur-defocused-shopping-mall.jpg"
                    alt="Product 1"
                  />
                </a>
              </li>
              <li>
                <a href="#">
                  <img
                    src="src\images\Screenshot 2025-03-25 144626.png"
                    alt="Product 2"
                  />
                </a>
              </li>
              <li>
                <a href="#">
                  <img
                    src="src\images\top-view-arrangement-different-traveling-elements.jpg"
                    alt="Product 3"
                  />
                </a>
              </li>
              <li>
                <a href="#">
                  <img
                    src="src\images\abstract-blur-defocused-shopping-mall.jpg"
                    alt="Product 1"
                  />
                </a>
              </li>
              <li>
                <a href="#">
                  <img
                    src="src\images\Screenshot 2025-03-25 144626.png"
                    alt="Product 2"
                  />
                </a>
              </li>
              <li>
                <a href="#">
                  <img
                  src ="src\images\top-view-arrangement-different-traveling-elements.jpg"
                  alt="Producct 3"
                  />
                </a>
              </li>
              <li>
                <a href="#">
                  <img
                    src="src\images\top-view-arrangement-different-traveling-elements.jpg"
                    alt="Product 3"
                  />
                </a>
              </li>
              
              </li>
            </ul> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
