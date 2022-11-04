<?php

	if($_POST) {
		function validateCaptcha () {
			$secretKey = "6LfmNKMZAAAAAM50bkrw3wtl_2C6wZJI987Tso3Z";
			echo ($_POST['g-recaptcha-response']);
			echo "</br>";
			echo ($secretKey);
			echo "</br>";
			if(isset($_POST['g-recaptcha-response']) && !empty($_POST['g-recaptcha-response'])) {
				$verifyResponse = file_get_contents('https://www.google.com/recaptcha/api/siteverify?secret='.$secretKey.'&response='.$_POST['g-recaptcha-response']);
				$responseData = json_decode($verifyResponse);
				echo $verifyResponse;
				echo "</br>";
				if($responseData->success) {
					$succMsg = 'Your contact request have submitted successfully.';
					echo $succMsg;
				}
				else {
					$errMsg = 'Robot verification failed, please try again.';
					echo $errMsg;
				}
			}
			$result = json_decode($response);
			echo($result);
			return $result;
		}
		validateCaptcha ();
	}

?>
