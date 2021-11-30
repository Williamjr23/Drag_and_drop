const dropArea = document.querySelector(".drop-area");
const dropText = dropArea.querySelector('h2');
const button = dropArea.querySelector('button');
const input =dropArea.querySelector('#input-file');

button.addEventListener('click', e => {
    input.click()
});

input.addEventListener("change", (e) => {
    files = this.files;
    dropArea.classList.add("active");
    showFiles(files);
    dropArea.classList.remove("active");
});

dropArea.addEventListener("dragover", (e) => {
    e.preventDefault();
    dropArea.classList.add("active");
    dragText.textContent = "Suelta para subir los archivos";
});

dropArea.addEventListener("dragleave", (e) => {
    dropArea.classList.remove("active");
    dragText.textContent = "Arrastra y suelta imágenes";
});

dropArea.addEventListener("drop", (e) => {
    dropArea.classList.remove("active");
    dragText.textContent = "Arrastra y suelta imágenes";
});

function showFiles(files) {
    if(files.length === undefined){
        proccessFile(files);
    }else{
        for(const file of files){
            proccessFile(file);
        }
    }
}

function proccessFile(file){

}