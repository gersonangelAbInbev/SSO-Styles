var styleSSO = `
.sso-bg-neutral-100 {
	background-color: #938353 !important;
	border-bottom-color: #938353 !important;
}

sso-app > div > div > app-sign-in > div > app-header,
sso-app > div > div > app-result > div,
sso-app > div > div > app-result > div > div.line.ng-star-inserted,
#mat-dialog-2 > sso-dialog > header,
#mat-dialog-3 > sso-dialog > header {
	background-color: #938353 !important;
}

.uil-times-circle::before,
.uil-arrow-left::before,
.sso-text-primary-500,
.labelSpan,
.spanLabel,
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
	color: #ffffff !important;
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
	background-color: #1b1b1b !important;
}

.sso-container {
	background-color: #1b1b1b !important;
	background-color: #1b1b1b !important;
	background-image: url(img/clubco-print.png) !important;
	background-repeat: no-repeat !important;
	background-position-x: center !important;
	background-position-y: bottom !important;
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
	background-color: #1b1b1b !important;
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
	background-color: #938353 !important;
	border-radius: 4px !important;
	color: #ffffff !important;
}

sso-app > div > div > app-sign-in > div > div.sso-container > form > button:hover,
sso-app > div > div > app-sign-up > div > div.sso-container > form > button:hover,
sso-app > div > div > app-recover-password > div > div.sso-container > form > button:hover,
sso-app > div > div > app-recover-password > div > div.sso-container > button:hover,
sso-app > div > div > app-phone-verification > div > form > div.button-phone > button:hover,
sso-app > div > div > app-sms-verification > div > form > div.button-content > button:hover,
sso-app > div > div > app-result > div > div > div.sso-text-center > div > button:hover {
	color: #938353 !important;
	background-color: #ffffff !important;
}

sso-app > div > div > app-sign-in > div > div.sso-container > form > button:active,
sso-app > div > div > app-sign-up > div > div.sso-container > form > button:active,
sso-app > div > div > app-recover-password > div > div.sso-container > form > button:active,
sso-app > div > div > app-recover-password > div > div.sso-container > button:active,
sso-app > div > div > app-phone-verification > div > form > div.button-phone > button:active,
sso-app > div > div > app-sms-verification > div > form > div.button-content > button:active,
sso-app > div > div > app-result > div > div > div.sso-text-center > div > button:active {
	background-color: #938353 !important;
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
	background: url(img/bubble_left.png) !important;
}

sso-app > div > div > img.sso-w-16.sso-absolute.sso-right-0.sso-bottom-0 {
	box-sizing: border-box !important;
	display: block !important;
	width: 99px !important;
	height: 54px !important;
	padding-left: 99px !important;
	background: url(img/bubble_right.png) !important;
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
	background-color: #938353 !important;
	border-color: #938353 !important;
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
	background: #1b1b1b !important;
}

::-webkit-scrollbar-thumb {
	background: #877B52 !important;
	border-radius: 10px !important;
}

::-webkit-scrollbar-thumb:hover {
	background: #877B52 !important;
}

sso-app > div > div > app-accept-terms > div > div > form > button:hover,
#mat-dialog-2 > sso-dialog > section > div > button_hover {
	background-color: #ffffff !important;
	border-radius: 4px !important;
	color: #938353 !important;
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
`;

const CLUB_SSO_CONFIG = {
	origin: 'web',
	project: 'web',
	showSignUPWithFields: false,
	showLoginFacebookButton: true,
	showContainerBackground: true,
	logoUrl: 'img/logo-club-by-tapit.png',
	sloganHtml: '<p class=\"sso-text-center sso-text-xs\"> La comunidad de los <span class=\"sso-text-primary-500 spanLabel\">amantes de la cerveza.</span> <br> Tu registro aplica en todas nuestras marcas de Bavaria</p>',
	signUpAcceptTermsHtml: '<h1 class=\"sso-text-sm sso-font-bold sso-mb-1 sso-text-left\"> </h1><p class=\"sso-text-sm sso-text-left\"> *Acepto: <a class=\"sso-text-primary-500 termsLink\" href=\"https:\/\/www.bavaria.co\/t%C3%A9rminos-y-condiciones\" target=\"_blank\">Términos y Condiciones de Club Colombia, <\/a><a class=\"sso-text-primary-500 termsLink\" href=\"https:\/\/tapit.com.co\/terms.html\" target=\"_blank\">Términos y Condiciones de Tapit,</a> las <a class=\"sso-text-primary-500 termsLink\" href=\"https:\/\/tapit.com.co\/privacy.html\" target=\"_blank\">Políticas de Privacidad,</a> la <a class=\"sso-text-primary-500 termsLink\" href=\"https:\/\/tapit.com.co\/data-proteccion.html\" target=\"_blank\">Política de protección de datos personales.</a> <br></p>',
	loginFooterHtml: '<p class=\"text-sm text-center\">Al iniciar sesión estás aceptando nuestros <a class=\"text-primary-500\" href=\"https:\/\/www.bavaria.co\/t%C3%A9rminos-y-condiciones\" target=\"_blank\">T\u00E9rminos y Condiciones de Club Colombia,<\/a> <a class=\"text-primary-500\" href=\"https:\/\/tapit.com.co\/terms.html\" target=\"_blank\">Términos y Condiciones de Tapit,</a> las <a class=\"text-primary-500\" href=\"https:\/\/tapit.com.co\/privacy.html\" target=\"_blank\">Políticas de Privacidad,</a> la <a class=\"text-primary-500\" href=\"https:\/\/tapit.com.co\/data-proteccion.html\" target=\"_blank\">Política de protección de datos personales</a> y el envío de ofertas exclusivas a mi correo. </p>',
	showCloseButton: true,
	showContainerBackground: true,
	styles: styleSSO
}
