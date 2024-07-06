import { useContext } from "react";
import { Card } from "../../components/Card/Card";
import { Header } from "../../components/Hearder/Header";
import { InputSearch } from "../../components/Input/Input";
import { HubContext } from "../../providers";
import { StyledHomePage } from "./style";
import { Menu } from "../../components/Menu/Menu";

export const HomePage = () => {
  const { username, setUsername, profile, showUser } = useContext(HubContext);

  return (
    <>
      <StyledHomePage>
        <Header />
        <InputSearch username={username} setUsername={setUsername} />
        <Menu />
        {showUser && <Card profile={profile} />}
      </StyledHomePage>
    </>
  );
};
