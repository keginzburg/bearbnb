# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
# db/seeds.rb

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

  puts "Creatings Listings..."
  # Create one listing with an easy to remember title, description, and price:
  Listing.create!(
    title: "Demo Listing",
    description: "This listing is for demo purposes.",
    price: 341.00,
    latitude: 40.736370,
    longitude: -73.993750,
    street: "90 5th Avenue, Floor 2",
    city: "New York",
    state: "NY", 
    country: "United States of America",
    zip_code: "10011",
    property_type: "Apartment",
    number_of_guests: 10,
    number_of_beds: 3, 
    number_of_baths: 3,
    host: user_1
  )

  puts "Done!"
end