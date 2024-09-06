class User {
  const User({
    required this.id,
    required this.nome,
    required this.email,
    required this.subscriptions,
  });

  final int id;
  final String nome;
  final String email;
  final List subscriptions;

  factory User.fromJson(Map<String, dynamic> json) {
    return switch (json) {
      {
        'id': int id,
        'nome': String nome,
        'email': String email,
        'subscriptions': List subscriptions,
      } =>
        User(
          id: id,
          nome: nome,
          email: email,
          subscriptions: subscriptions,
        ),
      _ => throw const FormatException('Could not get User.'),
    };
  }
}
