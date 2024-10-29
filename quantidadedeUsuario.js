async function quantidadeUsuarios() {
    const url = ‘https://raw.
    githubusercontent.com/guilhermeonrails/api/
    main/numero-usuarios.json’
    const res = await fetch(url)
    const dados = await res.json()
    
    console.log(dados)
    }
    
    quantidadeUsuarios()
    <head>
<meta charset=”UTF-8”>
<meta name=”viewport”

content=”width=device-width, initial-
scale=1.0”>

<title>Redes Sociais</title>
<link rel=”stylesheet” href=”style.css”>

<script src=”https://cdn.plot.ly/plotly-
2.31.1.min.js” charset=”utf-8”></script>

</head>

{
    “Facebook”: 3049,
    “Youtube”: 2491,
    “WhatsApp”: 2000,
    “Instagram”: 2000,
    “Tiktok”: 1562,
    “WeChat”:1336
    }
    async function quantidadeUsuarios() {
        const url = ‘https://raw.githubusercontent.com/
        guilhermeonrails/api/main/numero-usuarios.json’
        const res = await fetch(url)
        const dados = await res.json()
        const nomeDasRedes = Object.keys(dados)
        const quantidadeUsuarios = Object.values(dados)
        }
        const data = [
            {
            
            x: nomeDasRedes,
            y: quantidadeUsuarios,
            type: ‘bar’
            
            }
            ]
            const grafico = document.createElement(‘div’)
            grafico.className = ‘grafico’
            
            document.getElementById(‘graficos-
            container’).appendChild(grafico)
            const grafico = document.createElement(‘div’)
grafico.className = ‘grafico’
document.getElementById(‘graficos-container’).
appendChild(grafico)
Plotly.newPlot(grafico, data)