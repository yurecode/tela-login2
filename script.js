const container = document.getElementById('container')
const registerBtn = document.getElementById('register')
const loginBtn = document.getElementById('login')
const loginForm = document.querySelector('#form')
const emailInput = document.querySelector('#email')
const passwordInput = document.querySelector('#password')

registerBtn.addEventListener('click', () => {
  container.classList.add('active')
})

loginBtn.addEventListener('click', () => {
  container.classList.remove('active')
})

document.addEventListener('DOMContentLoaded', () => {
  const loginForm = document.querySelector('#container .sign-in form')

  loginForm.addEventListener('submit', async (event) => {
    event.preventDefault()

    const email = document.querySelector(
      '#container .sign-in input[type="email"]'
    ).value
    const password = document.querySelector(
      '#container .sign-in input[type="password"]'
    ).value

    const body = { email, password }

    try {
      const response = await axios.post(
        'http://localhost:3006/auth/login',
        body
      )

      localStorage.setItem('token', response.data.accessToken)
      window.location.href = 'home.html'
    } catch (error) {
      console.error('Erro ao fazer login:', error.response.data.message)
      // Mostrar mensagem de erro na interface do usuário
    }
  })

  // Verificar se há um token armazenado no localStorage ao carregar a página
  const storedToken = localStorage.getItem('token')
  if (storedToken) {
    console.log('Token JWT armazenado:', storedToken)
    // Você pode usar o token armazenado para fazer requisições autenticadas
  }
})
