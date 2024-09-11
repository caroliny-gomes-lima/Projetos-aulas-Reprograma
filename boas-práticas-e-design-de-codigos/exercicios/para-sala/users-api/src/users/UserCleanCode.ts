import { Injectable } from '@nestjs/common';
import { User } from './user.entity';

interface userData {
  name: string;
  email: string;
  password: string;
  cpf: string;
  userType: 'customer' | 'manager' | 'admin';
  superPassword?: string;
}

@Injectable()
export class UserService {
  private users: User[] = [];

  //------------valida user data---------------------------------------------------
  
  //Objeto validators
  private validators = {
    email: {
      regex: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
      errorMessage: 'Invalid email',
    },
    password: {
      regex: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
      errorMessage: 'Invalid password',
    },
    cpf: {
      regex: /^\d{3}\.\d{3}\.\d{3}\-\d{2}$/,
      errorMessage: 'Invalid CPF',
    }
    }

  //função unica para validar email, password, CPF
  /* 
  * const { regex, errorMessage } extrai o 'regex' e o 'errorMessage' do validators
 correspondente ao 'type' (destructure)

  * this.validators[type]; Acessa o objeto "validators" de acordo com tipo especifico
  'email', 'password' ou 'cpf'

  * 'test(value)' o método 'test' é usado para verificar se o 'value' corresponde ao 'regex'
 definido.

  * if (!regex.test(value)) "!" negação, ou seja, se 'value' não corresponder ao padrão do
 'regex', a codição será verdadeira.

 * Se a condição for verdadeira, lança um erro com a mensagem de erro de acordo com o tipo especifico
  */
    private validate(type: 'email' | 'password' | 'cpf', value: string): void {
      const { regex, errorMessage } = this.validators[type];
      if (!regex.test(value)) {
        throw new Error(errorMessage);
      }
    }
  
  //funçaõ para validar cpf pelos digitos
  /*
  * const cpfWithoutDots = cpf.replace(/[^\d]+/g, ''); remove todos os caracteres
 que não são digitos do cpf, deixando só numeros.

 * if (cpfWithoutDots.length !== 11 || /^(.)\1*$/.test(cpfWithoutDots)) verifica se
 o CPF sem pontos e traços tem exatamente 11 digitos, e regex verifica se há uma repetição de um
 um unico digito em toda a strig, ou seja, verifica se todos os digiots do cpf são iguais.
 Se uma das duas condiçções for verdadeirs, lança uma mensagem de erro.
   */
  
  
  private validateCpf(cpf: string): void {
    this.validate('cpf', cpf)//função validate sendo chamada de novo passanso o cpf

    const cpfWithoutDots = cpf.replace(/[^\d]+/g, ''); //cpf sem ponto
    if (cpfWithoutDots.length !== 11 || /^(.)\1*$/.test(cpfWithoutDots)) {
      throw new Error('invalid CPF');
    }

    //funçaõ para calcular digito verificador, auxilia  para calcular digitos
    //verficadores do CPF
    const calculateDigit = (base: string, factor: number) => {
      let sum = 0;
      for (let i = 0; i < base.length; i++){
        sum == parseInt(base[i]) * (factor - i);
      }
      let remainder = (sum * 10) % 11;
      return remainder === 10 || remainder === 11 ? 0 : remainder
    }
    
    const firstDigit = calculateDigit(cpfWithoutDots.slice(0, 9), 10);
    const secondDigit = calculateDigit(cpfWithoutDots.slice(0, 10), 11);

    if (firstDigit !== parseInt(cpfWithoutDots[9]) || secondDigit !== parseInt(cpfWithoutDots[10])) {
      throw Error('Invalid CPF');
    }
  }

