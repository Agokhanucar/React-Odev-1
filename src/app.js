import getData from "./lib/service.js";

(async () => {
  try {
    const userId = 1; // Örnek userId
    const userData = await getData(userId);
    console.log("User Data with Posts:", userData);
  } catch (error) {
    console.error("Error:", error);
  }
})();