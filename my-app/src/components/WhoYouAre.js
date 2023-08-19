import React from "react";
import "./WhoYouAre.css";
import { Card } from "@mui/material";

const WhoYouAre = () => {
  return (
    <div className="container__who">
      <Card className="card__who">
        <h2>Artiste ?</h2>
        <p>
          Si tu es un artiste passionné qui rêve de prendre part à l'expérience
          magique de nos scènes, nous avons une opportunité excitante pour toi.
        </p>
        <p>
          Chez nous, la programmation est une forme d'art en soi, et nous
          recherchons des esprits créatifs comme le tien pour rejoindre notre
          équipe.
        </p>
        <p>
          Nous sommes là pour donner vie à tes performances sur nos scènes, et
          ensemble, créons des moments inoubliables pour notre public.
        </p>
      </Card>
      <Card className="card__who">
        <h2>Organisateur ?</h2>
        <p>
          Si tu organises un événement extraordinaire et que tu cherches à
          offrir à ton public des performances mémorables, tu es au bon endroit.{" "}
        </p>
        <p>
          Nous comprenons l'importance d'une programmation de qualité pour
          garantir le succès de tout événement. Notre équipe expérimentée est
          prête à collaborer avec toi.{" "}
        </p>
        <p>
          {" "}
          Nous mettrons en place une programmation captivante et diversifiée
          pour répondre aux attentes de ton public.
        </p>
      </Card>
    </div>
  );
};

export default WhoYouAre;
