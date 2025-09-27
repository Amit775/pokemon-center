import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PokemonAbilitiesWhereInput } from './pokemon-abilities-where.input';
import { Type } from 'class-transformer';
import { PokemonAbilitiesOrderByWithRelationInput } from './pokemon-abilities-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { PokemonAbilitiesWhereUniqueInput } from './pokemon-abilities-where-unique.input';
import { Int } from '@nestjs/graphql';
import { PokemonAbilitiesScalarFieldEnum } from './pokemon-abilities-scalar-field.enum';

@ArgsType()
export class FindFirstPokemonAbilitiesOrThrowArgs {

    @Field(() => PokemonAbilitiesWhereInput, {nullable:true})
    @Type(() => PokemonAbilitiesWhereInput)
    where?: PokemonAbilitiesWhereInput;

    @Field(() => [PokemonAbilitiesOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<PokemonAbilitiesOrderByWithRelationInput>;

    @Field(() => PokemonAbilitiesWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<PokemonAbilitiesWhereUniqueInput, 'pokemon_id_ability_id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [PokemonAbilitiesScalarFieldEnum], {nullable:true})
    distinct?: Array<`${PokemonAbilitiesScalarFieldEnum}`>;
}
