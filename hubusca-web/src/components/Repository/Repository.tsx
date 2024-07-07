import { IRepository } from "../../interfaces/user.interface";
import { StyledRepository } from "./style";

export const Repository = ({
  name,
  language,
  description,
  created_at,
  pushed_at,
  clone_url,
}: IRepository) => {
  const stringToLink = clone_url.replace(/"/g, "");

  return (
    <StyledRepository href={stringToLink} target="_blank">
      <ul>
        {name && (
          <li>
            <span>Nome do repositório:</span> {name}
          </li>
        )}
        {language && (
          <li>
            <span>Linguagens:</span> {language}
          </li>
        )}
        {description && (
          <li>
            <span>Descrição:</span> {description}
          </li>
        )}
        {created_at && (
          <li>
            <span>Data de criação:</span> {created_at}
          </li>
        )}
        {pushed_at && (
          <li>
            <span>Data do último push:</span> {pushed_at}
          </li>
        )}
      </ul>
    </StyledRepository>
  );
};
