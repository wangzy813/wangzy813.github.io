const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
    autoplay: true,
    theme: '#5698c3',
    volume: '0.9',
    listMaxHeight: 90,
    lrcType: 3,
    audio: [
      {
        name: '你不要担心',
        artist: '野菊花',
        url: 'https://cdn.jsdelivr.net/gh/wangzy813/CDN@1.5/music/4.mp3',
        cover: 'https://cdn.jsdelivr.net/gh/wangzy813/CDN@1.5/img/6.jpg',
      },
      {
        name: 'Read All About It',
        artist: 'DJ成总',
        url: 'https://cdn.jsdelivr.net/gh/wangzy813/CDN@1.4/music/3.mp3',
        cover: 'https://cdn.jsdelivr.net/gh/wangzy813/CDN@1.4/img/5.jpg',
      },
      {
        name: '少年',
        artist: '梦然',
        url: 'https://cdn.jsdelivr.net/gh/wangzy813/CDN@1.1/music/2.mp3',
        cover: 'https://cdn.jsdelivr.net/gh/wangzy813/CDN@1.1/img/2.jpg',
        lrc: '/img/1.txt'
      },
      // {
      //   name: "纸短情长",
      //   artist: '徐梦圆',
      //   url: 'https://music.163.com/song/media/outer/url?id=516076896.mp3',
      //   cover: 'https://ae01.alicdn.com/kf/Head50b9e133746dab0381034cecd0e3ea.png',
      // },
      // {
      //   name: '风筝误',
      //   artist: '刘珂矣',
      //   url: 'https://music.163.com/song/media/outer/url?id=1434570079.mp3',
      //   cover: 'https://ae01.alicdn.com/kf/Head50b9e133746dab0381034cecd0e3ea.png',
      // },
      {
        name: '最天使',
        artist: '曾轶可',
        url: 'https://cdn.jsdelivr.net/gh/wangzy813/CDN@1.1/music/1.mp3',
        cover: 'https://cdn.jsdelivr.net/gh/wangzy813/CDN@1.1/img/1.jpg',
        lrc: '/img/2.txt'
      }
    ]
});