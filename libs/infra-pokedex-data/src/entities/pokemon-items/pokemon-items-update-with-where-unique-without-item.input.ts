import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { PokemonItemsWhereUniqueInput } from './pokemon-items-where-unique.input';
import { Type } from 'class-transformer';
import { PokemonItemsUpdateWithoutItemInput } from './pokemon-items-update-without-item.input';

@InputType()
export class PokemonItemsUpdateWithWhereUniqueWithoutItemInput {

    @Field(() => PokemonItemsWhereUniqueInput, {nullable:false})
    @Type(() => PokemonItemsWhereUniqueInput)
    where!: Prisma.AtLeast<PokemonItemsWhereUniqueInput, 'pokemon_id_version_id_item_id'>;

    @Field(() => PokemonItemsUpdateWithoutItemInput, {nullable:false})
    @Type(() => PokemonItemsUpdateWithoutItemInput)
    data!: PokemonItemsUpdateWithoutItemInput;
}
