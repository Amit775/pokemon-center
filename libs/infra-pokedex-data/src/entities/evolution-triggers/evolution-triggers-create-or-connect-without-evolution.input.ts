import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@pokemon-center/prisma';
import { EvolutionTriggersWhereUniqueInput } from './evolution-triggers-where-unique.input';
import { Type } from 'class-transformer';
import type { Identity } from 'identity-type';
import { EvolutionTriggersCreateWithoutEvolutionInput } from './evolution-triggers-create-without-evolution.input';

@InputType()
export class EvolutionTriggersCreateOrConnectWithoutEvolutionInput {

    @Field(() => EvolutionTriggersWhereUniqueInput, {nullable:false})
    @Type(() => EvolutionTriggersWhereUniqueInput)
    where!: Prisma.AtLeast<EvolutionTriggersWhereUniqueInput, 'id'>;

    @Field(() => EvolutionTriggersCreateWithoutEvolutionInput, {nullable:false})
    @Type(() => EvolutionTriggersCreateWithoutEvolutionInput)
    create!: Identity<EvolutionTriggersCreateWithoutEvolutionInput>;
}
