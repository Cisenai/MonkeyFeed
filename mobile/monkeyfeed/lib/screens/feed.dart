import 'package:flutter/material.dart';
import 'package:monkeyfeed/model/new.dart';
import 'package:monkeyfeed/services/news_service.dart';
import 'package:monkeyfeed/widget/news_widget.dart';

class FeedScreen extends StatefulWidget {
  const FeedScreen({super.key});

  @override
  State<FeedScreen> createState() => _FeedScreenState();
}

class _FeedScreenState extends State<FeedScreen> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
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
        leading: Builder(
          builder: (context) => IconButton(
            onPressed: () {
              Scaffold.of(context).openDrawer();
            },
            icon: Icon(
              Icons.menu,
              size: 32,
              color: Theme.of(context).colorScheme.tertiary,
            ),
          ),
        ),
        actions: [
          IconButton(
            onPressed: () {},
            icon: Icon(
              Icons.search,
              size: 32,
              color: Theme.of(context).colorScheme.tertiary,
            ),
          ),
        ],
      ),
      body: Padding(
        padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 5),
        child: FutureBuilder(
          future: NewsService.getNews(),
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
                      summary: news.summary,
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
