function calculateSign() {
    const dayInput = document.getElementById('day').value;
    const monthInput = document.getElementById('month').value;
    const resultDiv = document.getElementById('result');

    if (!dayInput || !monthInput) {
        alert('Por favor, insira o dia e selecione o mês do seu nascimento.');
        return;
    }

    const day = parseInt(dayInput);
    const month = parseInt(monthInput);

    if (day < 1 || day > 31) {
        alert('Por favor, insira um dia válido entre 1 e 31.');
        return;
    }

    let sign = '';
    let knight = '';
    let description = '';
    let imageUrl = '';

    if ((month === 3 && day >= 21) || (month === 4 && day <= 19)) {
        sign = 'Áries'; knight = 'Mu de Áries';
        description = 'Conhecido por ser o restaurador de armaduras e calmo.';
        imageUrl = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNgmTTEPVSS6UJXCUeu41A59Lh3sB6j4KxKg&s';
    } else if ((month === 4 && day >= 20) || (month === 5 && day <= 20)) {
        sign = 'Touro'; knight = 'Aldebaran de Touro';
        description = 'Representa força física e estabilidade.';
        imageUrl = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLAYZJmmIMhNSTCD7Nar9yqrTcC5bX4WpYug&s';
    } else if ((month === 5 && day >= 21) || (month === 6 && day <= 20)) {
        sign = 'Gêmeos'; knight = 'Saga de Gêmeos';
        description = 'Exibe a dualidade entre o bem e o mal.';
        imageUrl = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFoUZlPO2VTfZJDP05tTCqJeHxMFVaGczRXw&s';
    } else if ((month === 6 && day >= 21) || (month === 7 && day <= 22)) {
        sign = 'Câncer'; knight = 'Máscara da Morte de Câncer';
        description = 'Conectado ao submundo e forças espirituais.';
        imageUrl = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTk-bF_A8zgJQsDA5N0Bo_tXUf-6zq17kGdWg&s';
    } else if ((month === 7 && day >= 23) || (month === 8 && day <= 22)) {
        sign = 'Leão'; knight = 'Aiolia de Leão';
        description = 'Nobre, leal e com grande poder de ataque.';
        imageUrl = 'https://ovicio.com.br/wp-content/uploads/2023/05/20230502-ovicio-os-cavaleiros-do-zodiaco-aiolia-de-leao.jpg';
    } else if ((month === 8 && day >= 23) || (month === 9 && day <= 22)) {
        sign = 'Virgem'; knight = 'Shaka de Virgem';
        description = 'O mais próximo de Deus, reservado e sábio.';
        imageUrl = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbv5r2oSh_Ttldd9XWlhsdIh8JAvAF6lIDhQ&s';
    } else if ((month === 9 && day >= 23) || (month === 10 && day <= 22)) {
        sign = 'Libra'; knight = 'Dohko de Libra';
        description = 'O mestre ancião, equilibrado e experiente.';
        imageUrl = 'https://i.pinimg.com/474x/0c/95/0c/0c950c0ec880ff4746200107ee22e8de.jpg';
    } else if ((month === 10 && day >= 23) || (month === 11 && day <= 21)) {
        sign = 'Escorpião'; knight = 'Milo de Escorpião';
        description = 'Intenso, misterioso e leal.';
        imageUrl = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3zV77Ttm3jZYSpcLjQoLrq1TOC3cctT0yMA&s';
    } else if ((month === 11 && day >= 22) || (month === 12 && day <= 21)) {
        sign = 'Sagitário'; knight = 'Aiolos de Sagitário';
        description = 'Corajoso, aventureiro e otimista.';
        imageUrl = 'https://i.pinimg.com/736x/b3/67/c1/b367c1d83f76e325fa2c2ed0fe7bef0a.jpg';
    } else if ((month === 12 && day >= 22) || (month === 1 && day <= 19)) {
        sign = 'Capricórnio'; knight = 'Shura de Capricórnio';
        description = 'Disciplinado e determinado.';
        imageUrl = 'https://i.pinimg.com/474x/a1/bd/a7/a1bda7964364b99defa162cd48ae8814.jpg';
    } else if ((month === 1 && day >= 20) || (month === 2 && day <= 18)) {
        sign = 'Aquário'; knight = 'Camus de Aquário';
        description = 'Frio, estoico e racional.';
        imageUrl = 'https://ovicio.com.br/wp-content/uploads/2023/05/20230508-camus-aquario-555x555.png';
    } else {
        sign = 'Peixes'; knight = 'Afrodite de Peixes';
        description = 'Simboliza a beleza e a morte.';
        imageUrl = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7yLA3Q58Nk9qP_Rfhg6nYJiO8UeWdnHyIHQ&s';
    }

    resultDiv.innerHTML = `
        <h2 style="color: #facc15;">${sign}</h2>
        <p><strong>${knight}</strong></p>
        <p>${description}</p>
        <img src="${imageUrl}" alt="${knight}" class="knight-img">
    `;

    resultDiv.style.display = 'block';
}