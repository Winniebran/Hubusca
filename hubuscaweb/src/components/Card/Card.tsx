import { StyledCard } from "./style";
import { HubContext } from "../../providers";
import { useContext } from "react";
import { CardProps } from "../../interfaces/card.interface";
import { useNavigate } from "react-router-dom";
import { AiOutlineClose } from "react-icons/ai";

export const Card = ({ profile }: CardProps) => {
  const { setShowUser, getCurrentUser, showUser } = useContext(HubContext);
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
      setShowUser(false);
    }
  };

  return (
    <StyledCard>
      <div className="card">
        <div className="card-button">
          {showUser ? (
            <button onClick={() => handleCloseModal()}>
              <AiOutlineClose />
            </button>
          ) : null}
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
