async function searchWord() {
    const word = document.getElementById('word').value.trim();
    if (word === '') return;

    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = 'Searching...';

    try {
        const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
        const data = await response.json();

        if (response.ok) {
            const entry = data[0];
            let html = `<h3>${entry.word}</h3>`;
            if (entry.phonetics && entry.phonetics[0]) {
                html += `<p><strong>Pronunciation:</strong> ${entry.phonetics[0].text || ''}</p>`;
            }
            entry.meanings.forEach(meaning => {
                html += `<p><strong>${meaning.partOfSpeech}:</strong> ${meaning.definitions[0].definition}</p>`;
                if (meaning.definitions[0].example) {
                    html += `<p><em>Example: ${meaning.definitions[0].example}</em></p>`;
                }
            });
            resultDiv.innerHTML = html;
        } else {
            resultDiv.innerHTML = '<p>Word not found. Please try another word.</p>';
        }
    } catch (error) {
        resultDiv.innerHTML = '<p>Error fetching definition. Please try again.</p>';
    }
}