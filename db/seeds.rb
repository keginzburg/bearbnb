# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
# db/seeds.rb

require "open-uri"

ApplicationRecord.transaction do 
  puts "Destroying tables..."
  # Unnecessary if using `rails db:seed:replant`
  Listing.destroy_all
  User.destroy_all

  puts "Resetting primary keys..."
  # For easy testing, so that after seeding, the first `User` has `id` of 1
  ApplicationRecord.connection.reset_pk_sequence!('listings')
  ApplicationRecord.connection.reset_pk_sequence!('users')

  puts "Creating users..."
  # Create one user with an easy to remember username, email, and password:
  user_1 = User.create!(
    email: 'demo_user@aa.io', 
    password: 'password',
    f_name: "Demo",
    l_name: "User"
  )

  # More users
  10.times do 
    User.create!({
      email: Faker::Internet.unique.email,
      password: 'password',
      f_name: Faker::Name.first_name,
      l_name: Faker::Name.last_name
    }) 
  end
end

user_1 = User.first

  puts "Creatings Listings..."
  # Create one listing with an easy to remember title, description, and price:
  l_1 = Listing.create!(
    title: "Frank",
    description: "Frank is a black bear. He plays along bodies of water and loves hanging out at App Academy. Black bears are endemic to North America and omnivores.",
    price: 350.00,
    latitude: 40.736370,
    longitude: -73.993750,
    street: "90 5th Avenue, Floor 2",
    city: "New York",
    state: "NY", 
    country: "United States of America",
    zip_code: "10011",
    property_type: "lakefront",
    number_of_guests: 5,
    number_of_beds: 2, 
    number_of_baths: 2,
    host: user_1
  )

  l_2 = Listing.create!(
    title: "Jeff",
    description: "Jeff is a Gobi bear. He's not a fan of the cold, but loves ice cream. Gobi bears are a subspecies of the brown bear that can found in the Gobi Desert.",
    price: 299.00,
    latitude: 40.736370,
    longitude: -73.993750,
    street: "90 5th Avenue, Floor 2",
    city: "New York",
    state: "NY", 
    country: "United States of America",
    zip_code: "10011",
    property_type: "desert",
    number_of_guests: 2,
    number_of_beds: 1, 
    number_of_baths: 1,
    host: user_1
  )

  l_3 = Listing.create!(
    title: "Amin",
    description: "Amin is a black bear. He loves long walks on the beach. Black bears are endemic to North America and omnivores.",
    price: 325.00,
    latitude: 40.736370,
    longitude: -73.993750,
    street: "90 5th Avenue, Floor 2",
    city: "New York",
    state: "NY", 
    country: "United States of America",
    zip_code: "10011",
    property_type: "beach",
    number_of_guests: 3,
    number_of_beds: 2, 
    number_of_baths: 1,
    host: user_1
  )

  l_4 = Listing.create!(
    title: "Don",
    description: "Don is a Cinnamon bear. Don appreciates expired foodstuffs and scratching his back on trees. Cinnamon bears are a subspecies of the common black bear.",
    price: 235.00,
    latitude: 40.736370,
    longitude: -73.993750,
    street: "90 5th Avenue, Floor 2",
    city: "New York",
    state: "NY", 
    country: "United States of America",
    zip_code: "10011",
    property_type: "farm",
    number_of_guests: 1,
    number_of_beds: 1, 
    number_of_baths: 1,
    host: user_1
  )

  l_5 = Listing.create!(
    title: "Juno",
    description: "Juno is a Sun bear. Juno's favorite activity is sunbathing. Sun bears are a species that can be found in the tropical forests of Southeast Asia.",
    price: 286.00,
    latitude: 40.736370,
    longitude: -73.993750,
    street: "90 5th Avenue, Floor 2",
    city: "New York",
    state: "NY", 
    country: "United States of America",
    zip_code: "10011",
    property_type: "tropical",
    number_of_guests: 6,
    number_of_beds: 3, 
    number_of_baths: 2,
    host: user_1
  )

  l_6 = Listing.create!(
    title: "Gronk",
    description: "Gronk was a Cave bear. Sad. Cave bears were a prehistoric species of bear that lived in Europe and Asia during the Pleistocene and became extinct about 24,000 years ago.",
    price: 500.00,
    latitude: 40.736370,
    longitude: -73.993750,
    street: "90 5th Avenue, Floor 2",
    city: "New York",
    state: "NY", 
    country: "United States of America",
    zip_code: "10011",
    property_type: "cave",
    number_of_guests: 0,
    number_of_beds: 0, 
    number_of_baths: 0,
    host: user_1
  )

  l_7 = Listing.create!(
    title: "Coca",
    description: "Coca is a Polar bear. Coca is a big fan of sugary drinks and sports advertising. Polar bears are a hypercarnivorous type of bear that live largely within the Arctic circle.",
    price: 215.00,
    latitude: 40.736370,
    longitude: -73.993750,
    street: "90 5th Avenue, Floor 2",
    city: "New York",
    state: "NY", 
    country: "United States of America",
    zip_code: "10011",
    property_type: "arctic",
    number_of_guests: 1,
    number_of_beds: 1, 
    number_of_baths: 1,
    host: user_1
  )

  l_8 = Listing.create!(
    title: "Meela",
    description: "Meela is a Giant Panda bear. Meela is an introvert and prefers to be left alone. Panda bears are endemic to China and recognizable by their bold black-and-white coat.",
    price: 215.00,
    latitude: 40.736370,
    longitude: -73.993750,
    street: "90 5th Avenue, Floor 2",
    city: "New York",
    state: "NY", 
    country: "United States of America",
    zip_code: "10011",
    property_type: "cabin",
    number_of_guests: 0,
    number_of_beds: 1, 
    number_of_baths: 1,
    host: user_1
  )


