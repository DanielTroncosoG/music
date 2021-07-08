import React, { useRef, useState } from "react";
import Play from "./Play";

//create your first component
export function Reproductor() {
	let audioPlayer = useRef();
	const [actualSong, setactualSong] = useState(null);
	const [listofSongs, setlistofSongs] = useState([
		{
			id: 1,
			category: "game",
			name: "Mario Castle",
			url: "files/mario/songs/castle.mp3"
		},
		{
			id: 2,
			category: "game",
			name: "Mario Star",
			url: "files/mario/songs/hurry-starman.mp3"
		},
		{
			id: 3,
			category: "game",
			name: "Mario Overworld",
			url: "files/mario/songs/overworld.mp3"
		}
	]);
	const cargSong = (url, i) => {
		setactualSong(i);
		audioPlayer.src = `https://assets.breatheco.de/apis/sound/${url}`;
		reproSong();
	};
	const reproSong = () => {
		audioPlayer.play();
	};
	const sigSong = () => {
		if (actualSong + 1 < listofSongs.length)
			cargSong(listofSongs[actualSong + 1].url, actualSong + 1);
	};
	const prevSong = () => {
		if (actualSong > 0)
			cargSong(listofSongs[actualSong - 1].url, actualSong - 1);
	};
	const stopSong = () => {
		cargSong(null);
	};
	const pauseSong = () => {
		audioPlayer.pause();
	};

	return (
		<>
			<div className="container bg-black justify-content-lg-center">
				<div className="row">
					<div className="col-md-6">
						<ul className="SongList">
							{listofSongs.length > 0 &&
								listofSongs.map((song, index) => {
									return (
										<li
											key={index}
											className={
												"list-group-item list-group-item-action" +
												(actualSong === index
													? " active"
													: "")
											}
											onClick={() =>
												cargSong(song.url, index)
											}>
											{song.name}
										</li>
									);
								})}
						</ul>
					</div>
				</div>
				<div className="row">
					<div className="col-md-6">
						<audio ref={t => (audioPlayer = t)} src="" />
					</div>
				</div>
				<div className="Reproductor">
					<button onClick={prevSong} type="button" id="Previous">
						<i className="fas fa-step-backward"></i>
					</button>
					<button onClick={reproSong} type="button" id="Play">
						<i className="fas fa-play"></i>
					</button>
					<button onClick={pauseSong} type="button" id="Pause">
						<i className="fas fa-pause-circle"></i>
					</button>
					<button onClick={stopSong} type="button" id="Stop">
						<i className="fas fa-stop-circle"></i>
					</button>
					<button onClick={sigSong} type="button" id="Next">
						<i className="fas fa-step-forward"></i>
					</button>
				</div>
			</div>
		</>
	);
}