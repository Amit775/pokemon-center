import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';

@InputType()
export class EvolutionChainsScalarWhereInput {

    @Field(() => [EvolutionChainsScalarWhereInput], {nullable:true})
    AND?: Array<EvolutionChainsScalarWhereInput>;

    @Field(() => [EvolutionChainsScalarWhereInput], {nullable:true})
    OR?: Array<EvolutionChainsScalarWhereInput>;

    @Field(() => [EvolutionChainsScalarWhereInput], {nullable:true})
    NOT?: Array<EvolutionChainsScalarWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    baby_trigger_item_id?: IntNullableFilter;
}
