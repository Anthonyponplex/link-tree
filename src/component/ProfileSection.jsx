import { NameTag, ProfileContainer } from "./ProfileSectioStyle";
import tony from "../assets/me.jpg";

const ProfileSection = () => {
  return (
    <ProfileContainer>
      <img src={tony} id="imagetag" alt="logo" />

      <NameTag>Ponplex</NameTag>
    </ProfileContainer>
  );
};

export default ProfileSection;
