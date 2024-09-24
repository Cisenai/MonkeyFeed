import 'package:flutter/material.dart';
import 'package:monkeyfeed/main.dart';
import 'package:monkeyfeed/model/user.dart';
import 'package:monkeyfeed/provider/theme_provider.dart';
import 'package:monkeyfeed/provider/user_provider.dart';
import 'package:monkeyfeed/widget/button.dart';
import 'package:monkeyfeed/widget/feed_app_bar.dart';
import 'package:monkeyfeed/widget/modal_separator.dart';
import 'package:monkeyfeed/widget/text_input.dart';
import 'package:provider/provider.dart';

extension StringExtension on String {
    String capitalize() {
      return "${this[0].toUpperCase()}${substring(1).toLowerCase()}";
    }
}

class ProfileScreen extends StatefulWidget {
  const ProfileScreen({super.key});

  @override
  State<ProfileScreen> createState() => _ProfileScreenState();
}

class _ProfileScreenState extends State<ProfileScreen> {
  User? user;

  final TextEditingController _nameController = TextEditingController();
  final TextEditingController _emailController = TextEditingController();

  void _editUser({
    required String field,
    required String value,
  }) async {
    final Map<String, dynamic> data = {
      field: value,
    };

    try {
      Provider.of<UserProvider>(context, listen: false).updateUser(data);

      ScaffoldMessenger.of(context).showSnackBar(
        SnackBar(content: Text('${field.capitalize()} atualizado com sucesso')),
      );
    } catch (e) {
      ScaffoldMessenger.of(context).showSnackBar(
        SnackBar(content: Text('Erro ao atualizar $field')),
      );
    }
  }

  void _logout() {
    navigatorKey.currentState?.pushReplacementNamed('/login');
  }

  @override
  Widget build(BuildContext context) {
    user = Provider.of<UserProvider>(context).user;
    return Scaffold(
      appBar: const FeedAppBar(title: Text('Perfil')),
      body: ListView(
        children: [
          Padding(
            padding: const EdgeInsets.symmetric(vertical: 50),
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.center,
              children: [
                Container(
                  width: 175,
                  height: 175,
                  decoration: BoxDecoration(
                    color: Theme.of(context).colorScheme.tertiary,
                    borderRadius: BorderRadius.circular(100),
                  ),
                ),
                const SizedBox(height: 10),
                Text(
                  user!.nome,
                  style: TextStyle(
                    fontSize: 24,
                    color: Theme.of(context).colorScheme.primary,
                  ),
                ),
              ],
            ),
          ),
          Container(
            width: double.infinity,
            margin: const EdgeInsetsDirectional.all(5),
            padding: const EdgeInsets.all(10),
            decoration: BoxDecoration(
              color: Theme.of(context).colorScheme.onSurface,
            ),
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Text(
                  'Aparência',
                  style: TextStyle(
                    fontSize: 22,
                    fontWeight: FontWeight.w700,
                    color: Theme.of(context).colorScheme.primary,
                  ),
                ),
                Padding(
                  padding: const EdgeInsets.symmetric(vertical: 10),
                  child: Row(
                    children: [
                      Icon(
                        Icons.dark_mode,
                        size: 32,
                        color: Theme.of(context).colorScheme.secondary,
                      ),
                      const SizedBox(width: 10),
                      Expanded(
                        child: SwitchListTile(
                          value: context.read<ThemeProvider>().darkMode,
                          title: Text(
                            'Tema Escuro',
                            style: TextStyle(
                              fontSize: 20,
                              color: Theme.of(context).colorScheme.primary,
                            ),
                          ),
                          contentPadding: EdgeInsets.zero,
                          onChanged: (bool value) {
                            setState(() {
                              context.read<ThemeProvider>().darkMode = value;
                            });
                            context.read<ThemeProvider>().toggleTheme();
                          },
                        ),
                      ),
                    ],
                  ),
                ),
                Text(
                  'Suas Informações',
                  style: TextStyle(
                    fontSize: 22,
                    fontWeight: FontWeight.w700,
                    color: Theme.of(context).colorScheme.primary,
                  ),
                ),
                Padding(
                  padding: const EdgeInsets.symmetric(vertical: 10),
                  child: Column(
                    children: [
                      Row(
                        mainAxisAlignment: MainAxisAlignment.spaceBetween,
                        children: [
                          Text(
                            'Nome',
                            style: TextStyle(
                              fontSize: 20,
                              color: Theme.of(context).colorScheme.primary,
                            ),
                          ),
                          Row(
                            children: [
                              Text(
                                user!.nome,
                                style: TextStyle(
                                  fontSize: 16,
                                  color: Theme.of(context).colorScheme.primary,
                                ),
                              ),
                              IconButton(
                                onPressed: () {
                                  showBottomSheet(
                                    context: context,
                                    builder: (context) {
                                      return EditModal(
                                        field: 'name',
                                        controller: _nameController,
                                        onEdit: (field, value) => _editUser(
                                          field: field,
                                          value: value,
                                        ),
                                      );
                                    },
                                  );
                                },
                                icon: Icon(
                                  Icons.edit,
                                  size: 32,
                                  color: Theme.of(context).colorScheme.tertiary,
                                ),
                              ),
                            ],
                          ),
                        ],
                      ),
                      Row(
                        mainAxisAlignment: MainAxisAlignment.spaceBetween,
                        children: [
                          Text(
                            'Email',
                            style: TextStyle(
                              fontSize: 20,
                              color: Theme.of(context).colorScheme.primary,
                            ),
                          ),
                          Row(
                            children: [
                              Text(
                                user!.email,
                                style: TextStyle(
                                  fontSize: 16,
                                  color: Theme.of(context).colorScheme.primary,
                                ),
                              ),
                              IconButton(
                                onPressed: () {
                                  showBottomSheet(
                                    context: context,
                                    builder: (context) {
                                      return EditModal(
                                        field: 'email',
                                        controller: _emailController,
                                        onEdit: (field, value) => _editUser(
                                          field: field,
                                          value: value,
                                        ),
                                      );
                                    },
                                  );
                                },
                                icon: Icon(
                                  Icons.edit,
                                  size: 32,
                                  color: Theme.of(context).colorScheme.tertiary,
                                ),
                              ),
                            ],
                          ),
                        ],
                      ),
                      Align(
                        alignment: Alignment.centerRight,
                        child: TextButton(
                          onPressed: _logout,
                          child: Text(
                            'Sair da sua Conta',
                            style: TextStyle(
                              fontSize: 20,
                              color: Theme.of(context).colorScheme.primary,
                            ),
                          ),
                        ),
                      ),
                    ],
                  ),
                ),
              ],
            ),
          )
        ],
      ),
    );
  }
}

