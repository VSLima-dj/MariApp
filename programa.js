

        
        document.getElementById('botaoQuemDeveSer').addEventListener('click', function() {

            setTimeout(function() {
                document.getElementById('resposta').style.display = 'block';
            }, 2000);


            setTimeout(function() {
                document.getElementById('mensagem1').innerHTML =
                    'Brincadeira, kkkkkkkk';
            }, 4000);

        setTimeout(function() {
                document.getElementById('mensagem5').innerHTML =
                    'A uma pessoa que conheço desde minha infância';
            }, 6000);

            setTimeout(function() {
                document.getElementById('mensagem2').innerHTML =
                    'Que tem problema de queda de cabelo';
            }, 8000);


            setTimeout(function() {
                document.getElementById('mensagem3').innerHTML =
                    'Que é minha melhor amiga...';
            }, 10000);


            setTimeout(function() {
                document.getElementById('mensagem4').innerHTML =
                    'Mariiii';
                    
            }, 11000);

            setTimeout(function() {
    document.getElementById('coracao').style.display = 'flex';
        }, 12000);

    setTimeout(function() {
        document.getElementById('fotoMari0').style.display = 'block';
    }, 13000);

    setTimeout(function() {
        document.getElementById('fotoMari1').style.display = 'block';
    }, 15000);

    setTimeout(function() {
        document.getElementById('fotoMari2').style.display = 'block';
    }, 17000);

    setTimeout(function() {
        document.getElementById('fotoMari3').style.display = 'block';
    }, 19000);

    setTimeout(function() {
        document.getElementById('fotoMari4').style.display = 'block';
    }, 21000);

    setTimeout(function() {
        document.getElementById('fotoMari5').style.display = 'block';
    }, 23000);

    setTimeout(function() {
        document.getElementById('fotoMari6').style.display = 'block';
    }, 25000);

    setTimeout(function() {
        document.getElementById('fotoMari7').style.display = 'block';
    }, 27000);

    setTimeout(function() {
        document.getElementById('fotoMari8').style.display = 'block';
    }, 29000);


        });

        document.getElementById('coracao').addEventListener('click', function() {
    this.classList.remove('animar');
        
    setTimeout(() => {
        this.classList.add('animar');
    }, 10);
});
        const respostasCoracao = [
            'Tá clicando por que? Achou que ia encontrar algo? kkkkk, vai sonhando, curiosa.',
            'Ué, ainda tá clicando?... bem, não teremos surpresa alguma, viu?',
            'Eu não quero fazer surpresa.',
            'Tá bom, né... já que você quer tanto...',
            'Eu...',
            'Te',
            'Desejo um ótimo dia!',
            'Sei lá',
            'Eu realmente não tenho mais nada a dizer',
            'Você espera que eu diga mais algo é? kkkkkkk',
            'pra você ó:',
            '✂️✂️✂️✂️✂️✂️✂️✂️✂️✂️✂️✂️✂️✂️✂️✂️✂️✂️✂️',
            '💞'
        ];

        let indiceRespostaCoracao = 0;

        document.getElementById('coracao').addEventListener('click', function() {
            this.classList.remove('animar');

            setTimeout(() => {
                this.classList.add('animar');
            }, 10);

            const mensagemAtual = respostasCoracao[indiceRespostaCoracao];
            alert(mensagemAtual);

            indiceRespostaCoracao = (indiceRespostaCoracao + 1) % respostasCoracao.length;
        });

    
        document.addEventListener('DOMContentLoaded', function () {
            const splash = document.getElementById('splash');
            const isStandalone = window.matchMedia('(display-mode: standalone)').matches || window.navigator.standalone === true;

            if (splash && isStandalone) {
                splash.classList.add('visible');

                setTimeout(function () {
                    splash.classList.add('hidden');
                }, 2000);
            }
        });

  if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('sw.js').catch(function () {
            console.log('Service Worker falhou ao registrar');
        });
    }
    