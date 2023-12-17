import Image from "next/image";
import styles from "./../styles/Home.module.css";
import classNames from "classnames";
import Head from "next/head";

const Main = () => {
  return (
    <>
      <Head>
        <title>St James Garlickhythe</title>
      </Head>
      <main className={classNames(styles.main)}>
        <div className={classNames(styles.background_image)}>
          <div className={classNames(styles.top_container)}>
            <div className={classNames(styles.content)}>
              <Image
                src="/images/st-james-garlickhythe-logo.png"
                className={classNames(styles.logo)}
                alt="St James Garlickhythe"
                width={73.66}
                height={50}
              />
            </div>
            <div className={classNames(styles.top_gradient)} />
          </div>
          <div className={classNames(styles.title_container)}>
            <h1 className={classNames(styles.main_title)}>
              ST JAMES GARLICKHYTHE
            </h1>
            <h2 className={classNames(styles.subheading)}>
              WREN&apos;S LANTERN
            </h2>
          </div>
          <div className={classNames(styles.footer_container)}>
            <div className={classNames(styles.bottom_gradient)} />
            <div className={classNames(styles.footer_content)}>
              <h5 className={classNames(styles.contact_header)}>CONTACT US</h5>
              <p>
                St James Garlickhythe
                <br />
                Garlick Hill
                <br />
                London
                <br />
                EC4V 2AF
              </p>
              <p>adminSJG@london.anglican.org</p>
              <div>Charity number: 1131198</div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Main;
