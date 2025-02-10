const tracks = [
  { title: "Track 1", genre: "kpop", url: "https://drive.google.com/uc?export=download&id=19aMohL6cEXm7O6wF3U_D5fTXokEQP9eX" },
  { title: "Track 2", genre: "kpop", url: "https://drive.google.com/uc?export=download&id=1KYfjccNgyLCRP9yCa5Z4ULuKbmIeEK8H" },
  { title: "Track 3", genre: "kpop", url: "https://drive.google.com/uc?export=download&id=1susDjUeEoBbRnkObRhd6Z6OiH2tp-wff" },
  { title: "Track 4", genre: "kpop", url: "https://drive.google.com/uc?export=download&id=1n9NIV84toNI4ebonDkmYVxu4cGRGARwg" },
  { title: "Track 5", genre: "kpop", url: "https://drive.google.com/uc?export=download&id=1ObuD1e6A0qY2zEIultjZGg9wzt4IEfR7" },
];

let currentTrackIndex = 0;
const audio = new Audio(tracks[currentTrackIndex].url);

// Функция для воспроизведения музыки
document.getElementById('play').addEventListener('click', () => {
  if (audio.paused) {
    audio.play();
  } else {
    audio.pause();
  }
});

// Переключение на следующий трек
document.getElementById('next').addEventListener('click', () => {
  currentTrackIndex = (currentTrackIndex + 1) % tracks.length;
  audio.src = tracks[currentTrackIndex].url;
  audio.play();
});

// Переключение на предыдущий трек
document.getElementById('prev').addEventListener('click', () => {
  currentTrackIndex = (currentTrackIndex - 1 + tracks.length) % tracks.length;
  audio.src = tracks[currentTrackIndex].url;
  audio.play();
});

// Фильтрация по жанрам
let selectedGenres = [];
document.querySelectorAll('input[name="genre"]').forEach(input => {
  input.addEventListener('change', () => {
    selectedGenres = Array.from(document.querySelectorAll('input[name="genre"]:checked'))
      .map(input => input.value);

    // Фильтруем треки по выбранным жанрам
    const filteredTracks = tracks.filter(track => selectedGenres.includes(track.genre));

    // Обновляем плейлист, показывая только подходящие треки
    updateTrackList(filteredTracks);
  });
});

// Функция для обновления списка треков
function updateTrackList(filteredTracks) {
  const trackListElement = document.getElementById('track-list');
  trackListElement.innerHTML = '';

  filteredTracks.forEach(track => {
    const trackItem = document.createElement('li');
    trackItem.textContent = track.title;
    trackItem.addEventListener('click', () => {
      currentTrackIndex = tracks.indexOf(track);
      audio.src = track.url;
      audio.play();
    });
    trackListElement.appendChild(trackItem);
  });

  // Если фильтрация не дает результатов, показываем сообщение
  if (filteredTracks.length === 0) {
    trackListElement.innerHTML = 'Нет треков для выбранных жанров.';
  }
}

// Инициализация списка треков
updateTrackList(tracks);

  if (filteredTracks.length === 0) {
    trackListElement.innerHTML = 'Нет треков для выбранных жанров.';
  }
}
