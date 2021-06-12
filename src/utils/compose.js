
const compose = (...funcs) => (comp) => {
    return funcs.reduceRight(
        (mass, func) => func(mass), comp);
};

export default compose;