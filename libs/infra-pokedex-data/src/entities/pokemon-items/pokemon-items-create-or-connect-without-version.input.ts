import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@pokemon-center/prisma';
import { PokemonItemsWhereUniqueInput } from './pokemon-items-where-unique.input';
import { Type } from 'class-transformer';
import type { Identity } from 'identity-type';
import { PokemonItemsCreateWithoutVersionInput } from './pokemon-items-create-without-version.input';

@InputType()
export class PokemonItemsCreateOrConnectWithoutVersionInput {

    @Field(() => PokemonItemsWhereUniqueInput, {nullable:false})
    @Type(() => PokemonItemsWhereUniqueInput)
    where!: Prisma.AtLeast<PokemonItemsWhereUniqueInput, 'pokemon_id_version_id_item_id'>;

    @Field(() => PokemonItemsCreateWithoutVersionInput, {nullable:false})
    @Type(() => PokemonItemsCreateWithoutVersionInput)
    create!: Identity<PokemonItemsCreateWithoutVersionInput>;
}
