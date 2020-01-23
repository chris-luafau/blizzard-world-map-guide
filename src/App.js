import React from 'react'
import ImageMapper from 'react-image-mapper'
import styled, {createGlobalStyle} from 'styled-components'
import MapImg from './assets/blizzard-world-map.jpg'
import source from './assets/blizzard-world.json'
import MapLeft from './assets/blizz-world-left.jpg'
import MapCenter from './assets/blizz-world-center.jpg'
import MapRight from './assets/blizz-world-right.jpg'
import Cov1 from './assets/blizz-world-cover1.png'
import Cov2 from './assets/blizz-world-cover2.png'
import WoWLogo from './assets/wow-logo.png'
import SCLogo from './assets/sc-logo.png'
import HSLogo from './assets/hs-logo.png'
import DiabloLogo from './assets/diablo-logo.png'
import BackgroundIMG from './assets/blizz-background-3.jpg'
import OWFont from './bignoodletoo.ttf'
import {device} from './device.js'

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: source.data,
      showInfo: false,
      gameInfo: "",
      openContainer: false,
      area: null,
    };
  }

  // Change to show info sidebar.
  showInfo(area) {
    if (area) {
      let info = this.state.data[this.state.data.findIndex(item => item.name === area.name)];
      //alert(info.name + '. ' + info.desc);
      this.setState({area: area});
      this.setState({showInfo: true});
      this.setState({openContainer: true});
      this.setState({gameInfo: info});
    } else {
      this.setState({area: null});
      this.setState({showInfo: false});
      this.setState({gameInfo: ""});
    }
  }

  handleClick() {
    this.setState({showInfo: false})
  }

  handleContainerClick() {
    this.setState({openContainer: true});
  }

  render() {
    return (
      <>
        <GlobalStyle />
        <h1>Blizzard World : Reference Sheet</h1>
        <AppWrapper showInfo={this.state.showInfo}>

          <Wrapper>
            <Container onClick={() => {this.handleContainerClick()}} open={this.state.openContainer}>
              <Cover2 open={this.state.openContainer}>
                <Front2></Front2>
                <Back2></Back2>
              </Cover2>
              <Cover open={this.state.openContainer}>
                <Front1></Front1>
                <Back1></Back1>
              </Cover>
              <Div open={this.state.openContainer}>
                <InfoModal showInfo={this.state.showInfo} open={this.state.openContainer}>
                  <Info
                    gameInfo={this.state.gameInfo}
                  />
                </InfoModal>
                <ImgWrapper2 open={this.state.openContainer}>
                  <ImageMapper
                    src={MapImg}
                    map={Map}
                    onClick={area => this.showInfo(area)}
                    onImageClick={() => this.handleClick()}
                  />
                </ImgWrapper2>
              </Div>
            </Container>
          </Wrapper>
        </AppWrapper>
      </>
    )
  }
}

