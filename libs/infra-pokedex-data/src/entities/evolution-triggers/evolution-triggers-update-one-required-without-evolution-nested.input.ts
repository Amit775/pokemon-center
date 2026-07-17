import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { EvolutionTriggersCreateWithoutEvolutionInput } from './evolution-triggers-create-without-evolution.input';
import { Type } from 'class-transformer';
import { EvolutionTriggersCreateOrConnectWithoutEvolutionInput } from './evolution-triggers-create-or-connect-without-evolution.input';
import { EvolutionTriggersUpsertWithoutEvolutionInput } from './evolution-triggers-upsert-without-evolution.input';
import { Prisma } from '@pokemon-center/prisma';
import { EvolutionTriggersWhereUniqueInput } from './evolution-triggers-where-unique.input';
import { EvolutionTriggersUpdateToOneWithWhereWithoutEvolutionInput } from './evolution-triggers-update-to-one-with-where-without-evolution.input';

@InputType()
export class EvolutionTriggersUpdateOneRequiredWithoutEvolutionNestedInput {

    @Field(() => EvolutionTriggersCreateWithoutEvolutionInput, {nullable:true})
    @Type(() => EvolutionTriggersCreateWithoutEvolutionInput)
    create?: Identity<EvolutionTriggersCreateWithoutEvolutionInput>;

    @Field(() => EvolutionTriggersCreateOrConnectWithoutEvolutionInput, {nullable:true})
    @Type(() => EvolutionTriggersCreateOrConnectWithoutEvolutionInput)
    connectOrCreate?: Identity<EvolutionTriggersCreateOrConnectWithoutEvolutionInput>;

    @Field(() => EvolutionTriggersUpsertWithoutEvolutionInput, {nullable:true})
    @Type(() => EvolutionTriggersUpsertWithoutEvolutionInput)
    upsert?: Identity<EvolutionTriggersUpsertWithoutEvolutionInput>;

    @Field(() => EvolutionTriggersWhereUniqueInput, {nullable:true})
    @Type(() => EvolutionTriggersWhereUniqueInput)
    connect?: Prisma.AtLeast<EvolutionTriggersWhereUniqueInput, 'id'>;

    @Field(() => EvolutionTriggersUpdateToOneWithWhereWithoutEvolutionInput, {nullable:true})
    @Type(() => EvolutionTriggersUpdateToOneWithWhereWithoutEvolutionInput)
    update?: Identity<EvolutionTriggersUpdateToOneWithWhereWithoutEvolutionInput>;
}
