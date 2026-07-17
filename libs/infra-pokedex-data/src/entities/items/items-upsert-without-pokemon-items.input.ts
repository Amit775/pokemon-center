import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { ItemsUpdateWithoutPokemonItemsInput } from './items-update-without-pokemon-items.input';
import { Type } from 'class-transformer';
import { ItemsCreateWithoutPokemonItemsInput } from './items-create-without-pokemon-items.input';
import { ItemsWhereInput } from './items-where.input';

@InputType()
export class ItemsUpsertWithoutPokemonItemsInput {

    @Field(() => ItemsUpdateWithoutPokemonItemsInput, {nullable:false})
    @Type(() => ItemsUpdateWithoutPokemonItemsInput)
    update!: Identity<ItemsUpdateWithoutPokemonItemsInput>;

    @Field(() => ItemsCreateWithoutPokemonItemsInput, {nullable:false})
    @Type(() => ItemsCreateWithoutPokemonItemsInput)
    create!: Identity<ItemsCreateWithoutPokemonItemsInput>;

    @Field(() => ItemsWhereInput, {nullable:true})
    @Type(() => ItemsWhereInput)
    where?: Identity<ItemsWhereInput>;
}
