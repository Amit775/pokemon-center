import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { LocationGameIndicesCreateWithoutGenerationInput } from './location-game-indices-create-without-generation.input';
import { Type } from 'class-transformer';
import { LocationGameIndicesCreateOrConnectWithoutGenerationInput } from './location-game-indices-create-or-connect-without-generation.input';
import type { Identity } from 'identity-type';
import { LocationGameIndicesCreateManyGenerationInputEnvelope } from './location-game-indices-create-many-generation-input-envelope.input';
import { Prisma } from '@pokemon-center/prisma';
import { LocationGameIndicesWhereUniqueInput } from './location-game-indices-where-unique.input';

@InputType()
export class LocationGameIndicesCreateNestedManyWithoutGenerationInput {

    @Field(() => [LocationGameIndicesCreateWithoutGenerationInput], {nullable:true})
    @Type(() => LocationGameIndicesCreateWithoutGenerationInput)
    create?: Array<LocationGameIndicesCreateWithoutGenerationInput>;

    @Field(() => [LocationGameIndicesCreateOrConnectWithoutGenerationInput], {nullable:true})
    @Type(() => LocationGameIndicesCreateOrConnectWithoutGenerationInput)
    connectOrCreate?: Array<LocationGameIndicesCreateOrConnectWithoutGenerationInput>;

    @Field(() => LocationGameIndicesCreateManyGenerationInputEnvelope, {nullable:true})
    @Type(() => LocationGameIndicesCreateManyGenerationInputEnvelope)
    createMany?: Identity<LocationGameIndicesCreateManyGenerationInputEnvelope>;

    @Field(() => [LocationGameIndicesWhereUniqueInput], {nullable:true})
    @Type(() => LocationGameIndicesWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<LocationGameIndicesWhereUniqueInput, 'location_id_generation_id'>>;
}
