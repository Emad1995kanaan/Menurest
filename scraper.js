import https from 'https';

https.get('https://pixabay.com/music/search/calm/', (res) => {
  let data = '';
  res.on('data', (chunk) => {
    data += chunk;
  });
  res.on('end', () => {
    const matches = data.match(/https:\/\/cdn\.pixabay\.com\/audio\/[^"]+\.mp3/g);
    if (matches && matches.length > 0) {
      console.log(matches.slice(0, 5));
    } else {
      console.log('No mp3 found');
    }
  });
}).on('error', (err) => {
  console.log('Error: ' + err.message);
});
