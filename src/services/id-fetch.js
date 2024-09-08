//importar o apiconfig para realizar as operações
import { apiConfig } from "./api-config.js";

export async function idFetchById({ customerId }) {
  
  try {
    //fazendo requisição
    const response = await fetch(`${apiConfig.baseURL}/clients/${customerId}`)

    if (response.status === 404) {
      return alert(`Não existe o id: ${customerId}`)    
    }

    //converte as info para json
    const data = await response.json()

    //retorna as info em json
    return data
    
  } catch (error) {
    alert("Não foi possível buscar o cartão fidelidade")
    console.log(error)
  }
}