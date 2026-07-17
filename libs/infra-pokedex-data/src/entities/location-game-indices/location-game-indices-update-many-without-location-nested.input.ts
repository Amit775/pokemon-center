import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { LocationGameIndicesCreateWithoutLocationInput } from './location-game-indices-create-without-location.input';
import { Type } from 'class-transformer';
import { LocationGameIndicesCreateOrConnectWithoutLocationInput } from './location-game-indices-create-or-connect-without-location.input';
import { LocationGameIndicesUpsertWithWhereUniqueWithoutLocationInput } from './location-game-indices-upsert-with-where-unique-without-location.input';
import { LocationGameIndicesCreateManyLocationInputEnvelope } from './location-game-indices-create-many-location-input-envelope.input';
import { Prisma } from '@prisma/client';
import { LocationGameIndicesWhereUniqueInput } from './location-game-indices-where-unique.input';
import { LocationGameIndicesUpdateWithWhereUniqueWithoutLocationInput } from './location-game-indices-update-with-where-unique-without-location.input';
import { LocationGameIndicesUpdateManyWithWhereWithoutLocationInput } from './location-game-indices-update-many-with-where-without-location.input';
import { LocationGameIndicesScalarWhereInput } from './location-game-indices-scalar-where.input';

@InputType()
export class LocationGameIndicesUpdateManyWithoutLocationNestedInput {

    @Field(() => [LocationGameIndicesCreateWithoutLocationInput], {nullable:true})
    @Type(() => LocationGameIndicesCreateWithoutLocationInput)
    create?: Array<LocationGameIndicesCreateWithoutLocationInput>;

    @Field(() => [LocationGameIndicesCreateOrConnectWithoutLocationInput], {nullable:true})
    @Type(() => LocationGameIndicesCreateOrConnectWithoutLocationInput)
    connectOrCreate?: Array<LocationGameIndicesCreateOrConnectWithoutLocationInput>;

    @Field(() => [LocationGameIndicesUpsertWithWhereUniqueWithoutLocationInput], {nullable:true})
    @Type(() => LocationGameIndicesUpsertWithWhereUniqueWithoutLocationInput)
    upsert?: Array<LocationGameIndicesUpsertWithWhereUniqueWithoutLocationInput>;

    @Field(() => LocationGameIndicesCreateManyLocationInputEnvelope, {nullable:true})
    @Type(() => LocationGameIndicesCreateManyLocationInputEnvelope)
    createMany?: LocationGameIndicesCreateManyLocationInputEnvelope;

    @Field(() => [LocationGameIndicesWhereUniqueInput], {nullable:true})
    @Type(() => LocationGameIndicesWhereUniqueInput)
    set?: Array<Prisma.AtLeast<LocationGameIndicesWhereUniqueInput, 'location_id_generation_id'>>;

    @Field(() => [LocationGameIndicesWhereUniqueInput], {nullable:true})
    @Type(() => LocationGameIndicesWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<LocationGameIndicesWhereUniqueInput, 'location_id_generation_id'>>;

    @Field(() => [LocationGameIndicesWhereUniqueInput], {nullable:true})
    @Type(() => LocationGameIndicesWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<LocationGameIndicesWhereUniqueInput, 'location_id_generation_id'>>;

    @Field(() => [LocationGameIndicesWhereUniqueInput], {nullable:true})
    @Type(() => LocationGameIndicesWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<LocationGameIndicesWhereUniqueInput, 'location_id_generation_id'>>;

    @Field(() => [LocationGameIndicesUpdateWithWhereUniqueWithoutLocationInput], {nullable:true})
    @Type(() => LocationGameIndicesUpdateWithWhereUniqueWithoutLocationInput)
    update?: Array<LocationGameIndicesUpdateWithWhereUniqueWithoutLocationInput>;

    @Field(() => [LocationGameIndicesUpdateManyWithWhereWithoutLocationInput], {nullable:true})
    @Type(() => LocationGameIndicesUpdateManyWithWhereWithoutLocationInput)
    updateMany?: Array<LocationGameIndicesUpdateManyWithWhereWithoutLocationInput>;

    @Field(() => [LocationGameIndicesScalarWhereInput], {nullable:true})
    @Type(() => LocationGameIndicesScalarWhereInput)
    deleteMany?: Array<LocationGameIndicesScalarWhereInput>;
}
