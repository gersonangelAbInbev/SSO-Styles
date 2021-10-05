var styleSSO = `
.sso-bg-neutral-100 {
	background-color: #FBE84E !important;
	border-bottom-color: #FBE84E !important;
}

sso-app > div > div > app-sign-in > div > app-header,
sso-app > div > div > app-result > div,
sso-app > div > div > app-result > div > div.line.ng-star-inserted,
#mat-dialog-2 > sso-dialog > header,
#mat-dialog-3 > sso-dialog > header {
	background-color: #FBE84E !important;
}

img.sso-image.sso-mx-auto {
	max-height: 60px !important;
	max-width: 185px !important;
}


.sso-text-primary-500,
sso-app > div > div > app-phone-verification > div > div.info-text > p,
sso-app > div > div > app-sms-verification > div > div.sso-mx-12 > p,
sso-app > div > div > app-sms-verification > div > form > div > p,
sso-app > div > div > app-result > div > div.sso-container > div > h1,
sso-app > div > div > app-result > div > div.sso-container > div > p,
sso-app > div > div > app-recover-password > div > div > h1,
sso-app > div > div > app-accept-terms > div > div > p,
sso-app > div > div > app-accept-terms > div > div > form > div.sso-text-left.sso-mb-4 > label > p,
#campaign-terms > p,
sso-app > div > div > app-sign-up > div > div > form > div > label > p,
#tapit-terms,
sso-app > div > div > app-recover-password > div > div > p.sso-text-center {
	color: #FFFFFF !important;
}

.uil-times-circle::before,
.uil-arrow-left::before {
	color: #000000 !important;
}



sso-app > div > div > app-phone-verification > div > div.info-text > p > span {
	color: #ffffff !important;
	text-decoration: underline !important;
}

sso-app > div > div > app-sign-in > div > div.sso-text-center > div {
	font-size: 1rem !important;
}

app-sign-in > div > .sso-text-center,
.sso-container,
sso-app > div > div > app-phone-verification > div,
sso-app > div > div > app-sms-verification > div {
	background-color: #163ea0 !important;
}



.sso-text-base {
	font-size: 0.9rem !important;
	padding-top: 2.5rem !important;
	padding-bottom: 0.5rem !important;
}

.sso-secondary-button,
sso-app > div > div > app-phone-verification > div > form > div > ngx-intl-tel-input,
#gender {
	background-color: #ffffff !important;
}

app-sign-in > div > div.sso-container > div > p,
sso-app > div > div > app-phone-verification > div > p {
	background-color: #163ea0 !important;
	color: #ffffff !important;
}

app-sign-in > div > div.sso-container > div > span {
	border-bottom-color: #ffffff !important;
}

.sso-label {
	color: #ffffff !important;
	font-weight: 400!important;
}

sso-app > div > div > app-sign-in > div > div.sso-container > form > button,
sso-app > div > div > app-sign-up > div > div.sso-container > form > button,
sso-app > div > div > app-recover-password > div > div.sso-container > form > button,
sso-app > div > div > app-recover-password > div > div.sso-container > button,
sso-app > div > div > app-phone-verification > div > form > div.button-phone > button,
sso-app > div > div > app-sms-verification > div > form > div.button-content > button,
sso-app > div > div > app-result > div > div > div.sso-text-center > div > button,
sso-app > div > div > app-accept-terms > div > div > form > button,
#mat-dialog-2 > sso-dialog > section > div > button,
#mat-dialog-3 > sso-dialog > section > div > button {
	background-color: #FFE800 !important;
	border-radius: 14px !important;
	color: #163EA0 !important;
}

sso-app > div > div > app-sign-in > div > div.sso-container > form > button:hover,
sso-app > div > div > app-sign-up > div > div.sso-container > form > button:hover,
sso-app > div > div > app-recover-password > div > div.sso-container > form > button:hover,
sso-app > div > div > app-recover-password > div > div.sso-container > button:hover,
sso-app > div > div > app-phone-verification > div > form > div.button-phone > button:hover,
sso-app > div > div > app-sms-verification > div > form > div.button-content > button:hover,
sso-app > div > div > app-result > div > div > div.sso-text-center > div > button:hover {
	color: #163EA0 !important;
	background-color: #ffffff !important;
}

sso-app > div > div > app-sign-in > div > div.sso-container > form > button:active,
sso-app > div > div > app-sign-up > div > div.sso-container > form > button:active,
sso-app > div > div > app-recover-password > div > div.sso-container > form > button:active,
sso-app > div > div > app-recover-password > div > div.sso-container > button:active,
sso-app > div > div > app-phone-verification > div > form > div.button-phone > button:active,
sso-app > div > div > app-sms-verification > div > form > div.button-content > button:active,
sso-app > div > div > app-result > div > div > div.sso-text-center > div > button:active {
	background-color: #FFE800  !important;
	color: #000000 !important;
}

sso-app > div > div > app-sign-in > div > div.sso-container > form > button:focus,
sso-app > div > div > app-sign-up > div > div.sso-container > form > button:focus,
sso-app > div > div > app-recover-password > div > div.sso-container > form > button:focus,
sso-app > div > div > app-recover-password > div > div.sso-container > button:focus,
sso-app > div > div > app-phone-verification > div > form > div.button-phone > button:focus,
sso-app > div > div > app-sms-verification > div > form > div.button-content > button:focus,
sso-app > div > div > app-result > div > div > div.sso-text-center > div > button:focus {
	background-color: rgba(106, 106, 106, 0.5) !important;
}

sso-app > div > div > img.sso-w-16.sso-absolute.sso-left-0.sso-bottom-0 {
	box-sizing: border-box !important;
	display: block !important;
	width: 65px !important;
	height: 75px !important;
	padding-left: 65px !important;
	background-image: url(img/bubble_3-yellow.png) !important;
	background-repeat: no-repeat;
    background-size: contain;
    background-position-x: left;
}

sso-app > div > div > img.sso-w-16.sso-absolute.sso-right-0.sso-bottom-0 {
	box-sizing: border-box !important;
	display: block !important;
	width: 99px !important;
	height: 54px !important;
	padding-left: 99px !important;
	background-image: url(img/bubble_4-yellow.png) !important;
    background-repeat: no-repeat;
    background-size: contain;
    background-position-x: right;
}

sso-app > div > div > app-sign-up > div > div > h1 {
	visibility: hidden !important;
}

sso-app > div > div > app-sign-up > div > div > h1::before {
	visibility: visible !important;
	margin-bottom: -2rem !important;
	color: #ffffff !important;
	content: "¡Bienvenido BeerLover!👋" !important;
	font-size: 20px !important;
}

sso-app > div > div > app-sign-up > div > div > h1::after {
	visibility: visible !important;
	margin-bottom: 3rem !important;
	color: #ffffff !important;
	content: "Tu registro aplica para todas nuestras marcas:" !important;
	font-size: 17px !important;
	display: block !important;
}

sso-app > div > div > app-sign-up > div > div > p {
	visibility: hidden !important;
}

sso-app > div > div > app-sign-up > div > div > p::after {
	margin-top: -30px !important;
	content: "Llena los campos y acepta Términos & Condiciones para crear tu cuenta. Los campos con asterisco * son obligatorios." !important;
	visibility: visible !important;
	color: #e5e5e5 !important;
	float: left !important;
	font-size: 11px !important;
}

sso-app > div > div > app-sign-up > div > div > p::before {
	margin-top: -50px !important;
	content: "" !important;
	visibility: visible !important;
	color: #e5e5e5 !important;
	float: left !important;
	background-image: url(img/logos-bavaria.png) !important;
	display: block !important;
	width: 100% !important;
	height: 55px !important;
	background-repeat: no-repeat !important;
	background-size: contain !important;
}

sso-app > div > div > app-sign-up > div > div > form > div:nth-child(1) {
	margin-top: -45px !important;
}

sso-app .sso-checkbox input:checked~.sso-checkmark {
	background-color: #FFE800  !important;
	border-color: #FFE800  !important;
}

@media screen and (min-width: 680px) {
	sso-app > div > div > app-phone-verification > div > div.tapit-logo-container.sso-mx-auto > img,
	sso-app > div > div > app-sms-verification > div > div.tapit-logo-container.sso-mx-auto > img {
		box-sizing: border-box !important;
		display: block !important;
		padding-left: 143.92px !important;
		background: url(img/tapit-white1.png) !important;
	}
}

@media screen and (max-width: 679px) {
	sso-app > div > div > app-phone-verification > div > div.tapit-logo-container.sso-mx-auto > img,
	sso-app > div > div > app-sms-verification > div > div.tapit-logo-container.sso-mx-auto > img {
		box-sizing: border-box !important;
		display: block !important;
		padding-left: 95.92px !important;
		background: url(img/tapit-white2.png) !important;
	}
}

sso-app > div > div > app-phone-verification > div > div.info-text.sso-mt-5 {
	margin-left: 4rem !important;
}

form.ng-untouched.ng-pristine.ng-invalid {
	margin-top: 5rem !important;
	display: block;
}

form.ng-pristine.ng-invalid.ng-touched,
form.ng-invalid.ng-touched.ng-dirty {
	margin-top: 5rem !important;
}

sso-app > div > div > app-sign-up > div > div > form > div.sso-text-left.sso-mb-4 > label > p {
	font-size: 0px !important;
}

sso-app > div > div > app-sign-up > div > div > form > div.sso-text-left.sso-mb-4 > label > p::before {
	content: 'Deseo recibir ofertas exclusivas y formas de ganar puntos en mi correo y celular de Club Colombia y Tap It.' !important;
	font-size: .875rem !important;
}

.termsLink {
	text-decoration: underline !important;
}

::-webkit-scrollbar {
	width: 10px !important;
}

::-webkit-scrollbar-track {
	background: #163EA0 !important;
}

::-webkit-scrollbar-thumb {
	background: #FFE800 !important;
	border-radius: 10px !important;
}

::-webkit-scrollbar-thumb:hover {
	background: #FFE800 !important;
}

sso-app > div > div > app-accept-terms > div > div > form > button:hover,
#mat-dialog-2 > sso-dialog > section > div > button_hover {
	background-color: #ffffff !important;
	border-radius: 4px !important;
	color: #FFE800  !important;
}

sso-app > div > div > app-accept-terms > div > div > h1 {
	visibility: hidden !important;
}

sso-app > div > div > app-accept-terms > div > div > h1::before {
	margin-top: 12px !important;
	content: "¡Nos alegra tenerte de vuelta! 😃" !important;
	visibility: visible !important;
	color: #ffffff !important;
	float: left !important;
	width: 100% !important;
	text-align: center !important;
}

sso-app > div > div > app-accept-terms > div > div > h1::after {
	visibility: visible !important;
	margin-top: -55px !important;
	color: #ffffff !important;
	content: "Ya te habías registrado con alguna de nuestras marcas:" !important;
	font-size: 17px !important;
	display: block !important;
}

sso-app > div > div > app-accept-terms > div > div > p {
	visibility: hidden !important;
}

sso-app > div > div > app-accept-terms > div > div > p::after {
	margin-top: -30px !important;
	content: "Para participar en esta campaña acepta Términos y Condiciones. Los campos con asterisco * son obligatorios." !important;
	visibility: visible !important;
	color: #e5e5e5 !important;
	float: left !important;
	font-size: 11px !important;
}

sso-app > div > div > app-accept-terms > div > div > p::before {
	content: "" !important;
	visibility: visible !important;
	color: #e5e5e5 !important;
	float: left !important;
	background-image: url(img/logos-bavaria.png) !important;
	display: block !important;
	width: 100% !important;
	height: 55px !important;
	background-repeat: no-repeat !important;
	background-size: contain !important;
	background-position-x: center !important;
}

button.sso-button.button-radius.button-disable.sso-mt-4.sso-mx-12.sso-block.sso-mx-auto.sso-uppercase {
	background: #FBE84E !important;
	color: #163EA0 !important;
}

button.sso-button.sso-secondary-button.sso-mb-4.sso-block.sso-mx-auto.sso-uppercase.sso-text-center.sso-text-xs.ng-star-inserted,
button.sso-button.sso-secondary-button.sso-mb-8.sso-block.sso-mx-auto.sso-uppercase.sso-text-center.sso-text-xs.ng-star-inserted,
.sso-text-center.sso-relative.sso-mb-8 {
	display: none !important;
}

.sso-flex.sso-flex-col.sso-fixed.sso-inset-0 {
	background: #163ea0  !important;
}

.sso-flex.sso-flex-col.sso-fixed.sso-inset-0 > p,
.sso-flex.sso-flex-col.sso-fixed.sso-inset-0 > span {
	color: #FFFFFF  !important;
}

.sso-button.sso-primary-button.sso-mt-10.element-max-width.button-radius {
	background: #FBE84E !important;
    color: #163EA0 !important;
}

span.sso-text-neutral-800,
div.info-text.sso-mt-6 > p.sso-text-base.sso-leading-7.sso-text-center.subtitle > span.sso-font-bold,
div.info-text.sso-mt-6 > p.sso-text-base.sso-leading-10.sso-text-center.sso-font-bold.sso-my-5 {
	color: #FFFFFF !important;

}

.labelSpan,
.spanLabel,
span.sso-text-primary-500.spanLabel {
	color: #163ea0 !important;
}



`;

