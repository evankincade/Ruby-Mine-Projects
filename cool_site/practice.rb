name1 = "John"
name2 = "Mary"
puts name1
puts name2

puts "#{name1} waved at #{name2}."

puts 1 == 1

age = 20
if age > 40
  puts "You're an old fucker!"
else
  puts "JK you're young."
end

puts age > 40 ? "I'm older than that!" : "No"

array1 = ["Evan", 24, "Here is a cool fact about me", [2,3]]

array1 << 20
array1.push("Here is some more information about me")

array1.pop
array1.unshift
array1.shift
array1.first
array1.last
