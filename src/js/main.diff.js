const getWord = async () => {
    const res = await fetch('/getword');
    const word = await res.text();

    document.getElementById('random-word').innerText = word;
};

getWord();