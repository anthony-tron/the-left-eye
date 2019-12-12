# auto-reader.rb v.1.0 by Anthony TRON
# how do I run this ?
#
# 1.open a terminal
#   change your directory into the directory where this file is
#   learn more about 'cd' : https://en.wikipedia.org/wiki/Cd_(command)
#
# 2.run the following command :
#   ruby auto-reader.rb <word_per_minute_speed> <your text here>
#   or
#   ruby auto-reader.rb <word_per_minute_speed> -f <your_file_with_your_text_here>

ARGV.each do |arg|
    if ['-h', '-help', '--help', '--h'].include? arg
        puts "Usage:"
        puts "1) ruby auto-reader.rb [words_per_minute_here] [-f your_file_here]"
        puts "2) ruby auto-reader.rb [words_per_minute_here] [your_text_here]"
        exit 0
    end
end

def has_punctuation?(str)
    return false unless str.kind_of? String

    punctuation = ['.', ',', ':', ';', '?', '!']

    punctuation.each do |s|
        return true if str.include? s
    end

    return false
end


wpm = nil

ARGV.each do |arg| 
    if arg.to_i > 0
        wpm = arg.to_i
        ARGV.delete arg
        break
    end
end


text = nil

for i in 0...ARGV.count - 1
    if ARGV[i] == '-f'
        text = IO.readlines(ARGV[i+1]).join
    end
end

text||= ARGV[0]

wpm||=300
text||="Welcome! This is a sample text. Even though I have no idea on what I should write, I'm typing something. Not even sure what I should talk about, not even a single idea. Hey, but maybe that's enough for now!"

finished = false
words = text.split

Thread.new do
    loop do
        words.each do |e|
            puts `clear`
            print e.to_s.center 32
        
            sleep_time = 60.0 / wpm
            sleep_time *= 2 if has_punctuation? e
            sleep_time *= 1.5 if e.include? '.'
            sleep sleep_time
        end

        finished = true
    end
end

while not finished
    sleep 1
end

puts