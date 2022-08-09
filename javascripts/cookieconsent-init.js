window.addEventListener('load', function(){

    // obtain plugin
    var cc = initCookieConsent();

    // run plugin with your configuration
    cc.run({
        current_lang: 'pt-br',
        autoclear_cookies: true,
        page_scripts: true,
        // mode: 'opt-in'
        // delay: 80,
        auto_language: 'browser',
        // autorun: true,
        force_consent: false,
        // hide_from_bots: false,
        // remove_cookie_tables: false
        // cookie_name: 'cc_cookie', 
        // cookie_expiration: 182,
        // cookie_necessary_only_expiration: 182
        // cookie_domain: location.hostname,
        // cookie_path: '/', 
        // cookie_same_site: 'Lax',  
        // use_rfc_cookie: false,   
        // revision: 0, 

        onFirstAction: function(user_preferences, cookie){
            
        },

       onAccept: function (cookie) {
            
            },

        onChange: function (cookie, changed_categories) {
         
        },

        languages: {
            'pt-br': {
                consent_modal: {
                    title: 'vai um 🍪 ai?',
                    description: 'Este site usa cookies para garantir que você obtenha a melhor experiência de navegação. Desativar os cookies do site pode prejudicar a funcionalidade de alguns recursos. <button type="button" data-cc="c-settings" class="cc-link">Quero escolher</button>',
                    primary_btn: {
                        text: 'Aceitar todos',
                        role: 'accept_all'
                    },
                    secondary_btn: {
                        text: 'Aceitar somente os necessários',
                        role: 'accept_necessary'
                    }
                },
                settings_modal: {
                    title: 'Preferências dos Cookies',
                    save_settings_btn: 'Salvar minhas opções',
                    accept_all_btn: 'Aceitar todos',
                    reject_all_btn: 'Rejeitar todos',
                    close_btn_label: 'Close',
                    cookie_table_headers: [
                        {col1: 'Name'},
                        {col2: 'Domain'},
                        {col3: 'Expiration'},
                        {col4: 'Description'}
                    ],
                    blocks: [
                        {
                            title: 'Uso dos Cookies 📢',
                            description: 'Apesar, de hoje, não ter anúncios rodando, e a tendência é se manter assim por um bom tempo, este site tem a finalidade de ser apenas um portfolio para demonstração do meu trabalho e conhecimento sobre assuntos ligados a área de mídia performance. Como prova de transparência, e conhecendo as legalidades da LGPD, você pode escolher quais cookies pretende manter ativo. Quaisquer dúvidas pode acessar a minha <a href="politica-de-privacidade.html" class="cc-link">política de privacidade</a>.'
                        }, {
                            title: 'Cookies Necessários',
                            description: 'Esses Cookies são necessários para o funcionamento do site, sem eles várias funções não irão funcionar.',
                            toggle: {
                                value: 'necessary',
                                enabled: true,
                                readonly: true     
                            },
                            cookie_table: [ 
                                {
                                    col1: '^_gtm',
                                    col2: 'google.com',
                                    col3: 'Indeterminado',
                                    col4: 'Gerenciador de Tags do Google',
                                    is_regex: true
                                },
                                {
                                    col1: 'javascript',
                                    col2: 'hectorcaliman.github.io',
                                    col3: 'Indeterminado',
                                    col4: 'Scripts de carregamento do site',
                                    is_regex: true
                                }
                            ]
                        }, {
                            title: 'Cookies de Performance e Analíticos',
                            description: 'Esses Cookies coletam informações e monitoram as ações dentro do site, cliques, páginas visitadas. Eles não serão usados para identificar quem acessou e todo o acesso será anônimo.',
                            toggle: {
                                value: 'analytics',
                                enabled: false,
                                readonly: false
                            },
                            cookie_table: [
                                {
                                    col1: '^_ga',
                                    col2: 'google.com',
                                    col3: '5 anos',
                                    col4: 'Configuração do Google Analytics Universal',
                                    is_regex: true
                                },
                                {
                                    col1: 'ˆ_gaawc',
                                    col2: 'google.com',
                                    col3: '180 dias',
                                    col4: 'Configuração do Google Analytics 4',
                                    is_regex: true
                                },
                                {
                                    col1: 'ˆ_gid',
                                    col2: 'smartlook.com',
                                    col3: '180 dias',
                                    col4: 'Mapa de calor do site.',
                                    is_regex: true
                                }
                            ]
                        }, {
                            title: 'Anúncio e Targeting cookies',
                           description: 'Esses Cookies servem para aprendizado dos meus mecanismos de anúncio, criação de público e retargeting.',
                            toggle: {
                                value: 'targeting',
                                enabled: false,
                                readonly: false
                            },
                            cookie_table: [
                            {
                                col1: '^_fb',
                                col2: 'facebook.com',
                                col3: '365 dias',
                                col4: 'Pixel de análise de eventos do Facebook',
                                is_regex: true 
                            },
                            {
                                col1: '^_sp',
                                col2: 'google.com',
                                col3: '180 dias',
                                col4: 'Google Ads Remarketing Tag',
                                // path: '/',
                                is_regex: true
                            },
                            {
                                col1: '^_aw',
                                col2: 'google.com',
                                col3: '180 dias',
                                col4: 'Tag de conversão do Google Ads',
                                // path: '/',
                                is_regex: true
                            }
                            ]
                        }, {
                            title: 'Mais informações',
                            description: 'Quaisquer dúvidas ou dúvidas sobre a política de privacidade, por favor entre em <a class="cc-link" href="contato.html">contato</a>.',
                        }
                    ]
                }
            }
        }
    });    
});
