import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ItemsCreateWithoutPokemonItemsInput } from './items-create-without-pokemon-items.input';
import { Type } from 'class-transformer';
import { ItemsCreateOrConnectWithoutPokemonItemsInput } from './items-create-or-connect-without-pokemon-items.input';
import { ItemsUpsertWithoutPokemonItemsInput } from './items-upsert-without-pokemon-items.input';
import { Prisma } from '@prisma/client';
import { ItemsWhereUniqueInput } from './items-where-unique.input';
import { ItemsUpdateToOneWithWhereWithoutPokemonItemsInput } from './items-update-to-one-with-where-without-pokemon-items.input';

@InputType()
export class ItemsUpdateOneRequiredWithoutPokemonItemsNestedInput {

    @Field(() => ItemsCreateWithoutPokemonItemsInput, {nullable:true})
    @Type(() => ItemsCreateWithoutPokemonItemsInput)
    create?: ItemsCreateWithoutPokemonItemsInput;

    @Field(() => ItemsCreateOrConnectWithoutPokemonItemsInput, {nullable:true})
    @Type(() => ItemsCreateOrConnectWithoutPokemonItemsInput)
    connectOrCreate?: ItemsCreateOrConnectWithoutPokemonItemsInput;

    @Field(() => ItemsUpsertWithoutPokemonItemsInput, {nullable:true})
    @Type(() => ItemsUpsertWithoutPokemonItemsInput)
    upsert?: ItemsUpsertWithoutPokemonItemsInput;

    @Field(() => ItemsWhereUniqueInput, {nullable:true})
    @Type(() => ItemsWhereUniqueInput)
    connect?: Prisma.AtLeast<ItemsWhereUniqueInput, 'id'>;

    @Field(() => ItemsUpdateToOneWithWhereWithoutPokemonItemsInput, {nullable:true})
    @Type(() => ItemsUpdateToOneWithWhereWithoutPokemonItemsInput)
    update?: ItemsUpdateToOneWithWhereWithoutPokemonItemsInput;
}
