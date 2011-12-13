---
layout : layout
---

<ul class="ideas">
    {% for post in site.posts limit:10 %}
		<li>
			<div class="idea">
				{% if forloop.first and post.layout == "post" %}
					<h1><a href="{{ post.id }}">{{ post.title }}</a></h1>
					
					<div class="postdate">{{ post.date | date: "%e %B, %Y"  }}
						<ul>
						{% for tag in post.tags %}
							<li><a href="/tag/{{ tag }}">{{ tag }}</a></li>
						{% endfor %}
						</ul>
					</div>
					
					{{ post.content }}
					<br />
					<a href="{{ post.id }}#disqus_thread">Comments</a>
				{% else %}
					<h3><a class="postlink" href="{{ post.id }}">{{ post.title }}</a></h3>
					<div class="postdate">{{ post.date | date: "%e %B, %Y"  }}
						<ul>
						{% for tag in post.tags %}
							<li><a href="/tag/{{ tag }}">{{ tag }}</a></li>
						{% endfor %}
						</ul>
					</div>
					{% if post.description != null %}
						<span class="postsummary">{{ post.description }}</span><br/ >
					{% endif %}
					
					<a href="{{ post.id }}#disqus_thread">Comments</a>
				{% endif %}
			</div>
		</li>
    {% endfor %}
</ul>
	