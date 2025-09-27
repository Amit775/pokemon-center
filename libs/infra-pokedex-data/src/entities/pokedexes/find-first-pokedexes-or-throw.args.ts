import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PokedexesWhereInput } from './pokedexes-where.input';
import { Type } from 'class-transformer';
import { PokedexesOrderByWithRelationInput } from './pokedexes-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { PokedexesWhereUniqueInput } from './pokedexes-where-unique.input';
import { Int } from '@nestjs/graphql';
import { PokedexesScalarFieldEnum } from './pokedexes-scalar-field.enum';

@ArgsType()
export class FindFirstPokedexesOrThrowArgs {

    @Field(() => PokedexesWhereInput, {nullable:true})
    @Type(() => PokedexesWhereInput)
    where?: PokedexesWhereInput;

    @Field(() => [PokedexesOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<PokedexesOrderByWithRelationInput>;

    @Field(() => PokedexesWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<PokedexesWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [PokedexesScalarFieldEnum], {nullable:true})
    distinct?: Array<`${PokedexesScalarFieldEnum}`>;
}
