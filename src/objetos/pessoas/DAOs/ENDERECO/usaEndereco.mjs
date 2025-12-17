import Endereco from './Endereco.mjs'

async function usaEndereco(){
    const end = new Endereco();

    try {
        await end.setCep("72015565");
        

    }
}