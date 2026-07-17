import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { EvolutionChainsUpdateManyMutationInput } from './evolution-chains-update-many-mutation.input';
import { Type } from 'class-transformer';
import { EvolutionChainsWhereInput } from './evolution-chains-where.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class UpdateManyEvolutionChainsArgs {

    @Field(() => EvolutionChainsUpdateManyMutationInput, {nullable:false})
    @Type(() => EvolutionChainsUpdateManyMutationInput)
    data!: EvolutionChainsUpdateManyMutationInput;

    @Field(() => EvolutionChainsWhereInput, {nullable:true})
    @Type(() => EvolutionChainsWhereInput)
    where?: EvolutionChainsWhereInput;

    @Field(() => Int, {nullable:true})
    limit?: number;
}
