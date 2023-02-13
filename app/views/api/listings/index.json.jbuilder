@listings.each do |listing|
    json.set! listing.id do
        json.extract! listing, :id, :title, :description, :price, :latitude, :longitude, :street, :city, :country, :zip_code, :property_type, :number_of_guests, :number_of_beds, :number_of_baths
        json.host do
            json.extract! listing.host, :id, :email, :f_name, :l_name, :created_at, :updated_at
        end
    end
end