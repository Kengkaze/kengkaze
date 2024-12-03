document.getElementById('prankButton').addEventListener('click', function() {
    const message = document.getElementById('message');
    message.classList.toggle('hidden');
    setTimeout(() => {
        message.classList.toggle('hidden');
    }, 3000); // ซ่อนข้อความหลังจาก 3 วินาที
});