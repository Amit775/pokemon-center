import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@pokemon-center/prisma';
import { ContestTypesWhereUniqueInput } from './contest-types-where-unique.input';
import { Type } from 'class-transformer';
import type { Identity } from 'identity-type';
import { ContestTypesCreateWithoutBerryFlavorsInput } from './contest-types-create-without-berry-flavors.input';

@InputType()
export class ContestTypesCreateOrConnectWithoutBerryFlavorsInput {

    @Field(() => ContestTypesWhereUniqueInput, {nullable:false})
    @Type(() => ContestTypesWhereUniqueInput)
    where!: Prisma.AtLeast<ContestTypesWhereUniqueInput, 'id'>;

    @Field(() => ContestTypesCreateWithoutBerryFlavorsInput, {nullable:false})
    @Type(() => ContestTypesCreateWithoutBerryFlavorsInput)
    create!: Identity<ContestTypesCreateWithoutBerryFlavorsInput>;
}
