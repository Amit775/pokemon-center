import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { PokemonShapesCreateWithoutSpeciesInput } from './pokemon-shapes-create-without-species.input';
import { Type } from 'class-transformer';
import { PokemonShapesCreateOrConnectWithoutSpeciesInput } from './pokemon-shapes-create-or-connect-without-species.input';
import { Prisma } from '@pokemon-center/prisma';
import { PokemonShapesWhereUniqueInput } from './pokemon-shapes-where-unique.input';

@InputType()
export class PokemonShapesCreateNestedOneWithoutSpeciesInput {

    @Field(() => PokemonShapesCreateWithoutSpeciesInput, {nullable:true})
    @Type(() => PokemonShapesCreateWithoutSpeciesInput)
    create?: Identity<PokemonShapesCreateWithoutSpeciesInput>;

    @Field(() => PokemonShapesCreateOrConnectWithoutSpeciesInput, {nullable:true})
    @Type(() => PokemonShapesCreateOrConnectWithoutSpeciesInput)
    connectOrCreate?: Identity<PokemonShapesCreateOrConnectWithoutSpeciesInput>;

    @Field(() => PokemonShapesWhereUniqueInput, {nullable:true})
    @Type(() => PokemonShapesWhereUniqueInput)
    connect?: Prisma.AtLeast<PokemonShapesWhereUniqueInput, 'id'>;
}
