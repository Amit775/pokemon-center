import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GendersCreateWithoutEvolutionInput } from './genders-create-without-evolution.input';
import { Type } from 'class-transformer';
import { GendersCreateOrConnectWithoutEvolutionInput } from './genders-create-or-connect-without-evolution.input';
import { GendersUpsertWithoutEvolutionInput } from './genders-upsert-without-evolution.input';
import { GendersWhereInput } from './genders-where.input';
import { Prisma } from '@prisma/client';
import { GendersWhereUniqueInput } from './genders-where-unique.input';
import { GendersUpdateToOneWithWhereWithoutEvolutionInput } from './genders-update-to-one-with-where-without-evolution.input';

@InputType()
export class GendersUpdateOneWithoutEvolutionNestedInput {

    @Field(() => GendersCreateWithoutEvolutionInput, {nullable:true})
    @Type(() => GendersCreateWithoutEvolutionInput)
    create?: GendersCreateWithoutEvolutionInput;

    @Field(() => GendersCreateOrConnectWithoutEvolutionInput, {nullable:true})
    @Type(() => GendersCreateOrConnectWithoutEvolutionInput)
    connectOrCreate?: GendersCreateOrConnectWithoutEvolutionInput;

    @Field(() => GendersUpsertWithoutEvolutionInput, {nullable:true})
    @Type(() => GendersUpsertWithoutEvolutionInput)
    upsert?: GendersUpsertWithoutEvolutionInput;

    @Field(() => GendersWhereInput, {nullable:true})
    @Type(() => GendersWhereInput)
    disconnect?: GendersWhereInput;

    @Field(() => GendersWhereInput, {nullable:true})
    @Type(() => GendersWhereInput)
    delete?: GendersWhereInput;

    @Field(() => GendersWhereUniqueInput, {nullable:true})
    @Type(() => GendersWhereUniqueInput)
    connect?: Prisma.AtLeast<GendersWhereUniqueInput, 'id'>;

    @Field(() => GendersUpdateToOneWithWhereWithoutEvolutionInput, {nullable:true})
    @Type(() => GendersUpdateToOneWithWhereWithoutEvolutionInput)
    update?: GendersUpdateToOneWithWhereWithoutEvolutionInput;
}
