let images = []

for (let i=0; i<13; i++) {
	images[i] = {
		id: `H${i+2}`, src: `./PNG/${i+2}H.png`, rank: i, value: i+2 , suit: 'H'
	}
}

for (let i=13; i<26; i++) {
	images[i] = {
		id: `S${i+2-13}`, src: `./PNG/${i+2-13}S.png`, rank: i-13, value: i+2-13 , suit: 'S'
	}
}

for (let i=26; i<39; i++) {
	images[i] = {
		id: `D${i+2-26}`, src: `./PNG/${i+2-26}D.png`, rank: i-26, value: i+2-26 , suit: 'D'
	}
}

for (let i=39; i<52; i++) {
	images[i] = {
		id: `C${i+2-39}`, src: `./PNG/${i+2-39}C.png`, rank: i-39, value: i+2-39 , suit: 'C'
	}
}



const imageLoader = () => {
	return images
}

export default imageLoader;

