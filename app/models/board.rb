class Board < ApplicationRecord
  validates_presence_of :title, allow_blank: false
  belongs_to :user

  has_many :lists, dependent: :destroy
end
