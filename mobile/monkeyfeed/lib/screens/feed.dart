import 'package:flutter/material.dart';
import 'package:monkeyfeed/model/new.dart';
import 'package:monkeyfeed/provider/feed_provider.dart';
import 'package:monkeyfeed/services/news_service.dart';
import 'package:monkeyfeed/widget/feed_app_bar.dart';
import 'package:monkeyfeed/widget/news_widget.dart';
import 'package:provider/provider.dart';

class FeedScreen extends StatefulWidget {
  const FeedScreen({super.key});

  @override
  State<FeedScreen> createState() => _FeedScreenState();
}

class _FeedScreenState extends State<FeedScreen> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: FeedAppBar(
        title: Row(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            Image.asset(
              'assets/monkey-icon.png',
              width: 45,
            ),
            const SizedBox(width: 10),
            const Text('Feed'),
          ],
        ),
      ),
      body: Padding(
        padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 5),
        child: FutureBuilder(
          future: NewsService.getNews(
            feed: Provider.of<FeedProvider>(context, listen: false).feed,
          ),
          builder: (context, snapshot) {
            if (snapshot.connectionState != ConnectionState.done) {
              return const Center(child: CircularProgressIndicator());
            }
            if (snapshot.hasError) {
              return Text('${snapshot.error}');
            } else {
              final data = snapshot.data!;
              return ListView.builder(
                itemCount: data.length,
                itemBuilder: (context, index) {
                  final New news = data[index];
                  return Padding(
                    padding: const EdgeInsets.symmetric(vertical: 5),
                    child: NewsWidget(
                      title: news.title,
                      summary: news.summary?? '',
                    ),
                  );
                },
              );
            }
          },
        ),
      ),
      drawer: Drawer(),
    );
  }
}
