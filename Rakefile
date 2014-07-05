require "stringex"

#Forked from Octopress
desc "Begin a new post in _posts"
task :new_post, :title do |t, args|
    title = get_stdin("Enter title: ")
    
    mkdir_p "_posts"
    filename = "_posts/#{Time.now.strftime('%Y-%m-%d')}-#{title.to_url}.md"

    if File.exist?(filename)
        abort("rake aborted!") if ask("#{filename} already exists. Do you want to overwrite?", ['y', 'n']) == 'n'
    end

    puts "Creating new post: #{filename}"

    open(filename, 'w') do |post|
        post.puts "---"
        post.puts "layout: post"
        post.puts "title: \"#{title.gsub(/&/,'&amp;')}\""
        post.puts "date: #{Time.now.strftime('%b. %d, %Y')}"
        post.puts "image: false"
        post.puts "description: false"        
        post.puts "---"
    end
end

def get_stdin(message)
  print message
  STDIN.gets.chomp
end