import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@pokemon-center/prisma';
import { EvolutionChainsWhereUniqueInput } from './evolution-chains-where-unique.input';
import { Type } from 'class-transformer';
import type { Identity } from 'identity-type';
import { EvolutionChainsUpdateWithoutBabyTriggerItemInput } from './evolution-chains-update-without-baby-trigger-item.input';

@InputType()
export class EvolutionChainsUpdateWithWhereUniqueWithoutBabyTriggerItemInput {

    @Field(() => EvolutionChainsWhereUniqueInput, {nullable:false})
    @Type(() => EvolutionChainsWhereUniqueInput)
    where!: Prisma.AtLeast<EvolutionChainsWhereUniqueInput, 'id'>;

    @Field(() => EvolutionChainsUpdateWithoutBabyTriggerItemInput, {nullable:false})
    @Type(() => EvolutionChainsUpdateWithoutBabyTriggerItemInput)
    data!: Identity<EvolutionChainsUpdateWithoutBabyTriggerItemInput>;
}
