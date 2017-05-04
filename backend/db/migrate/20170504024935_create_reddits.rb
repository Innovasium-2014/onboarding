class CreateReddits < ActiveRecord::Migration[5.0]
  def change
    create_table :reddits do |t|

      t.timestamps
    end
  end
end
