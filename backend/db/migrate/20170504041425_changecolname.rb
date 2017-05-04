class Changecolname < ActiveRecord::Migration[5.0]
  def change
  	rename_column :reddits, :CreateReddits, :name 
  end
end
