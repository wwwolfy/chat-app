export const formatTimeString = timestamp => {
    const date = new Date(timestamp);
    const months = getMonthsName('short');
    const year = date.getFullYear();
    const month = months[date.getMonth()];
    const day = date.getDate();
    const hour = date.getHours();
    const min = date.getMinutes();
    return `${day} ${month} ${year} ${hour < 10 ? `0${hour}` : hour}:${min < 10 ? `0${min}` : min}`
};

const getMonthsName = (format) => {
    return Array.from({length: 12}, (e, i) => {
        return new Date(null, i + 1, null).toLocaleDateString("en", {month: format});
    })
};
