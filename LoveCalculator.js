
		function checklove() {

			var yourname = document.getElementById('yourname').value;
			var lovename = document.getElementById('lovename').value;

			if(yourname == "") {
				alert("Please enter your name.");
			}else if (yourname.length < 3) {
				alert("Minimum length of name will be 3.");
			}else if (!isNaN(yourname)) {
                alert("Name can't be number.");  //ending yourname validation and starting lovename validation.
			}else if(lovename == "") {
				alert("Please enter love name.");
			}else if (lovename.length < 3) {
				alert("Minimum length of name will be 3.");
			}else if (!isNaN(lovename)) {
                alert("Name can't be number.");
			}else {      //value will be display after all validations.                                         
				var lovedata = Math.ceil(Math.random() * 100);
			    document.getElementById('lovevalue').value = lovedata + "%"; //accessing value of lovedata. 
			}

		}
		
