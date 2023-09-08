import axios from 'axios'
import {TypeCity} from '../type'

export const fetchAll= async ():Promise<TypeCity[]> => {
  const urlString= 'https://us-central1-mobile-assignment-server.cloudfunctions.net/weather'
  const response = await axios.get('https://cors-anywhere.herokuapp.com/' + urlString);
  return response.data
}