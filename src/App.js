import "./index.css";
import "sanitize.css";
import React, { createContext, useState, useEffect } from "react";
import ReactSwitch from "react-switch";
import { SocialIcon } from "react-social-icons";
import FadeIn from "react-fade-in";
// import WaterWave from "react-water-wave";

export const ThemeContext = createContext("dark");

function App() {
  const [theme, setTheme] = useState("light");

  const placeholderText = [
    "nɐɹᴉʞʞ",
    "2",
    "nɐɹᴉʞʞ",
    // "im happy for you bro",
    // "nah fr",
    // "idc bout nun bro i be coolin",
    // "go away !!!",
    // "fuck you",
    // "jk didn't mean it <3",
    // "ive been watching rent-a-girlfriend",
    // "its horrible but i like it",
    // "...",
    // "what if i pulled up to the function in squirrel hill, pgh in my draingang tee",
    // "bouta griddy on tha job",
    // "ssense package comes monday ^_^",
    // "sg lily - let me go",
    // "roommate keeps sending me songs I've already heard before but won't listen to my shit",
    // "prick",
    // "i just hit 2k hours on cs",
    // "（っ＾▿＾）",
    // "itll be wraps when she finds out im a moderator for psp1g's twitch channel",
    // "(╥﹏╥)",
    // "im going to sleep",
    // "bye",
    // "gn",
    // "┬┴┬┴┤(･_ ├┬┴┬┴",
    // "http://csgo.exchange/id/76561198127882341"
  ];

  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };

  const Cycle = () => {
    const [index, setIndex] = useState(0);

    useEffect(() => {
      const timer = () => {
        setIndex((prevIndex) => {
          if (prevIndex === placeholderText.length - 1) {
            return 0;
          }
          return prevIndex + 1;
        });
      };
      setInterval(timer, 1500);

      //cleanup function in order clear the interval timer
      //when the component unmounts
      return () => {
        clearInterval(timer);
      };
    }, []);

    return <p>{placeholderText[index]}</p>;
  };

  return (
    <>
      <head>
        <title>k .</title>
      </head>

      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        <div className="App" id={theme}>
          {/* <WaterWave
            style={{ width: "100%", height: "100%", backgroundSize: "cover" }}
          >
            {(methods) => ( */}
          <div className="container">
            <FadeIn delay="400">
              <h1>ｋｉｒａｎ . wtf</h1>
              <h4>{Cycle()}</h4>
              <div className="switch">
                <label> {theme === "light" ? "ʕ´• ᴥ•̥`ʔ" : "(っ´ω｀c)"} </label>
                <ReactSwitch
                  onChange={toggleTheme}
                  checked={theme === "dark"}
                  onColor="#888"
                  offColor="#000"
                  checkedIcon={false}
                  uncheckedIcon={false}
                  className="swt"
                />
              </div>
              <div className="postdate">
                <h5>Feb 14 25</h5>
              </div>
              <div className="post">
                <div className="posttext">
                  <p>crushed under my own weight again</p>
                  <p>https://soundcloud.com/avril23/whats-good</p>
                </div>
              </div>
            </FadeIn>

            <footer>
              <div className="twt">
                <SocialIcon
                  url="https://twitter.com/kkir4n"
                  fgColor={theme === "light" ? "#000" : "#fff"}
                  bgColor={theme === "light" ? "#fff" : "#000"}
                />
              </div>
            </footer>
          </div>
        </div>
      </ThemeContext.Provider>
    </>
  );
}

export default App;