function copyToClipboard() {
    var mail = document.getElementById('mail')

    mail.select();
    document.execCommand('copy')
}