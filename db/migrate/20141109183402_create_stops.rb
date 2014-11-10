class CreateStops < ActiveRecord::Migration
  def change
    create_table :stops do |t|
      t.integer :itinerary_id
      t.integer :order_number
      t.string :name
      #part of address domain
      t.string :raw_line_1
      t.string :raw_line_2
      t.string :raw_line_3
      t.text :city
      t.text :state
      t.text :zip
      t.text :country
      t.float :lat
      t.float :lng
      #time window
      t.string :work_week, array: true
      t.time :beginning_of_workday
      t.time :end_of_workday
      t.text :work_hours

      t.timestamps
    end
  end
end
