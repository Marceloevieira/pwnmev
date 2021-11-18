const http = require('http')
const querystring = require('querystring');

const form = () => {

    return `<form method="POST"  action="?" >
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

}

const submittedData = (pformData) =>{
    
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

const server = http.createServer((request, response) => {

    if (request.method == 'GET') {
        response.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' })
            .end(form())
    } else if (request.method == 'POST') {

        let formData = [];

        request.on('data', (chunk) => {


            formData = querystring.parse(chunk.toString())
        });

        request.on('end', () => {
            
            response.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' })
                .end(form()+submittedData(formData))
        });

    }


})


const port = (process.env.PORT || 3000)

server.listen(port, function () {
    console.log(`servidor rodando ---> http://localhost:${port}`)
})


