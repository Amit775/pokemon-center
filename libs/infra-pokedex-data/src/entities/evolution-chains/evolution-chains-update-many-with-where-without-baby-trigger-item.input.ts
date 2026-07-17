import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EvolutionChainsScalarWhereInput } from './evolution-chains-scalar-where.input';
import { Type } from 'class-transformer';
import { EvolutionChainsUpdateManyMutationInput } from './evolution-chains-update-many-mutation.input';

@InputType()
export class EvolutionChainsUpdateManyWithWhereWithoutBabyTriggerItemInput {

    @Field(() => EvolutionChainsScalarWhereInput, {nullable:false})
    @Type(() => EvolutionChainsScalarWhereInput)
    where!: EvolutionChainsScalarWhereInput;

    @Field(() => EvolutionChainsUpdateManyMutationInput, {nullable:false})
    @Type(() => EvolutionChainsUpdateManyMutationInput)
    data!: EvolutionChainsUpdateManyMutationInput;
}
