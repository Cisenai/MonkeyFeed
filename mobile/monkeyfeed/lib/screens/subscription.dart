import 'package:flutter/material.dart';
import 'package:monkeyfeed/main.dart';
import 'package:monkeyfeed/model/subscription.dart';
import 'package:monkeyfeed/model/user.dart';
import 'package:monkeyfeed/provider/feed_provider.dart';
import 'package:monkeyfeed/provider/user_provider.dart';
import 'package:monkeyfeed/widget/button.dart';
import 'package:monkeyfeed/widget/feed_app_bar.dart';
import 'package:monkeyfeed/widget/modal_separator.dart';
import 'package:monkeyfeed/widget/text_input.dart';
import 'package:provider/provider.dart';

class SubscriptionScreen extends StatefulWidget {
  const SubscriptionScreen({super.key});

  @override
  State<SubscriptionScreen> createState() => _SubscriptionScreenState();
}

class _SubscriptionScreenState extends State<SubscriptionScreen> {
  User? user;

  final _formKey = GlobalKey<FormState>();

  final TextEditingController _nameController = TextEditingController();
  final TextEditingController _siteController = TextEditingController();

  void _addFeed() {}

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
              onPressed: () {
                showBottomSheet(
                  context: context,
                  builder: (context) {
                    return SizedBox(
                      height: MediaQuery.of(context).size.height * 0.45,
                      child: Center(
                        child: Padding(
                          padding: const EdgeInsets.all(10.0),
                          child: Form(
                            child: Column(
                              children: [
                                const ModalSeparator(),
                                Padding(
                                  padding: const EdgeInsets.symmetric(
                                    vertical: 5,
                                  ),
                                  child: Text(
                                    'Adcionar Feed',
                                    style:
                                        Theme.of(context).textTheme.titleMedium,
                                  ),
                                ),
                                TextInput(
                                  controller: _nameController,
                                  validator: (value) => null,
                                  hintText: 'Nome',
                                  margin:
                                      const EdgeInsets.symmetric(vertical: 5),
                                ),
                                TextInput(
                                  controller: _siteController,
                                  validator: (value) => null,
                                  hintText: 'Site',
                                  margin: const EdgeInsets.symmetric(
                                    vertical: 5,
                                  ),
                                ),
                                Row(
                                  children: [
                                    Expanded(
                                      child: Button(
                                        onPressed: () =>
                                            navigatorKey.currentState?.pop(),
                                        text: 'Cancelar',
                                        color: Theme.of(context)
                                            .colorScheme
                                            .secondary,
                                        margin: const EdgeInsets.symmetric(
                                          vertical: 5,
                                        ),
                                      ),
                                    ),
                                    const SizedBox(width: 10),
                                    Expanded(
                                      child: Button(
                                        onPressed: () {
                                          if (_formKey.currentState!
                                              .validate()) {
                                            _addFeed();
                                          }
                                        },
                                        text: 'Aplicar',
                                        color: Theme.of(context)
                                            .colorScheme
                                            .tertiary,
                                        margin: const EdgeInsets.symmetric(
                                          vertical: 5,
                                        ),
                                      ),
                                    ),
                                  ],
                                ),
                              ],
                            ),
                          ),
                        ),
                      ),
                    );
                  },
                );
              },
              text: 'Adicionar Feed',
              color: Theme.of(context).colorScheme.secondary,
              margin: const EdgeInsets.only(bottom: 10),
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
                      onTap: () =>
                          Provider.of<FeedProvider>(context, listen: false)
                              .feed = sub.nome,
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
