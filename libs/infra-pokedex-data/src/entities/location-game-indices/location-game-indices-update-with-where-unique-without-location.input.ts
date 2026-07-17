import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@pokemon-center/prisma';
import { LocationGameIndicesWhereUniqueInput } from './location-game-indices-where-unique.input';
import { Type } from 'class-transformer';
import type { Identity } from 'identity-type';
import { LocationGameIndicesUpdateWithoutLocationInput } from './location-game-indices-update-without-location.input';

@InputType()
export class LocationGameIndicesUpdateWithWhereUniqueWithoutLocationInput {

    @Field(() => LocationGameIndicesWhereUniqueInput, {nullable:false})
    @Type(() => LocationGameIndicesWhereUniqueInput)
    where!: Prisma.AtLeast<LocationGameIndicesWhereUniqueInput, 'location_id_generation_id'>;

    @Field(() => LocationGameIndicesUpdateWithoutLocationInput, {nullable:false})
    @Type(() => LocationGameIndicesUpdateWithoutLocationInput)
    data!: Identity<LocationGameIndicesUpdateWithoutLocationInput>;
}
