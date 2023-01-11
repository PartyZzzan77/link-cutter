const formBtn = document.getElementById('btn');
const linkList = document.getElementById('link-list');

formBtn.addEventListener('click', () => {
    const link = document.getElementById('link');
    let { value } = link;

    const data = JSON.stringify({ source: value.trim() });

    if (value) {
        fetch('/links', {
            method: 'POST',
            headers: { 'Content-type': 'application/json' },
            body: data,
        });
    } else {
        link.classList.add('err');
    }
});
