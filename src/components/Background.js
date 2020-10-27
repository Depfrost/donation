const backgroundImages = [
  "https://animatedandy.com/wp-content/uploads/2019/07/Clannad_.After_.Story_.full_.2061869.jpg",
  "https://www.wallpaperup.com/uploads/wallpapers/2016/11/11/1039718/db7b51861a05b686efd495c2df35edc5-700.jpg"
];

function Background() {
  return (
      backgroundImages.map((url, index) => (
        <img style={getBackgroundStyle()} key={index} src={url} alt=""/>
      ))
    );
}

const getBackgroundStyle = () => {
  return {
      float: "left",
      width: "100%",
      height: "100%"
  }
};

export default Background;
