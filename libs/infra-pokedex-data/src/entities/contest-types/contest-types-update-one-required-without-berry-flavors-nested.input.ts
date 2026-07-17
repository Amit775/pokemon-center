import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ContestTypesCreateWithoutBerryFlavorsInput } from './contest-types-create-without-berry-flavors.input';
import { Type } from 'class-transformer';
import { ContestTypesCreateOrConnectWithoutBerryFlavorsInput } from './contest-types-create-or-connect-without-berry-flavors.input';
import { ContestTypesUpsertWithoutBerryFlavorsInput } from './contest-types-upsert-without-berry-flavors.input';
import { Prisma } from '@prisma/client';
import { ContestTypesWhereUniqueInput } from './contest-types-where-unique.input';
import { ContestTypesUpdateToOneWithWhereWithoutBerryFlavorsInput } from './contest-types-update-to-one-with-where-without-berry-flavors.input';

@InputType()
export class ContestTypesUpdateOneRequiredWithoutBerryFlavorsNestedInput {

    @Field(() => ContestTypesCreateWithoutBerryFlavorsInput, {nullable:true})
    @Type(() => ContestTypesCreateWithoutBerryFlavorsInput)
    create?: ContestTypesCreateWithoutBerryFlavorsInput;

    @Field(() => ContestTypesCreateOrConnectWithoutBerryFlavorsInput, {nullable:true})
    @Type(() => ContestTypesCreateOrConnectWithoutBerryFlavorsInput)
    connectOrCreate?: ContestTypesCreateOrConnectWithoutBerryFlavorsInput;

    @Field(() => ContestTypesUpsertWithoutBerryFlavorsInput, {nullable:true})
    @Type(() => ContestTypesUpsertWithoutBerryFlavorsInput)
    upsert?: ContestTypesUpsertWithoutBerryFlavorsInput;

    @Field(() => ContestTypesWhereUniqueInput, {nullable:true})
    @Type(() => ContestTypesWhereUniqueInput)
    connect?: Prisma.AtLeast<ContestTypesWhereUniqueInput, 'id'>;

    @Field(() => ContestTypesUpdateToOneWithWhereWithoutBerryFlavorsInput, {nullable:true})
    @Type(() => ContestTypesUpdateToOneWithWhereWithoutBerryFlavorsInput)
    update?: ContestTypesUpdateToOneWithWhereWithoutBerryFlavorsInput;
}
