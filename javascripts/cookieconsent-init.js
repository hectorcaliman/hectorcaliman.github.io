window.addEventListener('load', function(){

    // obtain plugin
    var cc = initCookieConsent();

    // run plugin with your configuration
    cc.run({
        current_lang: 'pt-br',
        autoclear_cookies: true,                   // default: false
        page_scripts: true,                        // default: false
        // mode: 'opt-in'                          // default: 'opt-in'; value: 'opt-in' or 'opt-out'
        // delay: 80,                              // default: 0
        auto_language: 'browser',                  // default: null; could also be 'browser' or 'document'
        // autorun: true,                          // default: true
        force_consent: false,                      // default: false
        // hide_from_bots: false,                  // default: false
        // remove_cookie_tables: false             // default: false
        // cookie_name: 'cc_cookie',               // default: 'cc_cookie'
        // cookie_expiration: 182,                 // default: 182 (days)
        // cookie_necessary_only_expiration: 182   // default: disabled
        // cookie_domain: location.hostname,       // default: current domain
        // cookie_path: '/',                       // default: root
        // cookie_same_site: 'Lax',                // default: 'Lax'
        // use_rfc_cookie: false,                  // default: false
        // revision: 0,                            // default: 0

        onFirstAction: function(user_preferences, cookie){
            // callback triggered only once on the first accept/reject action
        },

       onAccept: function (cookie) {
            // callback triggered on the first accept/reject action, and after each page load
            },

        onChange: function (cookie, changed_categories) {
            // callback triggered when user changes preferences after consent has already been given
        },

        languages: {
            'pt-br': {
                consent_modal: {
                    title: 'vai um 🍪 ai?',
                    description: 'Este site usa cookies para garantir que você obtenha a melhor experiência de navegação. Desativar os cookies do site pode prejudicar a funcionalidade de alguns recursos. <button type="button" data-cc="c-settings" class="cc-link">Quero escolher</button>',
                    primary_btn: {
                        text: 'Aceitar todos',
                        role: 'accept_all'              // 'accept_selected' or 'accept_all'
                    },
                    secondary_btn: {
                        text: 'Aceitar somente os necessários',
                        role: 'accept_necessary'        // 'settings' or 'accept_necessary'
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
                                readonly: true          // cookie categories with readonly=true are all treated as "necessary cookies"
                            },
                            cookie_table: [             // list of all expected cookies
                                {
                                    col1: '^_gtm',       // match all cookies starting with "_ga"
                                    col2: 'google.com',
                                    col3: 'Indeterminado',
                                    col4: 'Gerenciador de Tags do Google',
                                    is_regex: true
                                },
                            ]
                        }, {
                            title: 'Cookies de Performance e Analíticos',
                            description: 'Esses Cookies coletam informações e monitoram as ações dentro do site, cliques, páginas visitadas. Eles não serão usados para identificar quem acessou e todo o acesso será anônimo.',
                            toggle: {
                                value: 'analytics',     // your cookie category
                                enabled: false,
                                readonly: false
                            },
                            cookie_table: [             // list of all expected cookies
                                {
                                    col1: '^_ga',       // match all cookies starting with "_ga"
                                    col2: 'google.com',
                                    col3: '5 anos',
                                    col4: 'Gerenciador de Tags do Google',
                                    is_regex: true
                                },
                                {
                                    col1: '_gid',
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
                                col1: '^_fb',               // New option in v2.4: regex (microsoft clarity cookies)
                                col2: 'facebook.com',
                                col3: '365 dias',
                                col4: 'Pixel de análise de eventos do Facebook',
                                is_regex: true              // New option in v2.4
                            },
                            {
                                col1: '^_aw',               // New option in v2.4: regex (microsoft clarity cookies)
                                col2: 'google.com',
                                col3: '180 dias',
                                col4: 'Tag de conversão do Google Ads',
                                // path: '/',               // New option in v2.4
                                is_regex: true              // New option in v2.4
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
