import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { LocationAreasCreateWithoutLocationInput } from './location-areas-create-without-location.input';
import { Type } from 'class-transformer';
import { LocationAreasCreateOrConnectWithoutLocationInput } from './location-areas-create-or-connect-without-location.input';
import { LocationAreasCreateManyLocationInputEnvelope } from './location-areas-create-many-location-input-envelope.input';
import { Prisma } from '@prisma/client';
import { LocationAreasWhereUniqueInput } from './location-areas-where-unique.input';

@InputType()
export class LocationAreasCreateNestedManyWithoutLocationInput {

    @Field(() => [LocationAreasCreateWithoutLocationInput], {nullable:true})
    @Type(() => LocationAreasCreateWithoutLocationInput)
    create?: Array<LocationAreasCreateWithoutLocationInput>;

    @Field(() => [LocationAreasCreateOrConnectWithoutLocationInput], {nullable:true})
    @Type(() => LocationAreasCreateOrConnectWithoutLocationInput)
    connectOrCreate?: Array<LocationAreasCreateOrConnectWithoutLocationInput>;

    @Field(() => LocationAreasCreateManyLocationInputEnvelope, {nullable:true})
    @Type(() => LocationAreasCreateManyLocationInputEnvelope)
    createMany?: LocationAreasCreateManyLocationInputEnvelope;

    @Field(() => [LocationAreasWhereUniqueInput], {nullable:true})
    @Type(() => LocationAreasWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<LocationAreasWhereUniqueInput, 'id'>>;
}
