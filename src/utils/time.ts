export function getTimeText(dateNumber: number) {
    const date = new Date(dateNumber * 1000);
    const now = new Date();

    const secondFromNow = ((now as any) - (date as any)) / 1000;

    if (secondFromNow < 60)
        return "Now"
    
    if (secondFromNow < 3600) {
        const minute = Math.round(secondFromNow / 60);
        return `${minute} minute${minute > 1 ? "s" : ""} ago`
    }
    
    if (secondFromNow < 3600 * 24) {
        const hour = Math.round(secondFromNow / 3600);
        return `${hour} hour${hour > 1 ? "s" : ""} ago`
    }

    const day = Math.round(secondFromNow / 3600 / 24);

    return `${day} day${day > 1 ? "s" : ""} ago`
}