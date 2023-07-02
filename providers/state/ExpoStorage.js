import * as FileSystem from "expo-file-system";

const FSStorage = {
  getItem: async (key) => {
    let fileUri = FileSystem.documentDirectory + key;
    let info = await FileSystem.getInfoAsync(fileUri);

    if (!info.exists) {
      return null;
    }

    return await FileSystem.readAsStringAsync(fileUri);
  },
  setItem: async (key, value) => {
    let fileUri = FileSystem.documentDirectory + key;
    await FileSystem.writeAsStringAsync(fileUri, value);
  },
  removeItem: async (key) => {
    let fileUri = FileSystem.documentDirectory + key;
    await FileSystem.deleteAsync(fileUri);
  },
};

export default FSStorage;
