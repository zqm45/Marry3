import { Prisma } from "@prisma/client";
import { ethers } from "ethers";
import moment from "moment";
import { NextApiHandler } from "next";
import { prisma } from "../../../lib/prisma";
import { getTokenPairInfo, verifyMarried } from "../../../lib/verify";
const sexMap = {
  0: "Man",
  1: "Woman",
  2: "X",
};
const handler: NextApiHandler = async (req, res) => {
  if (req.method === "GET") {
    let tokenId = req.query.tokenId as string;
    if (!tokenId) {
      return res.status(400).json({
        message: "no tokenId",
      });
    }
    tokenId = tokenId.replace(".json", "");
    console.log("tokenId", tokenId);

    try {
      const pairInfo = await getTokenPairInfo(tokenId);
      if (pairInfo) {
        const offer = await prisma.offers.findFirst({
          where: {
            OR: [
              {
                Aaddress: pairInfo[0].partner.toLowerCase(),
                Baddress: pairInfo[1].partner.toLowerCase(),
              },
              {
                Aaddress: pairInfo[1].partner.toLowerCase(),
                Baddress: pairInfo[0].partner.toLowerCase(),
              },
            ],
          },
        });
        console.log("offer", offer);
        const isA = offer.Aaddress == pairInfo[1].partner.toLowerCase();
        if (offer) {
          const AtokenId = pairInfo[0].tokenId;
          const BtokenId = pairInfo[1].tokenId;

          if (offer.status === 1) {
            offer.AtokenId = isA ? AtokenId.toString() : BtokenId.toString();
            offer.BtokenId = isA ? BtokenId.toString() : AtokenId.toString();
            await prisma.offers.update({
              data: {
                status: 2,
                AtokenId: offer.AtokenId,
                BtokenId: offer.BtokenId,
              },
              where: {
                id: offer.id,
              },
            });
          }

          const result = {
            name: `Marry3 #${tokenId} ${isA ? offer.Aname : offer.Bname}&${
              isA ? offer.Bname : offer.Aname
            }`,
            description: `${offer.Aname} and ${
              offer.Bname
            } got married in Web3, base on ERC520 stantard, on ${moment(
              pairInfo[0].time.toNumber() * 1000
            ).format("YYYY-MM-DD")}, link: https://marry3.love/i/${tokenId}`,
            external_url: `https://marry3.love/i/${tokenId}`,
            image:
              offer.imageData ||
              "https://bafybeialnklgnjla6p773rcuvtk25cwrjul25ccl7a2vnd4yqbuqsgse4y.ipfs.infura-ipfs.io/?filename=1.png",
            attributes: [
              {
                trait_type: "date",
                value: `${moment(pairInfo[0].time.toNumber() * 1000).format(
                  "YYYY-MM-DD"
                )}`,
              },
              { trait_type: "sex", value: sexMap[pairInfo[0].sex] },
              { trait_type: "ensA", value: offer.Aname },
              { trait_type: "ensB", value: offer.Bname },
            ],
          };
          res.status(200).send(result);
          return;
        }
      }
      res.status(404);
      return;
    } catch (e) {
      console.log(e);
      res.status(404);
      return;
    }
  } else {
    res.status(404);
    return;
  }
};

export default handler;
