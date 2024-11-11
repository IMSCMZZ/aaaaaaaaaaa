document.getElementById("messageState").addEventListener("change", function() {
    const message = document.querySelector(".message");
    const container = document.querySelector(".container");
  
    if (this.checked) {
      // Open the message with animation
      message.style.display = "block";
      message.style.animation = "openmsg 2s forwards";
      container.style.backgroundColor = "#f48fb1";
    } else {
      // Close the message with animation
      message.style.animation = "closemsg 2s forwards";
      setTimeout(() => {
        message.style.display = "none";
        container.style.backgroundColor = "#fce4ec";
      }, 2000); // Wait for the close animation to complete
    }
  });
  