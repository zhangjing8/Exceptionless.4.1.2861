/*
 * @Description: 
 * @Author: zhangjing
 * @Date: 2020-12-19 00:28:57
 * @LastEditors: zhangjing
 */
(function () {
    'use strict';
    angular.module('app.config', []).constant('BASE_URL', 'https://api.exceptionless.io' || window.location.origin).constant('EXCEPTIONLESS_API_KEY', 'S1rqid4LDQSaJY9fbSv4HCG0ku6MGihfuVnqNUEH').constant('EXCEPTIONLESS_SERVER_URL', 'https://collector.exceptionless.io').constant('FACEBOOK_APPID', '395178683904310').constant('GITHUB_APPID', '7ef1dd5bfbc4ccf7f5ef').constant('GOOGLE_APPID', '809763155066-enkkdmt4ierc33q9cft9nf5d5c02h30q.apps.googleusercontent.com').constant('INTERCOM_APPID', '6c0d76e0bec950052459f5cb4b727a949aeabbe1').constant('LIVE_APPID', '000000004C137E8B').constant('SLACK_APPID', '34500115540.177239122322').constant('STRIPE_PUBLISHABLE_KEY', 'pk_live_41ee8462kw6hVF0k2GqHpJLN1urWJ22DeewGYw03vDtaMwehPzifMM0jMYZAClyHoCRQWBzQvHYGaqVeDf5GjqZJl00X7ThmsiY').constant('SYSTEM_NOTIFICATION_MESSAGE', '').constant('USE_HTML5_MODE', true).constant('USE_SSL', true).constant('ENABLE_ACCOUNT_CREATION', true);
}());