const axios = require("axios");

const URL = "https://rickandmortyapi.com/api/character/";

async function getCharById(req, res) {
  try {
    const { id } = req.params;
    const response = await axios.get(URL + id);
    if (response.data.id) {
      const { id, name, gender, species, origin, image, status } =
        response.data;
      res
        .status(200)
        .json({ id, name, gender, species, origin, image, status });
    } else {
      res.status(404).send("Not found");
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

module.exports = getCharById;
