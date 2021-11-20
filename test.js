const langDetect = require('./index');

const values = [
  'I am a happy cow',           // English
  'Je suis une vache heureuse', // French
  'Ich bin eine glückliche Kuh',// German
  'Soy una vaca feliz',         // Spanish
  'Saya sapi yang bahagia',     // Indonesian
  '我是一头快乐的牛',             // Chinese Simplified
  '我是一頭快樂的牛',             // Chinese Traditional 
  '私は幸せな牛です',             // Japanese
  'मैं एक खुश गाय हूँ',              // Hindi
  'انا بقرة سعيدة',             // Arabic
  'Я счастливая корова',         // Russian
]

const val = [
	'Нагария',
	'Волгодонск',
	'Nahariya',
	'Volgodonsk',
	'נהריה',

];

const data = {}

val.forEach(value => {

  const result = langDetect(value);

  data[value] = result;
})

console.log(data)
