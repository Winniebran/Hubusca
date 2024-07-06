import { IRepository } from "../../interfaces/user.interface";

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
    <a href={stringToLink} target="_blank">
      <ul>
        {name && <li>{`nome do repositório: ${name}`}</li>}
        {language && <li>{`liguagens: ${language}`}</li>}
        {description && <li>{`descrição: ${description}`}</li>}
        {created_at && <li>{`data de criação: ${created_at}`}</li>}
        {pushed_at && <li>{`data do ultimo push: ${pushed_at}`}</li>}
      </ul>
    </a>
  );
};
