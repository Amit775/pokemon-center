import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PokemonMovesWhereInput } from './pokemon-moves-where.input';
import { Type } from 'class-transformer';
import { PokemonMovesOrderByWithRelationInput } from './pokemon-moves-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { PokemonMovesWhereUniqueInput } from './pokemon-moves-where-unique.input';
import { Int } from '@nestjs/graphql';
import { PokemonMovesScalarFieldEnum } from './pokemon-moves-scalar-field.enum';

@ArgsType()
export class FindFirstPokemonMovesOrThrowArgs {

    @Field(() => PokemonMovesWhereInput, {nullable:true})
    @Type(() => PokemonMovesWhereInput)
    where?: PokemonMovesWhereInput;

    @Field(() => [PokemonMovesOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<PokemonMovesOrderByWithRelationInput>;

    @Field(() => PokemonMovesWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<PokemonMovesWhereUniqueInput, 'pokemon_id_version_group_id_move_id_pokemon_move_method_id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [PokemonMovesScalarFieldEnum], {nullable:true})
    distinct?: Array<`${PokemonMovesScalarFieldEnum}`>;
}
