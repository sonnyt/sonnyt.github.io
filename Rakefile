require "stringex"

#Forked from Octopress
desc "Begin a new post in _posts"
task :new_post, :title do |t, args|
    title = get_stdin("Enter title: ")
    type = get_stdin("Enter type: ")
    category = get_stdin("Enter category: ")
    featured = get_stdin("Is this post featured? true/false ")

    mkdir_p "_posts"
    filename = "_posts/#{Time.now.strftime('%Y-%m-%d')}-#{title.to_url}.html"

    if File.exist?(filename)
        abort("rake aborted!") if ask("#{filename} already exists. Do you want to overwrite?", ['y', 'n']) == 'n'
    end

    if type == 'theme'
        demo = get_stdin("Demo URL: ")
        buy = get_stdin("Buy URL: ")
        price = get_stdin("Price: ")

        layout = 'theme'
    end

    if type == 'text'
        layout = 'post'
    end

    puts "Creating new post: #{filename}"

    open(filename, 'w') do |post|
        post.puts "---"
        post.puts "layout: #{layout}"
        post.puts "title: \"#{title.gsub(/&/,'&amp;')}\""
        post.puts "date: #{Time.now.strftime('%b. %d, %Y')}"
        post.puts "category: #{category}"
        post.puts "featured: #{featured}"
        post.puts "type: #{type}"
        post.puts "tags: false"
        post.puts "image: false"
        post.puts "summary: false"
        if type == 'theme'
            post.puts "demo: #{demo}"
            post.puts "buy: #{buy}"
            post.puts "price: #{price}"
        end
        
        post.puts "---"
    end
end

def get_stdin(message)
  print message
  STDIN.gets.chomp
end