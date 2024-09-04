import 'package:flutter/material.dart';
import 'package:monkeyfeed/main.dart';
import 'package:monkeyfeed/widget/button.dart';
import 'package:monkeyfeed/widget/outlined_button.dart';
import 'package:monkeyfeed/widget/text_input.dart';
import 'package:monkeyfeed/widget/text_input_toggle.dart';

class LoginScreen extends StatefulWidget {
  const LoginScreen({super.key});

  @override
  State<LoginScreen> createState() => _LoginScreenState();
}

class _LoginScreenState extends State<LoginScreen> {
  final _formKey = GlobalKey<FormState>();

  final TextEditingController _emailController = TextEditingController();
  final TextEditingController _passwordController = TextEditingController();

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
                      onPressed: () => navigatorKey.currentState?.pushReplacementNamed('/home'),
                      text: 'Entrar',
                      margin: const EdgeInsets.symmetric(vertical: 7.5),
                    ),
                  ],
                ),
              ),
              OutlinedFormButton(
                onPressed: () =>
                    navigatorKey.currentState?.pushNamed('/register'),
                text: 'Cadastre-se',
              ),
            ],
          ),
        ),
      ),
    );
  }
}
