// ===================================================
// CONFIGURAÇÃO DO SUMLY
// ===================================================
// Este arquivo guarda o que é seu: chaves, preços e contatos.
// Ele NUNCA é sobrescrito nas atualizações do app — configure uma vez
// e não precisa mexer de novo.

const SUMLY_CONFIG = {

  // --- Proteção contra abuso (Firebase App Check) ---
  // Chave pública do reCAPTCHA v3, gerada no Console do Firebase em
  // Build → App Check. Impede que alguém use suas chaves para disparar
  // milhões de requisições e inflar sua conta.
  // Deixe vazio enquanto não configurar — o app funciona sem, só fica desprotegido.
  recaptchaSiteKey: '',

  // --- Cobrança e assinatura ---
  assinatura: {
    precoMensal: 'R$ 14,90',

    // URL do backend na Vercel (sem barra no final).
    // Deixando vazio, o app cai no modo Pix manual.
    urlBackend: 'https://financeiro-pagamentos.vercel.app',

    // Usados só quando não há backend configurado
    chavePix: 'davipf57@gmail.com',
    whatsappSuporte: '5548999544454',   // DDI + DDD + número, só dígitos

    // E-mails que podem liberar assinaturas manualmente.
    // Precisa bater com a lista em firestore.rules → souAdministrador()
    administradores: ['davipf57@gmail.com']
  },

  // --- Conexão com o Firebase ---
  // Não é segredo: são endereços públicos do seu projeto. A segurança de
  // verdade vem do login e das regras do Firestore.
  firebase: {
    apiKey: "AIzaSyCkbchoupXabFCp3asqWXt203FqJL6E_QY",
    authDomain: "controle-financeiro-6c605.firebaseapp.com",
    projectId: "controle-financeiro-6c605",
    storageBucket: "controle-financeiro-6c605.firebasestorage.app",
    messagingSenderId: "5568822221",
    appId: "1:5568822221:web:9bc802718b05f4de9e2284"
  }

};
