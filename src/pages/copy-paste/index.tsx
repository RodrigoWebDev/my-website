import { signal } from "@preact/signals";
import { locale } from "../../business/locale";
import { Input } from "../../components/Input";
import Layout from "../../components/Layout";
import contact from "../../data/contact.json";

const personName = signal("");
const jobLink = signal("");
const messageType = signal<"request" | "response">("request");

export const CopyPastePage = () => {
  const messages = {
    request: {
      pt: `Oi ${personName}, Tudo bem? Espero que esteja bem.

Sou desenvolvedor de Frontend com +7 anos de experiência. Acabei de aplicar em uma vaga de emprego da sua empresa${
        jobLink.value ? `: ${jobLink}` : ""
      }

Eu me encaixo bem nos requisitos do trabalho, pois trabalhei por anos usando as mesmas ferramentas e tecnologias. Neste momento, estou disponível para trabalhar em um novo projeto. Dito isto, agradeceria sua ajuda e espero que possamos trabalhar juntos em breve.

Se você quiser saber mais sobre mim:

- Whatsapp link: https://wa.me/55${contact.phone}
- Whatsapp número: 55${contact.phone}
- Email: ${contact.email}
- Meu website: ${contact.website}
- Meu perfil do linkedin: ${contact.linkedin}

Eu também deixei meu currículo anexado. Tenha um ótimo dia.
`,
      en: `Hi ${personName}, How you doing? I hope you are doing well.

I'm Frontend developer with +7 years of experience. I just applied for a job vacancy in your company${
        jobLink.value ? `: ${jobLink}` : ""
      }

I fit well with the job profile, since I worked for years using the same tools and technologies. At this moment I am available to work on a new project. That said, I would thank you for your help and I hope we can be working together soon.

These are my contacts and links:

- Whatsapp Link: https://wa.me/55${contact.phone}
- Whatsapp number: 55${contact.phone}
- Email: ${contact.email}
- My website: ${contact.website}
- My linkedin profile: ${contact.linkedin}

I also left my curriculum attached. I wish you a great day.
`,
    },
    response: {
      pt: `Olá ${personName}, tudo bem? Espero que sim.
Obrigado por entrar em contato. Eu gostei da vaga que você acabou de compartilhar comigo, acredito que se encaixe muito bem com meu perfil profissional, já que tenho experiência sólida com as tecnologias exigidas. 

No momento eu não estou trabalhando, então estou 100% disponível para um novo desafio.
Esses são meus contatos e links:

- Whatsapp link: https://wa.me/55${contact.phone}
- Whatsapp número: 55${contact.phone}
- Email: ${contact.email}
- Meu website: ${contact.website}
`,
      en: `Hello ${personName}, how are you? I hope you are well.
Thanks for contacting. I liked the vacancy you just shared with me, I believe I fit very well with the professional profile required by you, since I have solid experience with the required technologies.

At the moment I'm not working, so I'm 100% available for a new challenge.
These are my contacts and links:

- Whatsapp Link: https://wa.me/55${contact.phone}
- Whatsapp number: 55${contact.phone}
- Email: ${contact.email}
- My website: ${contact.website}
`,
    },
  };
  const message = messages[messageType.value][locale.value];

  return (
    <Layout>
      <div class="p-2 max-w-3xl mx-auto my-8">
        <h1 class="text-3xl mb-12">Copy paste</h1>

        <div className="mb-4">
          <Input
            name="personName"
            value={personName.value}
            onInput={(e: any) => {
              personName.value = e.target.value;
            }}
            placeholder="Person name"
          />
        </div>
        <div className="mb-4">
          <Input
            name="jobLink"
            value={jobLink.value}
            onInput={(e: any) => {
              jobLink.value = e.target.value;
            }}
            placeholder="Job link"
          />
        </div>

        <select
          class="select mb-4 w-full"
          onInput={(e: any) => {
            messageType.value = e.target.value;
          }}
          value={messageType.value}
        >
          <option value="request">Request</option>
          <option value="response">Response</option>
        </select>

        <textarea
          class="textarea h-[400px] w-full"
          placeholder="Bio"
          value={message}
        ></textarea>
      </div>
    </Layout>
  );
};
