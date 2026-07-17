import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { PokemonShapesUpdateInput } from './pokemon-shapes-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@pokemon-center/prisma';
import { PokemonShapesWhereUniqueInput } from './pokemon-shapes-where-unique.input';

@ArgsType()
export class UpdateOnePokemonShapesArgs {

    @Field(() => PokemonShapesUpdateInput, {nullable:false})
    @Type(() => PokemonShapesUpdateInput)
    data!: Identity<PokemonShapesUpdateInput>;

    @Field(() => PokemonShapesWhereUniqueInput, {nullable:false})
    @Type(() => PokemonShapesWhereUniqueInput)
    where!: Prisma.AtLeast<PokemonShapesWhereUniqueInput, 'id'>;
}
