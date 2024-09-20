import 'package:flutter/material.dart';
import 'package:monkeyfeed/model/subscription.dart';
import 'package:monkeyfeed/model/user.dart';
import 'package:monkeyfeed/provider/user_provider.dart';
import 'package:monkeyfeed/widget/button.dart';
import 'package:monkeyfeed/widget/feed_app_bar.dart';
import 'package:provider/provider.dart';

class SubscriptionScreen extends StatefulWidget {
  const SubscriptionScreen({super.key});

  @override
  State<SubscriptionScreen> createState() => _SubscriptionScreenState();
}

class _SubscriptionScreenState extends State<SubscriptionScreen> {
  User? user;

  @override
  Widget build(BuildContext context) {
    user = context.read<UserProvider>().user;
    return Scaffold(
      appBar: const FeedAppBar(title: Text('Perfil')),
      body: Padding(
        padding: const EdgeInsets.all(10.0),
        child: Column(
          children: [
            Button(
              onPressed: () {},
              text: 'Adicionar Feed',
              color: Theme.of(context).colorScheme.secondary,
            ),
            Expanded(
              child: ListView.builder(
                itemCount: user!.subscriptions.length,
                itemBuilder: (context, index) {
                  final Subscription sub =
                      Subscription.fromJson(user!.subscriptions[index]);

                  return Padding(
                    padding: const EdgeInsets.symmetric(vertical: 5),
                    child: ListTile(
                      title: Text(
                        sub.nome.toUpperCase(),
                        style: Theme.of(context).textTheme.titleMedium,
                      ),
                      tileColor: Theme.of(context).colorScheme.tertiary,
                      shape: const RoundedRectangleBorder(
                        borderRadius: BorderRadius.all(Radius.circular(3)),
                      ),
                    ),
                  );
                },
              ),
            ),
          ],
        ),
      ),
    );
  }
}
