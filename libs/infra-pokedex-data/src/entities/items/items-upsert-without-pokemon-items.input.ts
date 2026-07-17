import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ItemsUpdateWithoutPokemonItemsInput } from './items-update-without-pokemon-items.input';
import { Type } from 'class-transformer';
import { ItemsCreateWithoutPokemonItemsInput } from './items-create-without-pokemon-items.input';
import { ItemsWhereInput } from './items-where.input';

@InputType()
export class ItemsUpsertWithoutPokemonItemsInput {

    @Field(() => ItemsUpdateWithoutPokemonItemsInput, {nullable:false})
    @Type(() => ItemsUpdateWithoutPokemonItemsInput)
    update!: ItemsUpdateWithoutPokemonItemsInput;

    @Field(() => ItemsCreateWithoutPokemonItemsInput, {nullable:false})
    @Type(() => ItemsCreateWithoutPokemonItemsInput)
    create!: ItemsCreateWithoutPokemonItemsInput;

    @Field(() => ItemsWhereInput, {nullable:true})
    @Type(() => ItemsWhereInput)
    where?: ItemsWhereInput;
}
