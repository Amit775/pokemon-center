import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PokemonEvolutionCreateWithoutLocationInput } from './pokemon-evolution-create-without-location.input';
import { Type } from 'class-transformer';
import { PokemonEvolutionCreateOrConnectWithoutLocationInput } from './pokemon-evolution-create-or-connect-without-location.input';
import { PokemonEvolutionUpsertWithWhereUniqueWithoutLocationInput } from './pokemon-evolution-upsert-with-where-unique-without-location.input';
import { PokemonEvolutionCreateManyLocationInputEnvelope } from './pokemon-evolution-create-many-location-input-envelope.input';
import { Prisma } from '@prisma/client';
import { PokemonEvolutionWhereUniqueInput } from './pokemon-evolution-where-unique.input';
import { PokemonEvolutionUpdateWithWhereUniqueWithoutLocationInput } from './pokemon-evolution-update-with-where-unique-without-location.input';
import { PokemonEvolutionUpdateManyWithWhereWithoutLocationInput } from './pokemon-evolution-update-many-with-where-without-location.input';
import { PokemonEvolutionScalarWhereInput } from './pokemon-evolution-scalar-where.input';

@InputType()
export class PokemonEvolutionUpdateManyWithoutLocationNestedInput {

    @Field(() => [PokemonEvolutionCreateWithoutLocationInput], {nullable:true})
    @Type(() => PokemonEvolutionCreateWithoutLocationInput)
    create?: Array<PokemonEvolutionCreateWithoutLocationInput>;

    @Field(() => [PokemonEvolutionCreateOrConnectWithoutLocationInput], {nullable:true})
    @Type(() => PokemonEvolutionCreateOrConnectWithoutLocationInput)
    connectOrCreate?: Array<PokemonEvolutionCreateOrConnectWithoutLocationInput>;

    @Field(() => [PokemonEvolutionUpsertWithWhereUniqueWithoutLocationInput], {nullable:true})
    @Type(() => PokemonEvolutionUpsertWithWhereUniqueWithoutLocationInput)
    upsert?: Array<PokemonEvolutionUpsertWithWhereUniqueWithoutLocationInput>;

    @Field(() => PokemonEvolutionCreateManyLocationInputEnvelope, {nullable:true})
    @Type(() => PokemonEvolutionCreateManyLocationInputEnvelope)
    createMany?: PokemonEvolutionCreateManyLocationInputEnvelope;

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

    @Field(() => [PokemonEvolutionUpdateWithWhereUniqueWithoutLocationInput], {nullable:true})
    @Type(() => PokemonEvolutionUpdateWithWhereUniqueWithoutLocationInput)
    update?: Array<PokemonEvolutionUpdateWithWhereUniqueWithoutLocationInput>;

    @Field(() => [PokemonEvolutionUpdateManyWithWhereWithoutLocationInput], {nullable:true})
    @Type(() => PokemonEvolutionUpdateManyWithWhereWithoutLocationInput)
    updateMany?: Array<PokemonEvolutionUpdateManyWithWhereWithoutLocationInput>;

    @Field(() => [PokemonEvolutionScalarWhereInput], {nullable:true})
    @Type(() => PokemonEvolutionScalarWhereInput)
    deleteMany?: Array<PokemonEvolutionScalarWhereInput>;
}
