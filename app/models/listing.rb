# == Schema Information
#
# Table name: listings
#
#  id               :bigint           not null, primary key
#  title            :string           not null
#  description      :text             not null
#  price            :float            not null
#  latitude         :float            not null
#  longitude        :float            not null
#  street           :string           not null
#  city             :string           not null
#  state            :string           not null
#  country          :string           not null
#  zip_code         :string           not null
#  property_type    :string           not null
#  number_of_guests :integer          not null
#  number_of_beds   :integer          not null
#  number_of_baths  :integer          not null
#  host_id          :bigint
#  created_at       :datetime         not null
#  updated_at       :datetime         not null
#
class Listing < ApplicationRecord
    belongs_to :host,
        primary_key: :id,
        foreign_key: :host_id,
        class_name: :User

    validates :title, :description, :price, :latitude, :longitude, :street, :city, :state, :country, :zip_code, :property_type, :number_of_guests, :number_of_beds, :number_of_baths, presence: true

    has_many_attached :photos
end
