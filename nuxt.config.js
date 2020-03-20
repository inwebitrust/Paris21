// eslint hotreload
const webpack = require('webpack')
module.exports = {
  /*
  ** Build configuration
  */
  modules: [
  'nuxt-babel',
  ],
  babel: {
    presets: [
      [ '@nuxtjs/babel-preset-app', {
          targets: { ie: 11 }
        }
      ]
    ]
  },
  //loading: '~/components/loading.vue',
  loading: false,
  loadingIndicator: false,
  css: [
    '@/assets/scss/main.scss',
    '@/assets/scss/responsive.scss'
  ],
  head: {
    meta: [
      { charset: 'utf-8', title: 'Test' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' }
    ],
    link: [
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700' }
    ]
  },
  plugins: [{src: '~/plugins/velocity', ssr: false}, '~/plugins/mixinCommonMethods.js'],
  build: {
      /*
      ** You can extend webpack config here
      */
       /*plugins: [
        new webpack.ProvidePlugin({
          '$': 'jquery',
          '_': 'lodash'
          // ...etc.
        })
      ],
      */
      vendor: ['velocity-animate', 'axios','d3'],
      extend(config, ctx) {
        config.plugins = config.plugins.filter((plugin) => plugin.constructor.name !== 'UglifyJsPlugin')
          // Run ESLint on save
          /*
          if (ctx.isDev && ctx.isClient) {
              config.module.rules.push({
                  enforce: "pre",
                  test: /\.(js|vue)$/,
                  loader: "eslint-loader",
                  exclude: /(node_modules)/,
                  options: {
                      //formatter: require('eslint-friendly-formatter'),
                      emitWarning: true
                  }
              })
          }
          */

          if (ctx.isClient) {
            config.entry.vendor.push('babel-polyfill')
          }
      }
  },
  generate: {
    routes: [
      '/',
      '/country',
      '/country/',
      '/indicator',
      '/indicator/',
      '/country/1','/country/2','/country/3','/country/4','/country/5','/country/6','/country/7','/country/8','/country/9','/country/10','/country/11','/country/12','/country/13','/country/14','/country/15','/country/16','/country/17','/country/18','/country/19','/country/20','/country/21','/country/22','/country/23','/country/24','/country/25','/country/26','/country/27','/country/28','/country/29','/country/30','/country/31','/country/32','/country/33','/country/34','/country/35','/country/36','/country/37','/country/38','/country/39','/country/40','/country/41','/country/42','/country/43','/country/44','/country/45','/country/46','/country/47','/country/48','/country/49','/country/50','/country/51','/country/52','/country/53','/country/54','/country/55','/country/56','/country/57','/country/58','/country/59','/country/60','/country/61','/country/62','/country/63','/country/64','/country/65','/country/66','/country/67','/country/68','/country/69','/country/70','/country/71','/country/72','/country/73','/country/74','/country/75','/country/76','/country/77','/country/78','/country/79','/country/80','/country/81','/country/82','/country/83','/country/84','/country/85','/country/86','/country/87','/country/88','/country/89','/country/90','/country/91','/country/92','/country/93','/country/94','/country/95','/country/96','/country/97','/country/98','/country/99','/country/100','/country/101','/country/102','/country/103','/country/104','/country/105','/country/106','/country/107','/country/108','/country/109','/country/110','/country/111','/country/112','/country/113','/country/114','/country/115','/country/116','/country/117','/country/118','/country/119','/country/120','/country/121','/country/122','/country/123','/country/124','/country/125','/country/126','/country/127','/country/128','/country/129','/country/130','/country/131','/country/132','/country/133','/country/134','/country/135','/country/136','/country/137','/country/138','/country/139','/country/140','/country/141','/country/142','/country/143','/country/144','/country/145','/country/146','/country/147','/country/148','/country/149','/country/150','/country/151','/country/152','/country/153','/country/154','/country/155','/country/156','/country/157','/country/158','/country/159','/country/160','/country/161','/country/162','/country/163','/country/164','/country/165','/country/166','/country/167','/country/168','/country/169','/country/170','/country/171','/country/172','/country/173','/country/174','/country/175','/country/176','/country/177','/country/178','/country/179','/country/180','/country/181','/country/182','/country/183','/country/184','/country/185','/country/186','/country/187','/country/188','/country/189','/country/190','/country/191','/country/192','/country/193','/country/194','/country/195','/country/196','/country/197','/country/198','/country/199','/country/200','/country/201','/country/202','/country/203','/country/204','/country/205','/country/206','/country/207','/country/208','/country/209','/country/210','/country/211','/country/212','/country/213','/country/214','/country/215','/country/216','/country/217','/country/218','/country/219','/country/220','/country/221','/country/222','/country/223','/country/224','/country/225','/country/226','/country/227','/country/228','/country/229','/country/230','/country/231','/country/232','/country/233','/country/234','/country/235','/country/236','/country/237','/country/238','/country/239','/country/240','/country/241','/country/242','/country/243','/country/244','/country/245','/country/246','/country/247','/country/248','/country/249','/country/250','/country/251','/country/252','/country/253','/country/254','/country/255','/country/256','/country/257','/country/258','/country/259','/country/260','/country/261','/country/262','/country/263','/country/264','/country/265','/country/266','/country/267','/country/268','/country/269','/country/270','/country/271','/country/272','/country/273','/country/274','/country/275','/country/276','/country/277','/country/278','/country/279','/country/280','/country/281','/country/282','/country/283','/country/284','/country/285','/country/286','/country/287','/country/288','/country/289','/country/290','/country/291','/country/292','/country/293','/country/294','/country/295','/country/296','/country/297','/country/298','/country/299','/country/300','/country/301','/country/302','/country/303','/country/304','/country/305','/country/306','/country/307','/country/308','/country/309','/country/310','/country/311','/country/312','/country/313','/country/314','/country/315','/country/316','/country/317','/country/318','/country/319','/country/320','/country/321','/country/322','/country/323','/country/324','/country/325','/country/326','/country/327','/country/328','/country/329','/country/330','/country/331','/country/332','/country/333','/country/334','/country/335','/country/336','/country/337','/country/338','/country/339','/country/340','/country/341','/country/342','/country/343','/country/344','/country/345','/country/346','/country/347','/country/348','/country/349','/country/350','/country/351','/country/352','/country/353','/country/354','/country/355','/country/356','/country/357','/country/358','/country/359','/country/360','/country/361','/country/362','/country/363','/country/364','/country/365','/country/366','/country/367','/country/368','/country/369','/country/370','/country/371','/country/372','/country/373','/country/374','/country/375','/country/376','/country/377','/country/378','/country/379','/country/380','/country/381','/country/382','/country/383','/country/384','/country/385','/country/386','/country/387','/country/388','/country/389','/country/390','/country/391','/country/392','/country/393','/country/394','/country/395','/country/396','/country/397','/country/398','/country/399','/country/400','/country/401','/country/402','/country/403','/country/404','/country/405','/country/406','/country/407','/country/408','/country/409','/country/410','/country/411','/country/412','/country/413','/country/414','/country/415','/country/416','/country/417','/country/418','/country/419','/country/420','/country/421','/country/422','/country/423','/country/424','/country/425','/country/426','/country/427','/country/428','/country/429','/country/430','/country/431','/country/432','/country/433','/country/434','/country/435','/country/436','/country/437','/country/438','/country/439','/country/440','/country/441','/country/442','/country/443','/country/444','/country/445','/country/446','/country/447','/country/448','/country/449','/country/450','/country/451','/country/452','/country/453','/country/454','/country/455','/country/456','/country/457','/country/458','/country/459','/country/460','/country/461','/country/462','/country/463','/country/464','/country/465','/country/466','/country/467','/country/468','/country/469','/country/470','/country/471','/country/472','/country/473','/country/474','/country/475','/country/476','/country/477','/country/478','/country/479','/country/480','/country/481','/country/482','/country/483','/country/484','/country/485','/country/486','/country/487','/country/488','/country/489','/country/490','/country/491','/country/492','/country/493','/country/494','/country/495','/country/496','/country/497','/country/498','/country/499','/country/500','/country/501','/country/502','/country/503','/country/504','/country/505','/country/506','/country/507','/country/508','/country/509','/country/510','/country/511','/country/512','/country/513','/country/514','/country/515','/country/516','/country/517','/country/518','/country/519','/country/520','/country/521','/country/522','/country/523','/country/524','/country/525','/country/526','/country/527','/country/528','/country/529','/country/530','/country/531','/country/532','/country/533','/country/534','/country/535','/country/536','/country/537','/country/538','/country/539','/country/540','/country/541','/country/542','/country/543','/country/544','/country/545','/country/546','/country/547','/country/548','/country/549','/country/550','/country/551','/country/552','/country/553','/country/554','/country/555','/country/556','/country/557','/country/558','/country/559','/country/560','/country/561','/country/562','/country/563','/country/564','/country/565','/country/566','/country/567','/country/568','/country/569','/country/570','/country/571','/country/572','/country/573','/country/574','/country/575','/country/576','/country/577','/country/578','/country/579','/country/580','/country/581','/country/582','/country/583','/country/584','/country/585','/country/586','/country/587','/country/588','/country/589','/country/590','/country/591','/country/592','/country/593','/country/594','/country/595','/country/596','/country/597','/country/598','/country/599','/country/600','/country/601','/country/602','/country/603','/country/604','/country/605','/country/606','/country/607','/country/608','/country/609','/country/610','/country/611','/country/612','/country/613','/country/614','/country/615','/country/616','/country/617','/country/618','/country/619','/country/620','/country/621','/country/622','/country/623','/country/624','/country/625','/country/626','/country/627','/country/628','/country/629','/country/630','/country/631','/country/632','/country/633','/country/634','/country/635','/country/636','/country/637','/country/638','/country/639','/country/640','/country/641','/country/642','/country/643','/country/644','/country/645','/country/646','/country/647','/country/648','/country/649','/country/650','/country/651','/country/652','/country/653','/country/654','/country/655','/country/656','/country/657','/country/658','/country/659','/country/660','/country/661','/country/662','/country/663','/country/664','/country/665','/country/666','/country/667','/country/668','/country/669','/country/670','/country/671','/country/672','/country/673','/country/674','/country/675','/country/676','/country/677','/country/678','/country/679','/country/680','/country/681','/country/682','/country/683','/country/684','/country/685','/country/686','/country/687','/country/688','/country/689','/country/690','/country/691','/country/692','/country/693','/country/694','/country/695','/country/696','/country/697','/country/698','/country/699','/country/700','/country/701','/country/702','/country/703','/country/704','/country/705','/country/706','/country/707','/country/708','/country/709','/country/710','/country/711','/country/712','/country/713','/country/714','/country/715','/country/716','/country/717','/country/718','/country/719','/country/720','/country/721','/country/722','/country/723','/country/724','/country/725','/country/726','/country/727','/country/728','/country/729','/country/730','/country/731','/country/732','/country/733','/country/734','/country/735','/country/736','/country/737','/country/738','/country/739','/country/740','/country/741','/country/742','/country/743','/country/744','/country/745','/country/746','/country/747','/country/748','/country/749','/country/750','/country/751','/country/752','/country/753','/country/754','/country/755','/country/756','/country/757','/country/758','/country/759','/country/760','/country/761','/country/762','/country/763','/country/764','/country/765','/country/766','/country/767','/country/768','/country/769','/country/770','/country/771','/country/772','/country/773','/country/774','/country/775','/country/776','/country/777','/country/778','/country/779','/country/780','/country/781','/country/782','/country/783','/country/784','/country/785','/country/786','/country/787','/country/788','/country/789','/country/790','/country/791','/country/792','/country/793','/country/794','/country/795','/country/796','/country/797','/country/798','/country/799','/country/800','/country/801','/country/802','/country/803','/country/804','/country/805','/country/806','/country/807','/country/808','/country/809','/country/810','/country/811','/country/812','/country/813','/country/814','/country/815','/country/816','/country/817','/country/818','/country/819','/country/820','/country/821','/country/822','/country/823','/country/824','/country/825','/country/826','/country/827','/country/828','/country/829','/country/830','/country/831','/country/832','/country/833','/country/834','/country/835','/country/836','/country/837','/country/838','/country/839','/country/840','/country/841','/country/842','/country/843','/country/844','/country/845','/country/846','/country/847','/country/848','/country/849','/country/850','/country/851','/country/852','/country/853','/country/854','/country/855','/country/856','/country/857','/country/858','/country/859','/country/860','/country/861','/country/862','/country/863','/country/864','/country/865','/country/866','/country/867','/country/868','/country/869','/country/870','/country/871','/country/872','/country/873','/country/874','/country/875','/country/876','/country/877','/country/878','/country/879','/country/880','/country/881','/country/882','/country/883','/country/884','/country/885','/country/886','/country/887','/country/888','/country/889','/country/890','/country/891','/country/892','/country/893','/country/894','/country/895','/country/896','/country/897','/country/898','/country/899','country/9999','country/9998','country/9997','country/9996','country/9995','country/9994','country/9993','country/9992','country/9991',
      '/indicator/1','/indicator/2','/indicator/3','/indicator/4','/indicator/5','/indicator/6','/indicator/7','/indicator/8','/indicator/9','/indicator/10','/indicator/11','/indicator/12','/indicator/13','/indicator/14','/indicator/15','/indicator/16','/indicator/17','/indicator/18','/indicator/19','/indicator/20','/indicator/21','/indicator/22','/indicator/23','/indicator/24','/indicator/25','/indicator/26','/indicator/27','/indicator/28','/indicator/29','/indicator/30','/indicator/31','/indicator/32','/indicator/33','/indicator/34','/indicator/35','/indicator/36','/indicator/37','/indicator/38','/indicator/39','/indicator/40','/indicator/41','/indicator/42','/indicator/43','/indicator/44','/indicator/45','/indicator/46','/indicator/47','/indicator/48','/indicator/49','/indicator/50','/indicator/51','/indicator/52','/indicator/53','/indicator/54','/indicator/55','/indicator/56','/indicator/57','/indicator/58','/indicator/59','/indicator/60','/indicator/61','/indicator/62','/indicator/63','/indicator/64','/indicator/65','/indicator/66','/indicator/67','/indicator/68','/indicator/69','/indicator/70','/indicator/71','/indicator/72','/indicator/73','/indicator/74','/indicator/75','/indicator/76','/indicator/77','/indicator/78','/indicator/79','/indicator/80','/indicator/81','/indicator/82','/indicator/83','/indicator/84','/indicator/85','/indicator/86','/indicator/87','/indicator/88','/indicator/89','/indicator/90','/indicator/91','/indicator/92','/indicator/93','/indicator/94','/indicator/95','/indicator/96','/indicator/97','/indicator/98','/indicator/99','/indicator/100','/indicator/101','/indicator/102','/indicator/103','/indicator/104','/indicator/105','/indicator/106','/indicator/107','/indicator/108','/indicator/109','/indicator/110','/indicator/111','/indicator/112','/indicator/113','/indicator/114','/indicator/115','/indicator/116','/indicator/117','/indicator/118','/indicator/119','/indicator/120','/indicator/121','/indicator/122','/indicator/123','/indicator/124','/indicator/125','/indicator/126','/indicator/127','/indicator/128','/indicator/129','/indicator/130','/indicator/131','/indicator/132','/indicator/133','/indicator/134','/indicator/135','/indicator/136','/indicator/137','/indicator/138','/indicator/139','/indicator/140','/indicator/141','/indicator/142','/indicator/143','/indicator/144','/indicator/145','/indicator/146','/indicator/147','/indicator/148','/indicator/149','/indicator/150','/indicator/151','/indicator/152','/indicator/153','/indicator/154','/indicator/155','/indicator/156','/indicator/157','/indicator/158','/indicator/159','/indicator/160','/indicator/161','/indicator/162','/indicator/163','/indicator/164','/indicator/165','/indicator/166','/indicator/167','/indicator/168','/indicator/169','/indicator/170','/indicator/171','/indicator/172','/indicator/173','/indicator/174','/indicator/175','/indicator/176','/indicator/177','/indicator/178','/indicator/179','/indicator/180','/indicator/181','/indicator/182','/indicator/183','/indicator/184','/indicator/185','/indicator/186','/indicator/187','/indicator/188','/indicator/189','/indicator/190','/indicator/191','/indicator/192','/indicator/193','/indicator/194','/indicator/195','/indicator/196','/indicator/197','/indicator/198','/indicator/199','/indicator/200','/indicator/201','/indicator/202','/indicator/203','/indicator/204','/indicator/205','/indicator/206','/indicator/207','/indicator/208','/indicator/209','/indicator/210','/indicator/211','/indicator/212','/indicator/213','/indicator/214','/indicator/215','/indicator/216','/indicator/217','/indicator/218','/indicator/219','/indicator/220','/indicator/221','/indicator/222','/indicator/223','/indicator/224','/indicator/225','/indicator/226','/indicator/227','/indicator/228','/indicator/229','/indicator/230','/indicator/231','/indicator/232','/indicator/233','/indicator/234','/indicator/235','/indicator/236','/indicator/237','/indicator/238','/indicator/239','/indicator/240','/indicator/241','/indicator/242','/indicator/243','/indicator/244','/indicator/245','/indicator/246','/indicator/247','/indicator/248','/indicator/249'
    ]
  },
  env: {
    title: process.env.APP_TITLE || 'NUxtjs template',
    CONFIG_APP: {
      api_url: "https://ocde.wedodata.fr/paris21_api/",
      datafile_url: "https://ocde.wedodata.fr/paris21_admin/API/file.csv",
    }
  },
  mode: 'spa',
  /* router: {
    middleware: 'boot'
  } */
  /*,
  router: {
    base : '/compass_nuxt/dist/'
  }*/
  router : {
    //base : '/paris21/'
  }
}
