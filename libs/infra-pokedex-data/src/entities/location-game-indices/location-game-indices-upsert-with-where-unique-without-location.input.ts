import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { LocationGameIndicesWhereUniqueInput } from './location-game-indices-where-unique.input';
import { Type } from 'class-transformer';
import { LocationGameIndicesUpdateWithoutLocationInput } from './location-game-indices-update-without-location.input';
import { LocationGameIndicesCreateWithoutLocationInput } from './location-game-indices-create-without-location.input';

@InputType()
export class LocationGameIndicesUpsertWithWhereUniqueWithoutLocationInput {

    @Field(() => LocationGameIndicesWhereUniqueInput, {nullable:false})
    @Type(() => LocationGameIndicesWhereUniqueInput)
    where!: Prisma.AtLeast<LocationGameIndicesWhereUniqueInput, 'location_id_generation_id'>;

    @Field(() => LocationGameIndicesUpdateWithoutLocationInput, {nullable:false})
    @Type(() => LocationGameIndicesUpdateWithoutLocationInput)
    update!: LocationGameIndicesUpdateWithoutLocationInput;

    @Field(() => LocationGameIndicesCreateWithoutLocationInput, {nullable:false})
    @Type(() => LocationGameIndicesCreateWithoutLocationInput)
    create!: LocationGameIndicesCreateWithoutLocationInput;
}
