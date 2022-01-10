function ImgRender() {
  const imgItems = [
    {
      src: 'https://static.wanted.co.kr/images/banners/1454/e504b006.jpg',
      alt: '아는 만큼 보인다!',
    },
    {
      src: 'https://static.wanted.co.kr/images/banners/1453/7a978579.jpg',
      alt: '리크루터 커리어 가이드',
    },
    {
      src: 'https://static.wanted.co.kr/images/banners/1436/e2dd9445.jpg',
      alt: '마케터를 위한 데이터',
    },
    {
      src: 'https://static.wanted.co.kr/images/banners/1468/3df61cbc.jpg',
      alt: '해, 커리어 EP 02 공개',
    },
    {
      src: 'https://static.wanted.co.kr/images/banners/1460/619f3af7.jpg',
      alt: '개발자 성장 비결 공개!',
    },
    {
      src: 'https://static.wanted.co.kr/images/banners/1451/725c6862.jpg',
      alt: '믿을 것은 데이터 뿐!',
    },
    {
      src: 'https://static.wanted.co.kr/images/banners/1473/41f7b36e.jpg',
      alt: '나도 개발자 되고 싶다',
    },
    {
      src: 'https://static.wanted.co.kr/images/banners/1434/fdbbcb06.jpg',
      alt: '요즘 MD가 일하는 방법',
    },
    {
      src: 'https://static.wanted.co.kr/images/banners/1452/be4ec643.jpg',
      alt: 'Git? GitHub?',
    },
    {
      src: 'https://static.wanted.co.kr/images/banners/1435/6cdcea85.jpg',
      alt: '유저 경험을 설계하라!',
    },
    {
      src: 'https://static.wanted.co.kr/images/banners/1438/015566ac.jpg',
      alt: '스타벅스 굿즈 좋아하세요?',
    },
    {
      src: 'https://static.wanted.co.kr/images/banners/1454/e504b006.jpg',
      alt: '아는 만큼 보인다!',
    },
  ];

  return (
    <>
      {imgItems.map((item, index) => {
        return (
          <div className="img_content">
            <div>
              <div className="img_info_box">
                <div className="img_style">
                  <a href="/" className="">
                    <img src={item.src} alt={item.alt} />
                  </a>
                </div>
                <div className="img_info">
                  <h1>설명</h1>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}
export default ImgRender;
