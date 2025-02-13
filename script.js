function createMonster(name, element, health, skills) {
    return {
        name: name,
        element: element,
        health: health,
        skills: skills
    };
}

document.getElementById('monsterForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const element = document.getElementById('element').value;
    const health = parseInt(document.getElementById('health').value);
    const skills = [
        document.getElementById('skill1').value,
        document.getElementById('skill2').value,
        document.getElementById('skill3').value
    ].filter(skill => skill !== '');

    if (skills.length > 3) {
        alert('Você só pode ter no máximo 3 habilidades!');
        return;
    }

    const monster = createMonster(name, element, health, skills);
    
    document.getElementById('result').innerHTML = `
        <h2>Seu Monstro:</h2>
        <pre>${JSON.stringify(monster, null, 2)}</pre>
    `;
});
