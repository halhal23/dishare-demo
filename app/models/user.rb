class User < ApplicationRecord
  has_secure_password

  validates :name, presence: true, uniqueness: true
  validates :email, email: { allow_blank: true }
end
