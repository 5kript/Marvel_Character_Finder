import Axios from 'axios';

const marvelLogic = {
  async fetchHero() {
    try {
      const res = await Axios.get(
        `${process.env.REACT_APP_BASE_URL}characters?limit=100&apikey=${process.env.REACT_APP_PUBLIC_API_KEY}`
      );
      if (res.status === 200) {
        return res.data;
      }
    } catch (err) {
      return console.log(err);
    }
  },

  async getHeroByName(name) {
    try {
      const res = await Axios.get(
        `${process.env.REACT_APP_BASE_URL}characters?nameStartsWith=${name}&limit=100&apikey=${process.env.REACT_APP_PUBLIC_API_KEY}`
      );
      if (res.status === 200) {
        return res.data;
      }
    } catch (err) {
      return console.log(err);
    }
  }
};

export default marvelLogic;
