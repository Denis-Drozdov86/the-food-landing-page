
window.onload = function() {
	height();
	setTimeout(rotate, 500);
	setTimeout(nav, 700);
	setTimeout(head, 900);
	setTimeout(img, 900);
	setTimeout(text, 900);
	setTimeout(social, 700);
}

function height() {
	let l = document.querySelector('#left');
	let r = document.querySelector('#right');
	l.style.top = '0';
	r.style.bottom = '0';
}

function rotate() {
	let m = document.querySelector('#middle');
	m.style.transform = 'rotateY(0)';
}

function nav() {
	let n = document.querySelector('#nav');
	n.style.opacity = 1;
}

function head() {
	let h1 = document.querySelector('#he1');
	let h2 = document.querySelector('#he2');
	h1.style.opacity = '1';
	h2.style.opacity = '1';
	h1.style.left = '0';
	h2.style.left = '60px';
}

function img() {
	let i = document.querySelector('#img');
	i.style.opacity = '1';
	i.style.left = '55%';
}

function text() {
	let t = document.querySelector('#text');
	let b = document.querySelector('button');
	t.style.opacity = '1';
	t.style.bottom = '10%';
	b.style.top = '40px';
}

function social() {
	let s = document.getElementById('social');
	s.style.opacity = '1';
	s.style.right = '0';
}