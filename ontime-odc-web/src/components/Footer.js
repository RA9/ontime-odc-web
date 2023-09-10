import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSquareFacebook,
  faLinkedin,
  faSquareGithub,
  faApple,
  faGooglePlay,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <>
      <footer className="bg-black text-gray-400 p-7 flex flex-col lg:flex-row">
        <div className="flex flex-col lg:flex-row items-center lg:ml-20 ml-5">
          <div className="bg-white w-32 h-10 text-center m-5 ">
            <a className="text-black w-20 text-center" href="/download">
              <FontAwesomeIcon
                icon={faApple}
                size="2xl"
                style={{ color: "#0d0d0d", marginRight: "10" }}
              />
              App Store
            </a>
          </div>
          <div className="bg-white w-32 h-10 text-center m-5">
            <a className="text-black" href="/download">
              <FontAwesomeIcon
                icon={faGooglePlay}
                size="2xl"
                style={{ color: "#000000", marginRight: "10" }}
              />
              Play Store
            </a>
          </div>
        </div>
        <div className="sm:flex">
          <div className="flex flex-col lg:flex-row  lg:ml-60 items-center">
            <div className="flex gap-2.5 flex-col">
              <a
                href="https://www.facebook.com/yourprofile"
                className="social-icon"
              >
                <FontAwesomeIcon
                  style={{ marginRight: "10" }}
                  icon={faSquareFacebook}
                />
                Facebook
              </a>

              <a
                href="https://www.facebook.com/yourprofile"
                className="social-icon"
              >
                <FontAwesomeIcon
                  style={{ marginRight: "10" }}
                  icon={faLinkedin}
                />
                LinkedIn
              </a>

              <a
                href="https://www.facebook.com/yourprofile"
                className="social-icon"
              >
                <FontAwesomeIcon
                  style={{ marginRight: "10" }}
                  icon={faSquareGithub}
                />
                GitHub
              </a>
              <a
                href="https://www.facebook.com/yourprofile"
                className="social-icon"
              >
                <FontAwesomeIcon
                  style={{ marginRight: "10" }}
                  icon={faSquareFacebook}
                />
                Facebook
              </a>
            </div>
            <div className="flex gap-2.5 flex-col ml-24 lg:ml-10 text-gray-400">
              <a href="https://digitalcenter.orange.com/course/index.php?categoryid=30&lang=en">
                Contact
              </a>
              <a href="https://digitalcenter.orange.com/course/index.php?categoryid=30&lang=en">
                Up Coming Events
              </a>
              <a href="https://digitalcenter.orange.com/course/index.php?categoryid=30&lang=en">
                Up Coming Courses
              </a>
              <a href="https://digitalcenter.orange.com/course/index.php?categoryid=30&lang=en">
                Orange Digital Center Liberia
              </a>
            </div>
            <div className="flex gap-2.5 flex-col ml-24 lg:ml-10 text-gray-400">
              <a href="https://digitalcenter.orange.com/course/index.php?categoryid=30&lang=en">
                Contact
              </a>
              <a href="https://digitalcenter.orange.com/course/index.php?categoryid=30&lang=en">
                Up Coming Events
              </a>
              <a href="https://digitalcenter.orange.com/course/index.php?categoryid=30&lang=en">
                Up Coming Courses
              </a>
              <a href="https://digitalcenter.orange.com/course/index.php?categoryid=30&lang=en">
                Orange Digital Center Liberia
              </a>
            </div>
          </div>
        </div>
      </footer>
      <div className="text-center bg-orange-600 w-full font-bold">
        {/* Add your footer content here */}
        &copy; OnTime 2023. All right reserved
      </div>
    </>
  );
};

export default Footer;
