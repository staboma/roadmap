// Yol haritası adımları
const roadmapSteps = [
    "HTML ve CSS Temelleri",
    "JavaScript Temelleri",
    "Gelişmiş JavaScript Konuları",
    "Asenkron JavaScript",
    "JavaScript Araçları ve Kütüphaneleri",
    "Küçük Projeler",
    "Büyük Projeler",
    "Test Araçları",
    "Performans Optimizasyonu"
];

// Yol haritasını oluştur ve DOM'a ekle
const roadmapContainer = document.getElementById('roadmap');

roadmapSteps.forEach((step, index) => {
    const li = document.createElement('li');
    li.innerHTML = `<i class="fas fa-check-circle"></i> ${step}`;
    roadmapContainer.appendChild(li);

    // Her bir adım tıklandığında alert ile adım detayını göster
    li.addEventListener('click', () => {
        alert(`${index + 1}. Adım: ${step}`);
    });
});