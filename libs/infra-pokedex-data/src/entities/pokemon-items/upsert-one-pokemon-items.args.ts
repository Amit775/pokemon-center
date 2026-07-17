import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@pokemon-center/prisma';
import { PokemonItemsWhereUniqueInput } from './pokemon-items-where-unique.input';
import { Type } from 'class-transformer';
import type { Identity } from 'identity-type';
import { PokemonItemsCreateInput } from './pokemon-items-create.input';
import { PokemonItemsUpdateInput } from './pokemon-items-update.input';

@ArgsType()
export class UpsertOnePokemonItemsArgs {

    @Field(() => PokemonItemsWhereUniqueInput, {nullable:false})
    @Type(() => PokemonItemsWhereUniqueInput)
    where!: Prisma.AtLeast<PokemonItemsWhereUniqueInput, 'pokemon_id_version_id_item_id'>;

    @Field(() => PokemonItemsCreateInput, {nullable:false})
    @Type(() => PokemonItemsCreateInput)
    create!: Identity<PokemonItemsCreateInput>;

    @Field(() => PokemonItemsUpdateInput, {nullable:false})
    @Type(() => PokemonItemsUpdateInput)
    update!: Identity<PokemonItemsUpdateInput>;
}
