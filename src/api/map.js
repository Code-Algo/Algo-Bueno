import { create } from 'apisauce';

const api = create({
    baseURL: '/map-key'
})

export async function getMap(){
    const result = await api.get('') 
    if (!result.ok) return {error: 'server can\'t get map data'} 
    return result.data
}