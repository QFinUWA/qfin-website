// returns def if the value is null
const nullToDefault = (value, def="") => {
    return !!value ? value : def;
}

export default nullToDefault;
