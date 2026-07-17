import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { ContestTypesCreateWithoutBerryFlavorsInput } from './contest-types-create-without-berry-flavors.input';
import { Type } from 'class-transformer';
import { ContestTypesCreateOrConnectWithoutBerryFlavorsInput } from './contest-types-create-or-connect-without-berry-flavors.input';
import { Prisma } from '@pokemon-center/prisma';
import { ContestTypesWhereUniqueInput } from './contest-types-where-unique.input';

@InputType()
export class ContestTypesCreateNestedOneWithoutBerryFlavorsInput {

    @Field(() => ContestTypesCreateWithoutBerryFlavorsInput, {nullable:true})
    @Type(() => ContestTypesCreateWithoutBerryFlavorsInput)
    create?: Identity<ContestTypesCreateWithoutBerryFlavorsInput>;

    @Field(() => ContestTypesCreateOrConnectWithoutBerryFlavorsInput, {nullable:true})
    @Type(() => ContestTypesCreateOrConnectWithoutBerryFlavorsInput)
    connectOrCreate?: Identity<ContestTypesCreateOrConnectWithoutBerryFlavorsInput>;

    @Field(() => ContestTypesWhereUniqueInput, {nullable:true})
    @Type(() => ContestTypesWhereUniqueInput)
    connect?: Prisma.AtLeast<ContestTypesWhereUniqueInput, 'id'>;
}
