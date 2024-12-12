class User {
  const User({
    required this.id,
    required this.nome,
    required this.email,
    required this.subscriptions,
    required this.authToken,
  });

  final String id;
  final String nome;
  final String email;
  final List subscriptions;
  final String? authToken;

  factory User.fromJson(Map<String, dynamic> json) {
    return switch (json['user']) {
      {
        'id': String id,
        'name': String nome,
        'email': String email,
        'subscriptions': List subscriptions,
      } =>
        User(
          id: id,
          nome: nome,
          email: email,
          subscriptions: subscriptions,
          authToken: json['authToken'],
        ),
      _ => throw const FormatException('Could not get User.'),
    };
  }
}
