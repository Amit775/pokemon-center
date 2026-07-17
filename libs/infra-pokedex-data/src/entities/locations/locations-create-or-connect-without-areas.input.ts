import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { LocationsWhereUniqueInput } from './locations-where-unique.input';
import { Type } from 'class-transformer';
import { LocationsCreateWithoutAreasInput } from './locations-create-without-areas.input';

@InputType()
export class LocationsCreateOrConnectWithoutAreasInput {

    @Field(() => LocationsWhereUniqueInput, {nullable:false})
    @Type(() => LocationsWhereUniqueInput)
    where!: Prisma.AtLeast<LocationsWhereUniqueInput, 'id'>;

    @Field(() => LocationsCreateWithoutAreasInput, {nullable:false})
    @Type(() => LocationsCreateWithoutAreasInput)
    create!: LocationsCreateWithoutAreasInput;
}
