document.getElementById('myForm').addEventListener('submit', function (event) {
  event.preventDefault()

  const fname = document.getElementById('fname').value
  const sname = document.getElementById('sname').value
  const email = document.getElementById('email').value
  const message = document.getElementById('message').value

  const formDetails = document.getElementById('formDetails')
  formDetails.innerHTML = ` <h2 style = "color: white;">Thank you for reaching out😃</h2>
                            <p><strong>First Name: </strong> ${fname}</p>
                            <p><strong>Second Name: </strong> ${sname}</p>
                            <p><strong>Email: </strong> ${email}</p>
                            <p><strong>Message </strong> ${message}</p>`
  formDetails.style.display = 'block'

  document.querySelector('.form-container').style.display = 'none'
})