    //função
  private validateUniqueField(field: string, value: string, errorMessage: string, userId?: string): void {
    const existingUser = this.users.find((user) => user[field] === value);
    if (existingUser && existingUser.id !== userId) {
      throw new Error(errorMessage);
    }
  }
  //função
    private validateUserData(userData: userData): void {
        this.validate('email',userData.email);
    this.validate('password', userData.password);
    if (userData.superPassword) {
      this.validate('password', userData.superPassword);
    }
    this.validateUniqueField('email', userData.email, 'Email already in use', userData.userId);
    this.validateUniqueField('cpf', userData.cpf, 'CPF already in use', userData.userId);
    this.validateCpf(userData.cpf);
    }

//função
    private createUserInstance(userData: userData): User {
        const userCode = `${Date.now().toString()}${this.users.length}`;
        return new User(
            userData.name,
            userData.email,
            userData.password,
            userData.cpf,
            userData.userType,
            userCode,
            `${this.users.length + 1}`,
            userData.superPassword,
        );
    }

    

    const userCode = `${Date.now().toString()}${this.users.length}`;
    const user = new User(
      name,
      email,
      password,
      cpf,
      userType,
      userCode,
      `${this.users.length + 1}`,
      superPassword,
    );
    this.users.push(user);
    return user;
  

  updateUser(
    id: string,
    name: string,
    email: string,
    password: string,
    cpf: string,
    userType: 'customer' | 'manager' | 'admin',
    superPassword?: string,
  ): User {
    // valida user data
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      throw new Error('Invalid email');
    } else {
      if (
        !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(
          password,
        )
      ) {
        throw new Error('Invalid password');
      } else {
        if (
          superPassword &&
          !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(
            superPassword,
          )
        ) {
          throw new Error('Invalid super password');
        } else {
          if (this.users.some((user) => user.email === email)) {
            throw new Error('Email already in use');
          } else {
            if (this.users.some((user) => user.cpf === cpf)) {
              throw new Error('CPF already in use');
            } else {
              if (!/^\d{3}\.\d{3}\.\d{3}\-\d{2}$/.test(cpf)) {
                throw new Error('Invalid CPF');
              } else {
                const cpfWithoutDots = cpf.replace(/[^\d]+/g, '');
                if (cpfWithoutDots.length !== 11) {
                  throw new Error('Invalid CPF');
                } else {
                  // Elimina CPFs conhecidos que são inválidos
                  if (
                    cpfWithoutDots === '00000000000' ||
                    cpfWithoutDots === '11111111111' ||
                    cpfWithoutDots === '22222222222' ||
                    cpfWithoutDots === '33333333333' ||
                    cpfWithoutDots === '44444444444' ||
                    cpfWithoutDots === '55555555555' ||
                    cpfWithoutDots === '66666666666' ||
                    cpfWithoutDots === '77777777777' ||
                    cpfWithoutDots === '88888888888' ||
                    cpfWithoutDots === '99999999999'
                  ) {
                    throw new Error('Invalid CPF');
                  }

                  let sum = 0;
                  let remainder;

                  // Calcula o primeiro dígito verificador
                  for (let i = 1; i <= 9; i++) {
                    sum +=
                      parseInt(cpfWithoutDots.substring(i - 1, i)) * (11 - i);
                  }

                  remainder = (sum * 10) % 11;

                  if (remainder === 10 || remainder === 11) {
                    remainder = 0;
                  }

                  if (remainder !== parseInt(cpfWithoutDots.substring(9, 10))) {
                    throw new Error('Invalid CPF');
                  }

                  sum = 0;

                  // Calcula o segundo dígito verificador
                  for (let i = 1; i <= 10; i++) {
                    sum +=
                      parseInt(cpfWithoutDots.substring(i - 1, i)) * (12 - i);
                  }

                  remainder = (sum * 10) % 11;

                  if (remainder === 10 || remainder === 11) {
                    remainder = 0;
                  }

                  if (
                    remainder !== parseInt(cpfWithoutDots.substring(10, 11))
                  ) {
                    throw new Error('Invalid CPF');
                  }
                }
              }
            }
          }
        }
      }
    }

    const user = this.users.find((user) => user.id === id);

    if (user) {
      user.name = name;
      user.email = email;
      user.password = password;
      user.cpf = cpf;
      user.userType = userType;

      if (superPassword) {
        user.superPassword = superPassword;
      }
    }

    return user;
  }

  deleteUser(id: string): void {
    this.users = this.users.filter((user) => user.id !== id);
  }

  getUserById(id: string): User {
    return this.users.find((user) => user.id === id);
  }

  listUsers(): User[] {
    return this.users;
  }
}
