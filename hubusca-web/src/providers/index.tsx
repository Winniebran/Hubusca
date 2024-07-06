import { createContext, useEffect, useState } from "react";
import { ApiRequests } from "../services";
import { IChildren, IHubContext } from "../interfaces/contexts.interface";
import { IProfile, IRepository } from "../interfaces/user.interface";

export const HubContext = createContext({} as IHubContext);

export const HubProvider = ({ children }: IChildren) => {
  const [username, setUsername] = useState("");
  const [profile, setProfile] = useState<IProfile | null>(null);
  const [currentUser, setCurrentUser] = useState<IProfile | null>(null);
  const [repositories, setRepositories] = useState<IRepository[]>([]);
  const [showUser, setShowUser] = useState(false);

  const getProfile = async (username: string) => {
    if (!username) return;
    try {
      const { data } = await ApiRequests.get<IProfile>(`/users/${username}`);
      setProfile(data);
      setShowUser(true);
    } catch (error) {
      console.log(error);
    }
  };

  const getCurrentUser = (user: IProfile) => {
    setCurrentUser(user);
  };

  const getRepositories = async () => {
    if (!currentUser) return;
    try {
      const { data } = await ApiRequests.get<IRepository[]>(
        currentUser?.repos_url
      );
      setRepositories(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    username && getProfile(username);
    currentUser && getRepositories();
  }, []);

  console.log(repositories);

  return (
    <HubContext.Provider
      value={{
        profile,
        setProfile,
        showUser,
        setShowUser,
        getProfile,
        username,
        setUsername,
        currentUser,
        setCurrentUser,
        repositories,
        setRepositories,
        getRepositories,
        getCurrentUser,
      }}
    >
      {children}
    </HubContext.Provider>
  );
};
