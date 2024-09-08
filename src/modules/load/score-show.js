const remainingCut = document.getElementById("remainingCut")
const progressBar = document.getElementById("progress")
const outOf = document.getElementById("outOf")

export async function scoreLoad({customerData}) {
  try {
    const cutTotal = customerData.appointmentHistory.length % 10
    const remaining = 10 - cutTotal 

    remainingCut.textContent = remaining
    const calcWidth = cutTotal * 10

    outOf.textContent = `${cutTotal} de 10`

    if (cutTotal === 0) {
      progressBar.style.setProperty("width", "100%")
    } else {
      progressBar.style.setProperty("width", `${calcWidth}%`)
    }


    
  } catch (error) {
    alert("Não foi possível exibir o progresso")
    console.log(error)
  }
}