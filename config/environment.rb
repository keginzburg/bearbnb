# Load the Rails application.
require_relative "application"

# Initialize the Rails application.
Rails.application.initialize!

# Responses created on the backend need to be converted from snake_case to camelCase
# Jbuilder configuration:
Jbuilder.key_format camelize: :lower
Jbuilder.deep_format_keys true