import styled from "styled-components";

type Props = {
  icon: any;
  title: string;
  data: string;
};

const ParentDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 1.25rem;
`;

function ContactDiv({ icon, title, data }: Props) {
  return (
    <ParentDiv>
      {icon}
      <div>
        <h3>{title}</h3>
        <p>{data}</p>
      </div>
    </ParentDiv>
  );
}

export default ContactDiv;
