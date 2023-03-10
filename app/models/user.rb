# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  email           :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#  f_name          :string           not null
#  l_name          :string           not null
#
class User < ApplicationRecord
  has_secure_password

  has_many :listings,
    primary_key: :id,
    foreign_key: :host_id,
    class_name: :Listing

  validates :f_name,
    presence: true
  validates :l_name,
    presence: true
  validates :email,
    uniqueness: true,
    length: { in: 3..255 },
    format: { with: URI::MailTo::EMAIL_REGEXP }
  validates :session_token,
    presence: true,
    uniqueness: true
  validates :password,
    length: { in: 6..255 },
    allow_nil: true

  before_validation :ensure_session_token

  def self.find_by_credentials(credential, password)
    # if URI::MailTo::EMAIL_REGEXP.match?(credential)
    #   user = User.find_by(email: credential)
    # else
    #   user = User.find_by(username: credential)
    # end
    user = User.find_by(email: credential)

    if user&.authenticate(password)
      user
    else
      nil
    end
  end

  def reset_session_token!
    session_token = generate_unique_session_token
    self.update!(session_token: session_token)
    session_token
  end

  private

  def generate_unique_session_token
    loop do
      random_token = SecureRandom.base64
      next if User.exists?(session_token: random_token)
      return random_token
    end
  end

  def ensure_session_token
    self.session_token ||= generate_unique_session_token
  end
end
