import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EvolutionChainsWhereInput } from './evolution-chains-where.input';

@InputType()
export class EvolutionChainsListRelationFilter {

    @Field(() => EvolutionChainsWhereInput, {nullable:true})
    every?: EvolutionChainsWhereInput;

    @Field(() => EvolutionChainsWhereInput, {nullable:true})
    some?: EvolutionChainsWhereInput;

    @Field(() => EvolutionChainsWhereInput, {nullable:true})
    none?: EvolutionChainsWhereInput;
}
