import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { EvolutionChainsWhereUniqueInput } from './evolution-chains-where-unique.input';
import { Type } from 'class-transformer';
import { EvolutionChainsCreateWithoutBabyTriggerItemInput } from './evolution-chains-create-without-baby-trigger-item.input';

@InputType()
export class EvolutionChainsCreateOrConnectWithoutBabyTriggerItemInput {

    @Field(() => EvolutionChainsWhereUniqueInput, {nullable:false})
    @Type(() => EvolutionChainsWhereUniqueInput)
    where!: Prisma.AtLeast<EvolutionChainsWhereUniqueInput, 'id'>;

    @Field(() => EvolutionChainsCreateWithoutBabyTriggerItemInput, {nullable:false})
    @Type(() => EvolutionChainsCreateWithoutBabyTriggerItemInput)
    create!: EvolutionChainsCreateWithoutBabyTriggerItemInput;
}
