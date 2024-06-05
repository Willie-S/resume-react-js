export const getNumYears = (year, inclusive = true) => {
    if (isNaN(year)) year = 0;

    return new Date().getFullYear() - year + (inclusive ? 1 : 0);
};
