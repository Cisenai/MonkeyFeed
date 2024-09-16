import 'package:flutter/material.dart';
import 'package:monkeyfeed/widget/feed_app_bar.dart';

class SubscriptionsScreen extends StatefulWidget {
  const SubscriptionsScreen({super.key});

  @override
  State<SubscriptionsScreen> createState() => _SubscriptionsScreenState();
}

class _SubscriptionsScreenState extends State<SubscriptionsScreen> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: const FeedAppBar(title: Text('Inscrições')),
    );
  }
}
