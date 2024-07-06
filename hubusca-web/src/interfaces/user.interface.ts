export interface IProfile {
  id: number;
  avatar_url: string;
  name: string;
  login: string;
  location: string;
  followers: number;
  public_repos: number;
  repos_url: string;
}

export interface IUser {
  username: string;
  setUsername: React.Dispatch<React.SetStateAction<string>>;
}

export interface IRepository {
  name: string;
  language: string;
  description: string | null;
  created_at: string;
  pushed_at: string;
  clone_url: string;
}
