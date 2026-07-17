import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PokemonItemsUpdateInput } from './pokemon-items-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { PokemonItemsWhereUniqueInput } from './pokemon-items-where-unique.input';

@ArgsType()
export class UpdateOnePokemonItemsArgs {

    @Field(() => PokemonItemsUpdateInput, {nullable:false})
    @Type(() => PokemonItemsUpdateInput)
    data!: PokemonItemsUpdateInput;

    @Field(() => PokemonItemsWhereUniqueInput, {nullable:false})
    @Type(() => PokemonItemsWhereUniqueInput)
    where!: Prisma.AtLeast<PokemonItemsWhereUniqueInput, 'pokemon_id_version_id_item_id'>;
}
