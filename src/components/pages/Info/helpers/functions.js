const validCategories = { characters: true, locations: true, episodes: true };

export const isCategoryValid = (category) => !!validCategories[category];
