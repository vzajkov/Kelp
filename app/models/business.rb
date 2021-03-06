class Business < ApplicationRecord
include PgSearch

pg_search_scope :search_for, against: %i(name)

  has_one :address,
    primary_key: :id,
    foreign_key: :business_id,
    class_name: 'Address'

  has_one :detailed_info,
    primary_key: :id,
    foreign_key: :business_id,
    class_name: 'DetailedInfo'

  has_many :reviews,
    primary_key: :id,
    foreign_key: :business_id,
    class_name: 'Review'

end
