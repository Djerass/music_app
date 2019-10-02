window.addEventListener('load', () => {
   const colors = ['aqua', 'red', 'green', 'blue', 'yellow', 'blueviolet'];
   const pads = document.querySelectorAll('.pads div');
   const visual = document.querySelector('.visual');
   const audio = document.querySelectorAll('.pads audio');

   pads.forEach((pad, index) =>{
       pad.addEventListener('click', () => {
           audio[index].currentTime = 0;
           audio[index].play();
           createBubble(index);
       });
   });


   const createBubble = index => {
        const bubble = document.createElement('div');
        bubble.style.backgroundColor = colors[index];
        bubble.style.animation = 'jump 3s ease';
        visual.appendChild(bubble);
        bubble.addEventListener('animationend', () => {
            visual.removeChild(bubble);
        });
   };
});


