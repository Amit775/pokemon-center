import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { EvolutionChainsWhereInput } from './evolution-chains-where.input';
import { Type } from 'class-transformer';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class DeleteManyEvolutionChainsArgs {

    @Field(() => EvolutionChainsWhereInput, {nullable:true})
    @Type(() => EvolutionChainsWhereInput)
    where?: EvolutionChainsWhereInput;

    @Field(() => Int, {nullable:true})
    limit?: number;
}
