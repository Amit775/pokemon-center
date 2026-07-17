import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@pokemon-center/prisma';
import { LocationGameIndicesWhereUniqueInput } from './location-game-indices-where-unique.input';
import { Type } from 'class-transformer';
import type { Identity } from 'identity-type';
import { LocationGameIndicesCreateWithoutLocationInput } from './location-game-indices-create-without-location.input';

@InputType()
export class LocationGameIndicesCreateOrConnectWithoutLocationInput {

    @Field(() => LocationGameIndicesWhereUniqueInput, {nullable:false})
    @Type(() => LocationGameIndicesWhereUniqueInput)
    where!: Prisma.AtLeast<LocationGameIndicesWhereUniqueInput, 'location_id_generation_id'>;

    @Field(() => LocationGameIndicesCreateWithoutLocationInput, {nullable:false})
    @Type(() => LocationGameIndicesCreateWithoutLocationInput)
    create!: Identity<LocationGameIndicesCreateWithoutLocationInput>;
}
