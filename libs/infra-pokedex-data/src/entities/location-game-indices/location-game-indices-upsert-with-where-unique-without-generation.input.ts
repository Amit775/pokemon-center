import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@pokemon-center/prisma';
import { LocationGameIndicesWhereUniqueInput } from './location-game-indices-where-unique.input';
import { Type } from 'class-transformer';
import type { Identity } from 'identity-type';
import { LocationGameIndicesUpdateWithoutGenerationInput } from './location-game-indices-update-without-generation.input';
import { LocationGameIndicesCreateWithoutGenerationInput } from './location-game-indices-create-without-generation.input';

@InputType()
export class LocationGameIndicesUpsertWithWhereUniqueWithoutGenerationInput {

    @Field(() => LocationGameIndicesWhereUniqueInput, {nullable:false})
    @Type(() => LocationGameIndicesWhereUniqueInput)
    where!: Prisma.AtLeast<LocationGameIndicesWhereUniqueInput, 'location_id_generation_id'>;

    @Field(() => LocationGameIndicesUpdateWithoutGenerationInput, {nullable:false})
    @Type(() => LocationGameIndicesUpdateWithoutGenerationInput)
    update!: Identity<LocationGameIndicesUpdateWithoutGenerationInput>;

    @Field(() => LocationGameIndicesCreateWithoutGenerationInput, {nullable:false})
    @Type(() => LocationGameIndicesCreateWithoutGenerationInput)
    create!: Identity<LocationGameIndicesCreateWithoutGenerationInput>;
}
