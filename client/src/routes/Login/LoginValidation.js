function Validation(values){
    let error = {}
    const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/ 
    //const password_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/

    if(values.email === ""){
        error.email = "Insira o email"
    }
    else if(!email_pattern.test(values.email)){
        error.email = "Email ou senha não correspondente"
    }
    else{
        error.email = ""
    }

    if(values.password === ""){
        error.password = "Insira a senha"
    }
    else{
        error.password = ""
    }

    return error
}

export default Validation