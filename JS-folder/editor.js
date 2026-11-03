document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('cv-form');
  const nameEl = document.getElementById('cv-name');
  const roleEl = document.getElementById('cv-role');
  const profileEl = document.getElementById('cv-profile');
  const experienceEl = document.getElementById('cv-experience');

  if (!form) return;

  const syncPreview = () => {
    const jobTitle = document.getElementById('jobTitle')?.value?.trim() || 'Product Designer';
    const profile = document.getElementById('profile')?.value?.trim() || 'Thoughtful designer turning complex problems into clear, human experiences.';
    const experience = document.getElementById('experience')?.value?.trim() || 'Product Designer • Northstar Studio';

    const fullName = 'Alex Morgan';
    nameEl.textContent = fullName;
    roleEl.textContent = jobTitle;
    profileEl.textContent = profile;

    const experienceLines = experience
      .split('\n')
      .filter(Boolean)
      .map((line) => line.trim())
      .slice(0, 4);

    const list = experienceLines.length ? experienceLines : ['Product Designer • Northstar Studio • 2022 – Present'];
    experienceEl.innerHTML = list
      .map((entry) => `<li>${entry.replace(/\s*[-•]\s*/g, ' • ')}</li>`)
      .join('');
  };

  form.addEventListener('input', syncPreview);
  syncPreview();
});
