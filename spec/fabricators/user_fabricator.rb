Fabricator(:user, class_name: User) do
  email { sequence(:email) { |i| "user#{i}@example.com" } }
  password  "qwerty123"
  password_confirmation  "qwerty123"
end
