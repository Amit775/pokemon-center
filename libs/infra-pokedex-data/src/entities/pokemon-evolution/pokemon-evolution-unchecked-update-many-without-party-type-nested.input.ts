import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PokemonEvolutionCreateWithoutPartyTypeInput } from './pokemon-evolution-create-without-party-type.input';
import { Type } from 'class-transformer';
import { PokemonEvolutionCreateOrConnectWithoutPartyTypeInput } from './pokemon-evolution-create-or-connect-without-party-type.input';
import { PokemonEvolutionUpsertWithWhereUniqueWithoutPartyTypeInput } from './pokemon-evolution-upsert-with-where-unique-without-party-type.input';
import { PokemonEvolutionCreateManyPartyTypeInputEnvelope } from './pokemon-evolution-create-many-party-type-input-envelope.input';
import { Prisma } from '@prisma/client';
import { PokemonEvolutionWhereUniqueInput } from './pokemon-evolution-where-unique.input';
import { PokemonEvolutionUpdateWithWhereUniqueWithoutPartyTypeInput } from './pokemon-evolution-update-with-where-unique-without-party-type.input';
import { PokemonEvolutionUpdateManyWithWhereWithoutPartyTypeInput } from './pokemon-evolution-update-many-with-where-without-party-type.input';
import { PokemonEvolutionScalarWhereInput } from './pokemon-evolution-scalar-where.input';

@InputType()
export class PokemonEvolutionUncheckedUpdateManyWithoutPartyTypeNestedInput {

    @Field(() => [PokemonEvolutionCreateWithoutPartyTypeInput], {nullable:true})
    @Type(() => PokemonEvolutionCreateWithoutPartyTypeInput)
    create?: Array<PokemonEvolutionCreateWithoutPartyTypeInput>;

    @Field(() => [PokemonEvolutionCreateOrConnectWithoutPartyTypeInput], {nullable:true})
    @Type(() => PokemonEvolutionCreateOrConnectWithoutPartyTypeInput)
    connectOrCreate?: Array<PokemonEvolutionCreateOrConnectWithoutPartyTypeInput>;

    @Field(() => [PokemonEvolutionUpsertWithWhereUniqueWithoutPartyTypeInput], {nullable:true})
    @Type(() => PokemonEvolutionUpsertWithWhereUniqueWithoutPartyTypeInput)
    upsert?: Array<PokemonEvolutionUpsertWithWhereUniqueWithoutPartyTypeInput>;

    @Field(() => PokemonEvolutionCreateManyPartyTypeInputEnvelope, {nullable:true})
    @Type(() => PokemonEvolutionCreateManyPartyTypeInputEnvelope)
    createMany?: PokemonEvolutionCreateManyPartyTypeInputEnvelope;

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

    @Field(() => [PokemonEvolutionUpdateWithWhereUniqueWithoutPartyTypeInput], {nullable:true})
    @Type(() => PokemonEvolutionUpdateWithWhereUniqueWithoutPartyTypeInput)
    update?: Array<PokemonEvolutionUpdateWithWhereUniqueWithoutPartyTypeInput>;

    @Field(() => [PokemonEvolutionUpdateManyWithWhereWithoutPartyTypeInput], {nullable:true})
    @Type(() => PokemonEvolutionUpdateManyWithWhereWithoutPartyTypeInput)
    updateMany?: Array<PokemonEvolutionUpdateManyWithWhereWithoutPartyTypeInput>;

    @Field(() => [PokemonEvolutionScalarWhereInput], {nullable:true})
    @Type(() => PokemonEvolutionScalarWhereInput)
    deleteMany?: Array<PokemonEvolutionScalarWhereInput>;
}
