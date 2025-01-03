const getCategories = () => {
    const items = localStorage.getItem("categories");
    if (items) {
        return JSON.parse(items);
    }
    return [];
}

const addCategoriesToLs = categories => {


    localStorage.setItem("categories", JSON.stringify(categories));
}

export {
    getCategories,
    addCategoriesToLs
}