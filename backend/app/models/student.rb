class Student < ApplicationRecord

  def get
    return Student.all
  end

  def create(name)
    return Student.create({ :name => name })
  end

  def delete(id)
    Student.find(id).destroy
    return true
  end
end
