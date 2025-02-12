// napisz button w main i nadaj mu kolor,wielkość font, oscyluj go po najechaniu kursorem, klikniciu kursorem itp
const button = document.createElement('button');
button.textContent = 'Click me!';
button.style.cssText = `
    padding: 15px 30px;
    font-size: 20px;
    background-color: #4CAF50;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: all 0.3s ease;
`;

document.querySelector('main').appendChild(button);

button.addEventListener('mouseover', () => {
    button.style.transform = 'scale(1.1) rotate(5deg)';
    button.style.backgroundColor = '#45a049';
});

button.addEventListener('mouseout', () => {
    button.style.transform = 'scale(1) rotate(0)';
    button.style.backgroundColor = '#4CAF50';
});

button.addEventListener('click', () => {
    button.style.transform = 'scale(0.9)';
    setTimeout(() => {
        button.style.transform = 'scale(1)';
    }, 100);
});
button.removeEventListener('mouseover', () => {});
button.removeEventListener('mouseout', () => {});

button.addEventListener('mouseover', () => {
    button.style.transform = 'scale(1.2)';
    button.style.backgroundColor = '#FFD700';
});

button.addEventListener('mouseout', () => {
    button.style.transform = 'scale(1)';
    button.style.backgroundColor = '#4CAF50';
});











