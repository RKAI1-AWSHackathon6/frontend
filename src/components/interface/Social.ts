import { ISocialMedia } from "@/redux/interface/social";

export interface ISocialItemProps {
    socialMedia: ISocialMedia;
    actUpdateSocialMediaValue: (payload: ISocialMedia) => void;
}