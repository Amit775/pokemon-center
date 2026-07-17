import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { ItemsWhereInput } from './items-where.input';
import { Type } from 'class-transformer';
import { ItemsUpdateWithoutPokemonItemsInput } from './items-update-without-pokemon-items.input';

@InputType()
export class ItemsUpdateToOneWithWhereWithoutPokemonItemsInput {

    @Field(() => ItemsWhereInput, {nullable:true})
    @Type(() => ItemsWhereInput)
    where?: Identity<ItemsWhereInput>;

    @Field(() => ItemsUpdateWithoutPokemonItemsInput, {nullable:false})
    @Type(() => ItemsUpdateWithoutPokemonItemsInput)
    data!: Identity<ItemsUpdateWithoutPokemonItemsInput>;
}
