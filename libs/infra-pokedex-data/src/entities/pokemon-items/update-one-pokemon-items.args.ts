import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { PokemonItemsUpdateInput } from './pokemon-items-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@pokemon-center/prisma';
import { PokemonItemsWhereUniqueInput } from './pokemon-items-where-unique.input';

@ArgsType()
export class UpdateOnePokemonItemsArgs {

    @Field(() => PokemonItemsUpdateInput, {nullable:false})
    @Type(() => PokemonItemsUpdateInput)
    data!: Identity<PokemonItemsUpdateInput>;

    @Field(() => PokemonItemsWhereUniqueInput, {nullable:false})
    @Type(() => PokemonItemsWhereUniqueInput)
    where!: Prisma.AtLeast<PokemonItemsWhereUniqueInput, 'pokemon_id_version_id_item_id'>;
}
