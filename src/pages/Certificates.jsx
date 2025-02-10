import React from "react";
import JPMorganCertificate from "../assets/Certificates/JPMorganCertificate.png";
import SuvidhaFoundation from "../assets/Certificates/SuvidhaFoundationCertificate.png";
import PotentiaAcedmy from "../assets/Certificates/PotentiaCertificate.png";
import Microsoft from "../assets/Certificates/Microsoft.png";
import Google from "../assets/Certificates/Google.png";
import Devtown from "../assets/Certificates/Devtown.png";
import Certificates from "../components/CertificateCard";

export default function CertificateCard() {
  return (
    <>
      <div className=" flex flex-wrap justify-around items-center">
        
          <Certificates
            name={"JP Morgan Chase & Co."}
            heading={"Internship"}
            img={JPMorganCertificate}
            date={"15/7/2023 - 15/8/2023"}
            link={
              "https://drive.google.com/file/d/19Uou8xNONK79xsLeaGo4KnA_s6F6rZg5/view"
            }
          />

          <Certificates
            name={"PotentiaAcedmy"}
            img={PotentiaAcedmy}
            heading={"Internship"}
            date={"15/7/2023 - 15/8/2023"}
            link={
              "https://drive.google.com/file/d/1gJmXGnyWRWEIZOadTHenX4qiVgEOS_C4/view"
            }
          />

          <Certificates
            name={"SuvidhaFoundation"}
            img={SuvidhaFoundation}
            heading={"Internship"}
            date={"15/7/2023 - 15/8/2023"}
            link={
              "https://drive.google.com/file/d/1eNstOyX3T4iWYnpq3lwgdbSG7kXzaG3P/view"
            }
          />

          <Certificates
            name={"Instagram Clone Using  HTML & CSS"}
            img={Microsoft}
            heading={"Bootcamp"}
            date={"Jan 2023"}
            link={"https://www.cert.devtown.in/verify/1nLhjm"}
          />

          <Certificates
            name={"JavaScript & React.js Bootcamp"}
            img={Google}
            heading={"Bootcamp"}
            date={"Dec 2022"}
            link={"https://www.cert.devtown.in/verify/Z2iVqHr"}
          />

          <Certificates
            name={"Backend Web Development"}
            img={Devtown}
            heading={"Bootcamp"}
            date={"Nov 2022"}
            link={"https://www.cert.devtown.in/verify/2bsKzi"}
          />
        </div>
    </>
  );
}
