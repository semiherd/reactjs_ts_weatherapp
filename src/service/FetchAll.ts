import axios from 'axios'
import {TypeCity} from '../type'
import {apiData} from '../asset/apiData'

export const fetchAll= async ():Promise<TypeCity[]> => {
  // const urlString= '***'
  // const response = await axios.get(urlString);
  return apiData
}
