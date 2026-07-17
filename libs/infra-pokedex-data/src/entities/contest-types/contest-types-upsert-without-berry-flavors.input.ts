import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { ContestTypesUpdateWithoutBerryFlavorsInput } from './contest-types-update-without-berry-flavors.input';
import { Type } from 'class-transformer';
import { ContestTypesCreateWithoutBerryFlavorsInput } from './contest-types-create-without-berry-flavors.input';
import { ContestTypesWhereInput } from './contest-types-where.input';

@InputType()
export class ContestTypesUpsertWithoutBerryFlavorsInput {

    @Field(() => ContestTypesUpdateWithoutBerryFlavorsInput, {nullable:false})
    @Type(() => ContestTypesUpdateWithoutBerryFlavorsInput)
    update!: Identity<ContestTypesUpdateWithoutBerryFlavorsInput>;

    @Field(() => ContestTypesCreateWithoutBerryFlavorsInput, {nullable:false})
    @Type(() => ContestTypesCreateWithoutBerryFlavorsInput)
    create!: Identity<ContestTypesCreateWithoutBerryFlavorsInput>;

    @Field(() => ContestTypesWhereInput, {nullable:true})
    @Type(() => ContestTypesWhereInput)
    where?: Identity<ContestTypesWhereInput>;
}
