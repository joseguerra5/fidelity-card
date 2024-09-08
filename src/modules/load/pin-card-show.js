const pinUL = document.getElementById("pinUL")
const userId = document.getElementById("userID")
const listItem = pinUL.querySelectorAll("li")

export async function pinCardLoad({ customerData }) {
  try {
    userId.textContent = `ID: ${customerData.id}`
    const cutTotal = customerData.appointmentHistory.length
    const remaining = cutTotal % 10

    if (cutTotal > 0 && remaining == 0) {

      listItem.forEach((item) => {
        item.classList.add("checked")
      })

      listItem[listItem.length - 1].classList.remove("gift", "checked")
      listItem[listItem.length - 1].classList.add("gift-check")

      const modal = document.getElementById("congratModal");
      const span = document.getElementsByClassName("close")[0];
      modal.style.display = "block";

      span.onclick = function () {
        modal.style.display = "none";
      }

      window.onclick = function (event) {
        if (event.target == modal) {
          modal.style.display = "none";
        }
      }


    } else {

      listItem.forEach((item, index) => {
        if (index < remaining) {
          item.classList.add("checked")
        } else {
          item.classList.remove("checked");
        }

      })
      if (cutTotal > 0) {
        listItem[listItem.length - 1].classList.add("gift");
      }
    }

  } catch (error) {
    alert("Não foi possível exibir o cartão fidelidade")
    console.log(error)
  }
}