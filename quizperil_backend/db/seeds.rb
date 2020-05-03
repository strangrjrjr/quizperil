# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# Max of 50 questions per API call to opentdb
# Generate session token: https://opentdb.com/api_token.php?command=request
# Use session token in calls to get unique questions: https://opentdb.com/api.php?amount=10&token=YOURTOKENHERE
# Reset token: https://opentdb.com/api_token.php?command=reset&token=YOURTOKENHERE
# Tokens are deleted after 6 hours.
# JSON.parse(RestClient.get(url)) #=> ruby data structure 