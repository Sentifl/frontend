import { FunctionComponent, ReactNode, createContext, useContext, useState } from "react";

interface AuthContextType {
    isLoggedIn: boolean;
    setIsLoggedIn: (isLoggedIn: boolean) => void;
    nickname: string;
    setNickname: (nickname: string) => void;
    uid: string;
    setUid: (uid: string) => void;
    accessToken: string;
    setAccessToken: (token: string) => void;
    profileImage: string;
    setProfileImage: (profileImage: string) => void;
    logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
    children: ReactNode;
}

export const AuthProvider: FunctionComponent<AuthProviderProps> = ({ children }) => {
    const [isLoggedIn, setIsLoggedInState] = useState<boolean>(() => localStorage.getItem("isLoggedIn") === "true");
    const [nickname, setNicknameState] = useState<string>(() => localStorage.getItem("nickName") || "");
    const [uid, setUidState] = useState<string>(() => localStorage.getItem("uid") || "");
    const [accessToken, setAccessTokenState] = useState<string>(() => localStorage.getItem("accessToken") || "");
    const [profileImage, setProfileImagestate] = useState<string>(() => localStorage.getItem("profileImage") || "default_image_path");
    
    const logout = () => {
        localStorage.clear();
        setIsLoggedIn(false);
    }


    const setIsLoggedIn = (value: boolean) => {
        setIsLoggedInState(value);
        localStorage.setItem("isLoggedIn", String(value));
    };

    const setNickname = (nickname: string) => {
        setNicknameState(nickname);
        localStorage.setItem("nickName", nickname);
    };

    const setUid = (uid: string) => {
        setUidState(uid);
        localStorage.setItem("uid", uid);
    };

    const setAccessToken = (token: string) => {
        setAccessTokenState(token);
        localStorage.setItem("accessToken", token);
    };

    const setProfileImage = (profileImage: string) => {
        setProfileImagestate(profileImage);
        localStorage.setItem("profileImage", profileImage);
    }

    return (
        <AuthContext.Provider
            value={{
                isLoggedIn,
                setIsLoggedIn,
                nickname,
                setNickname,
                uid,
                setUid,
                accessToken,
                setAccessToken,
                profileImage,
                setProfileImage,
                logout,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) throw new Error("useAuth must be used within an AuthProvider");
    return context;
};