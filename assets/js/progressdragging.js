class Dragging {
    constructor() {

        this.progressPython = document.getElementById("progressPython");
        this.progressPythonLabel = document.getElementById("progressPythonLabel");
        this.progressCSHARP = document.getElementById("progressCSHARP");
        this.progressCSHARPLabel = document.getElementById("progressCSHARPLabel");
        this.progressJava = document.getElementById("progressJava");
        this.progressJavaLabel = document.getElementById("progressJavaLabel");
        this.progressHTML = document.getElementById("progressHTML");
        this.progressHTMLLabel = document.getElementById("progressHTMLLabel");
        this.progressCSS = document.getElementById("progressCSS");
        this.progressCSSLabel = document.getElementById("progressCSSLabel");
        this.progressJS = document.getElementById("progressJS");
        this.progressJSLabel = document.getElementById("progressJSLabel");
        this.progressF = document.getElementById("progressF");
        this.progressFLabel = document.getElementById("progressFLabel");
    }

    updateValue() {    
        progressF.oninput = function() {
            if (progressF.value > 99) {
                progressFLabel.innerText = "Concluído";
            }
            else if (progressF.value > 11) {
                progressFLabel.innerText = "Formando";
            }
            else if (progressF.value < 10) {
                progressFLabel.innerText = "Matriculando";
            }
        }
    
    
        progressPython.oninput = function() {
            progressPythonLabel.innerText = progressPython.value + "%";
        }
    
        progressCSHARP.oninput = function() {
            progressCSHARPLabel.innerText = progressCSHARP.value + "%";
        }
    
        progressJava.oninput = function() {
            progressJavaLabel.innerText = progressJava.value + "%";
        }
    
        progressHTML.oninput = function() {
            progressHTMLLabel.innerText = progressHTML.value + "%";
        }
    
        progressCSS.oninput = function() {
            progressCSSLabel.innerText = progressCSS.value + "%";
        }
    
        progressJS.oninput = function() {
            progressJSLabel.innerText = progressJS.value + "%";
        }
    }
    
    randomValue(min, max, result) {
        min = Math.ceil(min);
        max = Math.floor(max);
        result = Math.floor(Math.random() * (max - min) + min);
        return result;
    }

    randomValueS() 
    {

        let allProgressBar = document.getElementsByClassName("random");
        let allProgressBarLabel = document.getElementsByClassName("progress-label");

        for (let i = 0; i < allProgressBar.length;i++) {
            const valorRandom = this.randomValue(1, 100, 0);
            allProgressBar[i].value = valorRandom;
            allProgressBarLabel[i].innerText = valorRandom + "%";
        }
    }

    animationProgressBar() {
        let allProgressBar = document.getElementsByClassName("random");
        let allProgressBarLabel = document.getElementsByClassName("progress-label");
        let ok = false;
        var width = 0;
        let id = setInterval(frame, 35);
        function frame() {
            if (ok == true) {
                clearInterval(id);
            }
            else {
                width++;
                if (this.progressPython.value <= 89) {
                    this.progressPython.value = width;
                    this.progressPythonLabel.innerText = width + "%";
                }
                else
                {
                    ok = true;
                }
            }
        }
    }
}

drag = new Dragging();