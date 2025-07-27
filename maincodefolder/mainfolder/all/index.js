console.log(`hello world`);

const itemSelect = document.getElementById("itemSelect");
const TV = document.getElementById("TV");

itemSelect.addEventListener('change',function{
        if(this.value==='TV'){
            TV.style.display = 'block';
        }else{
            TV.style.display = 'none';
        }
});

