// Function der henter vores data
export async function fetchPlayers() {
  try {
    const response = await fetch("./data/players.json");
    const players = await response.json();

    return players;
  } catch (error) {
    console.error("Error fetching or parsing data:", error);
  }
}
