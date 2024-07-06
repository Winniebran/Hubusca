import { StyledCard } from "./style";
import { HubContext } from "../../providers";
import { useContext } from "react";
import { CardProps } from "../../interfaces/card.interface";
import { useNavigate } from "react-router-dom";

export const Card = ({ profile }: CardProps) => {
  const { setShowUser, getCurrentUser, getRepositories } =
    useContext(HubContext);
  const navigate = useNavigate();

  if (!profile) return null;
  const { avatar_url, name, login, location } = profile;

  const handleCloseModal = () => {
    setShowUser(false);
  };

  const handleImageClick = () => {
    if (profile) {
      navigate(`/profile/${login}`);
      getCurrentUser(profile);
      getRepositories();
    }
  };

  return (
    <StyledCard>
      <div className="card">
        <div className="card-button">
          <button onClick={() => handleCloseModal()}>X</button>
        </div>
        <div className="card-img">
          <img src={avatar_url} alt="" onClick={() => handleImageClick()} />
        </div>
        <div className="card-body">
          <span>{`Nome: ${name}`}</span>
          <span>{`Login: @${login}`}</span>
          <span>{location ? `Localização: ${location}` : null}</span>
        </div>
      </div>
    </StyledCard>
  );
};
