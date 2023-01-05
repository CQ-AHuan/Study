function toggleReviewMode () {
    window.state.reviewMode = !window.state.reviewMode;
    const switchBtn = document.querySelector('.review-mode-switch-btn-wrapper .btn');
    const switchBtnWrapper = document.querySelector('.review-mode-switch-btn-wrapper .switch');
    const labelBox = document.querySelector('.review-mode-switch-btn-wrapper .label');
    switchBtn.setAttribute('style', `
        transform: translateX(${ window.state.reviewMode ? 50 : 0 }px);
    `);
    const primaryColor = window.state.reviewMode
        ? '0, 116, 255'
        : '255, 255, 255';
    switchBtnWrapper.setAttribute('style', `
        box-shadow: inset 0 0 5px rgba(${ primaryColor }, .9);
        background-image: linear-gradient(60deg, rgba(${ primaryColor }, .1), rgba(${ primaryColor }, .5), rgba(${ primaryColor }, .1));
    `);

    labelBox.innerText = window.state.reviewMode
        ? '关闭代码审查模式'
        : '开启代码审查模式';

}
