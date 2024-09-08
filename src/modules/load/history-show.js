
const historyUL = document.getElementById("historyUL")
const cutCount = document.getElementById("cutCount")

export async function historyLoad({ customerData }) {
  try {
    //limpar o histórico anterior
    cutCount.innerHTML = ""
    historyUL.innerHTML = ""

    const cutTotal = customerData.appointmentHistory.length
    cutCount.textContent = `${cutTotal} Cortes`

    //renderizar as listas

    customerData.appointmentHistory.forEach((appointment) => {

      const item = document.createElement("li")
      const divContainer = document.createElement("div")
      const day = document.createElement("span")
      const hour = document.createElement("span")
      const checkIcon = document.createElement("img")

      //define a data e hora do corte
      day.textContent = appointment.date
      hour.textContent = appointment.time

      //insere as info na img
      checkIcon.setAttribute("src", "./src/assets/SealCheck.svg");
      checkIcon.setAttribute("alt", "Ícone de verificação");

      

      divContainer.append(day, hour)

      item.append(divContainer, checkIcon)

      historyUL.append(item)
    })




  } catch (error) {
    alert("Não foi possível exibir o histórico")
    console.log(error)
  }
}