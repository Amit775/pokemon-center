import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@pokemon-center/prisma';
import { PokemonSpeciesWhereUniqueInput } from './pokemon-species-where-unique.input';
import { Type } from 'class-transformer';
import type { Identity } from 'identity-type';
import { PokemonSpeciesCreateWithoutShapeInput } from './pokemon-species-create-without-shape.input';

@InputType()
export class PokemonSpeciesCreateOrConnectWithoutShapeInput {

    @Field(() => PokemonSpeciesWhereUniqueInput, {nullable:false})
    @Type(() => PokemonSpeciesWhereUniqueInput)
    where!: Prisma.AtLeast<PokemonSpeciesWhereUniqueInput, 'id'>;

    @Field(() => PokemonSpeciesCreateWithoutShapeInput, {nullable:false})
    @Type(() => PokemonSpeciesCreateWithoutShapeInput)
    create!: Identity<PokemonSpeciesCreateWithoutShapeInput>;
}
