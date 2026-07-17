import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { LocationsCreateWithoutRegionInput } from './locations-create-without-region.input';
import { Type } from 'class-transformer';
import { LocationsCreateOrConnectWithoutRegionInput } from './locations-create-or-connect-without-region.input';
import type { Identity } from 'identity-type';
import { LocationsCreateManyRegionInputEnvelope } from './locations-create-many-region-input-envelope.input';
import { Prisma } from '@pokemon-center/prisma';
import { LocationsWhereUniqueInput } from './locations-where-unique.input';

@InputType()
export class LocationsCreateNestedManyWithoutRegionInput {

    @Field(() => [LocationsCreateWithoutRegionInput], {nullable:true})
    @Type(() => LocationsCreateWithoutRegionInput)
    create?: Array<LocationsCreateWithoutRegionInput>;

    @Field(() => [LocationsCreateOrConnectWithoutRegionInput], {nullable:true})
    @Type(() => LocationsCreateOrConnectWithoutRegionInput)
    connectOrCreate?: Array<LocationsCreateOrConnectWithoutRegionInput>;

    @Field(() => LocationsCreateManyRegionInputEnvelope, {nullable:true})
    @Type(() => LocationsCreateManyRegionInputEnvelope)
    createMany?: Identity<LocationsCreateManyRegionInputEnvelope>;

    @Field(() => [LocationsWhereUniqueInput], {nullable:true})
    @Type(() => LocationsWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<LocationsWhereUniqueInput, 'id'>>;
}
