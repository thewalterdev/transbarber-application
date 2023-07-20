import AsyncStorage from "@react-native-async-storage/async-storage";

const getUser = async () => {
  try {
    const savedUser = await AsyncStorage.getItem("authenticated-user");
    const currentUser = JSON.parse(savedUser);

    return currentUser;
  } catch (error) {
    return error;
  }
};

export default getUser;
