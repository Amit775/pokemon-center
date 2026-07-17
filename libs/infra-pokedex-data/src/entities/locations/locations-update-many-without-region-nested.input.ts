import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { LocationsCreateWithoutRegionInput } from './locations-create-without-region.input';
import { Type } from 'class-transformer';
import { LocationsCreateOrConnectWithoutRegionInput } from './locations-create-or-connect-without-region.input';
import { LocationsUpsertWithWhereUniqueWithoutRegionInput } from './locations-upsert-with-where-unique-without-region.input';
import { LocationsCreateManyRegionInputEnvelope } from './locations-create-many-region-input-envelope.input';
import { Prisma } from '@prisma/client';
import { LocationsWhereUniqueInput } from './locations-where-unique.input';
import { LocationsUpdateWithWhereUniqueWithoutRegionInput } from './locations-update-with-where-unique-without-region.input';
import { LocationsUpdateManyWithWhereWithoutRegionInput } from './locations-update-many-with-where-without-region.input';
import { LocationsScalarWhereInput } from './locations-scalar-where.input';

@InputType()
export class LocationsUpdateManyWithoutRegionNestedInput {

    @Field(() => [LocationsCreateWithoutRegionInput], {nullable:true})
    @Type(() => LocationsCreateWithoutRegionInput)
    create?: Array<LocationsCreateWithoutRegionInput>;

    @Field(() => [LocationsCreateOrConnectWithoutRegionInput], {nullable:true})
    @Type(() => LocationsCreateOrConnectWithoutRegionInput)
    connectOrCreate?: Array<LocationsCreateOrConnectWithoutRegionInput>;

    @Field(() => [LocationsUpsertWithWhereUniqueWithoutRegionInput], {nullable:true})
    @Type(() => LocationsUpsertWithWhereUniqueWithoutRegionInput)
    upsert?: Array<LocationsUpsertWithWhereUniqueWithoutRegionInput>;

    @Field(() => LocationsCreateManyRegionInputEnvelope, {nullable:true})
    @Type(() => LocationsCreateManyRegionInputEnvelope)
    createMany?: LocationsCreateManyRegionInputEnvelope;

    @Field(() => [LocationsWhereUniqueInput], {nullable:true})
    @Type(() => LocationsWhereUniqueInput)
    set?: Array<Prisma.AtLeast<LocationsWhereUniqueInput, 'id'>>;

    @Field(() => [LocationsWhereUniqueInput], {nullable:true})
    @Type(() => LocationsWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<LocationsWhereUniqueInput, 'id'>>;

    @Field(() => [LocationsWhereUniqueInput], {nullable:true})
    @Type(() => LocationsWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<LocationsWhereUniqueInput, 'id'>>;

    @Field(() => [LocationsWhereUniqueInput], {nullable:true})
    @Type(() => LocationsWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<LocationsWhereUniqueInput, 'id'>>;

    @Field(() => [LocationsUpdateWithWhereUniqueWithoutRegionInput], {nullable:true})
    @Type(() => LocationsUpdateWithWhereUniqueWithoutRegionInput)
    update?: Array<LocationsUpdateWithWhereUniqueWithoutRegionInput>;

    @Field(() => [LocationsUpdateManyWithWhereWithoutRegionInput], {nullable:true})
    @Type(() => LocationsUpdateManyWithWhereWithoutRegionInput)
    updateMany?: Array<LocationsUpdateManyWithWhereWithoutRegionInput>;

    @Field(() => [LocationsScalarWhereInput], {nullable:true})
    @Type(() => LocationsScalarWhereInput)
    deleteMany?: Array<LocationsScalarWhereInput>;
}
