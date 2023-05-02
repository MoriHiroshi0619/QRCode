function GerarQRcode(){
    let inputUsuario = document.querySelector('#link').value;
    let GoogleChartAPI = 'https://chart.googleapis.com/chart?cht=qr&chs=500x500&chld=H&chl=';
    let QRCodeContent = GoogleChartAPI + encodeURIComponent(inputUsuario);
    document.querySelector('#QRCodeImage').src = QRCodeContent;
}

/*
link para a documentação da API: https://developers.google.com/chart/infographics/docs/qr_codes?hl=en
parametros da API obrigatórios
cht=qr: especifica como um QRCode.
chs=<width>x<height>: tamamho do QRcode
chl=<data>: aqui é o conteudo que vai aparecer no QRCode que pode ser um link, texto,etc..

parametros extra da API
chld=<level>: nivel de correção de erro. enum(H, M, Q, L)
*/