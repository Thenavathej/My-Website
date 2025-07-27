const itemsSelect = document.getElementById('items');
  const tvSelect = document.getElementById('tvSelect');   
  itemsSelect.addEventListener('change', function() {  
    if (this.value === 'TV') {
      tvSelect.style.display = 'block';  
    } else {
      tvSelect.style.display = 'none';
    }
  });
  tvSelect.style.display = 'none';
  console.log(`hello world`);