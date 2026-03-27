// ===================================================
// blog.js — логика страницы блога
// ===================================================

document.addEventListener('DOMContentLoaded', function () {

  const btnCreatePost  = document.getElementById('btn-create-post');
  const btnShowStats   = document.getElementById('btn-show-stats');
  const formSection    = document.getElementById('create-article-section');
  const btnCancel      = document.getElementById('btn-cancel');
  const btnSave        = document.getElementById('btn-save');
  const inputTitle     = document.getElementById('post-title');
  const inputText      = document.getElementById('post-text');
  const blogGrid       = document.getElementById('blog-grid');
  const statsDialog    = document.getElementById('stats-dialog');
  const statsPostCount = document.getElementById('stats-post-count');
  const btnDialogClose = document.getElementById('btn-dialog-close');
  const btnDialogX     = document.getElementById('btn-dialog-x');
  const postTemplate   = document.getElementById('post-template');

  // Подсчёт карточек
  function countPosts() {
    return blogGrid.querySelectorAll('.blog-card').length;
  }

  // Показать форму
  function showForm() {
    formSection.classList.add('visible');
    formSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  // Скрыть форму и очистить поля
  function hideForm() {
    formSection.classList.remove('visible');
    inputTitle.value = '';
    inputText.value  = '';
  }

  btnCreatePost.addEventListener('click', showForm);
  btnCancel.addEventListener('click', hideForm);

  // Добавление поста через <template>
  function addPost(title, text, date) {
    const clone = postTemplate.content.cloneNode(true);
    clone.querySelector('.post-title').textContent = title;
    clone.querySelector('.post-date').textContent  = date;
    clone.querySelector('.post-text').textContent  = text;
    blogGrid.insertBefore(clone, blogGrid.firstChild);
  }

  // Mock-пост при загрузке для демонстрации
  addPost(
    'Новая статья: Spring Boot за 1 час',
    'Spring Boot позволяет быстро создавать production-ready приложения на Java. В этой статье разберём создание REST API с нуля.',
    '27 марта 2025'
  );

  // Сохранить — добавить пост из формы
  btnSave.addEventListener('click', function () {
    if (!inputTitle.value.trim() || !inputText.value.trim()) {
      alert('Пожалуйста, заполните все обязательные поля.');
      return;
    }
    addPost(
      inputTitle.value.trim(),
      inputText.value.trim(),
      new Date().toLocaleDateString('ru-RU', { day: 'numeric', month: 'long', year: 'numeric' })
    );
    hideForm();
  });

  // Диалог статистики
  btnShowStats.addEventListener('click', function () {
    statsPostCount.textContent = countPosts();
    statsDialog.showModal();
  });

  btnDialogX.addEventListener('click', function () {
    statsDialog.close();
  });

  btnDialogClose.addEventListener('click', function () {
    statsDialog.close();
  });

  // Закрыть при клике вне диалога
  statsDialog.addEventListener('click', function (event) {
    if (event.target === statsDialog) {
      statsDialog.close();
    }
  });

});
