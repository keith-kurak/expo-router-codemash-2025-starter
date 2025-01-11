import { useAtom } from "jotai";
import { atomWithStorage, createJSONStorage, RESET } from "jotai/utils";
import AsyncStorage from "@react-native-async-storage/async-storage";

const storage = createJSONStorage(() => AsyncStorage);
const authTokenAtom = atomWithStorage<any>("auth-token", undefined, storage);

const useAuth = () => {
  const [authToken, setAuthToken] = useAtom(authTokenAtom);

  const login = async (email: string, password: string) => {
    await setAuthToken("whatever");
  };

  const logout = async () => {
    setAuthToken(RESET);
  };

  return { authToken, login, logout };
};

export { useAuth };
