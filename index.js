function addingEventListener() {
    const button = document.getElementById('button')
    button.addEventListener("click", clickAlert);
  
}

function clickAlert() {
    alert('I was clicked!');
  }

addingEventListener()
