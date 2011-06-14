class MarkerToMap < ActiveRecord::Base
  belongs_to :map
  belongs_to :marker
  acts_as_taggable
end