const Map = {
  name: "blizzard-world-map",
  areas: [
    { name: "Hearthstone Tavern", shape: "rect", coords: [643, 690, 782, 805], preFillColor: "transparent", fillColor: "transparent", strokeColor: "white" },
    { name: "Lost and Found Vikings", shape: "rect", coords: [547, 646, 672, 719], preFillColor: "transparent", fillColor: "transparent", strokeColor: "white" },
    { name: "Wizard's Sanctum Magic Show", shape: "rect", coords: [424, 716, 544, 785], preFillColor: "transparent", fillColor: "transparent", strokeColor: "white" },
    { name: "Khadgar's Herbs", shape: "rect", coords: [483, 775, 648, 899], preFillColor: "transparent", fillColor: "transparent", strokeColor: "white" },
    { name: "Ancient Curios", shape: "rect", coords: [830, 670, 913, 720], preFillColor: "transparent", fillColor: "transparent", strokeColor: "white" },
    { name: "Fargodeep Mine", shape: "rect", coords: [627, 461, 733, 498], preFillColor: "transparent", fillColor: "transparent", strokeColor: "white" },
    { name: "Flight to Duskwood", shape: "rect", coords: [838, 450, 915, 491], preFillColor: "transparent", fillColor: "transparent", strokeColor: "white" },
    { name: "Escape From The Stockade", shape: "rect", coords: [930, 738, 1036, 777], preFillColor: "transparent", fillColor: "transparent", strokeColor: "white" },
    { name: "Auction House Gift Shop", shape: "rect", coords: [934, 862, 1041, 902], preFillColor: "transparent", fillColor: "transparent", strokeColor: "white" },
    { name: "Stone Cairn Lake", shape: "rect", coords: [527, 574, 610, 617], preFillColor: "transparent", fillColor: "transparent", strokeColor: "white" },
    { name: "The Mage District", shape: "rect", coords: [311, 657, 381, 701], preFillColor: "transparent", fillColor: "transparent", strokeColor: "white" },
    { name: "Blackheart's Revenge", shape: "rect", coords: [464, 495, 559, 540], preFillColor: "transparent", fillColor: "transparent", strokeColor: "white" },
    { name: "Murloc Island", shape: "rect", coords: [540, 356, 594, 387], preFillColor: "transparent", fillColor: "transparent", strokeColor: "white" },
    { name: "Snaxxramas", shape: "rect", coords: [621, 384, 708, 405], preFillColor: "transparent", fillColor: "transparent", strokeColor: "white" },
    { name: "Booty Bay", shape: "rect", coords: [703, 405, 747, 437], preFillColor: "transparent", fillColor: "transparent", strokeColor: "white" },
    { name: "Deeprun Tram", shape: "rect", coords: [483, 919, 580, 952], preFillColor: "transparent", fillColor: "transparent", strokeColor: "white" },
    { name: "Ghost Academy", shape: "rect", coords: [894, 389, 961, 424], preFillColor: "transparent", fillColor: "transparent", strokeColor: "white" },
    { name: "Pestle's Apothecary", shape: "rect", coords: [1163, 732, 1079, 701], preFillColor: "transparent", fillColor: "transparent", strokeColor: "white" },
    { name: "Pylon Terrace", shape: "rect", coords: [985, 577, 1049, 619], preFillColor: "transparent", fillColor: "transparent", strokeColor: "white" },
    { name: "The Nexus Experience", shape: "rect", coords: [1073, 623, 1155, 665], preFillColor: "transparent", fillColor: "transparent", strokeColor: "white" },
    { name: "Spawning Pools Water Park", shape: "rect", coords: [1188, 758, 1326, 833], preFillColor: "transparent", fillColor: "transparent", strokeColor: "white" },
    { name: "Nydus Worm Slide", shape: "rect", coords: [1237, 662, 1326, 705], preFillColor: "transparent", fillColor: "transparent", strokeColor: "white" },
    { name: "Heroes Arcade", shape: "rect", coords: [1234, 506, 1311, 599], preFillColor: "transparent", fillColor: "transparent", strokeColor: "white" },
    { name: "The Hatchery Petting Zoo", shape: "rect", coords: [1364, 518, 1457, 560], preFillColor: "transparent", fillColor: "transparent", strokeColor: "white" },
    { name: "Reign of the Black King", shape: "rect", coords: [1254, 436, 1342, 474], preFillColor: "transparent", fillColor: "transparent", strokeColor: "white" },
    { name: "New Tristram", shape: "rect", coords: [1126, 306, 1212, 338], preFillColor: "transparent", fillColor: "transparent", strokeColor: "white" },
    { name: "The Slaughtered Calf Inn", shape: "rect", coords: [1354, 258, 1461, 301], preFillColor: "transparent", fillColor: "transparent", strokeColor: "white" },
    { name: "Caldeum Market", shape: "rect", coords: [1193, 228, 1313, 260], preFillColor: "transparent", fillColor: "transparent", strokeColor: "white" },
    { name: "Shen's Delights", shape: "rect", coords: [1168, 73, 1229, 111], preFillColor: "transparent", fillColor: "transparent", strokeColor: "white" },
    { name: "Den of Evil", shape: "rect", coords: [951, 167, 1028, 199], preFillColor: "transparent", fillColor: "transparent", strokeColor: "white" },
    { name: "Tyrael's Fall", shape: "rect", coords: [951, 46, 1044, 74], preFillColor: "transparent", fillColor: "transparent", strokeColor: "white" },
    { name: "Tristram Cathedral", shape: "rect", coords: [862, 244, 775, 278], preFillColor: "transparent", fillColor: "transparent", strokeColor: "white" },
    { name: "Command Center Lift Off", shape: "rect", coords: [853, 131, 731, 176], preFillColor: "transparent", fillColor: "transparent", strokeColor: "white" },
    { name: "Journey to Auir", shape: "rect", coords: [616, 212, 683, 257], preFillColor: "transparent", fillColor: "transparent", strokeColor: "white" },
    { name: "Overlord Transport", shape: "rect", coords: [541, 23, 616, 64], preFillColor: "transparent", fillColor: "transparent", strokeColor: "white" },
    { name: "Blackrock Mountain", shape: "rect", coords: [329, 131, 405, 174], preFillColor: "transparent", fillColor: "transparent", strokeColor: "white" },
    { name: "Gates of Orgrimmar", shape: "rect", coords: [419, 328, 504, 368], preFillColor: "transparent", fillColor: "transparent", strokeColor: "white" },
    { name: "Darkmoon Faire", shape: "rect", coords: [32, 244, 140, 275], preFillColor: "transparent", fillColor: "transparent", strokeColor: "white" },
    { name: "Zeppelin Landing", shape: "rect", coords: [105, 321, 169, 356], preFillColor: "transparent", fillColor: "transparent", strokeColor: "white" },
    { name: "Darkmoon Ferris Wheel", shape: "rect", coords: [188, 360, 274, 403], preFillColor: "transparent", fillColor: "transparent", strokeColor: "white" },
    { name: "The Hellscream", shape: "rect", coords: [211, 527, 320, 551], preFillColor: "transparent", fillColor: "transparent", strokeColor: "white" },
    { name: "Siege of Orgrimmar", shape: "rect", coords: [54, 596, 146, 638], preFillColor: "transparent", fillColor: "transparent", strokeColor: "white" },
    { name: "Moonwell", shape: "rect", coords: [129, 702, 225, 750], preFillColor: "transparent", fillColor: "transparent", strokeColor: "white" },
  ]
}
/* Functional Components */

