import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PokemonEvolutionCreateWithoutEvolvedSpeciesInput } from './pokemon-evolution-create-without-evolved-species.input';
import { Type } from 'class-transformer';
import { PokemonEvolutionCreateOrConnectWithoutEvolvedSpeciesInput } from './pokemon-evolution-create-or-connect-without-evolved-species.input';
import { PokemonEvolutionUpsertWithWhereUniqueWithoutEvolvedSpeciesInput } from './pokemon-evolution-upsert-with-where-unique-without-evolved-species.input';
import { PokemonEvolutionCreateManyEvolvedSpeciesInputEnvelope } from './pokemon-evolution-create-many-evolved-species-input-envelope.input';
import { Prisma } from '@prisma/client';
import { PokemonEvolutionWhereUniqueInput } from './pokemon-evolution-where-unique.input';
import { PokemonEvolutionUpdateWithWhereUniqueWithoutEvolvedSpeciesInput } from './pokemon-evolution-update-with-where-unique-without-evolved-species.input';
import { PokemonEvolutionUpdateManyWithWhereWithoutEvolvedSpeciesInput } from './pokemon-evolution-update-many-with-where-without-evolved-species.input';
import { PokemonEvolutionScalarWhereInput } from './pokemon-evolution-scalar-where.input';

@InputType()
export class PokemonEvolutionUncheckedUpdateManyWithoutEvolvedSpeciesNestedInput {

    @Field(() => [PokemonEvolutionCreateWithoutEvolvedSpeciesInput], {nullable:true})
    @Type(() => PokemonEvolutionCreateWithoutEvolvedSpeciesInput)
    create?: Array<PokemonEvolutionCreateWithoutEvolvedSpeciesInput>;

    @Field(() => [PokemonEvolutionCreateOrConnectWithoutEvolvedSpeciesInput], {nullable:true})
    @Type(() => PokemonEvolutionCreateOrConnectWithoutEvolvedSpeciesInput)
    connectOrCreate?: Array<PokemonEvolutionCreateOrConnectWithoutEvolvedSpeciesInput>;

    @Field(() => [PokemonEvolutionUpsertWithWhereUniqueWithoutEvolvedSpeciesInput], {nullable:true})
    @Type(() => PokemonEvolutionUpsertWithWhereUniqueWithoutEvolvedSpeciesInput)
    upsert?: Array<PokemonEvolutionUpsertWithWhereUniqueWithoutEvolvedSpeciesInput>;

    @Field(() => PokemonEvolutionCreateManyEvolvedSpeciesInputEnvelope, {nullable:true})
    @Type(() => PokemonEvolutionCreateManyEvolvedSpeciesInputEnvelope)
    createMany?: PokemonEvolutionCreateManyEvolvedSpeciesInputEnvelope;

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

    @Field(() => [PokemonEvolutionUpdateWithWhereUniqueWithoutEvolvedSpeciesInput], {nullable:true})
    @Type(() => PokemonEvolutionUpdateWithWhereUniqueWithoutEvolvedSpeciesInput)
    update?: Array<PokemonEvolutionUpdateWithWhereUniqueWithoutEvolvedSpeciesInput>;

    @Field(() => [PokemonEvolutionUpdateManyWithWhereWithoutEvolvedSpeciesInput], {nullable:true})
    @Type(() => PokemonEvolutionUpdateManyWithWhereWithoutEvolvedSpeciesInput)
    updateMany?: Array<PokemonEvolutionUpdateManyWithWhereWithoutEvolvedSpeciesInput>;

    @Field(() => [PokemonEvolutionScalarWhereInput], {nullable:true})
    @Type(() => PokemonEvolutionScalarWhereInput)
    deleteMany?: Array<PokemonEvolutionScalarWhereInput>;
}
