let btsGerar = document.querySelector('.bts-link');

btsGerar.addEventListener('click', GerarQRcode);

function GerarQRcode(){
    console.log("apertado foi então funciona seu filho da puta!!!");
    let inputUsuario = document.querySelector('#link').value;
    console.log(inputUsuario);
    let GoogleChartAPI = 'https://chart.googleapis.com/chart?cht=qr&chs=250x250&chld=H&choe=UTF-8&chl=';
    let QRCodeContent = GoogleChartAPI + encodeURIComponent(inputUsuario);
    document.querySelector('#QRCodeImage').src = QRCodeContent;
    console.log(QRCodeContent);
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