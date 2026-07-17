import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PokemonEvolutionCreateWithoutTradeSpeciesInput } from './pokemon-evolution-create-without-trade-species.input';
import { Type } from 'class-transformer';
import { PokemonEvolutionCreateOrConnectWithoutTradeSpeciesInput } from './pokemon-evolution-create-or-connect-without-trade-species.input';
import { PokemonEvolutionUpsertWithWhereUniqueWithoutTradeSpeciesInput } from './pokemon-evolution-upsert-with-where-unique-without-trade-species.input';
import { PokemonEvolutionCreateManyTradeSpeciesInputEnvelope } from './pokemon-evolution-create-many-trade-species-input-envelope.input';
import { Prisma } from '@prisma/client';
import { PokemonEvolutionWhereUniqueInput } from './pokemon-evolution-where-unique.input';
import { PokemonEvolutionUpdateWithWhereUniqueWithoutTradeSpeciesInput } from './pokemon-evolution-update-with-where-unique-without-trade-species.input';
import { PokemonEvolutionUpdateManyWithWhereWithoutTradeSpeciesInput } from './pokemon-evolution-update-many-with-where-without-trade-species.input';
import { PokemonEvolutionScalarWhereInput } from './pokemon-evolution-scalar-where.input';

@InputType()
export class PokemonEvolutionUncheckedUpdateManyWithoutTradeSpeciesNestedInput {

    @Field(() => [PokemonEvolutionCreateWithoutTradeSpeciesInput], {nullable:true})
    @Type(() => PokemonEvolutionCreateWithoutTradeSpeciesInput)
    create?: Array<PokemonEvolutionCreateWithoutTradeSpeciesInput>;

    @Field(() => [PokemonEvolutionCreateOrConnectWithoutTradeSpeciesInput], {nullable:true})
    @Type(() => PokemonEvolutionCreateOrConnectWithoutTradeSpeciesInput)
    connectOrCreate?: Array<PokemonEvolutionCreateOrConnectWithoutTradeSpeciesInput>;

    @Field(() => [PokemonEvolutionUpsertWithWhereUniqueWithoutTradeSpeciesInput], {nullable:true})
    @Type(() => PokemonEvolutionUpsertWithWhereUniqueWithoutTradeSpeciesInput)
    upsert?: Array<PokemonEvolutionUpsertWithWhereUniqueWithoutTradeSpeciesInput>;

    @Field(() => PokemonEvolutionCreateManyTradeSpeciesInputEnvelope, {nullable:true})
    @Type(() => PokemonEvolutionCreateManyTradeSpeciesInputEnvelope)
    createMany?: PokemonEvolutionCreateManyTradeSpeciesInputEnvelope;

    @Field(() => [PokemonEvolutionWhereUniqueInput], {nullable:true})
    @Type(() => PokemonEvolutionWhereUniqueInput)
    set?: Array<Prisma.AtLeast<PokemonEvolutionWhereUniqueInput, 'id'>>;

    @Field(() => [PokemonEvolutionWhereUniqueInput], {nullable:true})
    @Type(() => PokemonEvolutionWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<PokemonEvolutionWhereUniqueInput, 'id'>>;

    @Field(() => [PokemonEvolutionWhereUniqueInput], {nullable:true})
    @Type(() => PokemonEvolutionWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<PokemonEvolutionWhereUniqueInput, 'id'>>;

    @Field(() => [PokemonEvolutionWhereUniqueInput], {nullable:true})
    @Type(() => PokemonEvolutionWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<PokemonEvolutionWhereUniqueInput, 'id'>>;

    @Field(() => [PokemonEvolutionUpdateWithWhereUniqueWithoutTradeSpeciesInput], {nullable:true})
    @Type(() => PokemonEvolutionUpdateWithWhereUniqueWithoutTradeSpeciesInput)
    update?: Array<PokemonEvolutionUpdateWithWhereUniqueWithoutTradeSpeciesInput>;

    @Field(() => [PokemonEvolutionUpdateManyWithWhereWithoutTradeSpeciesInput], {nullable:true})
    @Type(() => PokemonEvolutionUpdateManyWithWhereWithoutTradeSpeciesInput)
    updateMany?: Array<PokemonEvolutionUpdateManyWithWhereWithoutTradeSpeciesInput>;

    @Field(() => [PokemonEvolutionScalarWhereInput], {nullable:true})
    @Type(() => PokemonEvolutionScalarWhereInput)
    deleteMany?: Array<PokemonEvolutionScalarWhereInput>;
}
