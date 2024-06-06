import { Center, Container, Grid, Text, Title } from "@mantine/core";
import ProjectCard from "./ProjectCard";
import classes from './styles.module.css';
import { IconBrandAngular, IconBrandAzure, IconBrandCSharp, IconBrandDocker, IconBrandFirebase, IconBrandGithub, IconBrandGolang, IconBrandJavascript, IconBrandMysql, IconBrandNodejs, IconBrandPython, IconBrandReact, IconBrandTypescript, IconBrandUnity, IconWebhook } from "@tabler/icons-react";
import { useState } from "react";
import ProjectDetails from "./ProjectDetails";

const projEx = [
      {
        employer: "Posten Bring",
        title: "Summer of PAPP",
        topic: "Cloud Infrastructure",
        description: "Under internshipet utviklet konsulenten en web-applikasjon og deployet den i PAPP (Postens applikasjonstjeneste). PAPP eksisterer i et Kubernetes-cluster på Azure og er designet for enkel distribusjon av applikasjoner. Web-applikasjonens hovedfunksjon var å fungere som en bruksanvisning for denne tjenesten. Applikasjonen var en to-do-list hvor brukerne kunne logge inn, legge til og fjerne elementer fra listen sin. Det var også admin-brukere med mulighet til å gjennomgå alle brukernes todolister. Teamet etablerte CI/CD for prosjektet gjennom Azure. Prosjektet involverte også mye Infrastructure as Code (IaC), inkludert Role-Based Access Control (RBAC), oppsett av repositories og tilganger, domenebruk for appen, samt tildeling av en delt PostgreSQL-database i Kubernetes-clusteret ved hjelp av IaC skrevet i Terraform. For autentisering og autorisering i applikasjonen ble Posten Brings Azure Single Sign-On (SSO)-system og OAuth2 brukt. Frontenden til applikasjonen ble utviklet med REACT i TypeScript, mens backenden var skrevet i Java med Spring-rammeverket. Konsulenten deltok i utviklingen sammen med et team på tre, hvor mye av arbeidet ble gjennomført gjennom samkoding, noe som ga bred erfaring med alle aspekter av prosjektet. Under internshipet tok konsulenten rollen som en pådriver i prosjektet. Han initierte og oppmuntret teamet til å fortsette med prosjektet, til tross for begrenset erfaring fra alle i teknologien involvert."
      },
      {
        employer: "NTNU - eVici",
        title: "Bacheloroppgave",
        topic: "Forskning, utdanning og undervisning",
        description: "Konsulenten jobbet i et samarbeidende team på to personer under bacheloroppgaven med klienten eVici. Teamet arbeidet tett med eVici gjennom hele prosjektet, og selv om innholdet av bacheloroppgaven ikke kan deles, involverte arbeidet utvikling av back-end API for en front-end skrevet i JavaScript med Node.js-rammeverket. En annen backend bit for å hente og behandle data, inkludert bilder, fra et annet API utviklet i Python. Frontenden av webapplikasjonen ble utviklet i Angular med typescript, og hele løsningen ble «hostet» på Firebase-plattformen. Teamet benyttet en agil arbeidsmetodikk med kanban-tavle for oppgavestyring, sprinter under intense perioder med tidsfrister som prototype-visning og MVP-levering. De gjennomførte også ukentlige møter sammen med klient for statusoppdateringer og å planlegge framtidig fokus. I prosjektet deltok Alexander i alle partene av utviklingen. Han hadde også rollen som delprosjektleder, hvor han planla prosjektforløpet ved å lage Gantt-diagram over tidsplanen, organiserte møter med både klient og team, og håndterte oppgavefordeling. Han deltok også aktivt i planleggingen av hvilke teknologier og programmeringsspråk som skulle brukes for prosjektet, i samråd med klienten."
      },
      {
        employer: "Boolean UK",
        title: "Bob's Beagles",
        topic: "Forskning, utdanning og undervisning",
        description: "Under upskill-perioden med Boolean UK arbeidet Alexander sammen med Marit og Nora for å utvikle et e-handelsnettsted for kjæledyrprodukter. Prosjektet ble utført ved hjelp av Java Spring Boot for backenden, med integrasjon av Spring Security ved bruk av JWT for autentisering og Spring JPA Data for databasestyring. Frontenden ble utviklet med React, og Mantine-biblioteker ble benyttet for å bygge et brukervennlig grensesnitt.\n"+
   
        "For databaseløsning benyttet teamet Postgres, og hele applikasjonen ble versjonskontrollert gjennom Git og organisert med GitHub Projects. Utviklingsarbeidet foregikk i egne branches, og kode sammenslåinger til hovedgrenen ble nøye gjennomgått gjennom pull requests og kodegjennomganger for å sikre høy kvalitet og konsistens i koden. En gruppelederrolle, som ble rullert blant teammedlemmene, hadde ansvar for å gjennomgå og merge disse pull requestene.\n"+
         
        "Teamet implementerte også CI/CD-pipelines ved hjelp av GitHub Actions, som automatiserte deployment av både frontend og backend. Disse inkluderte dockerisering av applikasjonens komponenter for sikker og effektiv deployment, med GitHub Secrets for å håndtere sensitive data som databasekoder.\n"+
         
        "Prosjektet er offentlig og kan bli funnet her: https://github.com/users/AGatland/projects/4"
      },
      {
        employer: "NTNU",
        title: "Datamodellering og databasesystemer",
        topic: "Forskning, utdanning og undervisning",
        description: "Konsulenten samarbeidet i en to-personers gruppe for å utvikle en HTTP-basert RESTful API for en ski fabrikk. Prosjektet involverte å lage en løsning på et gitt scenario ved å designe en hensiktsmessig databaseløsning for å håndtere all relevant informasjon og utvikle en API med spesifikke endepunkter. Alexander sin rolle omfattet hovedfokus på utviklingen, selv om han deltok aktivt på alle områder. APIen ble konstruert for å være tilgjengelig fra ulike brukertyper, inkludert ansatte ('employees'), som skulle kunne utføre sine egne oppgaver. Utviklingen av APIen ble gjennomført med Python, der Flask-rammeverket ble benyttet, mens databasen ble satt opp som en MySQL-database ved hjelp av XAMPP. Under prosjektet hadde Alexander som hovedrolle"
      },
      {
        employer: "NTNU",
        title: "Cloud Technologies",
        topic: "Forskning, utdanning og undervisning",
        description: 'Konsulenten utviklet en API som integrerte data fra to separate APIer om Covid-19-tilfeller og tiltak. Målet var å hente spesifikke data fra begge APIene, kombinere dem og lagre resultatet i en egen database. Den resulterende applikasjonen tillot brukeren å få tilgang til informasjon om retningslinjer og smittesituasjonen i forskjellige land. Videre hadde brukeren muligheten til å administrere webhooks, som skulle notifisere den angitte URLen hver gang et spesifikt antall "invocations" ble nådd for et bestemt land. APIen ble implementert ved hjelp av Golang, mens databasen ble satt opp i Firestore.'
      },
      {
        employer: "NTNU",
        title: "Spillprogrammering",
        topic: "Forskning, utdanning og undervisning",
        description: 'Konsulenten jobbet med et team for å utvikle et 2D-overlevelsesspill med en unik tilnærming. Spillet tilbød spillere en top-down synsvinkel, som tillot 360-graders bevegelse mens de navigerte gjennom genererte baner og bekjempet fiender. For å gi en variert opplevelse ble banene automatisk generert, og spillerne unngikk å møte på samme nivå flere ganger. I spilletantok spilleren rollen som en trollmann med angrepsevnen til å kaste en flammekule. Det ble implementert ulike "items" som kunne plukkes opp og ga spilleren fordeler, for eksempel økt hastighet eller økt skade. Teamet jobbet også med å utvikle diverse fiender som hadde forskjellige angrepsmønstre og bevegelsesmønstre for å øke spillbarheten. Hele prosjektet ble utviklet i Unity-plattformen ved bruk av C#. Konsulentens hovedoppgave var utviklingen av "items" og "Boss"-fiender. Disse "Boss"- fiendene hadde unike og et bredere utvalg av bevegelsesmønstre, angrep og animasjoner.'
      }
    ]
  

