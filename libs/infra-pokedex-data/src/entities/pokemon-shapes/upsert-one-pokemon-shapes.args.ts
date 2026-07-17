import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@pokemon-center/prisma';
import { PokemonShapesWhereUniqueInput } from './pokemon-shapes-where-unique.input';
import { Type } from 'class-transformer';
import type { Identity } from 'identity-type';
import { PokemonShapesCreateInput } from './pokemon-shapes-create.input';
import { PokemonShapesUpdateInput } from './pokemon-shapes-update.input';

@ArgsType()
export class UpsertOnePokemonShapesArgs {

    @Field(() => PokemonShapesWhereUniqueInput, {nullable:false})
    @Type(() => PokemonShapesWhereUniqueInput)
    where!: Prisma.AtLeast<PokemonShapesWhereUniqueInput, 'id'>;

    @Field(() => PokemonShapesCreateInput, {nullable:false})
    @Type(() => PokemonShapesCreateInput)
    create!: Identity<PokemonShapesCreateInput>;

    @Field(() => PokemonShapesUpdateInput, {nullable:false})
    @Type(() => PokemonShapesUpdateInput)
    update!: Identity<PokemonShapesUpdateInput>;
}
