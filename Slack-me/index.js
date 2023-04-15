const clip = document.querySelectorAll('.clip');
console.log(clip);
for (let i = 0; i < clip.length; i++) {
  clip[i].addEventListener('mouseenter', function () {
    clip[i].play();
  });
  clip[i].addEventListener('mouseout', function () {
    clip[i].pause();
  });
}
document.querySelectorAll('.nav').scroll(function () {
  if (document.querySelectorAll(this).scrollTop() > 1000) {
    document.getElementsByClassName('.navbar').style.display = 'hidden';
  } else {
    document.getElementsByClassName('.navbar').style.display = 'visible';
  }
});
