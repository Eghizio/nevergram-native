
const year = 2020;
const month = () => Math.floor(Math.random()*12);
const day = () => Math.ceil(Math.random()*28);
const hour = () => Math.floor(Math.random()*24);
const minute = () => Math.floor(Math.random()*60);
const text = () => [
    "See something here", "Someone followed you",
    "The answer is 42 or 44", "Some random stuff here lulz"
][Math.floor(Math.random()*4)];

export const activities = new Array(100).fill(0).map((_, i) => {
    return {
        id: i,
        text: text(),
        date: new Date(year, month(), day(), hour(), minute())
    };
}).sort((a, b) => a.date.getTime() > b.date.getTime() ? -1 : 1);