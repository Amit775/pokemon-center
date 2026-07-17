import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { EvolutionTriggersCreateWithoutEvolutionInput } from './evolution-triggers-create-without-evolution.input';
import { Type } from 'class-transformer';
import { EvolutionTriggersCreateOrConnectWithoutEvolutionInput } from './evolution-triggers-create-or-connect-without-evolution.input';
import { Prisma } from '@pokemon-center/prisma';
import { EvolutionTriggersWhereUniqueInput } from './evolution-triggers-where-unique.input';

@InputType()
export class EvolutionTriggersCreateNestedOneWithoutEvolutionInput {

    @Field(() => EvolutionTriggersCreateWithoutEvolutionInput, {nullable:true})
    @Type(() => EvolutionTriggersCreateWithoutEvolutionInput)
    create?: Identity<EvolutionTriggersCreateWithoutEvolutionInput>;

    @Field(() => EvolutionTriggersCreateOrConnectWithoutEvolutionInput, {nullable:true})
    @Type(() => EvolutionTriggersCreateOrConnectWithoutEvolutionInput)
    connectOrCreate?: Identity<EvolutionTriggersCreateOrConnectWithoutEvolutionInput>;

    @Field(() => EvolutionTriggersWhereUniqueInput, {nullable:true})
    @Type(() => EvolutionTriggersWhereUniqueInput)
    connect?: Prisma.AtLeast<EvolutionTriggersWhereUniqueInput, 'id'>;
}
