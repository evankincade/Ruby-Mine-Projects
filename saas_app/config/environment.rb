# Load the Rails application.
require File.expand_path('../application', __FILE__)

# Initialize the Rails application.
Rails.application.initialize!

ActionMailer::Base.smtp_settings = {
    :address => 'smtp.sendgrid.net',
    :port => '587',
    :authentication => :plain,
    :user_name => ENV['app46038588@heroku.com'],
    :password => ENV['awxyysut0509'],
    :domain => 'damp-beyond-2080.herokuapp.com',
    :enable_startstls_auto => true
}
