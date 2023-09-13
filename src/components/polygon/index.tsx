import styled from 'styled-components';

import { VmComponent } from '@/components/vm/VmComponent';

const Container = styled.div`
    height: 100vh;
`;


export function LinktreeBOS() {
    return (
        <Container>
            <VmComponent
                src="cpassport.near/widget/Passport.Main"
            />
        </Container>
    )
}