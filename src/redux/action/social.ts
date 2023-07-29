import { UPDATE_SOCIAL_MEDIA_VALUE } from "../constants/interface";
import { ISocialMedia } from "../interface/social";

export const actUpdateSocialMediaValue = (payload: ISocialMedia) => {
    return {
        type: UPDATE_SOCIAL_MEDIA_VALUE,
        payload
    }
}