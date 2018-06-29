const fr = {
  login: {
    title: 'Connexion',
    desc: 'Renseignez votre adresse e-mail et votre mot de passe pour accéder à votre compte',
    link: 'Mot de passe oublié ?',
    fields: [
      {
        type: 'email',
        name: 'email',
        placeholder: 'Adresse e-mail',
      },
      {
        type: 'password',
        name: 'password',
        placeholder: 'Mot de passe',
      },
    ],
    submit: {
      className: 'form-submit--login',
      label: 'Se connecter',
    },
  },
  password: {
    title: 'Mot de passe oublié',
    desc: 'Renseignez votre adresse e-mail et nous vous envoyons un nouveau mot de passe tout beau tout neuf',
    link: 'Annuler',
    fields: [
      {
        type: 'email',
        name: 'email',
        placeholder: 'Adresse e-mail',
      },
    ],
    submit: {
      label: 'Regénérer mot de passe',
    },
  },
};


const en = {
  login: {
    title: 'Authentication',
    desc: 'Enter your e-mail address and password to access your account',
    link: 'Forgot password?',
    fields: [
      {
        type: 'email',
        name: 'email',
        placeholder: 'E-mail address',
      },
      {
        type: 'password',
        name: 'password',
        placeholder: 'Password',
      },
    ],
    submit: {
      className: 'form-submit--login',
      label: 'Sign in',
    },
  },
  password: {
    title: 'Renew my password',
    desc: 'Please enter your e-mail address and we will send you a brand new password.',
    link: 'Cancel',
    fields: [
      {
        type: 'email',
        name: 'email',
        placeholder: 'E-mail address',
      },
    ],
    submit: {
      label: 'Regenerate password',
    },
  },
};


export default {
  fr,
  en,
};
