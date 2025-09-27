import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PokemonWhereInput } from './pokemon-where.input';
import { Type } from 'class-transformer';
import { PokemonOrderByWithRelationInput } from './pokemon-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { PokemonWhereUniqueInput } from './pokemon-where-unique.input';
import { Int } from '@nestjs/graphql';
import { PokemonScalarFieldEnum } from './pokemon-scalar-field.enum';

@ArgsType()
export class FindFirstPokemonOrThrowArgs {

    @Field(() => PokemonWhereInput, {nullable:true})
    @Type(() => PokemonWhereInput)
    where?: PokemonWhereInput;

    @Field(() => [PokemonOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<PokemonOrderByWithRelationInput>;

    @Field(() => PokemonWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<PokemonWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [PokemonScalarFieldEnum], {nullable:true})
    distinct?: Array<`${PokemonScalarFieldEnum}`>;
}
