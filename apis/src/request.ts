import axios from "axios";


const request = axios.create({
  timeout:5000,
  baseURL:'https://api.oick.cn'
})


export function get (url:string, params?:any) {
  return request.get(url, {params})
}

export function post (url:string, params:any) {
  return request.post(url, params)
}