const http = require('http')
const url = require('url')
const querystring = require('querystring')

const form = `<form method="POST"  action="?" >
                <fieldset>
                    <legend>Cadastro Pessoal</legend>
                        <p>
                            <label for="name">Nome:</label>
                            <input type="text" name="name"   />
                        </p>
                        <p>
                            <label for="sobreNome">Sobrenome :</label>
                            <input type="text" name="sobreNome"  />
                        </p>
                        <p>
                            <label for="idade">Idade:</label>
                            <input type="number" name="idade"  />
                        </p>
                        <p>
                            <label for="endereco">Endereço:</label>
                            <input type="text" name="endereco"  />
                        </p>
                        <p>
                            <input type="submit" name="submit">
                        </p>
                </fieldset>
            </form>`


const submittedData = (pformData) => {

    return `<fieldset>
                <legend>Dados Submetidos</legend>
                    <p>
                        <label for="pName">Nome: ${pformData.name} </label>
                        
                    </p>
                    <p>
                        <label for="pSobrenome">Sobrenome : ${pformData.sobreNome}</label>
                
                    </p>
                    <p>
                        <label for="pIdade">Idade: ${pformData.idade}</label>
                        
                    </p>
                    <p>
                        <label for="pEndereco">Endereço: ${pformData.endereco}</label>
                        
                    </p>

            </fieldset>`
}

const dataJson = JSON.stringify([{
    "id": 1,
    "name": "Leanne Graham",
    "username": "Bret",
    "email": "Sincere@april.biz"
},
{
    "id": 2,
    "name": "Ervin Howell",
    "username": "Antonette",
    "email": "Shanna@melissa.tv"
},
{
    "id": 3,
    "name": "Clementine Bauch",
    "username": "Samantha",
    "email": "Nathan@yesenia.net"
}
])

const server = http.createServer((request, response) => {

    const urlparse = url.parse(request.url, true)


    if (request.method == 'GET' && urlparse.pathname == '/users') {
        response.writeHead(200, { 'Content-Type': 'application/json' })
            .end(dataJson)
    }
    else if (request.method == 'GET') {
        response.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' })
            .end(form)
    }
    else if (request.method == 'POST') {

        let formData = [];

        request.on('data', (chunk) => {
            formData = querystring.parse(chunk.toString())
        });

        request.on('end', () => {
            response.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' })
                .end(form + submittedData(formData))
        });
    }


})


const port = (process.env.PORT || 3000)

server.listen(port, function () {
    console.log(`servidor rodando ---> http://localhost:${port}`)
})



