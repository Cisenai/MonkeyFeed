import 'package:flutter/material.dart';
import 'package:monkeyfeed/main.dart';
import 'package:monkeyfeed/model/subscription.dart';
import 'package:monkeyfeed/model/user.dart';
import 'package:monkeyfeed/provider/feed_provider.dart';
import 'package:monkeyfeed/provider/navigation_provider.dart';
import 'package:monkeyfeed/provider/user_provider.dart';
import 'package:monkeyfeed/services/subscriptions_service.dart';
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

  void _addFeed() async {
    final Map<String, dynamic> data = {
      'idClient': user!.id,
      'nome': _nameController.text,
      'link': _siteController.text,
    };

    try {
      final User newUser =
          await SubscriptionsService.addSubscription(data: data);

      setState(() {
        Provider.of<UserProvider>(context, listen: false).user = newUser;
      });

      navigatorKey.currentState?.pop();

      ScaffoldMessenger.of(context).showSnackBar(
        const SnackBar(content: Text('Inscrição adicionada com sucesso!')),
      );
    } catch (e) {
      print(e);
    }
  }

  void _deleteSub(int subId) async {
    try {
      final User newUser = await SubscriptionsService.removeSubscription(
        userId: user!.id,
        subId: subId,
      );

      setState(() {
        Provider.of<UserProvider>(context, listen: false).user = newUser;
      });

      ScaffoldMessenger.of(context).showSnackBar(
        const SnackBar(content: Text('Inscrição apagada com sucesso!')),
      );
    } catch (e) {
      print(e);
    }
  }

  @override
  Widget build(BuildContext context) {
    user = context.read<UserProvider>().user;
    return Scaffold(
      appBar: const FeedAppBar(title: Text('Inscrições')),
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
                            key: _formKey,
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
                                        text: 'Adicionar',
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
                      onTap: () {
                        Provider.of<FeedProvider>(context, listen: false).feed =
                            sub.nome;
                        setState(() {
                          Provider.of<NavigationProvider>(context,
                                  listen: false)
                              .currentScreen = 1;
                        });
                      },
                      title: Text(
                        sub.nome.toUpperCase(),
                        style: Theme.of(context).textTheme.titleMedium,
                      ),
                      tileColor: Theme.of(context).colorScheme.tertiary,
                      shape: const RoundedRectangleBorder(
                        borderRadius: BorderRadius.all(Radius.circular(3)),
                      ),
                      trailing: IconButton(
                        onPressed: () => _deleteSub(sub.id),
                        icon: Icon(
                          Icons.close,
                          size: 36,
                          color: Theme.of(context).colorScheme.primary,
                        ),
                      ),
                      contentPadding: const EdgeInsets.only(left: 15, right: 5),
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
