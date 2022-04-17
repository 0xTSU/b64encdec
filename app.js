var clearbtn = document.getElementById('btn-clear')
var encodebtn = document.getElementById('btn-encode')
var decodebtn = document.getElementById('btn-decode')

const b64 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"

clearbtn.addEventListener('click', function(e) {
    document.getElementById('original-text').value = ''
    document.getElementById('b64-text').value = ''
})

encodebtn.addEventListener('click', function(e) {
    document.getElementById('b64-text').value = btoa(document.getElementById('original-text').value)
})

decodebtn.addEventListener('click', function(e) {
    document.getElementById('original-text').value = atob(document.getElementById('b64-text').value)
})

