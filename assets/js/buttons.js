class Botoes {
    about() {
        
        window.location.replace("about.html");
    }
    
    exp() {
        
        window.location.replace("exp.html");
    }

    portfolio() {
        
        window.location.replace("portfolio.html");
    }
    
    contact() {
        
        window.location.replace("contact.html");
    }

    voltar() {
        
        window.location.replace("index.html");
    }

    enviar() {

        let name = document.getElementById("vName").value;
        let email = document.getElementById("vEmail").value;
        let select = document.getElementById("vSelect").value;
        let message = document.getElementById("vMessage").value;
        var myModal = new bootstrap.Modal(document.getElementById('myModal'))
        var modalBody = document.getElementById('modalbody')
        let errosArray = []
        
        if (name == "") {
            errosArray.push("Nome Inválido.")
        }
        if (email == "") {
            errosArray.push("Email Inválido.")
        }
        if (message == "") {
            errosArray.push("Mensagem Inválida.")
        }
        if (errosArray.length > 0) {
            let mensagemDeErro = `
                <ul>
                    ${errosArray.map((item) => {
                        return `<li>${item}</li>`
                    }).join("")}
                </ul>
            `
            modalBody.innerHTML = mensagemDeErro;
            myModal.toggle()
            
        }
        else {
        window.location.href = "https://docs.google.com/forms/d/e/1FAIpQLSerTcBHIRIeVmeBUu55IeMJnYKBi20L-d3mSCDU9Hvwa8ZM8Q/viewform?usp=pp_url&entry.2005620554=" + email + select + "&entry.1045781291=" + name + "&entry.839337160=" + message;
        }
    }
}

botao = new Botoes();
