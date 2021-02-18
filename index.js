function show(){
  document.getElementById('sidebar').classList.toggle('active');
  document.getElementById('container').classList.toggle('active');
  document.getElementById('rest_container').classList.toggle('active');
  setTimeout(() => {;}, 1000);
  document.getElementById('burger').style.visibility = 'hidden';

}

function hide(){
  document.getElementById('sidebar').classList.toggle('active');
  document.getElementById('container').classList.toggle('active');
  document.getElementById('rest_container').classList.toggle('active');
  document.getElementById('burger').style.visibility = 'visible';
}
