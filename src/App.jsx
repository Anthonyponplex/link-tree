import { useEffect, useState } from "react";
import { MainContainer } from "./AppStyle";
import Footer from "./component/Footer";
import LinkSection from "./component/LinkSection";
import ProfileSection from "./component/ProfileSection";
import SocialIcon from "./component/SocialIcon";
import { ShareButton } from "./component/ProfileSectioStyle";
import sharedIcon from "./assets/sharedIcon.svg";
import mobile from "./assets/mobile.svg";
function App() {
  const [isMobile, setIsMobile] = useState(true);
  const handleResize = () => {
    if (window.innerWidth > 768) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
  });
  return (
    <>
      <MainContainer>
        {/* <ShareButton> */}
        {/* {isMobile ? (
            <img src={sharedIcon} data-tip="Share Link" alt="icon" />
          ) : (
            <img src={dotIcon} data-tip="Share Link" alt="icon" />
          )} */}
        <img src={sharedIcon} alt="icon" id="shareButton" />
        <img src={mobile} alt="icon" id="mobileButton" />

        {/* </ShareButton> */}
        <ProfileSection />
        <LinkSection />
        <SocialIcon />
      </MainContainer>
      <Footer />
    </>
  );
}

export default App;
