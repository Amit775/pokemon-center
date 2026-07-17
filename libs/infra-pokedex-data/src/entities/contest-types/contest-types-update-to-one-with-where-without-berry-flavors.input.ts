import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { ContestTypesWhereInput } from './contest-types-where.input';
import { Type } from 'class-transformer';
import { ContestTypesUpdateWithoutBerryFlavorsInput } from './contest-types-update-without-berry-flavors.input';

@InputType()
export class ContestTypesUpdateToOneWithWhereWithoutBerryFlavorsInput {

    @Field(() => ContestTypesWhereInput, {nullable:true})
    @Type(() => ContestTypesWhereInput)
    where?: Identity<ContestTypesWhereInput>;

    @Field(() => ContestTypesUpdateWithoutBerryFlavorsInput, {nullable:false})
    @Type(() => ContestTypesUpdateWithoutBerryFlavorsInput)
    data!: Identity<ContestTypesUpdateWithoutBerryFlavorsInput>;
}
