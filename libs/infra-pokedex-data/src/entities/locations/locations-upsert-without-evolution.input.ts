import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { LocationsUpdateWithoutEvolutionInput } from './locations-update-without-evolution.input';
import { Type } from 'class-transformer';
import { LocationsCreateWithoutEvolutionInput } from './locations-create-without-evolution.input';
import { LocationsWhereInput } from './locations-where.input';

@InputType()
export class LocationsUpsertWithoutEvolutionInput {

    @Field(() => LocationsUpdateWithoutEvolutionInput, {nullable:false})
    @Type(() => LocationsUpdateWithoutEvolutionInput)
    update!: Identity<LocationsUpdateWithoutEvolutionInput>;

    @Field(() => LocationsCreateWithoutEvolutionInput, {nullable:false})
    @Type(() => LocationsCreateWithoutEvolutionInput)
    create!: Identity<LocationsCreateWithoutEvolutionInput>;

    @Field(() => LocationsWhereInput, {nullable:true})
    @Type(() => LocationsWhereInput)
    where?: Identity<LocationsWhereInput>;
}
