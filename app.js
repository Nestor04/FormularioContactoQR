function generateQRCode() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (!name || !email || !message) {
        alert("Por favor, completa todos los campos.");
        return;
    }

    const qrCodeContainer = document.getElementById("qrcode");
    qrCodeContainer.innerHTML = ""; // Limpiar QR anterior

    const qrData = `Nombre: ${name}\nCorreo: ${email}\nMensaje: ${message}`;
    new QRCode(qrCodeContainer, {
        text: qrData,
        width: 200,
        height: 200,
        colorDark : "#000000",
        colorLight : "#ffffff",
        correctLevel : QRCode.CorrectLevel.H
    });
}
