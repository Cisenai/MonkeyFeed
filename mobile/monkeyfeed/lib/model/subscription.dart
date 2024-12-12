class Subscription {
  const Subscription({
    required this.id,
    required this.idClient,
    required this.link,
    required this.nome,
  });

  final String id;
  final String idClient;
  final String link;
  final String nome;

  factory Subscription.fromJson(Map<String, dynamic> json) {
    return switch (json) {
      {
        'id': String id,
        'idClient': String idClient,
        'link': String link,
        'name': String nome,
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