const Info = (props) => {
  let {gameInfo} = props
  let game = gameInfo.game;
  let name = gameInfo.name;
  let desc = gameInfo.desc;
  let logo;
  if (game === "World of Warcraft") {
    logo = <Img alt="" src={WoWLogo} />
  }
  else if (game === "Heroes of the Storm") {
    logo = <Img alt="" src={HSLogo} />;
  }
  else if (game === "Starcraft") {
    logo = <Img alt="" src={SCLogo} />;
  }
  else if (game === "Diablo") {
    logo = <Img alt="" src={DiabloLogo} />;
  }
  return (
    <div>
      {logo}
      <h2>{name}</h2>
      <p>{desc}</p>

    </div>
  );
}

/* Styled components */
const Img = styled.img `
  width: 250px;
  height: 120px;
  z-index: 1200;
  position: static;
  left: 10%;
  margin-top: 6px;
  border: none;
`
const AppWrapper = styled.div `
  display: flex;
  width: 100%;
  height: auto;
  flex-direction: column;
  justify-content: center;
`
const GlobalStyle = createGlobalStyle `
  body {
  margin: 0;
  padding: 0;
  height: 100%;
  width: 100%;
  max-width: 100%;
  max-height: 100%;
  /*background: #273040;*/
  }
  html {
  margin: 0;
  height: 100%;
  width: 100%;
  overflow: hidden;
  background-image: url(${BackgroundIMG});
  background-repeat: repeat-y;
  background-size: cover;
  max-width: 100%;
  max-height: 100%;
  }
  h1 {
    font-size: 3em;
    text-align: center;
    color: yellow;
    text-shadow: 1px 1px #ffffff;
    -webkit-text-stroke: 0.01px #565656;
  }
  h2 {
    font-size: 2.3em;
    text-align: center;
    color: yellow;
    text-shadow: 1px 1px #ffffff;
    -webkit-text-stroke: 0.01px #565656;
    margin-top: 0;
    margin-bottom: 0;
  }
  p {
    font-size: 1.5em;
    margin-top: 5px;
    padding-left: 5px;
    padding-right: 5px;
    color: lightgrey;
  }
  @font-face {
  font-family: 'OWFont';
  src: url(${OWFont}) format('truetype');
  font-weight: normal;
  font-style: normal;
  }
  * {
  font-family: OWFont;
  box-sizing: border-box;
  }

}
`
const ImgWrapper = styled.div `
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
`