const projExPre = [
        {
          employer: "Posten Bring",
          title: "Summer of PAPP",
          topic: "Cloud Infrastructure",
          shortDesc: "Summer internship hos posten bring",
          skills: [<Title key={0} order={3}>Java</Title>, <IconBrandTypescript key={1} size={"30"}/>, <IconBrandReact key={2} size={"30"}/>, <Title key={3} order={3}>PostgreSQL</Title>, <Title key={4} order={3}>REST</Title>, <IconBrandGithub key={5} size={"30"}/>, <Title key={6} order={3}>CI/CD</Title>, <IconBrandDocker key={7} size={"30"}/>, <IconBrandAzure key={8} size={"30"}/>]
        },
        {
          employer: "NTNU - eVici",
          title: "Bacheloroppgave",
          topic: "Forskning, utdanning og undervisning",
          shortDesc: "Bacheloroppgave med ekstern klient",
          skills: [<IconBrandTypescript key={0} size={"30"}/>, <IconBrandAngular key={1} size={"30"}/>, <IconBrandJavascript key={2} size={"30"}/>, <IconBrandPython key={3} size={"30"}/>, <IconBrandNodejs key={4} size={"30"}/>, <IconBrandFirebase key={5} size={"30"}/>, <Title key={6} order={3}>CI/CD</Title>],
        },
        {
          employer: "Boolean UK",
          title: "Bob's Beagles",
          topic: "Forskning, utdanning og undervisning",
          shortDesc: "Gruppeprosjekt under Experis Academy sitt upskilling program",
          skills: [<Title key={0} order={3}>Java</Title>, <IconBrandJavascript key={1} size={"30"}/>, <IconBrandReact key={2} size={"30"}/>, <Title key={3} order={3}>PostgreSQL</Title>, <Title key={4} order={3}>REST</Title>, <IconBrandGithub key={5} size={"30"}/>, <Title key={6} order={3}>CI/CD</Title>, <IconBrandDocker key={7} size={"30"}/>],
        },
        {
          employer: "NTNU",
          title: "Datamodellering og databasesystemer",
          topic: "Forskning, utdanning og undervisning",
          shortDesc: "Gruppeprosjekt med database modellering og API oppsett",
          skills: [<IconBrandPython key={0} size={"30"}/>, <IconBrandMysql key={1} size={"30"}/>, <Title key={2} order={3}>REST</Title>],
        },
        {
          employer: "NTNU",
          title: "Cloud Technologies",
          topic: "Forskning, utdanning og undervisning",
          shortDesc: "Individuelt prosjekt med interaksjon med eskterne APIer",
          skills: [<IconBrandGolang key={0} size={"30"}/>, <IconBrandFirebase key={1} size={"30"}/>, <Title key={2} order={3}>REST</Title>, <IconWebhook key={3} size={"30"}/>],
        },
        {
          employer: "NTNU",
          title: "Spillprogrammering",
          topic: "Forskning, utdanning og undervisning",
          shortDesc: "Gruppeprosjekt med planlegging og utvikling av eget spill",
          skills: [<IconBrandCSharp key={0} size={"30"}/>, <IconBrandUnity key={1} size={"30"}/>],
        }
      ]


export default function Projects() {
    const [ selectedCard, setSelectedCard ] = useState(-1)

    const ProjectCards = projExPre.map((object, index) => (
            <Grid.Col key={index} span={{sm: 6, md: 4, lg: 4, xl: 4}} className={classes.equalHeightCards} onClick={() => setSelectedCard(index)}>
                <ProjectCard projEx={object} />
            </Grid.Col>
            ))

    return (
      <div className={classes.projectsBoxContainer}>
        <Container className={classes.projectsContainer} pb={"xl"} pt={"xl"}>
            <Center className={classes.projectsInfo}>
                <Title className={classes.title}>Projects</Title>
                <Text className={classes.text}>Prosjekter jeg har jobbet på gjennom studiet, under kurs og i jobberfaringer.</Text>
                <Text className={classes.text}>Klikk på kortet for å se mer detaljer</Text>
            </Center>
            {selectedCard >= 0 ? <ProjectDetails data={projEx[selectedCard]} setSelectedCard={setSelectedCard} /> : 
              <Grid>
                  {ProjectCards}
              </Grid>
            }
        </Container>
      </div>
    )
}