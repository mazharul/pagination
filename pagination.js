(function($){
	var globalCurPage = 1;
	$.fn.paginate = function(options){
		
		// default configuration properties
		var defaults = {	
			urlToFetchdata: "/index.php?component=cart&load=view&act=paging&data='testdata'&page=",
			totalPage:10
			
		}; 
		
	var options = $.extend(defaults, options); 	
	
	var divToShow = $(this);

	function buttonCheck(){
		var curPage = $(".currentPage").val();
		
		//added by Farhan
		globalCurPage = curPage;
		//end of added by Farhan
		
		var curPageNo = Number(curPage);
		var totalPage = options.totalPage;

		if(curPage == totalPage){
			$("#next").attr("class","disabled");
		}else if (curPage > totalPage){
			$("#next").attr("class","disabled");

		}else{
				$("#next").attr("class","paginationDiv");
		}

		if (curPageNo <= 1){
			$("#prev").attr("class","disabled");

		}else if(curPageNo>1){
			$("#prev").attr("class","paginationDiv");

		}

	}




	//Display Loading Image
	function Display_Load()
	{
	    $("#loading").fadeIn(300,0);
		//$("#loading").html("<img src='/themes/satoo/images/ajax-loader1.gif' />");
	}
	//Hide Loading Image
	function Hide_Load()
		{
			$("#loading").fadeOut('fast');
		};


   //Default Starting Page Results

	$("#pagination li:first").css({'color' : '#000'}).css({'border' : 'none'});

	Display_Load();


	$(this).load(options.urlToFetchdata+"&page=1", Hide_Load(), function(data){
		if(data == "Error"){
			window.location.replace("/index.php");
		}
	});
	$("#page_1").addClass("paginationPageDisabled");



	//Pagination Click
	
	$("#pagination li").click(function(){

		//buttonCheck();
		Display_Load();
				//CSS Styles
		$("#pagination li")
		.css({'border' : 'none'})
		.css({'color' : '#8A61AD'});


		$(this)
		.css({'color' : '#000'})
		.css({'border' : 'none'});


		//Loading Data
		var cur = $(".currentPage").val();
	  var pageNum = Number(cur) ;
	  	var thePageNum = this.id;
	  	thePageNum = thePageNum.replace("page_", "")
		//var pageNum = this.id;
		var pageNum = Number(thePageNum);
		  $(".currentPage").val(pageNum);
		  buttonCheck();
		 $(divToShow).load(options.urlToFetchdata +"&page="+ pageNum, Hide_Load());
		 $(".paginationLiClass").removeClass("paginationPageDisabled");
		 var currentID = "#page_"+pageNum;
		 $(""+currentID+"").addClass("paginationPageDisabled");
	});


$("#next").click(function(){
		//buttonCheck();
	  Display_Load();
	  var cur = $(".currentPage").val();
	  if($("#next").attr("class") != "disabled"){
	  var pageNum = Number(cur) + 1;
	  $(".currentPage").val(pageNum);
	  buttonCheck();
	   $(divToShow).load(options.urlToFetchdata +"&page="+ pageNum, Hide_Load());
		 $(".paginationLiClass").removeClass("paginationPageDisabled");
		 var currentID = "#page_"+pageNum;
		 $(""+currentID+"").addClass("paginationPageDisabled");

	 //css properties
	  	  $("#pagination li")
		.css({'border' : 'none'})
		.css({'color' : '#8A61AD'});

		var currPageId='#page_'+pageNum;
		$(""+currPageId+"")
		.css({'color' : '#000'})
		.css({'border' : 'none'});

}
	});


$("#prev").click(function(){
		//buttonCheck();
	  Display_Load();
	  var cur = $(".currentPage").val();
	  if($("#prev").attr("class") != "disabled"){
	  var pageNum = Number(cur) - 1;
	  $(".currentPage").val(pageNum);
	   buttonCheck();
	  $(divToShow).load(options.urlToFetchdata +"&page="+ pageNum, Hide_Load());
		 $(".paginationLiClass").removeClass("paginationPageDisabled");
		 var currentID = "#page_"+pageNum;
		 $(""+currentID+"").addClass("paginationPageDisabled");

	  	  //css properties
	  	  $("#pagination li")
		.css({'border' : 'none'})
		.css({'color' : '#8A61AD'});


		var currPageId='#page_'+pageNum;
		$(""+currPageId+"")
		.css({'color' : '#000'})
		.css({'border' : 'none'});

	}
	});
	
 }; //End of object paginate
 
 $.fn.showCurrentPage = function() {
 	return globalCurPage;
 };

})(jQuery);