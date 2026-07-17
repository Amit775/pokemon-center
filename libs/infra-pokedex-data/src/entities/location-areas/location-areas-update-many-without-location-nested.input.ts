import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { LocationAreasCreateWithoutLocationInput } from './location-areas-create-without-location.input';
import { Type } from 'class-transformer';
import { LocationAreasCreateOrConnectWithoutLocationInput } from './location-areas-create-or-connect-without-location.input';
import { LocationAreasUpsertWithWhereUniqueWithoutLocationInput } from './location-areas-upsert-with-where-unique-without-location.input';
import { LocationAreasCreateManyLocationInputEnvelope } from './location-areas-create-many-location-input-envelope.input';
import { Prisma } from '@prisma/client';
import { LocationAreasWhereUniqueInput } from './location-areas-where-unique.input';
import { LocationAreasUpdateWithWhereUniqueWithoutLocationInput } from './location-areas-update-with-where-unique-without-location.input';
import { LocationAreasUpdateManyWithWhereWithoutLocationInput } from './location-areas-update-many-with-where-without-location.input';
import { LocationAreasScalarWhereInput } from './location-areas-scalar-where.input';

@InputType()
export class LocationAreasUpdateManyWithoutLocationNestedInput {

    @Field(() => [LocationAreasCreateWithoutLocationInput], {nullable:true})
    @Type(() => LocationAreasCreateWithoutLocationInput)
    create?: Array<LocationAreasCreateWithoutLocationInput>;

    @Field(() => [LocationAreasCreateOrConnectWithoutLocationInput], {nullable:true})
    @Type(() => LocationAreasCreateOrConnectWithoutLocationInput)
    connectOrCreate?: Array<LocationAreasCreateOrConnectWithoutLocationInput>;

    @Field(() => [LocationAreasUpsertWithWhereUniqueWithoutLocationInput], {nullable:true})
    @Type(() => LocationAreasUpsertWithWhereUniqueWithoutLocationInput)
    upsert?: Array<LocationAreasUpsertWithWhereUniqueWithoutLocationInput>;

    @Field(() => LocationAreasCreateManyLocationInputEnvelope, {nullable:true})
    @Type(() => LocationAreasCreateManyLocationInputEnvelope)
    createMany?: LocationAreasCreateManyLocationInputEnvelope;

    @Field(() => [LocationAreasWhereUniqueInput], {nullable:true})
    @Type(() => LocationAreasWhereUniqueInput)
    set?: Array<Prisma.AtLeast<LocationAreasWhereUniqueInput, 'id'>>;

    @Field(() => [LocationAreasWhereUniqueInput], {nullable:true})
    @Type(() => LocationAreasWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<LocationAreasWhereUniqueInput, 'id'>>;

    @Field(() => [LocationAreasWhereUniqueInput], {nullable:true})
    @Type(() => LocationAreasWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<LocationAreasWhereUniqueInput, 'id'>>;

    @Field(() => [LocationAreasWhereUniqueInput], {nullable:true})
    @Type(() => LocationAreasWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<LocationAreasWhereUniqueInput, 'id'>>;

    @Field(() => [LocationAreasUpdateWithWhereUniqueWithoutLocationInput], {nullable:true})
    @Type(() => LocationAreasUpdateWithWhereUniqueWithoutLocationInput)
    update?: Array<LocationAreasUpdateWithWhereUniqueWithoutLocationInput>;

    @Field(() => [LocationAreasUpdateManyWithWhereWithoutLocationInput], {nullable:true})
    @Type(() => LocationAreasUpdateManyWithWhereWithoutLocationInput)
    updateMany?: Array<LocationAreasUpdateManyWithWhereWithoutLocationInput>;

    @Field(() => [LocationAreasScalarWhereInput], {nullable:true})
    @Type(() => LocationAreasScalarWhereInput)
    deleteMany?: Array<LocationAreasScalarWhereInput>;
}
