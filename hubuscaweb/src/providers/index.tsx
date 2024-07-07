/* eslint-disable react-hooks/exhaustive-deps */
import { createContext, useCallback, useEffect, useState } from "react";
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
  const [recentUsers, setRecentUsers] = useState<IProfile[]>([]);

  const saveUserToLocalStorage = (user: IProfile) => {
    let users = JSON.parse(localStorage.getItem("recentUsers") || "[]");
    users = users.filter((profile: IProfile) => profile.login !== user.login);
    users.unshift(user);
    localStorage.setItem("recentUsers", JSON.stringify(users));
    setRecentUsers(users);
  };

  const getRecentUsers = (): IProfile[] => {
    return JSON.parse(localStorage.getItem("recentUsers") || "[]");
  };

  const getProfile = async (username: string) => {
    if (!username) return;
    try {
      const { data } = await ApiRequests.get<IProfile>(`/users/${username}`);
      setProfile(data);
      saveUserToLocalStorage(data);
      setShowUser(true);
    } catch (error) {
      console.log(error);
    }
  };

  const getCurrentUser = (user: IProfile) => {
    setCurrentUser(user);
  };

  const getRepositories = useCallback(async () => {
    if (!currentUser) return;
    try {
      const { data } = await ApiRequests.get<IRepository[]>(
        currentUser?.repos_url
      );
      setRepositories(data);
    } catch (error) {
      console.log(error);
    }
  }, [currentUser]);

  useEffect(() => {
    if (currentUser) {
      getRepositories();
    }
  }, [currentUser]);

  useEffect(() => {
    if (username) {
      getProfile(username);
    }
  }, []);

  useEffect(() => {
    setRecentUsers(getRecentUsers());
  }, []);

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
        getRecentUsers,
        recentUsers,
        setRecentUsers,
      }}
    >
      {children}
    </HubContext.Provider>
  );
};
