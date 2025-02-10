const tracks = [
    { title: "Track 1", genre: "kpop", url: "https://drive.google.com/uc?export=download&id=19aMohL6cEXm7O6wF3U_D5fTXokEQP9eX" },
    { title: "Track 2", genre: "kpop", url: "https://drive.google.com/uc?export=download&id=1KYfjccNgyLCRP9yCa5Z4ULuKbmIeEK8H" },
    { title: "Track 3", genre: "kpop", url: "https://drive.google.com/uc?export=download&id=1susDjUeEoBbRnkObRhd6Z6OiH2tp-wff" },
    { title: "Track 4", genre: "kpop", url: "https://drive.google.com/uc?export=download&id=1n9NIV84toNI4ebonDkmYVxu4cGRGARwg" },
    { title: "Track 5", genre: "kpop", url: "https://drive.google.com/uc?export=download&id=1ObuD1e6A0qY2zEIultjZGg9wzt4IEfR7" },
    // Добавь сюда ссылки на свои треки
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
      
      const filteredTracks = tracks.filter(track => selectedGenres.includes(track.genre));
      // Перезагрузи список треков в зависимости от выбранных жанров
      // Можно добавить отображение выбранных треков или просто перезагрузить логику проигрывания
    });
  });
  