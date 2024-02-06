function yes() {
  const image = document.getElementById("vimage");
  const imge = "https://i.pinimg.com/originals/cd/0d/78/cd0d783e2a0bbd1eff091168de9ffe14.gif";
  alert("You are his now.");
  image.src = imge;
}

function no() {
  const image = document.getElementById("vimage");
  const imge = "https://i.pinimg.com/originals/ec/0a/4e/ec0a4e9238a76a2b9afd367a98c14c32.gif";
  alert("Though you clicked 'no' just to check the outcome this shows you don't love him much. ");
  image.src = imge;
}
