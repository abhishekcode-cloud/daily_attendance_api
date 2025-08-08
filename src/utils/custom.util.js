import path from "path";


export default {

	isNumeric: function (num) {
		return !isNaN(num);
	},
	// * Check is empty
	isEmpty: function (data) {
		if (data == undefined || data == '') {
			return true;
		} else {
			return false;
		}
	},

	// * Generate 6 digit OTP.
	generateOTP: function () {
		return Math.floor(100000 + Math.random() * 900000);
	},

	// * Generate Open ID.
	generateOpenId: function () {
		let cn = "np";
		let uniqueId = Math.floor(100000 + Math.random() * 900000);
		const generateId = cn + uniqueId;
		return generateId.toUpperCase();
	},

	//Capitalize the first letter of words in a string:
	capitalizeFirstLetter: function (string) {
		return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
	},

	//Capitalize the first letter of all words in a string:
	capitalizeFirstAllWords: function (str) {
		var pieces = str.split(" ");
		for (var i = 0; i < pieces.length; i++) {
			var j = pieces[i].charAt(0).toUpperCase();
			pieces[i] = j + pieces[i].substr(1);
		}
		return pieces.join(" ");
	},

	//Remove Duplicates from an Array(unique name)
	uniqueChars: function (data) {
		let uc = data.filter((c, index) => {
			return data.indexOf(c) === index;
		});
		return uc.sort();
	}


	// function compareImages(image1, image2) {
	// 	// Get the pixel data for both images.
	// 	const image1Data = JIMP.read(image1);
	// 	const image2Data = JIMP.read(image2);

	// 	// Compare the pixel data of the two images.
	// 	const similarity = comparePixels(image1Data, image2Data);

	// 	// Return the similarity score.
	// 	return similarity;
	//   }

	//   // Compare the pixel data of two images.
	//   function comparePixels(imageData1, imageData2) {
	// 	// Get the width and height of the images.
	// 	const width = imageData1.width;
	// 	const height = imageData1.height;

	// 	// Create a variable to store the similarity score.
	// 	let similarity = 0;

	// 	// Loop over the pixels of the images.
	// 	for (let i = 0; i < width * height; i++) {
	// 	  // Compare the pixels at the current position.
	// 	  if (imageData1.data[i] === imageData2.data[i]) {
	// 		similarity++;
	// 	  }
	// 	}

	// 	// Return the similarity score.
	// 	return similarity / (width * height);
	//   }


}
