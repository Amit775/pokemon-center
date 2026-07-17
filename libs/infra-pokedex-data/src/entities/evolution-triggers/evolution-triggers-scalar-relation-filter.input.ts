import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { EvolutionTriggersWhereInput } from './evolution-triggers-where.input';

@InputType()
export class EvolutionTriggersScalarRelationFilter {

    @Field(() => EvolutionTriggersWhereInput, {nullable:true})
    is?: Identity<EvolutionTriggersWhereInput>;

    @Field(() => EvolutionTriggersWhereInput, {nullable:true})
    isNot?: Identity<EvolutionTriggersWhereInput>;
}
