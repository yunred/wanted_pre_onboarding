function ImgRender({ imgItems }) {
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
