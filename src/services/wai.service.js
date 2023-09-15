import axios from 'axios';

/**
 *
 * @param {object} data - {text : text}
 * @returns {Promise} List of Nodes
 */
const url = 'http://192.168.3.117:5000/wai';

const getWAI = async request => {
  const result = await axios.post(url, { text: request.text });
  return result.data;
};

export {
  getWAI,
};
