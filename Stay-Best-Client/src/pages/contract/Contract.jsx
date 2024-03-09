import Container from "../../components/shared/Container";
import TopBanner from "../../components/shared/TopBanner";
import ContractForm from "./ContractForm";
import MeetUs from "./MeetUs";
import contractBg from "../../assets/image/contractBg.jpeg";

const Contract = () => {
  return (
    <div>
      <TopBanner bgImage={contractBg} title={"Contract Us"}></TopBanner>
      <Container>
        <div className="flex flex-col md:flex-row">
          <div className="flex-1">
            <MeetUs></MeetUs>
          </div>
          <div className="flex-1">
            <ContractForm></ContractForm>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Contract;
