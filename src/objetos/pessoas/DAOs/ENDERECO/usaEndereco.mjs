import Endereco from './Endereco.mjs'

async function usaEndereco(){
    const end = new Endereco();

    try {
        await end.setCep("72015565");
        console.log("Endereco carregado com sucesso:");
        console.log("CEP:", end.getCep());
        console.log("Logradouro:", end.Logradouro());
        console.log("Bairro:", end.getBairro());
        console.log("Cidade:", end. getCidade());
        console.log("UF:", end.getUf());
        console.log("Região:", end.getRegiao());

    } catch (erro) {
        console.error("Erro ao definir CEP:", erro.message);
    }
}
usaEndereco();