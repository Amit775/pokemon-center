import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@pokemon-center/prisma';
import { LocationsWhereUniqueInput } from './locations-where-unique.input';
import { Type } from 'class-transformer';
import type { Identity } from 'identity-type';
import { LocationsCreateWithoutEvolutionInput } from './locations-create-without-evolution.input';

@InputType()
export class LocationsCreateOrConnectWithoutEvolutionInput {

    @Field(() => LocationsWhereUniqueInput, {nullable:false})
    @Type(() => LocationsWhereUniqueInput)
    where!: Prisma.AtLeast<LocationsWhereUniqueInput, 'id'>;

    @Field(() => LocationsCreateWithoutEvolutionInput, {nullable:false})
    @Type(() => LocationsCreateWithoutEvolutionInput)
    create!: Identity<LocationsCreateWithoutEvolutionInput>;
}
