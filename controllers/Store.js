import AsyncStorage from '@react-native-async-storage/async-storage';

export default class Store {

       /**
     * @description Set JSON data to AsyncStorgae
     */
    async storeJSONDataAsync(key, value) {
        try {
            const jsonValue = JSON.stringify(value)
            await AsyncStorage.setItem(key, jsonValue)
        } catch (e) {
            // saving error
            return e
        }
    } 

    async storeSingleDataAsyc (key, value) {
        try {
            await AsyncStorage.setItem(key, value)
        } catch (e) {
            // saving error
            return e
        }
    }

    
    async getSingleDataAsync (key) {
        try {
            const value = await AsyncStorage.getItem(key)
            return value != null ? value : null;
        } catch (e) {
            return e
            // error reading value
        }
    } 
    
    
    async getJSONDataAsync (key) {
        try {
            const jsonValue = await AsyncStorage.getItem(key ? key : "")
            //   console.log("FROM STORAGE: ", jsonValue != null ? JSON.parse(jsonValue) : null)
            return jsonValue != null ? JSON.parse(jsonValue) : null;
        } catch (e) {
            return e
            // error reading value
        }
    }
    
    
    async removeAsycStoreItem (key) {
        try {
            await AsyncStorage.removeItem(key)
            return "success"
        } catch (e) {
            return e
            // remove error
        }
    
    }

    async removeFew(keys = []){
        try {
          await AsyncStorage.multiRemove(keys)
        } catch(e) {
          // remove error
        }
      
      }
    
    async mergeAsyncItem (key, value) {
        try {
            await AsyncStorage.mergeItem(key, value)
    
        } catch (e) {
            console.log(e)
            return e
        }
    }

}