import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PokemonSpeciesCreateWithoutShapeInput } from './pokemon-species-create-without-shape.input';
import { Type } from 'class-transformer';
import { PokemonSpeciesCreateOrConnectWithoutShapeInput } from './pokemon-species-create-or-connect-without-shape.input';
import { PokemonSpeciesCreateManyShapeInputEnvelope } from './pokemon-species-create-many-shape-input-envelope.input';
import { Prisma } from '@prisma/client';
import { PokemonSpeciesWhereUniqueInput } from './pokemon-species-where-unique.input';

@InputType()
export class PokemonSpeciesUncheckedCreateNestedManyWithoutShapeInput {

    @Field(() => [PokemonSpeciesCreateWithoutShapeInput], {nullable:true})
    @Type(() => PokemonSpeciesCreateWithoutShapeInput)
    create?: Array<PokemonSpeciesCreateWithoutShapeInput>;

    @Field(() => [PokemonSpeciesCreateOrConnectWithoutShapeInput], {nullable:true})
    @Type(() => PokemonSpeciesCreateOrConnectWithoutShapeInput)
    connectOrCreate?: Array<PokemonSpeciesCreateOrConnectWithoutShapeInput>;

    @Field(() => PokemonSpeciesCreateManyShapeInputEnvelope, {nullable:true})
    @Type(() => PokemonSpeciesCreateManyShapeInputEnvelope)
    createMany?: PokemonSpeciesCreateManyShapeInputEnvelope;

    @Field(() => [PokemonSpeciesWhereUniqueInput], {nullable:true})
    @Type(() => PokemonSpeciesWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<PokemonSpeciesWhereUniqueInput, 'id'>>;
}
