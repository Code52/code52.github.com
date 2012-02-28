  function getContribs(projectName, projectUrl) {
    $.ajax({
        url: "http://github.com/api/v2/json/repos/show/Code52/" + projectName + "/contributors",
        dataType: 'jsonp',
        success: function(data) 
		{
			data.contributors = data.contributors.sort(function (a, b) 
			{ 
				if (a.contributions > b.contributions) return -1;
				if (a.contributions < b.contributions) return 1;
				return 0;
			});
			$("#contributors").append("<h2><a href=\"" + projectUrl + "\">"+ projectName +"</a></h2>");
			$("#contributorTemplate").tmpl(data).appendTo("#contributors");
        }
    });
  }

  
  $(function()
  {
   $.ajax({
        url: "http://github.com/api/v2/json/repos/show/code52",
        dataType: 'jsonp',
        success: function(data) 
		{			  
			var count = data.repositories.length;
			data.repositories = data.repositories.sort(function (a, b) 
			{ 
				var adate =  new Date(a.created_at).getTime();
				var bdate =  new Date(b.created_at).getTime();
				if (adate < bdate) return -1;
				if (adate > bdate) return 1;
				return 0;
			});
			
			for(var i = 0; i < count; i++) 
			{
				var repo = data.repositories[i];
				
				if (repo.name != "code52.github.com")
					getContribs(repo.name, repo.url);
			}
        }
  });
  });
