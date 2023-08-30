
module.exports = {

    sendConfirmationOtp: (OTP) => {
        return (
            // `
            //     <div>
            //         <b>Welcome to Vertuoso</b>
            //         <p>This is your One Time OTP for email verification <b>${OTP}</b>, it will expire after 10 mins.</p>
            //     </div>
            // `
            `
            <!doctype html>
<html>
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
	<title>Vertuoso | Authentication Code</title>
	<meta name="description" content="">
	<link rel="icon" href="../email-templates/images/favicon.png">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet">
	<style>
		@media screen and (max-width: 640px) {
			html { font-size: 62.5% !important; }
			.rt-headingtext span{display: inline !important;}
			.rt-termspolicysection{ padding-top: 3rem !important;}
			.rt-userimagesection{margin-bottom: -3rem;}
			.rt-termspolicycontent li a{ font-size: 1.25rem !important;}
			.rt-termspolicycontent{ 
				width: 40.5rem !important;
				padding: 1.5rem 1rem !important; 
			}
			.rt-termspolicycontent li { padding: 0 1rem !important;}
			.rt-socialsection li a img{
				width: 1.5rem !important;
				height: 1.3rem !important;
				padding: 0.6rem 0 !important;
			}
			.rt-btn {
				font-size: 1.25rem !important;
				min-width: 16.75rem !important;
			}
			.rt-paragraphtext{font-size: 1.5rem !important;}
		}
		@media screen and (max-width: 430px) {
			.rt-emailtemplatesection{ max-width: 40.5rem !important;}
			.rt-termspolicycontent { width: 38.5rem !important; }
		}
		@media screen and (max-width: 400px) {
			.rt-logosocialsection{
				padding: 1.5rem 1.5rem 2rem !important;
			}
			.rt-termspolicycontent { width: 33.5rem !important; }
			.rt-emailtemplatesection{ width: 35.5rem !important; }
		}
	</style>
</head>
<body style="margin: 0; font-family: 'Poppins', Arial, Helvetica, sans-serif;">
	<div style="overflow: hidden; position: relative; background: #ececec;">
		<div class="rt-emailtemplatesection" style="max-width: 42.5rem; margin: 1.875rem auto; background: #fff; overflow: hidden; width: 100%; position: relative;">
			<div style="width: 100%; float: left; position: relative; background-image: linear-gradient(130.66deg,#f6edff 14.87%,#ecf8ff 111.54%); min-height: 19.313rem;">
				<div class="rt-logosocialsection" style="z-index: 2; width: 100%; max-width: 42.5rem; position: relative; float: left; padding: 2rem 2rem 3rem; margin: 0; -moz-box-sizing: border-box; -webkit-box-sizing: border-box; box-sizing: border-box">
					<strong class="rt-logo" style="float: left; width: 12.188rem; height: 2.188rem;">
						<a href="javascript:void(0);" style="display: block;">
							<img src="https://vo-dev-fe.renesistechdemo.com/assets/images/logo.svg" alt="" style="width: 100%; height: 100%; display: block;">
						</a>
					</strong>
					<div style="float: right;">
						<ul class="rt-socialsection" style="display: inline-block; vertical-align: middle; list-style: none; padding: 0; margin: 0; line-height: 12px;">
							<li style="display: inline-block; padding: 0 0.25rem; list-style-type: none;">
								<a href="javascript:void(0);" style="display: block; width: 2.5rem; height: 2.5rem; background: #fff; border-radius: 6.66667px; line-height: 2.5rem;">
									<img src="https://vo-dev-fe.renesistechdemo.com/assets/images/svgs/twitter.svg" alt="" style="width: 1.25rem; height: 1.063rem; display: block; margin: 0 auto; padding: 0.75rem 0;">					
								</a>
							</li>
							<li style="display: inline-block; padding: 0 0.25rem; list-style-type: none;">
								<a href="javascript:void(0);" style="display: block; width: 2.5rem; height: 2.5rem; background: #fff; border-radius: 6.66667px; line-height: 2.5rem;">
									<img src="https://vo-dev-fe.renesistechdemo.com/assets/images/svgs/facebook.svg" alt="" style="width: 1.25rem; height: 1.063rem; display: block; margin: 0 auto; padding: 0.75rem 0;">				
								</a>
							</li>
							<li style="display: inline-block; padding: 0 0.25rem; list-style-type: none;">
								<a href="javascript:void(0);" style="display: block; width: 2.5rem; height: 2.5rem; background: #fff; border-radius: 6.66667px; line-height: 2.5rem;">
									<img src="https://vo-dev-fe.renesistechdemo.com/assets/images/svgs/telegram.svg" alt="" style="width: 1.25rem; height: 1.063rem; display: block; margin: 0 auto; padding: 0.75rem 0;">						
								</a>
							</li>
							<li style="display: inline-block; padding: 0 0.25rem; list-style-type: none;">
								<a href="javascript:void(0);" style="display: block; width: 2.5rem; height: 2.5rem; background: #fff; border-radius: 6.66667px; line-height: 2.5rem;">
									<img src="https://vo-dev-fe.renesistechdemo.com/assets/images/svgs/youtube.svg" alt="" style="width: 1.25rem; height: 1.063rem; display: block; margin: 0 auto; padding: 0.75rem 0;">					
								</a>
							</li>
						</ul>
					</div>
				</div>
				<div class="rt-headingcontent" style="width: 100%; float: left; text-align: center; padding: 3rem 0;">
					<h1 class="rt-headingtext" style="margin: 0; font-size: 2.5rem; line-height: 1.3; font-weight: 700; color: #0a0c17; text-align: center;">Authentication Code</h1>
				</div>
			</div>
			<div class="rt-templatecontent" style="width: 100%; float: left; padding: 2rem; text-align: center; -moz-box-sizing: border-box; -webkit-box-sizing: border-box; box-sizing: border-box;">
				<div style="width: 100%; float: left; text-align: left;">
					<p class="rt-paragraphtext" style="margin: 0; font-size: 1.25rem; font-weight: 400; line-height: 1.5; font-weight: 600; color: #444;">Hi <span style="font-weight: 600;">,</span></p>
					<p class="rt-paragraphtext" style="margin: 0; font-size: 1.25rem; font-weight: 400; line-height: 1.5; color: #444; padding-top: 1.875rem;">To finish signing in, please enter below verification code while signing in. This ensures that we have the right email in case we need to contact you.</p>
					<p class="rt-paragraphtext" style="margin: 0; font-size: 1.25rem; font-weight: 400; line-height: 1.5; color: #444; padding-top: 1.875rem;">
						Thanks,
						<span style="display: block; font-weight: 600;">Vertuoso Team</span>
					</p>
				</div>
				<div class="rt-sendotpcode" style="width: 100%; float: left; text-align: center; margin-top: 48px;">
					<ul style="margin: 0; padding: 0; display: inline-block; vertical-align: middle; list-style: none; padding: 2rem 0;">
                    ${OTP?.toString()?.replaceAll(",","")?.split("").map((it)=>{
                        return `<li style="display: inline-block; padding: 0 0.5rem;"><p style="width: 4.5rem; height: 4.5rem; line-height: 4.5rem; background: #f6f6f6; box-shadow: inset 2px 2px 4px rgba(0, 0, 0, 0.12); border-radius: 10px; margin: 0; font-size: 18px; font-weight: 500; color: #000;">${it}</p></li>`
                    }).join("")}
					</ul>
				</div>
			</div>
			<div class="rt-termspolicysection" style="width: 100%; float: left; padding-top: 3rem;">
				<ul class="rt-termspolicycontent" style="display: inline-block; vertical-align: middle; list-style: none; padding: 1.5rem 2rem; margin: 0; text-align: center; width: 38.5rem; border-top: 0.2px solid #afafaf; border-bottom: 0.2px solid #afafaf;">
					<li style="display: inline-block; padding: 0 1.563rem; list-style-type: none; border-right: 1px solid #808080;">
						<a href="javascript:void(0);" style="display: block; font-size: 1rem; color: #0a0c17; font-weight: 400;">Unsubscribe</a>
					</li>
					<li style="display: inline-block; padding: 0 1.563rem; list-style-type: none; border-right: 1px solid #808080;">
						<a href="javascript:void(0);" style="display: block; font-size: 1rem; color: #0a0c17; font-weight: 400;">Terms of Use</a>
					</li>
					<li style="display: inline-block; padding: 0 1.563rem; list-style-type: none; border-right: 1px solid #808080;">
						<a href="javascript:void(0);" style="display: block; font-size: 1rem; color: #0a0c17; font-weight: 400;">Privacy Policy</a>
					</li>
					<li style="display: inline-block; padding: 0 1.563rem; list-style-type: none;">
						<a href="javascript:void(0);" style="display: block; font-size: 1rem; color: #0a0c17; font-weight: 400;">Contact Us</a>
					</li>
				</ul>
			</div>
			<div class="rt-footercontent" style="width: 100%; float: left; margin: 0; text-align: center; padding: 3rem 0;">
				<strong style="width: 134px; height: 24px; display: block; margin: 0 auto;">
					<a href="javascript:void(0);" style="display: block;">
						<img src="https://vo-dev-fe.renesistechdemo.com/assets/images/logo.svg" alt="" style="width: 100%; height: 100%; display: block;">
					</a>
				</strong>
				<p style="margin: 0; font-size: 1.25rem; line-height: 1.5; color:#0a0c17; font-weight: 400; padding-top: 16px;">${new Date()?.getFullYear()} Vertuoso, Inc. All Rights reserved</p>
			</div>
		</div>
	</div>
</body>
</html>

            `
 
        )
    },

}