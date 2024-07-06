import { IProfile, IRepository } from "./user.interface";

export interface IChildren {
  children: React.ReactNode;
}

export interface IHubContext {
  username: string;
  setUsername: React.Dispatch<React.SetStateAction<string>>;
  profile: IProfile | null;
  setProfile: React.Dispatch<React.SetStateAction<IProfile | null>>;
  currentUser: IProfile | null;
  setCurrentUser: React.Dispatch<React.SetStateAction<IProfile | null>>;
  repositories: IRepository[];
  setRepositories: React.Dispatch<React.SetStateAction<IRepository[]>>;
  showUser: boolean;
  setShowUser: React.Dispatch<React.SetStateAction<boolean>>;
  getProfile: (profile: string) => Promise<void>;
  getRepositories: () => Promise<void>;
  getCurrentUser: (user: IProfile) => void;
}
