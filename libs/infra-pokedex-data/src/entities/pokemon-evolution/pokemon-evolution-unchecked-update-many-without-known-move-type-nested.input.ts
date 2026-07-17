import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PokemonEvolutionCreateWithoutKnownMoveTypeInput } from './pokemon-evolution-create-without-known-move-type.input';
import { Type } from 'class-transformer';
import { PokemonEvolutionCreateOrConnectWithoutKnownMoveTypeInput } from './pokemon-evolution-create-or-connect-without-known-move-type.input';
import { PokemonEvolutionUpsertWithWhereUniqueWithoutKnownMoveTypeInput } from './pokemon-evolution-upsert-with-where-unique-without-known-move-type.input';
import { PokemonEvolutionCreateManyKnownMoveTypeInputEnvelope } from './pokemon-evolution-create-many-known-move-type-input-envelope.input';
import { Prisma } from '@prisma/client';
import { PokemonEvolutionWhereUniqueInput } from './pokemon-evolution-where-unique.input';
import { PokemonEvolutionUpdateWithWhereUniqueWithoutKnownMoveTypeInput } from './pokemon-evolution-update-with-where-unique-without-known-move-type.input';
import { PokemonEvolutionUpdateManyWithWhereWithoutKnownMoveTypeInput } from './pokemon-evolution-update-many-with-where-without-known-move-type.input';
import { PokemonEvolutionScalarWhereInput } from './pokemon-evolution-scalar-where.input';

@InputType()
export class PokemonEvolutionUncheckedUpdateManyWithoutKnownMoveTypeNestedInput {

    @Field(() => [PokemonEvolutionCreateWithoutKnownMoveTypeInput], {nullable:true})
    @Type(() => PokemonEvolutionCreateWithoutKnownMoveTypeInput)
    create?: Array<PokemonEvolutionCreateWithoutKnownMoveTypeInput>;

    @Field(() => [PokemonEvolutionCreateOrConnectWithoutKnownMoveTypeInput], {nullable:true})
    @Type(() => PokemonEvolutionCreateOrConnectWithoutKnownMoveTypeInput)
    connectOrCreate?: Array<PokemonEvolutionCreateOrConnectWithoutKnownMoveTypeInput>;

    @Field(() => [PokemonEvolutionUpsertWithWhereUniqueWithoutKnownMoveTypeInput], {nullable:true})
    @Type(() => PokemonEvolutionUpsertWithWhereUniqueWithoutKnownMoveTypeInput)
    upsert?: Array<PokemonEvolutionUpsertWithWhereUniqueWithoutKnownMoveTypeInput>;

    @Field(() => PokemonEvolutionCreateManyKnownMoveTypeInputEnvelope, {nullable:true})
    @Type(() => PokemonEvolutionCreateManyKnownMoveTypeInputEnvelope)
    createMany?: PokemonEvolutionCreateManyKnownMoveTypeInputEnvelope;

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

    @Field(() => [PokemonEvolutionUpdateWithWhereUniqueWithoutKnownMoveTypeInput], {nullable:true})
    @Type(() => PokemonEvolutionUpdateWithWhereUniqueWithoutKnownMoveTypeInput)
    update?: Array<PokemonEvolutionUpdateWithWhereUniqueWithoutKnownMoveTypeInput>;

    @Field(() => [PokemonEvolutionUpdateManyWithWhereWithoutKnownMoveTypeInput], {nullable:true})
    @Type(() => PokemonEvolutionUpdateManyWithWhereWithoutKnownMoveTypeInput)
    updateMany?: Array<PokemonEvolutionUpdateManyWithWhereWithoutKnownMoveTypeInput>;

    @Field(() => [PokemonEvolutionScalarWhereInput], {nullable:true})
    @Type(() => PokemonEvolutionScalarWhereInput)
    deleteMany?: Array<PokemonEvolutionScalarWhereInput>;
}
