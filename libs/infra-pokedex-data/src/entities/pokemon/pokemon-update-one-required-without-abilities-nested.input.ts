import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PokemonCreateWithoutAbilitiesInput } from './pokemon-create-without-abilities.input';
import { Type } from 'class-transformer';
import { PokemonCreateOrConnectWithoutAbilitiesInput } from './pokemon-create-or-connect-without-abilities.input';
import { PokemonUpsertWithoutAbilitiesInput } from './pokemon-upsert-without-abilities.input';
import { Prisma } from '@prisma/client';
import { PokemonWhereUniqueInput } from './pokemon-where-unique.input';
import { PokemonUpdateToOneWithWhereWithoutAbilitiesInput } from './pokemon-update-to-one-with-where-without-abilities.input';

@InputType()
export class PokemonUpdateOneRequiredWithoutAbilitiesNestedInput {

    @Field(() => PokemonCreateWithoutAbilitiesInput, {nullable:true})
    @Type(() => PokemonCreateWithoutAbilitiesInput)
    create?: PokemonCreateWithoutAbilitiesInput;

    @Field(() => PokemonCreateOrConnectWithoutAbilitiesInput, {nullable:true})
    @Type(() => PokemonCreateOrConnectWithoutAbilitiesInput)
    connectOrCreate?: PokemonCreateOrConnectWithoutAbilitiesInput;

    @Field(() => PokemonUpsertWithoutAbilitiesInput, {nullable:true})
    @Type(() => PokemonUpsertWithoutAbilitiesInput)
    upsert?: PokemonUpsertWithoutAbilitiesInput;

    @Field(() => PokemonWhereUniqueInput, {nullable:true})
    @Type(() => PokemonWhereUniqueInput)
    connect?: Prisma.AtLeast<PokemonWhereUniqueInput, 'id'>;

    @Field(() => PokemonUpdateToOneWithWhereWithoutAbilitiesInput, {nullable:true})
    @Type(() => PokemonUpdateToOneWithWhereWithoutAbilitiesInput)
    update?: PokemonUpdateToOneWithWhereWithoutAbilitiesInput;
}
