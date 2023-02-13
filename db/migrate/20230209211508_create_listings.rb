class CreateListings < ActiveRecord::Migration[7.0]
  def change
    create_table :listings do |t|
      t.string :title, null: false
      t.text :description, null: false
      t.float :price, null: false
      t.float :latitude, null: false
      t.float :longitude, null: false
      t.string :street, null: false
      t.string :city, null: false
      t.string :state, null: false
      t.string :country, null: false
      t.string :zip_code, null: false
      t.string :property_type, null: false

      t.integer :number_of_guests, null: false
      t.integer :number_of_beds, null: false
      t.integer :number_of_baths, null: false

      t.references :host, index: true, foreign_key: { to_table: :users }
      t.timestamps
    end
    add_index :listings, :number_of_guests
    add_index :listings, :city
    add_index :listings, :state
    add_index :listings, :country
    add_index :listings, :zip_code
  end
end
