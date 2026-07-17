import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { EvolutionTriggersWhereInput } from './evolution-triggers-where.input';
import { Type } from 'class-transformer';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class DeleteManyEvolutionTriggersArgs {

    @Field(() => EvolutionTriggersWhereInput, {nullable:true})
    @Type(() => EvolutionTriggersWhereInput)
    where?: EvolutionTriggersWhereInput;

    @Field(() => Int, {nullable:true})
    limit?: number;
}
