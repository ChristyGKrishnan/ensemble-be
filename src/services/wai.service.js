import axios from 'axios';
import { waiPrompt } from '../config/wai.js';

/**
 *
 * @param {object} data - {text : text}
 * @returns {Promise} List of Nodes
 */
const url = 'http://192.168.3.117:5000/chatgpt';

const getWAI = async request => {
  const result = await axios.post(url, { text: waiPrompt + request.text });
  return result.data.text.trim().split(/,/);
};

export {
  getWAI,
};
