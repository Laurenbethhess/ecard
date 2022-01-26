Card.destroy_all

User.create(username: "Lauren", first_name: "Lauren", last_name: "Hess")
Template.create(classname: "happy_birthday")
Template.create(classname: "congrats")
Template.create(classname: "get_well")
Template.create(classname: "love")
Card.create(user_id: 1, template_id: 1, salutation: "Dear", message: "Love you!", closing: "Love", receiver: "Caris")
Card.create(user_id: 1, template_id: 4, salutation: "Dear", message: "Love you!", closing: "Love", receiver: "Caris")
Card.create(user_id: 1, template_id: 5, salutation: "Dear", message: "Love you!", closing: "Love", receiver: "Caris")
Card.create(user_id: 1, template_id: 6, salutation: "Dear", message: "Love you!", closing: "Love", receiver: "Caris")