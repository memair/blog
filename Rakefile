POST_DIR = "_posts"

desc 'create new post'
# rake new My New Post
task :new do
  require 'rubygems'
  require 'chronic'

  ARGV.each { |a| task a.to_sym do ; end }

  title = ARGV[1..-1].join(' ') || "New Title"
  slug = title.gsub(' ','-').downcase

  filename = "#{Time.new.strftime('%Y-%m-%d')}-#{slug}.md"
  permalink = "/#{Time.new.strftime('%Y/%m')}/#{slug}/"

  path = File.join(POST_DIR, filename)
  post = <<-HTML
---
layout: post
title: "TITLE"
author: greg
categories: [ Quantified Self ]
tags: [ App, Otto, Quantified Self ]
image: /assets/images/2016/09/blackmirror-01.gif
description: "DESCRIPTION"
featured: false
hidden: false
---
HTML
  post \
    .gsub!('TITLE', title) \
    .gsub!('DATE', Time.new.to_s) \
    .gsub!('PERMALINK', permalink)
  File.open(path, 'w') do |file|
    file.puts post
  end
  puts "new post generated in #{path}"
  system "code #{path}"
end
