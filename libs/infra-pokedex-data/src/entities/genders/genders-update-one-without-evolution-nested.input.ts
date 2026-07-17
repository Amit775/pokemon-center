import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { GendersCreateWithoutEvolutionInput } from './genders-create-without-evolution.input';
import { Type } from 'class-transformer';
import { GendersCreateOrConnectWithoutEvolutionInput } from './genders-create-or-connect-without-evolution.input';
import { GendersUpsertWithoutEvolutionInput } from './genders-upsert-without-evolution.input';
import { GendersWhereInput } from './genders-where.input';
import { Prisma } from '@pokemon-center/prisma';
import { GendersWhereUniqueInput } from './genders-where-unique.input';
import { GendersUpdateToOneWithWhereWithoutEvolutionInput } from './genders-update-to-one-with-where-without-evolution.input';

@InputType()
export class GendersUpdateOneWithoutEvolutionNestedInput {

    @Field(() => GendersCreateWithoutEvolutionInput, {nullable:true})
    @Type(() => GendersCreateWithoutEvolutionInput)
    create?: Identity<GendersCreateWithoutEvolutionInput>;

    @Field(() => GendersCreateOrConnectWithoutEvolutionInput, {nullable:true})
    @Type(() => GendersCreateOrConnectWithoutEvolutionInput)
    connectOrCreate?: Identity<GendersCreateOrConnectWithoutEvolutionInput>;

    @Field(() => GendersUpsertWithoutEvolutionInput, {nullable:true})
    @Type(() => GendersUpsertWithoutEvolutionInput)
    upsert?: Identity<GendersUpsertWithoutEvolutionInput>;

    @Field(() => GendersWhereInput, {nullable:true})
    @Type(() => GendersWhereInput)
    disconnect?: Identity<GendersWhereInput>;

    @Field(() => GendersWhereInput, {nullable:true})
    @Type(() => GendersWhereInput)
    delete?: Identity<GendersWhereInput>;

    @Field(() => GendersWhereUniqueInput, {nullable:true})
    @Type(() => GendersWhereUniqueInput)
    connect?: Prisma.AtLeast<GendersWhereUniqueInput, 'id'>;

    @Field(() => GendersUpdateToOneWithWhereWithoutEvolutionInput, {nullable:true})
    @Type(() => GendersUpdateToOneWithWhereWithoutEvolutionInput)
    update?: Identity<GendersUpdateToOneWithWhereWithoutEvolutionInput>;
}
