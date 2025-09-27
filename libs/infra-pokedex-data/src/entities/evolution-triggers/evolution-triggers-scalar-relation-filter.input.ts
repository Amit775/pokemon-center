import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EvolutionTriggersWhereInput } from './evolution-triggers-where.input';

@InputType()
export class EvolutionTriggersScalarRelationFilter {

    @Field(() => EvolutionTriggersWhereInput, {nullable:true})
    is?: EvolutionTriggersWhereInput;

    @Field(() => EvolutionTriggersWhereInput, {nullable:true})
    isNot?: EvolutionTriggersWhereInput;
}
