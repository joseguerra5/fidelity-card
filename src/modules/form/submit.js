import { idFetchById } from "../../services/id-fetch.js";
import { historyLoad } from "../load/history-show.js";
import { profileLoad } from "../load/profile-show.js";
import { pinCardLoad } from "../load/pin-card-show.js";
import { scoreLoad } from "../load/score-show.js";

//capturar o form
const form = document.querySelector("form")
//capturar o valor do id
const idCard = document.getElementById("idCard")
//captura o botão

document.addEventListener("DOMContentLoaded", () => {

  idCard.addEventListener("input", () => {
    // let hasCharactersRegex = /\D+/g
    // idCard.value = idCard.value.replace(hasCharactersRegex, "")
  
    idCard.value = idCard.value.replace(/\D+/g, "")
  
    if (idCard.value.length > 3) {
      idCard.value = idCard.value.substring(0, 3) + '-' + idCard.value.substring(3);
    }
    if (idCard.value.length > 7) {
      idCard.value = idCard.value.substring(0, 7) + '-' + idCard.value.substring(7);
    }
    if (idCard.value.length > 11) {
      idCard.value = idCard.value.substring(0, 11) + '-' + idCard.value.substring(11);
    }
    if (idCard.value.length > 14) {
      submitButton.removeAttribute("disabled");
    } else {
      submitButton.setAttribute("disabled", "disabled");
    }
    //impede que o input ultrapasse os 15 caracteres
    if (idCard.value.length > 15) {
      idCard.value = idCard.value.substring(0, 15);
    }
  
  })
  
  form.onsubmit = async (event) => {
  
    event.preventDefault()
    try {
      const customerId = idCard.value
  
      if (!customerId) {
        return alert("Informe o id do cartão")
      }
  
      //carregar informações do id
      const customerData = await idFetchById({ customerId })
      if (customerData.status === 404) {
        return alert(`Não existe o id: ${customerId}`)
      } else {
  
        historyLoad({ customerData })
        profileLoad({ customerData })
        pinCardLoad({ customerData })
        scoreLoad({ customerData })
      }
  
  
    } catch (error) {
      alert("Não foi possível buscar o cartão fidelidade")
      console.log(error)
    }
  }
})





