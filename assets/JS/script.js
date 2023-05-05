let btsGerar = document.querySelector('.bts-link');

btsGerar.addEventListener('click', GerarQRcode);

function GerarQRcode(){
    let inputUsuario = document.querySelector('#link').value;
    //console.log(inputUsuario);
    let GoogleChartAPI = 'https://chart.googleapis.com/chart?cht=qr&chs=250x250&chld=L&choe=UTF-8&chl=';

    let correcao = document.querySelector('#chld');
    let chld = correcao.options[correcao.selectedIndex].value;
    console.log(chld);

    let QRCodeContent = GoogleChartAPI + encodeURIComponent(inputUsuario);


    let imageQRcode = document.querySelector('#QRCodeImage');
    imageQRcode.src = QRCodeContent;
    imageQRcode.classList.add('.qrcode-appear');
    imageQRcode.style.opacity = 1;

    //console.log(QRCodeContent);
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