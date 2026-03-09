function countWords() {
    const text = document.getElementById('text').value;
    const words = text.trim().split(/\s+/).filter(word => word.length > 0);
    const wordCount = words.length;
    const charCount = text.length;
    const charNoSpace = text.replace(/\s/g, '').length;

    document.getElementById('result').innerText = `Words: ${wordCount}, Characters: ${charCount}, Characters (no spaces): ${charNoSpace}`;
}