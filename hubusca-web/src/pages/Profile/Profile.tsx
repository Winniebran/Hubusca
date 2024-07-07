import { useContext } from "react";
import { StyledProfile } from "./style";
import { HubContext } from "../../providers";
import { Link } from "react-router-dom";
import { IRepository } from "../../interfaces/user.interface";
import { Repository } from "../../components/Repository/Repository";
import { PiKeyReturnFill } from "react-icons/pi";

export const Profile = () => {
  const { currentUser, repositories } = useContext(HubContext);

  if (!currentUser) return null;
  const { avatar_url, name, login, location, id, followers, public_repos } =
    currentUser;

  const formatDate = (date: string) => {
    return new Date(date).toLocaleString("pt-BR", {
      year: "numeric",
      month: "numeric",
      day: "numeric",
    });
  };

  return (
    <StyledProfile>
      <div className="profile-img">
        <img src={avatar_url} alt="" />
        <div className="profile-data">
          <span>{`Nome: ${name}`}</span>
          <span>{`Login: @${login}`}</span>
          <span>{location ? `Localização: ${location}` : null}</span>
          <span> {`ID: ${id}`}</span>
          <span>{`Nº de Seguidores: ${followers}`}</span>
          <span>{`Nº de Repositórios públicos: ${public_repos}`}</span>
        </div>
        <Link to={"/"} className="link">
          <PiKeyReturnFill />
        </Link>
      </div>
      <div className="profile-body">
        <h2>Lista de Repositórios: </h2>
        <div className="profile-body-repository">
          {repositories.length ? (
            repositories.map((repository: IRepository, index: number) => (
              <Repository
                key={index}
                name={repository.name}
                language={repository.language}
                description={repository.description}
                created_at={formatDate(repository.created_at)}
                pushed_at={formatDate(repository.pushed_at)}
                clone_url={repository.clone_url}
              />
            ))
          ) : (
            <sub>Ainda sem repositórios...</sub>
          )}
        </div>
      </div>
    </StyledProfile>
  );
};
