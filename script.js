const apiKey = 'DEMO_KEY'; // NASA'nın ücretsiz anahtarı
const apiUrl = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`;

const loadingDiv = document.getElementById('loading');
const resultDiv = document.getElementById('result');
const titleEl = document.getElementById('apod-title');
const imgEl = document.getElementById('apod-image');
const videoEl = document.getElementById('apod-video');
const explanationEl = document.getElementById('apod-explanation');
const dateEl = document.getElementById('apod-date');

async function fetchAPOD() {
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        loadingDiv.classList.add('hidden');
        resultDiv.classList.remove('hidden');

        titleEl.textContent = data.title;
        dateEl.textContent = `Tarih: ${data.date}`;
        explanationEl.textContent = data.explanation;

        if (data.media_type === 'image') {
            imgEl.src = data.url;
            videoEl.classList.add('hidden');
        } else if (data.media_type === 'video') {
            videoEl.src = data.url;
            imgEl.classList.add('hidden');
            videoEl.classList.remove('hidden');
        }

    } catch (error) {
        loadingDiv.textContent = 'Hata oluştu! Uzayla bağlantı kurulamadı. 🛸';
        console.error('Hata:', error);
    }
}

fetchAPOD();