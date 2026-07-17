import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@pokemon-center/prisma';
import { PokemonItemsWhereUniqueInput } from './pokemon-items-where-unique.input';
import { Type } from 'class-transformer';
import type { Identity } from 'identity-type';
import { PokemonItemsCreateWithoutItemInput } from './pokemon-items-create-without-item.input';

@InputType()
export class PokemonItemsCreateOrConnectWithoutItemInput {

    @Field(() => PokemonItemsWhereUniqueInput, {nullable:false})
    @Type(() => PokemonItemsWhereUniqueInput)
    where!: Prisma.AtLeast<PokemonItemsWhereUniqueInput, 'pokemon_id_version_id_item_id'>;

    @Field(() => PokemonItemsCreateWithoutItemInput, {nullable:false})
    @Type(() => PokemonItemsCreateWithoutItemInput)
    create!: Identity<PokemonItemsCreateWithoutItemInput>;
}
