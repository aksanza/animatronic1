var PageComingSoon = function () {

    return {
        
        //Coming Soon
        initPageComingSoon: function () {
			var tomorrow = new Date();
			tomorrow.setDate(tomorrow.getDate() + 2);
			//var newYear = new Date(); 
			//newYear = new Date(newYear.getFullYear() + 1, 1 - 1, 1); 
			$('#defaultCountdown').countdown({until: tomorrow})
        }

    };
}();        