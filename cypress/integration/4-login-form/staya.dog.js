describe('Тестирование формы логина и пароля на staya.dog', function () {

    it('Авторизация при корректном логине и пароле', function () {
        cy.visit('https://staya.dog/');
        cy.get('.header-bottom__right--link').click();
        cy.get('.auth-form__submit').should('be.disabled')
        cy.get('.auth-form > form > [type="email"]').type('корректный_логин');
        cy.get('.auth-form > form > [type="password"]').type('корректный_пароль');
        cy.get('.auth-form__submit').should('not.be.disabled');
        cy.get('.auth-form__submit').click();
        cy.contains('Мои заказы');
        cy.clearCookies()
    })

    it('Авторизация при корректном логине и некорректном пароле', function () {
        cy.reload();
        cy.get('.header-bottom__right--link').click();
        cy.get('.auth-form__submit').should('be.disabled')
        cy.get('.auth-form > form > [type="email"]').type('корректный_логин');
        cy.get('.auth-form > form > [type="password"]').type('не_корректный_пароль');
        cy.get('.auth-form__submit').should('not.be.disabled');
        cy.get('.auth-form__submit').click();
        cy.contains('Невозможно войти с предоставленными учетными данными.');
        cy.clearCookies()
    })

    it('Авторизация при некорректном логине и корректном пароле', function () {
        cy.reload();
        cy.get('.header-bottom__right--link').click();
        cy.get('.auth-form__submit').should('be.disabled')
        cy.get('.auth-form > form > [type="email"]').type('некорректный_логин');
        cy.get('.auth-form > form > [type="password"]').type('корректный_пароль');
        cy.get('.auth-form__submit').should('not.be.disabled');
        cy.get('.auth-form__submit').click();
        cy.contains('Невозможно войти с предоставленными учетными данными.');
        cy.clearCookies()
    })

    it('Авторизация при некорректном логине и пароле', function () {
        cy.reload();
        cy.get('.header-bottom__right--link').click();
        cy.get('.auth-form__submit').should('be.disabled')
        cy.get('.auth-form > form > [type="email"]').type('некорректный_логин');
        cy.get('.auth-form > form > [type="password"]').type('некорректный_пароль');
        cy.get('.auth-form__submit').should('not.be.disabled');
        cy.get('.auth-form__submit').click();
        cy.contains('Невозможно войти с предоставленными учетными данными.');
        cy.clearCookies()
    })

    it('Авторизация при невалидном логине и корректном пароле', function () {
        cy.reload();
        cy.get('.header-bottom__right--link').click();
        cy.get('.auth-form__submit').should('be.disabled')
        cy.get('.auth-form > form > [type="email"]').type('невалидный_логин');
        cy.get('.auth-form > form > [type="password"]').type('корректный_пароль');
        cy.get('.auth-form__submit').should('not.be.disabled');
        cy.get('.auth-form__submit').click();
        cy.contains('Невозможно войти с предоставленными учетными данными.');
        cy.clearCookies()
    })

    it('Восстановление пароля при валидном E-mail', function () {
        cy.reload();
        cy.get('.header-bottom__right--link').click();
        cy.get('.auth-form__submit').should('be.disabled')
        cy.get('.auth-page__form > :nth-child(2) > a').click();
        cy.contains('Смена пароля');
        cy.get('.form__button').should('be.disabled')
        cy.get('.form__field').type('валидный_логин');
        cy.get('.form__button').should('not.be.disabled')
        cy.get('.form__button').click();
        cy.contains('Письмо отправлено');
        cy.clearCookies()
    })

    it('Восстановление пароля при невалидном E-mail', function () {
        cy.reload();
        cy.get('.header-bottom__right--link').click();
        cy.get('.auth-form__submit').should('be.disabled')
        cy.get('.auth-page__form > :nth-child(2) > a').click();
        cy.contains('Смена пароля');
        cy.get('.form__button').should('be.disabled')
        cy.get('.form__field').type('невалидный_логин');
        cy.get('.form__button').should('be.disabled')
    })
})
