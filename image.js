const colors = [
    "1.jpg",
    "2.jpg",
    "3.jpg",
  ];

  let index = Math.floor(Math.random() * colors.length);
  
  document.body.style.backgroundImage = `url(./${colors[index]})`;
  document.body.style.color = "white";
