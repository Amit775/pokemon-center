import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { EvolutionChainsWhereInput } from './evolution-chains-where.input';

@InputType()
export class EvolutionChainsScalarRelationFilter {

    @Field(() => EvolutionChainsWhereInput, {nullable:true})
    is?: Identity<EvolutionChainsWhereInput>;

    @Field(() => EvolutionChainsWhereInput, {nullable:true})
    isNot?: Identity<EvolutionChainsWhereInput>;
}
