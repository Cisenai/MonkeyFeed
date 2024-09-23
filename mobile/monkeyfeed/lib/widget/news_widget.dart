import 'package:flutter/material.dart';
import 'package:fluttertoast/fluttertoast.dart';
import 'package:monkeyfeed/model/new.dart';
import 'package:url_launcher/url_launcher.dart';

class NewsWidget extends StatelessWidget {
  const NewsWidget({
    super.key,
    required this.news,
  });

  final New news;

  Future<void> _openlink(BuildContext context) async {
    Fluttertoast.showToast(
      msg: 'Redirecionando para a notícia...',
      textColor: Theme.of(context).colorScheme.surface,
      backgroundColor: Theme.of(context).colorScheme.primary,
    );

    if (!await launchUrl(Uri.parse(news.link))) {
      throw Exception('Could not launch ${news.link}');
    }
  }

  @override
  Widget build(BuildContext context) {
    return GestureDetector(
      onTap: () => _openlink(context),
      child: Container(
        color: Theme.of(context).colorScheme.onSurface,
        width: double.infinity,
        child: Column(
          children: [
            // image == null
            //     ? Image.asset('assets/placeholder-image.jpg')
            //     : Image.network(image!),
            Padding(
              padding: const EdgeInsets.all(8.0),
              child: Column(
                children: [
                  Text(
                    news.title,
                    style: TextStyle(
                      fontSize: 20,
                      fontWeight: FontWeight.w700,
                      color: Theme.of(context).colorScheme.secondary,
                    ),
                  ),
                  const SizedBox(height: 5),
                  Text(
                    news.summary ?? '',
                    style: TextStyle(
                      fontSize: 18,
                      color: Theme.of(context).colorScheme.secondary,
                    ),
                  ),
                ],
              ),
            ),
            // Actions
            // Row(
            //   mainAxisAlignment: MainAxisAlignment.end,
            //   children: [
            //     IconButton(
            //       onPressed: () {},
            //       icon: Icon(
            //         Icons.favorite,
            //         size: 35,
            //         color: Theme.of(context).colorScheme.tertiary,
            //       ),
            //     ),
            //     IconButton(
            //       onPressed: () {},
            //       icon: Icon(
            //         Icons.share,
            //         size: 35,
            //         color: Theme.of(context).colorScheme.secondary,
            //       ),
            //     ),
            //     IconButton(
            //       onPressed: () {},
            //       icon: Icon(
            //         Icons.bookmark,
            //         size: 35,
            //         color: Theme.of(context).colorScheme.secondary,
            //       ),
            //     ),
            //   ],
            // ),
          ],
        ),
      ),
    );
  }
}
