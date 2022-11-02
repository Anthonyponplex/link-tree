import {
  Avatar,
  HiddenIcon,
  NameTag,
  ProfileContainer,
} from "./ProfileSectioStyle";
import tony from "../assets/me.jpg";
import icon from "../assets/Icon.svg";

const ProfileSection = () => {
  return (
    <>
      <ProfileContainer>
        <Avatar>
          <img src={icon} id="icon" alt="icon" />
          <img src={tony} id="profile__img" alt="Profile" />
        </Avatar>
        <NameTag id="twitter">Ponplex</NameTag>
      </ProfileContainer>
      <HiddenIcon id="slack">Anthonyponplex</HiddenIcon>
    </>
  );
};

export default ProfileSection;
