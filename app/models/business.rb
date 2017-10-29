class Business < ApplicationRecord

  has_one :address,
    primary_key: :id,
    foreign_key: :business_id,
    class_name: 'Address'

  has_one :detailed_info,
    primary_key: :id,
    foreign_key: :business_id,
    class_name: 'DetailedInfo'

  accepts_nested_attributes_for :detailed_info, :address
end