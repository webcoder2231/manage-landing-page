const button = document.getElementById('btn');
const navigation = document.getElementById('menu-absolute');

btn.addEventListener('click', () => {
    button.classList.toggle('open');
    navigation.classList.toggle('flex');
    navigation.classList.toggle('hidden');
})