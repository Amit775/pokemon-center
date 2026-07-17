import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EvolutionChainsCreateWithoutBabyTriggerItemInput } from './evolution-chains-create-without-baby-trigger-item.input';
import { Type } from 'class-transformer';
import { EvolutionChainsCreateOrConnectWithoutBabyTriggerItemInput } from './evolution-chains-create-or-connect-without-baby-trigger-item.input';
import type { Identity } from 'identity-type';
import { EvolutionChainsCreateManyBabyTriggerItemInputEnvelope } from './evolution-chains-create-many-baby-trigger-item-input-envelope.input';
import { Prisma } from '@pokemon-center/prisma';
import { EvolutionChainsWhereUniqueInput } from './evolution-chains-where-unique.input';

@InputType()
export class EvolutionChainsCreateNestedManyWithoutBabyTriggerItemInput {

    @Field(() => [EvolutionChainsCreateWithoutBabyTriggerItemInput], {nullable:true})
    @Type(() => EvolutionChainsCreateWithoutBabyTriggerItemInput)
    create?: Array<EvolutionChainsCreateWithoutBabyTriggerItemInput>;

    @Field(() => [EvolutionChainsCreateOrConnectWithoutBabyTriggerItemInput], {nullable:true})
    @Type(() => EvolutionChainsCreateOrConnectWithoutBabyTriggerItemInput)
    connectOrCreate?: Array<EvolutionChainsCreateOrConnectWithoutBabyTriggerItemInput>;

    @Field(() => EvolutionChainsCreateManyBabyTriggerItemInputEnvelope, {nullable:true})
    @Type(() => EvolutionChainsCreateManyBabyTriggerItemInputEnvelope)
    createMany?: Identity<EvolutionChainsCreateManyBabyTriggerItemInputEnvelope>;

    @Field(() => [EvolutionChainsWhereUniqueInput], {nullable:true})
    @Type(() => EvolutionChainsWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<EvolutionChainsWhereUniqueInput, 'id'>>;
}
