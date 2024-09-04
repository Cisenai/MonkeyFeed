import 'package:flutter/material.dart';

class HomeScreen extends StatefulWidget {
  const HomeScreen({super.key});

  @override
  State<HomeScreen> createState() => _HomeScreenState();
}

class _HomeScreenState extends State<HomeScreen> {
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
        leading: IconButton(
          onPressed: () {},
          icon: Icon(
            Icons.menu,
            size: 32,
            color: Theme.of(context).colorScheme.tertiary,
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
        padding: const EdgeInsets.all(12.0),
        child: Column(
          children: [
            Container(
              color: Theme.of(context).colorScheme.onSurface,
              width: double.infinity,
              child: Column(
                children: [
                  Image.asset(
                    'assets/placeholder-image.jpg',
                  ),
                  Text(
                    'Title of the article',
                    style: TextStyle(
                      fontSize: 24,
                      fontWeight: FontWeight.bold,
                      color: Theme.of(context).colorScheme.secondary,
                    ),
                  ),
                  Text(
                    'Summary of the article',
                    style: TextStyle(
                      fontSize: 18,
                      fontWeight: FontWeight.bold,
                      color: Theme.of(context).colorScheme.secondary,
                    ),
                  ),
                  Row(),
                ],
              ),
            )
          ],
        ),
      ),
    );
  }
}
