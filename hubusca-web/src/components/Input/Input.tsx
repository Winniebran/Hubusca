import { useContext } from "react";
import { IUser } from "../../interfaces/user.interface";
import { StyledInput } from "./style";
import { HubContext } from "../../providers";
import { AiOutlineSearch } from "react-icons/ai";

export const InputSearch = ({ username, setUsername }: IUser) => {
  const { getProfile } = useContext(HubContext);

  const searchUser = () => {
    getProfile(username);
  };

  return (
    <StyledInput>
      <input
        type="search"
        placeholder="Digitar Pesquisa"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button onClick={() => searchUser()}>
        <AiOutlineSearch />
      </button>
    </StyledInput>
  );
};
