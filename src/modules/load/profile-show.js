const userName = document.getElementById("userName")
const since = document.getElementById("since")
const imgProfile = document.getElementById("imgProfile")

export async function profileLoad({ customerData }) {
  try {
    //limpar o histórico anterior
    userName.innerHTML = ""
    since.innerHTML = ""


    //define o nome e a data
    userName.textContent = customerData.name
    since.textContent = customerData.clientSince

    //define a imagem
    imgProfile.setAttribute("src", "./src/assets/Picture.png");


  } catch (error) {
    alert("Não foi possível exibir o profile")
    console.log(error)
  }
}