<?php
if($_GET[act]=="paging"){
	Pagination();
}

#start of function pagination
function Pagination(){
	global $smarty;
	
	$per_page = 5; //per page 
			
	if(isset($_GET['page'])){
		if($_GET['page'] == ""){
			$page=1;
		}else{
		$page=$_GET['page'];
     	}
	 }
	$permalink = $_GET[data];
	
	if(trim($permalink)!="") {
		$start = ($page-1)*$per_page;
		$getBox = mysql_query("your query");
			$box = mysql_fetch_array($getBox);
		$getExperiences = mysql_query("your_query LIMIT $start, $per_page");
			if(mysql_num_rows($getExperiences) > 0) {
				$experiences = mysql2Array($getExperiences);
				
				init_smarty("","",$box[title]);
				
				//displayDesc2
				
				$smarty->assign('box', $box);
				$smarty->assign('displayDesc2', $permalink);
				$smarty->assign('experiences', $experiences);
				//$smarty->assign("count", $count);
				$smarty->assign("page", $page);
				$smarty->display("originalo/ajax-boxView.html");
			}else{
				echo "Error";
			
			}
			
		}
}

?>
