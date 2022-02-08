const { host, pathname } = window.location
const username = host?.split('.')?.[0]
const repo = pathname?.substring(1)?.split('/')?.[0] || `${username}.github.io`

// generated with copilot :P
const buttonStyle = {
  position: 'fixed',
  top: '10px',
  right: '10px',
  zIndex: '99999999999',
  background: '#fff',
  border: '1px solid #ccc',
  borderRadius: '3px',
  padding: '5px 10px',
  cursor: 'pointer',
  fontSize: '12px',
  fontWeight: 'bold',
  textTransform: 'uppercase',
  color: '#333',
}

const button = document.createElement('button')
button.innerText = 'Open in GitHub'
button.title = 'Powered by Chrome Extension "GH Page Source Opener"'
Object.assign(button.style, buttonStyle)
button.addEventListener('click', () => {
  if (!host || !repo) {
    alert('Failed to parse GH Page URL.')
  }
  window.open(`https://github.com/${username}/${repo}`)
})
document.body.appendChild(button)
