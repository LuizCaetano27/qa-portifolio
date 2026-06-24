///<reference types="cypress" />

import { faker } from '@faker-js/faker'
import commum_page from '../support/pages/commum_pages'
import cadastro_page from '../support/pages/cadastro_usuario_page'

describe('Cadastro de Usuário', () => {

    beforeEach('Acessar cadastro de usuário', () => {
        commum_page.acessarCadastroUsuario()
    })

    it('Campo nome vazio', () => {
        cadastro_page.clicarCadastrar()
        cadastro_page.validarMensagemErro('O campo nome deve ser prenchido')
    })

    it('Campo e-mail vazio', () => {
        cadastro_page.preencheNome(faker.person.fullName())
        cadastro_page.clicarCadastrar()
        cadastro_page.validarMensagemErro('O campo e-mail deve ser prenchido corretamente')
    })

    it('Campo e-mail inválido', () => {
        cadastro_page.preencheNome(faker.person.fullName())
        cadastro_page.preencheEmaiil(faker.person.firstName())
        cadastro_page.clicarCadastrar()
        cadastro_page.validarMensagemErro('O campo e-mail deve ser prenchido corretamente')
    })

    it('Campo senha vazio', () => {
        cadastro_page.preencheNome(faker.person.fullName())
        cadastro_page.preencheEmaiil(faker.internet.email())
        cadastro_page.clicarCadastrar()
        cadastro_page.validarMensagemErro('O campo senha deve ter pelo menos 6 dígitos')
    })

    it('Campo senha inválido', () => {
        cadastro_page.preencheNome(faker.person.fullName())
        cadastro_page.preencheEmaiil(faker.internet.email())
        cadastro_page.preencheSenha('123')
        cadastro_page.clicarCadastrar()
        cadastro_page.validarMensagemErro('O campo senha deve ter pelo menos 6 dígitos')
    })

    it('Cadastro com sucesso', async() => {

        const name = faker.person.fullName()

        cadastro_page.preencheNome(name)
        cadastro_page.preencheEmaiil(faker.internet.email())
        cadastro_page.preencheSenha('123456')
        cadastro_page.clicarCadastrar()
        cadastro_page.validarMensagemSucesso(name)
        
    })

})