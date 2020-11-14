
$(window).on('scroll', function(){
    let top = $(window).scrollTop()
    let progressSection = $('#progress-section').offset().top;
    if(top > progressSection - 350){
        progressBar()
        $(window).off('scroll');
    }
    
})
// Progress Bar
function progressBar() {
    // Progress Project
    function progressProjectPlaning() {
        let prg = document.getElementById('progress-project');
        let percent = document.getElementById('parcent-project');
        let counter = 1;
        let progress = 1;
        let id = setInterval(frame, 10)
        function frame() {
            if(progress === 100 && counter === 100){
                clearInterval(id);
            } else {
                progress += 1;
                counter += 1;
                prg.style.width = progress + '%';
                percent.innerHTML = counter;
            }
        }
    }
    progressProjectPlaning()
    function progressBranding() {
        let prg = document.getElementById('progress-branding');
        let percent = document.getElementById('parcent-branding');
        let counter = 1;
        let progress = 1;
        let id = setInterval(frame, 10)
        function frame() {
            if(progress === 90 && counter === 90){
                clearInterval(id);
            } else {
                progress += 1;
                counter += 1;
                prg.style.width = progress + '%';
                percent.innerHTML = counter;
            }
        }
    }
    progressBranding()
    
    function progressDevelopment() {
        let prg = document.getElementById('progress-development');
        let percent = document.getElementById('parcent-development');
        let counter = 1;
        let progress = 1;
        let id = setInterval(frame, 10)
        function frame() {
            if(progress === 70 && counter === 70){
                clearInterval(id);
            } else {
                progress += 1;
                counter += 1;
                prg.style.width = progress + '%';
                percent.innerHTML = counter;
            }
        }
    }
    progressDevelopment()

    function progressProductDesing() {
        let prg = document.getElementById('progress-product-desing');
        let percent = document.getElementById('parcent-product-desing');
        let counter = 1;
        let progress = 1;
        let id = setInterval(frame, 10)
        function frame() {
            if(progress === 75 && counter === 75){
                clearInterval(id);
            } else {
                progress += 1;
                counter += 1;
                prg.style.width = progress + '%';
                percent.innerHTML = counter;
            }
        }
    }
    progressProductDesing()

    function progressWebDesing() {
        let prg = document.getElementById('progress-web-desing');
        let percent = document.getElementById('parcent-web-desing');
        let counter = 1;
        let progress = 1;
        let id = setInterval(frame, 10)
        function frame() {
            if(progress === 85 && counter === 85){
                clearInterval(id);
            } else {
                progress += 1;
                counter += 1;
                prg.style.width = progress + '%';
                percent.innerHTML = counter;
            }
        }
    }
    progressWebDesing()
}