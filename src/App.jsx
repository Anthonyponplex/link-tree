import { MainContainer } from "./AppStyle";
import Footer from "./component/Footer";
import LinkSection from "./component/LinkSection";
import ProfileSection from "./component/ProfileSection";
import SocialIcon from "./component/SocialIcon";

function App() {
  return (
    <>
      <MainContainer>
        <ProfileSection />
        <LinkSection />
        <SocialIcon />
        <Footer />
      </MainContainer>
    </>
  );
}

export default App;
