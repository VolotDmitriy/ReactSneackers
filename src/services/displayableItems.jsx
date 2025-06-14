
export const displayableItems = (array, filterValue) => {
    return array.filter(e => e.title.toLowerCase().includes(filterValue))
}

