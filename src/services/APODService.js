import apodApi from "./AxiosService"
import AppState from "../AppState"

export default class APODService {

    async getImage() {
        try {
            AppState.apod = await apodApi.get('')
        } catch (e) {
            console.error(e)
        }
    }
}