const AGUILA_TRIVIAS_SSO_CONFIG = {
/* 	origin: 'tapit_aguila_web_triviafutboleliminatorias_202010',
	project: 'tapit_aguila_web_triviafutboleliminatorias_202010', */
	origin: 'web',
	project: 'web',
	showSignUPWithFields: false,
	showLoginFacebookButton: true,
	showContainerBackground: true,
	logoUrl: 'https://cervezaaguila.vteximg.com.br/arquivos/aguilabytapit-logo.png',
	sloganHtml: '<p class=\"sso-text-center sso-text-xs\"> La comunidad de los <span class=\"sso-text-primary-500 spanLabel\">amantes de la cerveza.</span></p>',
	signUpAcceptTermsHtml: '<h1 class=\"sso-text-sm sso-font-bold sso-mb-1 sso-text-left\"> </h1><p class=\"sso-text-sm sso-text-left\"> *Acepto: <a class=\"sso-text-primary-500 termsLink\" href=\"https:\/\/www.bavaria.co\/t%C3%A9rminos-y-condiciones\" target=\"_blank\">Términos y Condiciones de Club Colombia, <\/a><a class=\"sso-text-primary-500 termsLink\" href=\"https:\/\/tapit.com.co\/terms.html\" target=\"_blank\">Términos y Condiciones de Tapit,</a> las <a class=\"sso-text-primary-500 termsLink\" href=\"https:\/\/tapit.com.co\/privacy.html\" target=\"_blank\">Políticas de Privacidad,</a> la <a class=\"sso-text-primary-500 termsLink\" href=\"https:\/\/tapit.com.co\/data-proteccion.html\" target=\"_blank\">Política de protección de datos personales.</a> <br></p>',
	loginFooterHtml: '<p class=\"text-sm text-center\">Al iniciar sesión estás aceptando nuestros <a class=\"text-primary-500\" href=\"https:\/\/www.bavaria.co\/t%C3%A9rminos-y-condiciones\" target=\"_blank\">T\u00E9rminos y Condiciones de Club Colombia,<\/a> <a class=\"text-primary-500\" href=\"https:\/\/tapit.com.co\/terms.html\" target=\"_blank\">Términos y Condiciones de Tapit,</a> las <a class=\"text-primary-500\" href=\"https:\/\/tapit.com.co\/privacy.html\" target=\"_blank\">Políticas de Privacidad,</a> la <a class=\"text-primary-500\" href=\"https:\/\/tapit.com.co\/data-proteccion.html\" target=\"_blank\">Política de protección de datos personales</a> y el envío de ofertas exclusivas a mi correo. </p>',
	showCloseButton: true,
	showContainerBackground: true,
	styles: styleSSO
}