const InfoModal = styled.div `
  visibility: ${props => props.showInfo ? "visible" : "hidden"};
  display: flex;
  flex-direction: column;
  /*display: ${props => props.showInfo ? "inline-block" : "none"};*/
  text-align: center;
  z-index: 1000;
  position: fixed;
  background-color: rgba(39,48,64,0.5);
  width: 300px;
  height: 100%;
  align-self: flex-start;

  top: 0;
  left: -161%;
  overflow-x: hidden;
  transition: 0.5s;
  z-index: 1001;

  transform-origin: right;
  animation: ${props => props.showInfo ? "slidein 0.5s forwards" : "slideout 0.5s forwards"};
  @keyframes slidein {
    0% {
      transform: scaleX(0);
    }
    100% {
      transform: scaleX(1.0);
    }
  }
  @keyframes slideout {
    0% {
      transform: scaleX(1.0);
    }
    100% {
      transform: scaleX(0);
    }
  }
`

/* TEST */
const Wrapper = styled.div `
  /*width: 1500px;*/
  width: 100%;
  display: flex;
  justify-content: center;
  align-self: center;
`
const Div = styled.div`
  display: flex;
  visibility: ${props => props.open ? "visible" : "hidden"};
  width: 100%;
  height: 100%;
`
/* MAP IMAGE HERE */
const ImgWrapper2 = styled.div `
  display: flex;
  justify-content: center;
  position: absolute;
  left: -100%;
  z-index: 999;
  opacity: 0;
  animation: ${props => props.open ? "fadein 2.8s forwards" : ""};
  @keyframes fadein {
    0% {
      opacity: 0;
    }
    99% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`

const Container = styled.div `
  width: 500px;
  height: 1000px;
  align-self: flex-end;
  background: url(${MapCenter});
  position: relative;
  perspective: 1300px;
  /*animation: ${props => props.open ? "ani1 1s ease-in-out" : ""};
  @keyframes ani1 {
    0% {
      transform: scale(1.0);
    }
    100% {
      transform: scale(1.1);
    }
  }*/
`
const Cover = styled.div `
  width: 500px;
  height: 1000px;
  position: absolute;
  /*background-color: url(${Cov1});*/
  transform: rotateY(0deg);
  transform-style: preserve-3d;
  transform-origin: left;
  transition: all 1s ease-in;
  /*transform: ${props => props.open ? "rotateY(-180deg)" : "none"};*/
  animation: ${props => props.open ? "test1 2.3s forwards" : ""};
  @keyframes test1 {
    0% {
      transform: rotateY(0deg);
    }
    100% {
      transform: rotateY(-180deg);
    }
  }
`
const Cover2 = styled.div `
  width: 500px;
  height: 1000px;
  position: absolute;
  /*background-color: url(${Cov2});*/
  transform: rotateY(0deg);
  transform-style: preserve-3d;
  transform-origin: right;
  transition: all 1s ease-in;
  /*transition-delay: 0.6s;*/
  /*transform: ${props => props.open ? "rotateY(180deg)" : "none"};*/
  animation: ${props => props.open ? "test2 1.8s forwards" : ""};
  animation-delay: 0.9s;

  @keyframes test2 {
    0% {
      transform: rotateY(0deg);
    }
    100% {
      transform: rotateY(180deg);
    }
  }
`
const Figure = styled.figure `
  margin: 0;
  display: block;
  position: absolute;
  width: 500px;
  height: 1000px;
  backface-visibility: hidden;
`
const Front1 = styled(Figure) `
  background: url(${Cov1});
`
const Back1 = styled(Figure) `
  background: url(${MapLeft});
  transform: rotateY(180deg) translateZ(0) scale(1.0, 1.0);
`
const Front2 = styled(Figure) `
  background: url(${Cov2});
`
const Back2 = styled(Figure) `
  background: url(${MapRight});
  transform: rotateY(180deg) translateZ(0) scale(1.0, 1.0);
`
