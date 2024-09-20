class Subscription {
  const Subscription({
    required this.id,
    required this.idClient,
    required this.link,
    required this.nome,
  });

  final int id;
  final int idClient;
  final String link;
  final String nome;

  factory Subscription.fromJson(Map<String, dynamic> json) {
    return switch (json) {
      {
        'id': int id,
        'idClient': int idClient,
        'link': String link,
        'nome': String nome,
      } =>
        Subscription(
          id: id,
          idClient: idClient,
          link: link,
          nome: nome,
        ),
      _ => throw const FormatException('Could not get subscription.'),
    };
  }
}
