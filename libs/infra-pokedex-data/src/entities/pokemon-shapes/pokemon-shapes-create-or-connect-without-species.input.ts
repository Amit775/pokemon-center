import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@pokemon-center/prisma';
import { PokemonShapesWhereUniqueInput } from './pokemon-shapes-where-unique.input';
import { Type } from 'class-transformer';
import type { Identity } from 'identity-type';
import { PokemonShapesCreateWithoutSpeciesInput } from './pokemon-shapes-create-without-species.input';

@InputType()
export class PokemonShapesCreateOrConnectWithoutSpeciesInput {

    @Field(() => PokemonShapesWhereUniqueInput, {nullable:false})
    @Type(() => PokemonShapesWhereUniqueInput)
    where!: Prisma.AtLeast<PokemonShapesWhereUniqueInput, 'id'>;

    @Field(() => PokemonShapesCreateWithoutSpeciesInput, {nullable:false})
    @Type(() => PokemonShapesCreateWithoutSpeciesInput)
    create!: Identity<PokemonShapesCreateWithoutSpeciesInput>;
}
