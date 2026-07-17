import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { LocationGameIndicesWhereUniqueInput } from './location-game-indices-where-unique.input';
import { Type } from 'class-transformer';
import { LocationGameIndicesCreateWithoutGenerationInput } from './location-game-indices-create-without-generation.input';

@InputType()
export class LocationGameIndicesCreateOrConnectWithoutGenerationInput {

    @Field(() => LocationGameIndicesWhereUniqueInput, {nullable:false})
    @Type(() => LocationGameIndicesWhereUniqueInput)
    where!: Prisma.AtLeast<LocationGameIndicesWhereUniqueInput, 'location_id_generation_id'>;

    @Field(() => LocationGameIndicesCreateWithoutGenerationInput, {nullable:false})
    @Type(() => LocationGameIndicesCreateWithoutGenerationInput)
    create!: LocationGameIndicesCreateWithoutGenerationInput;
}
