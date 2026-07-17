import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { LocationGameIndicesCreateWithoutLocationInput } from './location-game-indices-create-without-location.input';
import { Type } from 'class-transformer';
import { LocationGameIndicesCreateOrConnectWithoutLocationInput } from './location-game-indices-create-or-connect-without-location.input';
import type { Identity } from 'identity-type';
import { LocationGameIndicesCreateManyLocationInputEnvelope } from './location-game-indices-create-many-location-input-envelope.input';
import { Prisma } from '@pokemon-center/prisma';
import { LocationGameIndicesWhereUniqueInput } from './location-game-indices-where-unique.input';

@InputType()
export class LocationGameIndicesUncheckedCreateNestedManyWithoutLocationInput {

    @Field(() => [LocationGameIndicesCreateWithoutLocationInput], {nullable:true})
    @Type(() => LocationGameIndicesCreateWithoutLocationInput)
    create?: Array<LocationGameIndicesCreateWithoutLocationInput>;

    @Field(() => [LocationGameIndicesCreateOrConnectWithoutLocationInput], {nullable:true})
    @Type(() => LocationGameIndicesCreateOrConnectWithoutLocationInput)
    connectOrCreate?: Array<LocationGameIndicesCreateOrConnectWithoutLocationInput>;

    @Field(() => LocationGameIndicesCreateManyLocationInputEnvelope, {nullable:true})
    @Type(() => LocationGameIndicesCreateManyLocationInputEnvelope)
    createMany?: Identity<LocationGameIndicesCreateManyLocationInputEnvelope>;

    @Field(() => [LocationGameIndicesWhereUniqueInput], {nullable:true})
    @Type(() => LocationGameIndicesWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<LocationGameIndicesWhereUniqueInput, 'location_id_generation_id'>>;
}
