// Posts
<section id="post">
    <article class="four omega columns post">
        <div class="info-top">
            <span class="category">{{ post.category }}</span> <i class="icon-{{ icon }}"></i>
        </div>

        <h2>{{ post.title }}</h2>

        <div class="content">{{ post.content }}</div>

        <div class="info-bottom clearfix">
            <span><i class="icon-calendar"></i> {{ post.date }}</span>      
            <span><i class="icon-comments"></i> 2 Comments</span>                  
        </div>

        <a href="#" class="btn red"><i class="icon-heart left"></i> Share</a> <a href="{{ post.url }}" class="btn blue">Read <i class="icon-angle-right right"></i></a>
    </article>
</section>

// Featured
<section id="featured">
    <article class="eight omega columns featured">
        <div class="info-top">
            <span class="category">{{ post.category }}</span> <i class="icon-leaf"></i>
        </div>

        <img src="http://placehold.it/460x223" style="width: 100%;" />
    </article>
</section>