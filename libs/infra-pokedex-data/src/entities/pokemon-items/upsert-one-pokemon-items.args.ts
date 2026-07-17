import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { PokemonItemsWhereUniqueInput } from './pokemon-items-where-unique.input';
import { Type } from 'class-transformer';
import { PokemonItemsCreateInput } from './pokemon-items-create.input';
import { PokemonItemsUpdateInput } from './pokemon-items-update.input';

@ArgsType()
export class UpsertOnePokemonItemsArgs {

    @Field(() => PokemonItemsWhereUniqueInput, {nullable:false})
    @Type(() => PokemonItemsWhereUniqueInput)
    where!: Prisma.AtLeast<PokemonItemsWhereUniqueInput, 'pokemon_id_version_id_item_id'>;

    @Field(() => PokemonItemsCreateInput, {nullable:false})
    @Type(() => PokemonItemsCreateInput)
    create!: PokemonItemsCreateInput;

    @Field(() => PokemonItemsUpdateInput, {nullable:false})
    @Type(() => PokemonItemsUpdateInput)
    update!: PokemonItemsUpdateInput;
}
