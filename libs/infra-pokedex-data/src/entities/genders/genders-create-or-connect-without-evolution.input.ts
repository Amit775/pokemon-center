import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { GendersWhereUniqueInput } from './genders-where-unique.input';
import { Type } from 'class-transformer';
import { GendersCreateWithoutEvolutionInput } from './genders-create-without-evolution.input';

@InputType()
export class GendersCreateOrConnectWithoutEvolutionInput {

    @Field(() => GendersWhereUniqueInput, {nullable:false})
    @Type(() => GendersWhereUniqueInput)
    where!: Prisma.AtLeast<GendersWhereUniqueInput, 'id'>;

    @Field(() => GendersCreateWithoutEvolutionInput, {nullable:false})
    @Type(() => GendersCreateWithoutEvolutionInput)
    create!: GendersCreateWithoutEvolutionInput;
}
