const button=document.getElementById("remove-button");	
			button.addEventListener("click", function () {
				const select=document.getElementById("colorSelect");
				const selectedindex=select.selectedIndex;
				if(selectedindex!==-1)
				{
					select.remove(selectedindex);
				}
			});

