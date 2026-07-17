import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AbilitiesCreateWithoutPokemonAbilitiesInput } from './abilities-create-without-pokemon-abilities.input';
import { Type } from 'class-transformer';
import { AbilitiesCreateOrConnectWithoutPokemonAbilitiesInput } from './abilities-create-or-connect-without-pokemon-abilities.input';
import { AbilitiesUpsertWithoutPokemonAbilitiesInput } from './abilities-upsert-without-pokemon-abilities.input';
import { Prisma } from '@prisma/client';
import { AbilitiesWhereUniqueInput } from './abilities-where-unique.input';
import { AbilitiesUpdateToOneWithWhereWithoutPokemonAbilitiesInput } from './abilities-update-to-one-with-where-without-pokemon-abilities.input';

@InputType()
export class AbilitiesUpdateOneRequiredWithoutPokemonAbilitiesNestedInput {

    @Field(() => AbilitiesCreateWithoutPokemonAbilitiesInput, {nullable:true})
    @Type(() => AbilitiesCreateWithoutPokemonAbilitiesInput)
    create?: AbilitiesCreateWithoutPokemonAbilitiesInput;

    @Field(() => AbilitiesCreateOrConnectWithoutPokemonAbilitiesInput, {nullable:true})
    @Type(() => AbilitiesCreateOrConnectWithoutPokemonAbilitiesInput)
    connectOrCreate?: AbilitiesCreateOrConnectWithoutPokemonAbilitiesInput;

    @Field(() => AbilitiesUpsertWithoutPokemonAbilitiesInput, {nullable:true})
    @Type(() => AbilitiesUpsertWithoutPokemonAbilitiesInput)
    upsert?: AbilitiesUpsertWithoutPokemonAbilitiesInput;

    @Field(() => AbilitiesWhereUniqueInput, {nullable:true})
    @Type(() => AbilitiesWhereUniqueInput)
    connect?: Prisma.AtLeast<AbilitiesWhereUniqueInput, 'id'>;

    @Field(() => AbilitiesUpdateToOneWithWhereWithoutPokemonAbilitiesInput, {nullable:true})
    @Type(() => AbilitiesUpdateToOneWithWhereWithoutPokemonAbilitiesInput)
    update?: AbilitiesUpdateToOneWithWhereWithoutPokemonAbilitiesInput;
}
