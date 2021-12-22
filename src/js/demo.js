import bg from "../images/content/fatric_line.jpg";
import line from "../images/content/line.png";

const Canvas = {
	$doc: document,
	cvs: null,
	ctx: null,

	init() {
		this.cvs = this.$doc.getElementById("fatrick");
		this.ctx = this.cvs.getContext("2d");

		this.setBackGround(bg);
	},

	setBackGround(img) {
		const self = this;
		const bg = new Image();
		bg.src = img;
		bg.onload = function () {
			self.scaleToFit(this);
		};
	},

	scaleToFit(img) {
		const scale = Math.min(
			this.cvs.width / img.width,
			this.cvs.height / img.height
		);
		// get the top left position of the image
		const x = this.cvs.width / 2 - (img.width / 2) * scale;
		const y = this.cvs.height / 2 - (img.height / 2) * scale;
		this.ctx.drawImage(img, x, y, img.width * scale, img.height * scale);
	},

	setTitle(txt) {
		const rectX = 82;
		const rectY = 120;
		const rectW = 200;
		const rectH = 50;

		this.ctx.beginPath();
		this.ctx.fillStyle = "#3c0";
		this.ctx.globalAlpha = 0;
		this.ctx.rotate((Math.PI / 180) * -17);
		this.ctx.fillRect(rectX, rectY, rectW, rectH);
		this.ctx.globalAlpha = 1;
		this.ctx.fillStyle = "#000000";
		this.ctx.font = "bold 36px NANUMMIDDLE-R";
		this.ctx.textAlign = "center";
		this.ctx.textBaseline = "middle";
		this.ctx.fillText(txt, rectX + rectW / 2, rectY + rectH / 2);

		const rectX1 = 82;
		const rectY1 = 190;
		const rectW1 = 200;
		const rectH1 = 50;
		this.ctx.globalAlpha = 0;
		this.ctx.fillStyle = "#3c0";
		this.ctx.fillRect(rectX1, rectY1, rectW1, rectH1);
		this.ctx.globalAlpha = 1;
		this.ctx.fillStyle = "#000000";
		this.ctx.fillText("아무것도", rectX1 + rectW1 / 2, rectY1 + rectH1 / 2);

		this.ctx.beginPath();
		this.ctx.lineWidth = 3;
		this.ctx.moveTo(105, 216);
		this.ctx.lineTo(275, 223);
		this.ctx.stroke();

		const rectX2 = 82;
		const rectY2 = 240;
		const rectW2 = 200;
		const rectH2 = 50;
		this.ctx.globalAlpha = 0;
		this.ctx.fillStyle = "#3c0";
		this.ctx.fillRect(rectX2, rectY2, rectW2, rectH2);
		this.ctx.globalAlpha = 1;
		this.ctx.fillStyle = "#000000";
		this.ctx.fillText(
			"두번째  질문",
			rectX2 + rectW2 / 2,
			rectY2 + rectH2 / 2
		);

		const rectX3 = 82;
		const rectY3 = 290;
		const rectW3 = 200;
		const rectH3 = 50;
		this.ctx.globalAlpha = 0;
		this.ctx.fillStyle = "#3c0";
		this.ctx.fillRect(rectX3, rectY3, rectW3, rectH3);
		this.ctx.globalAlpha = 1;
		this.ctx.fillStyle = "#000000";
		this.ctx.fillText(
			"세번째  질문",
			rectX3 + rectW3 / 2,
			rectY3 + rectH3 / 2
		);
	},

	downlod() {
		let dataURL = this.cvs.toDataURL("image/png");
		dataURL = dataURL.replace(
			/^data:image\/[^;]*/,
			"data:application/octet-stream"
		);
		dataURL = dataURL.replace(
			/^data:application\/octet-stream/,
			"data:application/octet-stream;headers=Content-Disposition%3A%20attachment%3B%20filename=Canvas.png"
		);

		const aTag = document.createElement("a");
		aTag.download = "from_canvas.png";
		aTag.href = dataURL;
		aTag.click();
	},
};

document.addEventListener("DOMContentLoaded", function () {
	Canvas.init();

	// var $doc = document;
	// var canvas = $doc.getElementById("fatrick");
	// var ctx = canvas.getContext("2d");

	// var img = new Image();
	// img.src = bg;
	// img.onload = function () {
	// 	scaleToFit(this);

	// 	ctx.beginPath();
	// 	ctx.translate(90, 114);
	// 	ctx.rotate((Math.PI / 180) * -17);
	// 	// ctx.fillStyle = "#3c0";
	// 	// ctx.globalAlpha = 1;
	// 	// ctx.fillRect(0, 0, 140, 30);
	// 	ctx.save();
	// 	setTimeout(function () {
	// 		ctx.globalAlpha = 1;
	// 		ctx.fillStyle = "#000000";
	// 		ctx.font = "bold 18px NANUMMIDDLE-R";
	// 		ctx.fillText("오늘 할일", 0, 15);
	// 	}, 300);

	// 	// ctx.font = "18pt Arial";
	// 	// ctx.strokeStyle = "#000";
	// 	// ctx.lineWidth = 0.1;
	// 	// ctx.beginPath();
	// 	// ctx.fillStyle = "#3c0";
	// 	// ctx.rect(30, 0 + 3 * 50, 50, 50);
	// 	// ctx.fill();
	// 	// ctx.stroke();

	// 	// ctx.fillStyle = "#fff";
	// 	// ctx.fillText("blah", 0, 0 + 3 * 50);
	// };
});

window.addEventListener("load", function () {
	Canvas.setTitle("TO-DOLIST");
	console.log("하위");
});
