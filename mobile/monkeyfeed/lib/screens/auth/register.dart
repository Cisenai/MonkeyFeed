import 'package:flutter/material.dart';
import 'package:monkeyfeed/main.dart';
import 'package:monkeyfeed/widget/button.dart';
import 'package:monkeyfeed/widget/outlined_button.dart';
import 'package:monkeyfeed/widget/text_input.dart';
import 'package:monkeyfeed/widget/text_input_toggle.dart';

class RegisterScreen extends StatefulWidget {
  const RegisterScreen({super.key});

  @override
  State<RegisterScreen> createState() => _RegisterScreenState();
}

class _RegisterScreenState extends State<RegisterScreen> {
  final _formKey = GlobalKey<FormState>();

  final TextEditingController _emailController = TextEditingController();
  final TextEditingController _passwordController = TextEditingController();
  final TextEditingController _nameController = TextEditingController();

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Form(
        key: _formKey,
        child: Padding(
          padding: const EdgeInsets.all(12.0),
          child: Column(
            mainAxisAlignment: MainAxisAlignment.center,
            children: [
              Image.asset('assets/monkey-icon.png', height: 150),
              Padding(
                padding: const EdgeInsets.symmetric(vertical: 50),
                child: Column(
                  children: [
                    TextInput(
                      validator: (value) => null,
                      controller: _nameController,
                      hintText: 'Nome',
                      margin: const EdgeInsets.symmetric(vertical: 7.5),
                    ),
                    TextInput(
                      validator: (value) => null,
                      controller: _emailController,
                      hintText: 'Email',
                      margin: const EdgeInsets.symmetric(vertical: 7.5),
                    ),
                    TextInputToggle(
                      validator: (value) => null,
                      controller: _passwordController,
                      hintText: 'Senha',
                      margin: const EdgeInsets.symmetric(vertical: 7.5),
                    ),
                    Button(
                      onPressed: () {},
                      text: 'Cadastrar',
                      margin: const EdgeInsets.symmetric(vertical: 7.5),
                    ),
                  ],
                ),
              ),
              OutlinedFormButton(
                onPressed: () => navigatorKey.currentState?.pushNamed('/login'),
                text: 'Já possui uma conta?',
              ),
            ],
          ),
        ),
      ),
    );
  }
}
