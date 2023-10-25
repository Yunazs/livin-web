function Validation(values){
    let error = {}
    const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/ 
    const password_pattern = /^.{8,}$/
    
    if(values.name === ""){
        error.name = "Insira seu nome"
    }
    else{
        error.name = ""
    }

    if(values.email === ""){
        error.email = "Insira sua senha"
    }
    else if(!email_pattern.test(values.email)){
        error.email = "Email inválido"
    }
    else{
        error.email = ""
    }

    if(values.password === ""){
        error.password = "Insira uma senha com 8 ou mais caracteres"
    }
    else if(!password_pattern.test(values.password)){
        error.password = "Senha inválida"
    }
    else{
        error.password = ""
    }

    return error
}

export default Validation