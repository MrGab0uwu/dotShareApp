import axios from 'axios';
import { URL } from '../../config';

export const fecthUsers = async () => await axios.get();

export const createUser = async (user) =>
	await axios.post(`${URL}/signup`, user);
