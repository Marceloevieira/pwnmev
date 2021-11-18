const http = require('http')
const querystring = require('querystring');

const html = function (pName = '',pSobrenome = '', pidade = '',pEndereco = '') {

    return `<form method="POST"  action="?" >
                <fieldset>
                    <legend>Cadastro Pessoal</legend>
                        <p>
                            <label for="name">Nome:</label>
                            <input type="text" name="name" value="${pName}"  />
                        </p>
                        <p>
                            <label for="sobreNome">Sobrenome :</label>
                            <input type="text" name="sobreNome" value="${pSobrenome}" />
                        </p>
                        <p>
                            <label for="idade">Idade:</label>
                            <input type="number" name="idade" value="${pidade}" />
                        </p>
                        <p>
                            <label for="endereco">Endereço:</label>
                            <input type="text" name="endereco" value="${pEndereco}" />
                        </p>
                        <p>
                            <input type="submit" name="submit">
                        </p>
                </fieldset>
            </form>`

}

const server = http.createServer((request, response) => {

    if (request.method == 'GET') {
        response.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' })
            .end(html())
    } else if (request.method == 'POST') {

        let formData = [];

        request.on('data', (chunk) => {


            formData = querystring.parse(chunk.toString())
        });

        request.on('end', () => {
            console.log(formData)
            response.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' })
                .end(html(formData.name,formData.sobreNome,formData.idade,formData.endereco))
        });


    }


})


const port = (process.env.PORT || 3000)

server.listen(port, function () {
    console.log(`servidor rodando ---> http://localhost:${port}`)
})


