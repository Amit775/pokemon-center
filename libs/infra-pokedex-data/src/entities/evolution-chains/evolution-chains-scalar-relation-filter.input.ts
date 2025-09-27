import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EvolutionChainsWhereInput } from './evolution-chains-where.input';

@InputType()
export class EvolutionChainsScalarRelationFilter {

    @Field(() => EvolutionChainsWhereInput, {nullable:true})
    is?: EvolutionChainsWhereInput;

    @Field(() => EvolutionChainsWhereInput, {nullable:true})
    isNot?: EvolutionChainsWhereInput;
}
