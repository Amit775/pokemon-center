import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@pokemon-center/prisma';
import { LocationGameIndicesWhereUniqueInput } from './location-game-indices-where-unique.input';
import { Type } from 'class-transformer';
import type { Identity } from 'identity-type';
import { LocationGameIndicesUpdateWithoutGenerationInput } from './location-game-indices-update-without-generation.input';

@InputType()
export class LocationGameIndicesUpdateWithWhereUniqueWithoutGenerationInput {

    @Field(() => LocationGameIndicesWhereUniqueInput, {nullable:false})
    @Type(() => LocationGameIndicesWhereUniqueInput)
    where!: Prisma.AtLeast<LocationGameIndicesWhereUniqueInput, 'location_id_generation_id'>;

    @Field(() => LocationGameIndicesUpdateWithoutGenerationInput, {nullable:false})
    @Type(() => LocationGameIndicesUpdateWithoutGenerationInput)
    data!: Identity<LocationGameIndicesUpdateWithoutGenerationInput>;
}
