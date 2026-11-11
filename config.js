// Налаштування міні-аппа. Тут лише ПУБЛІЧНІ значення (їх і так бачить кожен браузер).
// Токен бота і секретні ключі сюди НЕ пишемо: вони живуть тільки в Supabase → Edge Functions → Secrets.
window.WOOD = {
  // Supabase → Project Settings → API → Project URL, + /functions/v1/wood/api
  api: 'https://tuodkdmkvfeidcbobddt.supabase.co/functions/v1/wood/api',
  // Supabase → Project Settings → API (для миттєвих оновлень статусу; без них оновлення раз на 12 с)
  supabaseUrl: 'https://tuodkdmkvfeidcbobddt.supabase.co',
  anonKey: 'sb_publishable_7i6ced4FGUp3tHTlq0kRhA_VWfefQeE',
  // ім'я бота без @ (для кнопки «Запросіть друга»)
  bot: 'testtraindad_bot',
};
