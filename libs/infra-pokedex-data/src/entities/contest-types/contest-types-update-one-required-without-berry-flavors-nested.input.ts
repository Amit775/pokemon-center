import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { ContestTypesCreateWithoutBerryFlavorsInput } from './contest-types-create-without-berry-flavors.input';
import { Type } from 'class-transformer';
import { ContestTypesCreateOrConnectWithoutBerryFlavorsInput } from './contest-types-create-or-connect-without-berry-flavors.input';
import { ContestTypesUpsertWithoutBerryFlavorsInput } from './contest-types-upsert-without-berry-flavors.input';
import { Prisma } from '@pokemon-center/prisma';
import { ContestTypesWhereUniqueInput } from './contest-types-where-unique.input';
import { ContestTypesUpdateToOneWithWhereWithoutBerryFlavorsInput } from './contest-types-update-to-one-with-where-without-berry-flavors.input';

@InputType()
export class ContestTypesUpdateOneRequiredWithoutBerryFlavorsNestedInput {

    @Field(() => ContestTypesCreateWithoutBerryFlavorsInput, {nullable:true})
    @Type(() => ContestTypesCreateWithoutBerryFlavorsInput)
    create?: Identity<ContestTypesCreateWithoutBerryFlavorsInput>;

    @Field(() => ContestTypesCreateOrConnectWithoutBerryFlavorsInput, {nullable:true})
    @Type(() => ContestTypesCreateOrConnectWithoutBerryFlavorsInput)
    connectOrCreate?: Identity<ContestTypesCreateOrConnectWithoutBerryFlavorsInput>;

    @Field(() => ContestTypesUpsertWithoutBerryFlavorsInput, {nullable:true})
    @Type(() => ContestTypesUpsertWithoutBerryFlavorsInput)
    upsert?: Identity<ContestTypesUpsertWithoutBerryFlavorsInput>;

    @Field(() => ContestTypesWhereUniqueInput, {nullable:true})
    @Type(() => ContestTypesWhereUniqueInput)
    connect?: Prisma.AtLeast<ContestTypesWhereUniqueInput, 'id'>;

    @Field(() => ContestTypesUpdateToOneWithWhereWithoutBerryFlavorsInput, {nullable:true})
    @Type(() => ContestTypesUpdateToOneWithWhereWithoutBerryFlavorsInput)
    update?: Identity<ContestTypesUpdateToOneWithWhereWithoutBerryFlavorsInput>;
}
