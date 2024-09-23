class New {
  const New({
    required this.creator,
    required this.title,
    required this.link,
    required this.pubDate,
    required this.isoDate,
    required this.summary,
  });

  final String creator;
  final String title;
  final String link;
  final String pubDate;
  final DateTime isoDate;
  final String? summary;

  factory New.fromJson(Map<String, dynamic> json) {
    return switch (json) {
      {
        'creator': String creator,
        'title': String title,
        'link': String link,
        'pubDate': String pubDate,
        'isoDate': String isoDate,
      } =>
        New(
          creator: creator,
          title: title,
          link: link,
          pubDate: pubDate,
          isoDate: DateTime.parse(isoDate),
          summary: json['summary']?? '',
        ),
      _ => throw const FormatException('Could not get new.'),
    };
  }
}