class EditModal extends StatelessWidget {
  EditModal({
    super.key,
    required this.field,
    required this.controller,
    required this.onEdit,
  });

  final String field;
  final TextEditingController controller;
  final Function(String, String) onEdit;

  final _formKey = GlobalKey<FormState>();

  @override
  Widget build(BuildContext context) {
    return SizedBox(
      height: MediaQuery.of(context).size.height * 0.35,
      child: Center(
        child: Form(
          key: _formKey,
          child: Padding(
            padding: const EdgeInsets.all(10.0),
            child: Column(
              children: [
                const ModalSeparator(),
                Text(
                  'Editar',
                  style: Theme.of(context).textTheme.titleMedium,
                ),
                Padding(
                  padding: const EdgeInsets.symmetric(vertical: 15),
                  child: TextInput(
                    controller: controller,
                    validator: (value) {
                      if (value == null || value.isEmpty) {
                        return 'Por favor seu nome';
                      }
                      return null;
                    },
                    hintText: 'Digite aqui...',
                  ),
                ),
                Row(
                  children: [
                    Expanded(
                      child: Button(
                        onPressed: () => navigatorKey.currentState?.pop(),
                        text: 'Cancelar',
                        color: Theme.of(context).colorScheme.secondary,
                        margin: const EdgeInsets.only(right: 5),
                      ),
                    ),
                    Expanded(
                      child: Button(
                        onPressed: () {
                          if (_formKey.currentState!.validate()) {
                            onEdit(field, controller.text);
                            controller.text = '';
                            navigatorKey.currentState?.pop();
                          }
                        },
                        text: 'Aplicar',
                        color: Theme.of(context).colorScheme.tertiary,
                        margin: const EdgeInsets.only(left: 5),
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
  }
}
