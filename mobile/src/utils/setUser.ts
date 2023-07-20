import AsyncStorage from "@react-native-async-storage/async-storage";
import getUser from "./getUser";

const setUser = async (user_data: object) => {
  try {
    const currentUser = await getUser();

    if (!currentUser) {
      await AsyncStorage.setItem(
        "authenticated-user",
        JSON.stringify(user_data)
      );

      return true;
    } else {
      return false;
    }
  } catch (error) {
    return error;
  }
};

export default setUser;
