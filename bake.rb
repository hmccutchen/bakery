require 'sinatra'
require 'httparty'







get '/home.erb' do





  erb :home
end


get '/cookies.erb' do


erb :cookies
end



get '/cakes.erb' do


erb :cakes
end



get '/muffins.erb' do


erb :muffins
end



get '/events.erb' do






response = HTTParty.get('https://www.eventbriteapi.com/v3/events/search/?q=bakery&token=VP4EQM5NWKZGWEMX2DST')

@r = JSON.parse(response.body)

 erb :events
  end




