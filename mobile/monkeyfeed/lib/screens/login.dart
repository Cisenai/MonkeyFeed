import 'package:flutter/material.dart';
import 'package:monkeyfeed/widget/text_input.dart';

class LoginScreen extends StatefulWidget {
  const LoginScreen({super.key});

  @override
  State<LoginScreen> createState() => _LoginScreenState();
}

class _LoginScreenState extends State<LoginScreen> {
  final _formKey = GlobalKey<FormState>();

  final TextEditingController _emailController = TextEditingController();

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Form(
        key: _formKey,
        child: Column(
          children: [
            Image.asset('assets/monkey-icon.png'),
            Column(
              children: [
                TextInput(
                  validator: (value) => null,
                  controller: _emailController,
                  hintText: 'Email',
                ),
              ],
            )
          ],
        ),
      ),
    );
  }
}
