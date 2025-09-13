const btn = document.getElementById('themeToggle');
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
const saved = localStorage.getItem('theme');
if(saved){
  document.body.className = saved;
}else{
  document.body.className = prefersDark ? 'theme-dark' : 'theme-light';
}
btn?.addEventListener('click', () => {
  const next = document.body.className === 'theme-dark' ? 'theme-light' : 'theme-dark';
  document.body.className = next;
  localStorage.setItem('theme', next);
});
document.getElementById('year').textContent = new Date().getFullYear();
