// Simpan data ke localStorage
export const saveToLocalStorage = (key, value) => {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.error("Failed to save data:", error);
  }
};

// Ambil data dari localStorage
export const loadFromLocalStorage = (key) => {
  try {
    const storedValue = localStorage.getItem(key);
    return storedValue ? JSON.parse(storedValue) : [];
  } catch (error) {
    console.error("Failed to load data:", error);
    return [];
  }
};