puts "Attaching AWS seeds"

# Listing 1 Attachments
l_1.photos.attach(
  io: URI.open("https://bearbnb-seeds.s3.amazonaws.com/black_bear_photo_1.jpg"),
  filename: "black_bear_photo_1.jpg"
)
l_1.photos.attach(
  io: URI.open("https://bearbnb-seeds.s3.amazonaws.com/black_bear_photo_2.jpeg"),
  filename: "black_bear_photo_2.jpeg"
)
l_1.photos.attach(
  io: URI.open("https://bearbnb-seeds.s3.amazonaws.com/black_bear_photo_3.png"),
  filename: "black_bear_photo_3.png"
)
l_1.photos.attach(
  io: URI.open("https://bearbnb-seeds.s3.amazonaws.com/black_bear_photo_4.png"),
  filename: "black_bear_photo_4.png"
)
l_1.photos.attach(
  io: URI.open("https://bearbnb-seeds.s3.amazonaws.com/black_bear_photo_5.jpeg"),
  filename: "black_bear_photo_5.jpeg"
)

# Listing 2 Attachments
l_2.photos.attach(
  io: URI.open("https://bearbnb-seeds.s3.amazonaws.com/gobi_bear_photo_1.jpeg"),
  filename: "gobi_bear_photo_1.jpeg"
)
l_2.photos.attach(
  io: URI.open("https://bearbnb-seeds.s3.amazonaws.com/gobi_bear_photo_2.jpeg"),
  filename: "gobi_bear_photo_2.jpeg"
)
l_2.photos.attach(
  io: URI.open("https://bearbnb-seeds.s3.amazonaws.com/gobi_bear_photo_3.jpeg"),
  filename: "gobi_bear_photo_3.jpeg"
)
l_2.photos.attach(
  io: URI.open("https://bearbnb-seeds.s3.amazonaws.com/gobi_bear_photo_4.jpeg"),
  filename: "gobi_bear_photo_4.jpeg"
)
l_2.photos.attach(
  io: URI.open("https://bearbnb-seeds.s3.amazonaws.com/gobi_bear_photo_5.jpeg"),
  filename: "gobi_bear_photo_5.jpeg"
)

# Listing 3 Attachments

l_3.photos.attach(
  io: URI.open("https://bearbnb-seeds.s3.amazonaws.com/black_bear_photo_6.jpeg"),
  filename: "black_bear_photo_6.jpeg"
)

# Listing 4 Attachments

l_4.photos.attach(
  io: URI.open("https://bearbnb-seeds.s3.amazonaws.com/cinnamon_bear_photo_1.jpeg"),
  filename: "cinnamon_bear_photo_1.jpeg"
)

# Listing 5 Attachments

l_5.photos.attach(
  io: URI.open("https://bearbnb-seeds.s3.amazonaws.com/sun_bear_photo_1.jpeg"),
  filename: "sun_bear_photo_1.jpeg"
)

# Listing 6 Attachments

l_6.photos.attach(
  io: URI.open("https://bearbnb-seeds.s3.amazonaws.com/cave_bear_photo_1.jpeg"),
  filename: "cave_bear_photo_1.jpeg"
)

# Listing 7 Attachments

l_7.photos.attach(
  io: URI.open("https://bearbnb-seeds.s3.amazonaws.com/polar_bear_photo_1.jpeg"),
  filename: "polar_bear_photo_1.jpeg"
)

# Listing 8 Attachments

l_8.photos.attach(
  io: URI.open("https://bearbnb-seeds.s3.amazonaws.com/panda_bear_photo_1.jpeg"),
  filename: "panda_bear_photo_1.jpeg"
)

puts "Done!"