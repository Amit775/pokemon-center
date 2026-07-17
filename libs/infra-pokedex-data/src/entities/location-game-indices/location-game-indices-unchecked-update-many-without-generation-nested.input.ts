import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { LocationGameIndicesCreateWithoutGenerationInput } from './location-game-indices-create-without-generation.input';
import { Type } from 'class-transformer';
import { LocationGameIndicesCreateOrConnectWithoutGenerationInput } from './location-game-indices-create-or-connect-without-generation.input';
import { LocationGameIndicesUpsertWithWhereUniqueWithoutGenerationInput } from './location-game-indices-upsert-with-where-unique-without-generation.input';
import { LocationGameIndicesCreateManyGenerationInputEnvelope } from './location-game-indices-create-many-generation-input-envelope.input';
import { Prisma } from '@prisma/client';
import { LocationGameIndicesWhereUniqueInput } from './location-game-indices-where-unique.input';
import { LocationGameIndicesUpdateWithWhereUniqueWithoutGenerationInput } from './location-game-indices-update-with-where-unique-without-generation.input';
import { LocationGameIndicesUpdateManyWithWhereWithoutGenerationInput } from './location-game-indices-update-many-with-where-without-generation.input';
import { LocationGameIndicesScalarWhereInput } from './location-game-indices-scalar-where.input';

@InputType()
export class LocationGameIndicesUncheckedUpdateManyWithoutGenerationNestedInput {

    @Field(() => [LocationGameIndicesCreateWithoutGenerationInput], {nullable:true})
    @Type(() => LocationGameIndicesCreateWithoutGenerationInput)
    create?: Array<LocationGameIndicesCreateWithoutGenerationInput>;

    @Field(() => [LocationGameIndicesCreateOrConnectWithoutGenerationInput], {nullable:true})
    @Type(() => LocationGameIndicesCreateOrConnectWithoutGenerationInput)
    connectOrCreate?: Array<LocationGameIndicesCreateOrConnectWithoutGenerationInput>;

    @Field(() => [LocationGameIndicesUpsertWithWhereUniqueWithoutGenerationInput], {nullable:true})
    @Type(() => LocationGameIndicesUpsertWithWhereUniqueWithoutGenerationInput)
    upsert?: Array<LocationGameIndicesUpsertWithWhereUniqueWithoutGenerationInput>;

    @Field(() => LocationGameIndicesCreateManyGenerationInputEnvelope, {nullable:true})
    @Type(() => LocationGameIndicesCreateManyGenerationInputEnvelope)
    createMany?: LocationGameIndicesCreateManyGenerationInputEnvelope;

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

    @Field(() => [LocationGameIndicesUpdateWithWhereUniqueWithoutGenerationInput], {nullable:true})
    @Type(() => LocationGameIndicesUpdateWithWhereUniqueWithoutGenerationInput)
    update?: Array<LocationGameIndicesUpdateWithWhereUniqueWithoutGenerationInput>;

    @Field(() => [LocationGameIndicesUpdateManyWithWhereWithoutGenerationInput], {nullable:true})
    @Type(() => LocationGameIndicesUpdateManyWithWhereWithoutGenerationInput)
    updateMany?: Array<LocationGameIndicesUpdateManyWithWhereWithoutGenerationInput>;

    @Field(() => [LocationGameIndicesScalarWhereInput], {nullable:true})
    @Type(() => LocationGameIndicesScalarWhereInput)
    deleteMany?: Array<LocationGameIndicesScalarWhereInput>;
}
