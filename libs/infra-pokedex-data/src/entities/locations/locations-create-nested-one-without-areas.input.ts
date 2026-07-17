import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { LocationsCreateWithoutAreasInput } from './locations-create-without-areas.input';
import { Type } from 'class-transformer';
import { LocationsCreateOrConnectWithoutAreasInput } from './locations-create-or-connect-without-areas.input';
import { Prisma } from '@pokemon-center/prisma';
import { LocationsWhereUniqueInput } from './locations-where-unique.input';

@InputType()
export class LocationsCreateNestedOneWithoutAreasInput {

    @Field(() => LocationsCreateWithoutAreasInput, {nullable:true})
    @Type(() => LocationsCreateWithoutAreasInput)
    create?: Identity<LocationsCreateWithoutAreasInput>;

    @Field(() => LocationsCreateOrConnectWithoutAreasInput, {nullable:true})
    @Type(() => LocationsCreateOrConnectWithoutAreasInput)
    connectOrCreate?: Identity<LocationsCreateOrConnectWithoutAreasInput>;

    @Field(() => LocationsWhereUniqueInput, {nullable:true})
    @Type(() => LocationsWhereUniqueInput)
    connect?: Prisma.AtLeast<LocationsWhereUniqueInput, 'id'>;
}
