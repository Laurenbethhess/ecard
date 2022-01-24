Card.destroy_all
User.destroy_all
Template.destroy_all

User.create(username: "Lauren", first_name: "Lauren", last_name: "Hess")
Template.create(classname: "happy_birthday")
Card.create(user_id: 1, template_id: 1, salutation: "Dear", message: "Happy Birthday!", closing: "Love", receiver: "Caris")