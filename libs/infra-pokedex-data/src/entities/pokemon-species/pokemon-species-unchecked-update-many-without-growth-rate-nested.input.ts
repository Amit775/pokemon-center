import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PokemonSpeciesCreateWithoutGrowthRateInput } from './pokemon-species-create-without-growth-rate.input';
import { Type } from 'class-transformer';
import { PokemonSpeciesCreateOrConnectWithoutGrowthRateInput } from './pokemon-species-create-or-connect-without-growth-rate.input';
import { PokemonSpeciesUpsertWithWhereUniqueWithoutGrowthRateInput } from './pokemon-species-upsert-with-where-unique-without-growth-rate.input';
import { PokemonSpeciesCreateManyGrowthRateInputEnvelope } from './pokemon-species-create-many-growth-rate-input-envelope.input';
import { Prisma } from '@prisma/client';
import { PokemonSpeciesWhereUniqueInput } from './pokemon-species-where-unique.input';
import { PokemonSpeciesUpdateWithWhereUniqueWithoutGrowthRateInput } from './pokemon-species-update-with-where-unique-without-growth-rate.input';
import { PokemonSpeciesUpdateManyWithWhereWithoutGrowthRateInput } from './pokemon-species-update-many-with-where-without-growth-rate.input';
import { PokemonSpeciesScalarWhereInput } from './pokemon-species-scalar-where.input';

@InputType()
export class PokemonSpeciesUncheckedUpdateManyWithoutGrowthRateNestedInput {

    @Field(() => [PokemonSpeciesCreateWithoutGrowthRateInput], {nullable:true})
    @Type(() => PokemonSpeciesCreateWithoutGrowthRateInput)
    create?: Array<PokemonSpeciesCreateWithoutGrowthRateInput>;

    @Field(() => [PokemonSpeciesCreateOrConnectWithoutGrowthRateInput], {nullable:true})
    @Type(() => PokemonSpeciesCreateOrConnectWithoutGrowthRateInput)
    connectOrCreate?: Array<PokemonSpeciesCreateOrConnectWithoutGrowthRateInput>;

    @Field(() => [PokemonSpeciesUpsertWithWhereUniqueWithoutGrowthRateInput], {nullable:true})
    @Type(() => PokemonSpeciesUpsertWithWhereUniqueWithoutGrowthRateInput)
    upsert?: Array<PokemonSpeciesUpsertWithWhereUniqueWithoutGrowthRateInput>;

    @Field(() => PokemonSpeciesCreateManyGrowthRateInputEnvelope, {nullable:true})
    @Type(() => PokemonSpeciesCreateManyGrowthRateInputEnvelope)
    createMany?: PokemonSpeciesCreateManyGrowthRateInputEnvelope;

    @Field(() => [PokemonSpeciesWhereUniqueInput], {nullable:true})
    @Type(() => PokemonSpeciesWhereUniqueInput)
    set?: Array<Prisma.AtLeast<PokemonSpeciesWhereUniqueInput, 'id'>>;

    @Field(() => [PokemonSpeciesWhereUniqueInput], {nullable:true})
    @Type(() => PokemonSpeciesWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<PokemonSpeciesWhereUniqueInput, 'id'>>;

    @Field(() => [PokemonSpeciesWhereUniqueInput], {nullable:true})
    @Type(() => PokemonSpeciesWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<PokemonSpeciesWhereUniqueInput, 'id'>>;

    @Field(() => [PokemonSpeciesWhereUniqueInput], {nullable:true})
    @Type(() => PokemonSpeciesWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<PokemonSpeciesWhereUniqueInput, 'id'>>;

    @Field(() => [PokemonSpeciesUpdateWithWhereUniqueWithoutGrowthRateInput], {nullable:true})
    @Type(() => PokemonSpeciesUpdateWithWhereUniqueWithoutGrowthRateInput)
    update?: Array<PokemonSpeciesUpdateWithWhereUniqueWithoutGrowthRateInput>;

    @Field(() => [PokemonSpeciesUpdateManyWithWhereWithoutGrowthRateInput], {nullable:true})
    @Type(() => PokemonSpeciesUpdateManyWithWhereWithoutGrowthRateInput)
    updateMany?: Array<PokemonSpeciesUpdateManyWithWhereWithoutGrowthRateInput>;

    @Field(() => [PokemonSpeciesScalarWhereInput], {nullable:true})
    @Type(() => PokemonSpeciesScalarWhereInput)
    deleteMany?: Array<PokemonSpeciesScalarWhereInput>;
}
