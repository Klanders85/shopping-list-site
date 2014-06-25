$(document).ready(function(){
	//Give the button an onClick function

		$('#submitItem').click(function(e){
			//prevent default/ to stop the page from reloading after submit
			e.preventDefault()

			//store the input field's value in a var as a LI
			var newItem= $('<li>' + $('#addNewItem').val() + '</li>')

			//append the var in an LI to the parent UL
			$('#groceryList').append(newItem)
			//alert if entry was empty

			//adding strikethrough class to newItem upon click
			$('#groceryList').children('li').each(function(){
				$(this).click(function(){
					$(this).addClass('boughtItem')
				});
			$('#addNewItem').val('');
			});

			//created localStorage var
			localStorage.setItem('todos', groceryList.innerHTML)
		});		

		//if to check if we have something in localStorage
		if(localStorage.getItem('todos')){
			$('#groceryList').html(localStorage.getItem('todos'));

			//adding strikethrough class to newItem upon click
			$('#groceryList').children('li').each(function(){
				$(this).click(function(){
					$(this).addClass('boughtItem');
				});
			});
		};

		//clear list from localStorage
		$('#clear_list').click(function(){
			localStorage.clear()
		});

})