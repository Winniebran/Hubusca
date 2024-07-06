import { useContext } from "react";
import { HubContext } from "../../providers";
import { Card } from "../Card/Card";
import { IProfile } from "../../interfaces/user.interface";
import { StyledMenu } from "./style";

export const Menu = () => {
  const { recentUsers } = useContext(HubContext);

  return (
    <StyledMenu>
      {recentUsers.length ? (
        <>
          <h3>Usuários acessados anteriormente:</h3>
          <div>
            {recentUsers.map((user: IProfile) => (
              <Card key={user.login} profile={user} />
            ))}
          </div>
        </>
      ) : null}
    </StyledMenu>
  );
};
