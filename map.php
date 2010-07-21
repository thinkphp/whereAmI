<?php

sleep(2);

if(isset($_GET['latitude']) && isset($_GET['longitude']) && isset($_GET['maptype'])) {

         $lat = $_GET['latitude'];

         $lon = $_GET['longitude'];

         $maptype = $_GET['maptype'];

         $src = 'http://maps.google.com/maps/api/staticmap?center='.$lat.','.$lon.'&sensor=false&size=350x300&maptype='.$maptype.'&key=ABQIAAAAijZqBZcz-rowoXZC1tt9iRT2yXp_ZAY8_ufC3CFXhHIE1NvwkxQQBCaF1R_k1GBJV5uDLhAKaTePyQ&markers=color:blue|label:I|'.$lat.','.$lon.'&visible='.$lat.','.$lon;

         echo'placeonmap({"src":"'.addslashes($src).'"})';

}//end if

?>