const parseDate = (date: Date) => {
    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth()+1).toString().padStart(2, "0");
    const year = date.getFullYear().toString().padStart(2, "0");

    const hour = date.getHours().toString().padStart(2, "0");
    const minute = date.getMinutes().toString().padStart(2, "0");
    const second = date.getSeconds().toString().padStart(2, "0");
    const millisecond = date.getMilliseconds().toString().padStart(2, "0");

    const parsedDate = {
        day, month, year,
        hour, minute, second, millisecond
    };

    return parsedDate;
};

export default parseDate;