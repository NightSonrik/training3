$(document).ready(function() {

	$("#toggle").on('click', function(e) {
		e.preventDefault;
		$(this).toggleClass('on');
		$(".main-nv").slideToggle();
		return false;
	})
});



var ctx = document.getElementById('myChart').getContext('2d');
var chart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ["", "", "", "", "", "", "", "", ""],
        datasets: [{
            label: "My Skills",
            backgroundColor: '#ffffff',
            borderColor: '#717171',
            pointRadius: 0,
            pointBackgroundColor: '#212121',
            data: [0, 82, 30, 73, 33, 95, 40, 80, 0]
        }]
    },
    options: {
    }
});

