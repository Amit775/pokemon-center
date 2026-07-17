import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { EvolutionChainsWhereUniqueInput } from './evolution-chains-where-unique.input';
import { Type } from 'class-transformer';
import { EvolutionChainsUpdateWithoutBabyTriggerItemInput } from './evolution-chains-update-without-baby-trigger-item.input';
import { EvolutionChainsCreateWithoutBabyTriggerItemInput } from './evolution-chains-create-without-baby-trigger-item.input';

@InputType()
export class EvolutionChainsUpsertWithWhereUniqueWithoutBabyTriggerItemInput {

    @Field(() => EvolutionChainsWhereUniqueInput, {nullable:false})
    @Type(() => EvolutionChainsWhereUniqueInput)
    where!: Prisma.AtLeast<EvolutionChainsWhereUniqueInput, 'id'>;

    @Field(() => EvolutionChainsUpdateWithoutBabyTriggerItemInput, {nullable:false})
    @Type(() => EvolutionChainsUpdateWithoutBabyTriggerItemInput)
    update!: EvolutionChainsUpdateWithoutBabyTriggerItemInput;

    @Field(() => EvolutionChainsCreateWithoutBabyTriggerItemInput, {nullable:false})
    @Type(() => EvolutionChainsCreateWithoutBabyTriggerItemInput)
    create!: EvolutionChainsCreateWithoutBabyTriggerItemInput;
}
