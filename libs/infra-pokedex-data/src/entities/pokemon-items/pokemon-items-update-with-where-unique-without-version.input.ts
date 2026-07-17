import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { PokemonItemsWhereUniqueInput } from './pokemon-items-where-unique.input';
import { Type } from 'class-transformer';
import { PokemonItemsUpdateWithoutVersionInput } from './pokemon-items-update-without-version.input';

@InputType()
export class PokemonItemsUpdateWithWhereUniqueWithoutVersionInput {

    @Field(() => PokemonItemsWhereUniqueInput, {nullable:false})
    @Type(() => PokemonItemsWhereUniqueInput)
    where!: Prisma.AtLeast<PokemonItemsWhereUniqueInput, 'pokemon_id_version_id_item_id'>;

    @Field(() => PokemonItemsUpdateWithoutVersionInput, {nullable:false})
    @Type(() => PokemonItemsUpdateWithoutVersionInput)
    data!: PokemonItemsUpdateWithoutVersionInput;
}
