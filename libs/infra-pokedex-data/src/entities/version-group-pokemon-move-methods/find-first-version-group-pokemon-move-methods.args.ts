import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { VersionGroupPokemonMoveMethodsWhereInput } from './version-group-pokemon-move-methods-where.input';
import { Type } from 'class-transformer';
import { VersionGroupPokemonMoveMethodsOrderByWithRelationInput } from './version-group-pokemon-move-methods-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { VersionGroupPokemonMoveMethodsWhereUniqueInput } from './version-group-pokemon-move-methods-where-unique.input';
import { Int } from '@nestjs/graphql';
import { VersionGroupPokemonMoveMethodsScalarFieldEnum } from './version-group-pokemon-move-methods-scalar-field.enum';

@ArgsType()
export class FindFirstVersionGroupPokemonMoveMethodsArgs {

    @Field(() => VersionGroupPokemonMoveMethodsWhereInput, {nullable:true})
    @Type(() => VersionGroupPokemonMoveMethodsWhereInput)
    where?: VersionGroupPokemonMoveMethodsWhereInput;

    @Field(() => [VersionGroupPokemonMoveMethodsOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<VersionGroupPokemonMoveMethodsOrderByWithRelationInput>;

    @Field(() => VersionGroupPokemonMoveMethodsWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<VersionGroupPokemonMoveMethodsWhereUniqueInput, 'version_group_id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [VersionGroupPokemonMoveMethodsScalarFieldEnum], {nullable:true})
    distinct?: Array<`${VersionGroupPokemonMoveMethodsScalarFieldEnum}`>;
}
