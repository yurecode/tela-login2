const container = document.getElementById('container')
const registerBtn = document.getElementById('register')
const loginBtn = document.getElementById('login')
const loginForm = document.querySelector('#form')
const emailInput = document.querySelector('#email')
const nameInput = document.querySelector('#name')
const passwordInput = document.querySelector('#password')
const emailFocus = document.getElementById('emailFocus')

registerBtn.addEventListener('click', () => {
  container.classList.add('active')
  nameInput.focus()
})

loginBtn.addEventListener('click', () => {
  container.classList.remove('active')
  emailFocus.focus()
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
      const response = await axios.post('http://10.1.1.9:3006/auth/login', body)

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

document.addEventListener('DOMContentLoaded', () => {
  const registerForm = document.querySelector('#container .sign-up form')

  registerForm.addEventListener('submit', async (event) => {
    event.preventDefault()

    const name = document.querySelector(
      '#container .sign-up input[type="text"]'
    ).value
    const email = document.querySelector(
      '#container .sign-up input[type="email"]'
    ).value
    const password = document.querySelector(
      '#container .sign-up input[type="password"]'
    ).value

    const userData = {
      name,
      email,
      password,
    }

    try {
      // Fazer requisição POST para cadastrar o usuário
      const response = await axios.post('http://10.1.1.9:3006/user', userData)

      // Se o cadastro for bem-sucedido, você pode exibir uma mensagem ou redirecionar para a página de login
      console.log('Usuário cadastrado com sucesso:', response.data)

      // Redirecionar para o formulário de login após o cadastro
      container.classList.remove('active')
    } catch (error) {
      alert(error.response.data.message)
      console.error('Erro ao cadastrar usuário:', error.response.data.message)
      // Mostrar mensagem de erro na interface do usuário
    }
  })

  // Verificar se há um token armazenado no localStorage ao carregar a página
  const storedToken = localStorage.getItem('token')
  if (storedToken) {
    console.log('Token JWT armazenado:', storedToken)
    // Você pode usar o token armazenado para fazer requisições autenticadas
  }

  const loginBtn = document.getElementById('login')
  loginBtn.addEventListener('click', () => {
    container.classList.remove('active')
  })
})
