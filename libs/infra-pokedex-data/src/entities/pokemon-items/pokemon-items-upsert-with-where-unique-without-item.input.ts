import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@pokemon-center/prisma';
import { PokemonItemsWhereUniqueInput } from './pokemon-items-where-unique.input';
import { Type } from 'class-transformer';
import type { Identity } from 'identity-type';
import { PokemonItemsUpdateWithoutItemInput } from './pokemon-items-update-without-item.input';
import { PokemonItemsCreateWithoutItemInput } from './pokemon-items-create-without-item.input';

@InputType()
export class PokemonItemsUpsertWithWhereUniqueWithoutItemInput {

    @Field(() => PokemonItemsWhereUniqueInput, {nullable:false})
    @Type(() => PokemonItemsWhereUniqueInput)
    where!: Prisma.AtLeast<PokemonItemsWhereUniqueInput, 'pokemon_id_version_id_item_id'>;

    @Field(() => PokemonItemsUpdateWithoutItemInput, {nullable:false})
    @Type(() => PokemonItemsUpdateWithoutItemInput)
    update!: Identity<PokemonItemsUpdateWithoutItemInput>;

    @Field(() => PokemonItemsCreateWithoutItemInput, {nullable:false})
    @Type(() => PokemonItemsCreateWithoutItemInput)
    create!: Identity<PokemonItemsCreateWithoutItemInput>;
}
