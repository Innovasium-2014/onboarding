class GetLatest < ActiveRecord::Migration[5.0]
  def change
  	add_column :reddits, :latest, :string
  end
end
