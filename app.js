document.querySelector('.filters-btn').addEventListener('click', function() {
    document.getElementById('filters-modal').style.display = 'flex';
});

document.querySelectorAll('.close-btn').forEach(button => {
    button.addEventListener('click', function() {
        button.closest('.modal').style.display = 'none';
    });
});

document.querySelector('.tab:nth-child(3)').addEventListener('click', function() {
    document.getElementById('info-modal').style.display = 'flex';
});


  if (filteredTracks.length === 0) {
    trackListElement.innerHTML = 'Нет треков для выбранных жанров.';
  }
}
