import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { EvolutionTriggersUpdateManyMutationInput } from './evolution-triggers-update-many-mutation.input';
import { Type } from 'class-transformer';
import { EvolutionTriggersWhereInput } from './evolution-triggers-where.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class UpdateManyEvolutionTriggersArgs {

    @Field(() => EvolutionTriggersUpdateManyMutationInput, {nullable:false})
    @Type(() => EvolutionTriggersUpdateManyMutationInput)
    data!: EvolutionTriggersUpdateManyMutationInput;

    @Field(() => EvolutionTriggersWhereInput, {nullable:true})
    @Type(() => EvolutionTriggersWhereInput)
    where?: EvolutionTriggersWhereInput;

    @Field(() => Int, {nullable:true})
    limit?: number;
}
