import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { EvolutionChainsWhereInput } from './evolution-chains-where.input';

@InputType()
export class EvolutionChainsListRelationFilter {

    @Field(() => EvolutionChainsWhereInput, {nullable:true})
    every?: Identity<EvolutionChainsWhereInput>;

    @Field(() => EvolutionChainsWhereInput, {nullable:true})
    some?: Identity<EvolutionChainsWhereInput>;

    @Field(() => EvolutionChainsWhereInput, {nullable:true})
    none?: Identity<EvolutionChainsWhereInput>;
}
