import config from "../config.json";
import styled from "styled-components";
import { CSSReset } from "../src/components/CSSReset";
import { StyledTimeline } from "../src/components/TimeLine";
import Menu from "../src/components/Menu"


function Home() {
    //const styleHome = { backgroundColor: "red" };
    // console.log(config.playlists);

    return (
        <>
            <CSSReset />
            <div style={{
                display: "flex",
                flexDirection: "column",
                flex: 1,
                // backgroundColor: "red",
            }}>
                <Menu />
                <Header />
                <TimeLine playlists={config.listas}>Conteúdo</TimeLine>
            </div>
        </>
    );
}

export default Home;

/*function Menu() {
    return (
        <StyledMenu>
            Olá
        </StyledMenu>
    );
}*/

const StyledHeader = styled.div`
  background-color: aqua;

  img {
    width: 80px;
    height: 80px;
    border-radius: 50%;
  }
  .user-info {
    margin-top: 50px;
    display: flex;
    align-items: center;
    width: 100%;
    padding: 16px 32px;
    gap: 16px;
  }
`;

/*const StyledTimeLine = styled.div`
    .thumb {
        width: 60px;
        height: 80px;
        border: 5px solid black;
    }
    

`*/

function Header() {
    return (
        <StyledHeader>
            {/* <img src="banner"/> */}

            <section className="user-info">
                <img src={`https://github.com/${config.github}.png`} />
                <div>
                    <h2>{config.name}</h2>
                    <p>{config.job}</p>
                </div>
            </section>
        </StyledHeader>
    );
}
function TimeLine(props) {
    console.log("Dentro do TimeLine", props.playlists);

    const playlistNames = Object.keys(props.playlists);

    return (
        <StyledTimeline>
        <div>
            {playlistNames.map((playlistName) => {
                //Pega os itens da lista "listas"
                const videos = props.playlists[playlistName]; //Nome os objetos dentro de cada lista
                console.log(playlistName);
                console.log(videos);
                return (
                    <section>
                        <h2>{playlistName}</h2>
                        <div>
                            {videos.map((video) => {
                                return (
                                    <a href={video.url}>
                                        <img className="thumb" src={video.thumb}></img>
                                        <span>{video.title}</span>
                                    </a>
                                )
                            })};
                        </div>
                    </section>
                )
            })}
        </div>
        </StyledTimeline>
    );
}
