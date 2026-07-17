import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { GendersCreateWithoutEvolutionInput } from './genders-create-without-evolution.input';
import { Type } from 'class-transformer';
import { GendersCreateOrConnectWithoutEvolutionInput } from './genders-create-or-connect-without-evolution.input';
import { Prisma } from '@pokemon-center/prisma';
import { GendersWhereUniqueInput } from './genders-where-unique.input';

@InputType()
export class GendersCreateNestedOneWithoutEvolutionInput {

    @Field(() => GendersCreateWithoutEvolutionInput, {nullable:true})
    @Type(() => GendersCreateWithoutEvolutionInput)
    create?: Identity<GendersCreateWithoutEvolutionInput>;

    @Field(() => GendersCreateOrConnectWithoutEvolutionInput, {nullable:true})
    @Type(() => GendersCreateOrConnectWithoutEvolutionInput)
    connectOrCreate?: Identity<GendersCreateOrConnectWithoutEvolutionInput>;

    @Field(() => GendersWhereUniqueInput, {nullable:true})
    @Type(() => GendersWhereUniqueInput)
    connect?: Prisma.AtLeast<GendersWhereUniqueInput, 'id'>;
}
