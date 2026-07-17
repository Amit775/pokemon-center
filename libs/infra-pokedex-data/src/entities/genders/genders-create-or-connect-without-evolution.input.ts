import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@pokemon-center/prisma';
import { GendersWhereUniqueInput } from './genders-where-unique.input';
import { Type } from 'class-transformer';
import type { Identity } from 'identity-type';
import { GendersCreateWithoutEvolutionInput } from './genders-create-without-evolution.input';

@InputType()
export class GendersCreateOrConnectWithoutEvolutionInput {

    @Field(() => GendersWhereUniqueInput, {nullable:false})
    @Type(() => GendersWhereUniqueInput)
    where!: Prisma.AtLeast<GendersWhereUniqueInput, 'id'>;

    @Field(() => GendersCreateWithoutEvolutionInput, {nullable:false})
    @Type(() => GendersCreateWithoutEvolutionInput)
    create!: Identity<GendersCreateWithoutEvolutionInput>;
}
