import { useEffect, useRef, useState } from "react";
import { Header } from "../../components/main/common/header.com";
import styles from "./home.module.less";
import { useObserver } from "mobx-react";
import { Web3Head } from "../../components/main/common/head.com";
import { WalletStore } from "../../stores/main/wallet.store";
import { useRouter } from "next/router";
import { Trans } from "@lingui/react";
import { OfferStore } from "../../stores/main/offer.store";
import useStore from "../../stores/useStore";
import { t } from "@lingui/macro";
import { Button, Form, Input, message, Select, Table, Tag } from "antd";
import { NFTStore } from "../../stores/main/nfts.store";
import { NFT } from "../../components/main/common/nft";
import { Offers } from "../../stores/main/marry.store";
import moment from "moment";
import { web3Config } from "../../stores/config";
import { Footer } from "../../components/main/common/footer.com";

export default function Offer(props) {
  const walletStore = useStore(WalletStore);

  const router = useRouter();
  const { id } = router.query;
  const [offers, setOffers] = useState<Offers[]>([]);
  const [address, setAddress] = useState("");

  const columns: any = [
    {
      title: t`交互双方`,
      dataIndex: "address",
      key: "address",
      render: (_, record) => {
        return (
          <span>
            <a href={`${web3Config.scan}${record.Aaddress}`} target="_blank">
              {record.Aaddress}
            </a>
            <br />
            <a href={`${web3Config.scan}${record.Baddress}`} target="_blank">
              {record.Baddress}
            </a>
          </span>
        );
      },
    },
    {
      title: t`交互行为`,
      dataIndex: "action",
      key: "action",
      render: (_, record) => {
        return <Tag color={"#F41870"}>结婚</Tag>;
      },
    },
    {
      title: t`时间`,
      dataIndex: "updateAt",
      key: "updateAt",
      render: (_, record) => {
        return moment(record.updateAt).fromNow();
      },
    },
    {
      title: t`查看`,
      dataIndex: "look",
      key: "look",
      render: (_, record) => {
        return (
          <span>
            <a href={`/i/${record.AtokenId}`} target="_blank">
              Token #{record.AtokenId}
            </a>
            <br />
            <a href={`/i/${record.BtokenId}`} target="_blank">
              Token #{record.BtokenId}
            </a>
          </span>
        );
      },
    },
  ];
  async function getOffers(address?: string) {
    const loading = message.loading("loading...", 0);
    const result = await fetch("/api/offers?address=" + (address || ""), {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const json = await result.json();
    if (json.message) {
      message.error(json.message);
    } else {
      setOffers(json);
    }
    loading();
  }
  useEffect(() => {
    getOffers();
  }, [router.query.id]);

  return useObserver(() => (
    <div className={styles.upgrade}>
      <div className={styles.content}>
        <div style={{ padding: "0 60px" }}>
          <Header hasBack={true} hideIndex={true} />
        </div>
        <div className={styles.container}>
          <Form.Item className={styles.search}>
            <Input
              placeholder={t`请输入任意钱包地址`}
              onChange={(e) => {
                setAddress(e.target.value);
              }}
              onPressEnter={() => {
                getOffers(address);
              }}
            />
            <Button
              type="primary"
              style={{ width: "80px" }}
              onClick={() => {
                getOffers(address);
              }}
            >{t`搜索`}</Button>
          </Form.Item>
          <Table
            columns={columns}
            dataSource={offers}
            bordered={false}
            className={styles.table}
          />
        </div>
        <Footer />
      </div>
    </div>
  ));
}
