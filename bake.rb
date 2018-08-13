require 'sinatra'
require 'httparty'


response = HTTParty.get('https://www.eventbriteapi.com/v3/events/search/?q=bakery&token=VP4EQM5NWKZGWEMX2DST')

r = JSON.parse(response.body)





get '/' do


names  = []
description = []
@event_name = []
@event_description = []
 # r["events"][0]["description"]["text"]

r["events"].each {|x| description << x["description"]}


description.each {|y| @event_description << y["text"]}


r["events"].each do |x| names << x["name"]
end

  names.each do |y|  @event_name  << y["text"]
end


  erb :home
end





#A user has a first and last name

# A user has an email address

#a user can now sign in





#links for cookies, muffins and cakes
# each link will send the user to another page showing the differnt options for the specific item chosen
#each item should have a fixed price attached
#on hover or click each item has item descriptions
#users can add items to a shopping cart
#users can buy items
#once user buys an item email gets sent to user thanking and showing them all items purched and total amount
#should have a page showing how many of each item was sold, playing on popularity
