json.user do
    json.extract! @user, :id, :email, :f_name, :l_name, :created_at, :updated_at
end