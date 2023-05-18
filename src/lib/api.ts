import axios from 'axios'

export const api = axios.create({
  baseURL: 'http://192.168.1.116:3333', // Endereço da máquina na rede. Pode (e deve) mudar com frequência.
})
