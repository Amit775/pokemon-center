import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EvolutionChainsCreateWithoutBabyTriggerItemInput } from './evolution-chains-create-without-baby-trigger-item.input';
import { Type } from 'class-transformer';
import { EvolutionChainsCreateOrConnectWithoutBabyTriggerItemInput } from './evolution-chains-create-or-connect-without-baby-trigger-item.input';
import { EvolutionChainsUpsertWithWhereUniqueWithoutBabyTriggerItemInput } from './evolution-chains-upsert-with-where-unique-without-baby-trigger-item.input';
import { EvolutionChainsCreateManyBabyTriggerItemInputEnvelope } from './evolution-chains-create-many-baby-trigger-item-input-envelope.input';
import { Prisma } from '@prisma/client';
import { EvolutionChainsWhereUniqueInput } from './evolution-chains-where-unique.input';
import { EvolutionChainsUpdateWithWhereUniqueWithoutBabyTriggerItemInput } from './evolution-chains-update-with-where-unique-without-baby-trigger-item.input';
import { EvolutionChainsUpdateManyWithWhereWithoutBabyTriggerItemInput } from './evolution-chains-update-many-with-where-without-baby-trigger-item.input';
import { EvolutionChainsScalarWhereInput } from './evolution-chains-scalar-where.input';

@InputType()
export class EvolutionChainsUncheckedUpdateManyWithoutBabyTriggerItemNestedInput {

    @Field(() => [EvolutionChainsCreateWithoutBabyTriggerItemInput], {nullable:true})
    @Type(() => EvolutionChainsCreateWithoutBabyTriggerItemInput)
    create?: Array<EvolutionChainsCreateWithoutBabyTriggerItemInput>;

    @Field(() => [EvolutionChainsCreateOrConnectWithoutBabyTriggerItemInput], {nullable:true})
    @Type(() => EvolutionChainsCreateOrConnectWithoutBabyTriggerItemInput)
    connectOrCreate?: Array<EvolutionChainsCreateOrConnectWithoutBabyTriggerItemInput>;

    @Field(() => [EvolutionChainsUpsertWithWhereUniqueWithoutBabyTriggerItemInput], {nullable:true})
    @Type(() => EvolutionChainsUpsertWithWhereUniqueWithoutBabyTriggerItemInput)
    upsert?: Array<EvolutionChainsUpsertWithWhereUniqueWithoutBabyTriggerItemInput>;

    @Field(() => EvolutionChainsCreateManyBabyTriggerItemInputEnvelope, {nullable:true})
    @Type(() => EvolutionChainsCreateManyBabyTriggerItemInputEnvelope)
    createMany?: EvolutionChainsCreateManyBabyTriggerItemInputEnvelope;

    @Field(() => [EvolutionChainsWhereUniqueInput], {nullable:true})
    @Type(() => EvolutionChainsWhereUniqueInput)
    set?: Array<Prisma.AtLeast<EvolutionChainsWhereUniqueInput, 'id'>>;

    @Field(() => [EvolutionChainsWhereUniqueInput], {nullable:true})
    @Type(() => EvolutionChainsWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<EvolutionChainsWhereUniqueInput, 'id'>>;

    @Field(() => [EvolutionChainsWhereUniqueInput], {nullable:true})
    @Type(() => EvolutionChainsWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<EvolutionChainsWhereUniqueInput, 'id'>>;

    @Field(() => [EvolutionChainsWhereUniqueInput], {nullable:true})
    @Type(() => EvolutionChainsWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<EvolutionChainsWhereUniqueInput, 'id'>>;

    @Field(() => [EvolutionChainsUpdateWithWhereUniqueWithoutBabyTriggerItemInput], {nullable:true})
    @Type(() => EvolutionChainsUpdateWithWhereUniqueWithoutBabyTriggerItemInput)
    update?: Array<EvolutionChainsUpdateWithWhereUniqueWithoutBabyTriggerItemInput>;

    @Field(() => [EvolutionChainsUpdateManyWithWhereWithoutBabyTriggerItemInput], {nullable:true})
    @Type(() => EvolutionChainsUpdateManyWithWhereWithoutBabyTriggerItemInput)
    updateMany?: Array<EvolutionChainsUpdateManyWithWhereWithoutBabyTriggerItemInput>;

    @Field(() => [EvolutionChainsScalarWhereInput], {nullable:true})
    @Type(() => EvolutionChainsScalarWhereInput)
    deleteMany?: Array<EvolutionChainsScalarWhereInput>;
}
