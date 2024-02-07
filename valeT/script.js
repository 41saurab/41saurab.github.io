// function yes() {
//     const image = document.getElementById("vimage");
//     const imge = "https://i.pinimg.com/originals/cd/0d/78/cd0d783e2a0bbd1eff091168de9ffe14.gif";
//     const imageas = document.getElementById("vimage");
//     const imgeas = "https://i.pinimg.com/originals/ec/0a/4e/ec0a4e9238a76a2b9afd367a98c14c32.gif";
//     var guestName = ["I Love You"];
//     var guest = prompt("Type 'I Love You: ");
//     var check = guestName.includes(guest);
//     if (check == true) {
//       alert("You love him.");
//       image.src = imge;
//     } else {
//       alert("You don't love him.");
//       imageas.src = imgeas;
//     }
//   }

//   function no() {
//     const image = document.getElementById("vimage");
//     const imge = "https://i.pinimg.com/originals/ec/0a/4e/ec0a4e9238a76a2b9afd367a98c14c32.gif";
//     alert("Though you clicked 'no' just to check the outcome this shows you don't love him much. ");
//     image.src = imge;
//   }


function yes() {
    const image = document.getElementById("vimage");
    const imge = "https://i.pinimg.com/originals/cd/0d/78/cd0d783e2a0bbd1eff091168de9ffe14.gif";
    const imageas = document.getElementById("vimage");
    const imgeas = "https://i.pinimg.com/originals/ec/0a/4e/ec0a4e9238a76a2b9afd367a98c14c32.gif";
    var guestName = ["I Love You"];
    var guest = prompt("Type 'I Love You: ").replace(/\s/g, '').toLowerCase(); // Remove spaces and convert to lowercase
    var check = guestName.some(name => name.replace(/\s/g, '').toLowerCase() === guest);
    if (check) {
      alert("You love him.");
      image.src = imge;
    } else {
      alert("You don't love him.");
      imageas.src = imgeas;
    }
  }
  
  function no() {
    const image = document.getElementById("vimage");
    const imge = "https://i.pinimg.com/originals/ec/0a/4e/ec0a4e9238a76a2b9afd367a98c14c32.gif";
    alert("Though you clicked 'no' just to check the outcome, this shows you don't love him much.");
    image.src = imge;
  }
  