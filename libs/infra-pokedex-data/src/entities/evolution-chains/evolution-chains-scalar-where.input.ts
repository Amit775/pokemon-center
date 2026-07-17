import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { IntFilter } from '../prisma/int-filter.input';

@InputType()
export class EvolutionChainsScalarWhereInput {

    @Field(() => [EvolutionChainsScalarWhereInput], {nullable:true})
    AND?: Array<EvolutionChainsScalarWhereInput>;

    @Field(() => [EvolutionChainsScalarWhereInput], {nullable:true})
    OR?: Array<EvolutionChainsScalarWhereInput>;

    @Field(() => [EvolutionChainsScalarWhereInput], {nullable:true})
    NOT?: Array<EvolutionChainsScalarWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: Identity<IntFilter>;

    @Field(() => IntFilter, {nullable:true})
    baby_trigger_item_id?: Identity<IntFilter>;
}
