import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PokemonAbilitiesCreateWithoutAbilityInput } from './pokemon-abilities-create-without-ability.input';
import { Type } from 'class-transformer';
import { PokemonAbilitiesCreateOrConnectWithoutAbilityInput } from './pokemon-abilities-create-or-connect-without-ability.input';
import { PokemonAbilitiesUpsertWithWhereUniqueWithoutAbilityInput } from './pokemon-abilities-upsert-with-where-unique-without-ability.input';
import { PokemonAbilitiesCreateManyAbilityInputEnvelope } from './pokemon-abilities-create-many-ability-input-envelope.input';
import { Prisma } from '@prisma/client';
import { PokemonAbilitiesWhereUniqueInput } from './pokemon-abilities-where-unique.input';
import { PokemonAbilitiesUpdateWithWhereUniqueWithoutAbilityInput } from './pokemon-abilities-update-with-where-unique-without-ability.input';
import { PokemonAbilitiesUpdateManyWithWhereWithoutAbilityInput } from './pokemon-abilities-update-many-with-where-without-ability.input';
import { PokemonAbilitiesScalarWhereInput } from './pokemon-abilities-scalar-where.input';

@InputType()
export class PokemonAbilitiesUncheckedUpdateManyWithoutAbilityNestedInput {

    @Field(() => [PokemonAbilitiesCreateWithoutAbilityInput], {nullable:true})
    @Type(() => PokemonAbilitiesCreateWithoutAbilityInput)
    create?: Array<PokemonAbilitiesCreateWithoutAbilityInput>;

    @Field(() => [PokemonAbilitiesCreateOrConnectWithoutAbilityInput], {nullable:true})
    @Type(() => PokemonAbilitiesCreateOrConnectWithoutAbilityInput)
    connectOrCreate?: Array<PokemonAbilitiesCreateOrConnectWithoutAbilityInput>;

    @Field(() => [PokemonAbilitiesUpsertWithWhereUniqueWithoutAbilityInput], {nullable:true})
    @Type(() => PokemonAbilitiesUpsertWithWhereUniqueWithoutAbilityInput)
    upsert?: Array<PokemonAbilitiesUpsertWithWhereUniqueWithoutAbilityInput>;

    @Field(() => PokemonAbilitiesCreateManyAbilityInputEnvelope, {nullable:true})
    @Type(() => PokemonAbilitiesCreateManyAbilityInputEnvelope)
    createMany?: PokemonAbilitiesCreateManyAbilityInputEnvelope;

    @Field(() => [PokemonAbilitiesWhereUniqueInput], {nullable:true})
    @Type(() => PokemonAbilitiesWhereUniqueInput)
    set?: Array<Prisma.AtLeast<PokemonAbilitiesWhereUniqueInput, 'pokemon_id_ability_id'>>;

    @Field(() => [PokemonAbilitiesWhereUniqueInput], {nullable:true})
    @Type(() => PokemonAbilitiesWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<PokemonAbilitiesWhereUniqueInput, 'pokemon_id_ability_id'>>;

    @Field(() => [PokemonAbilitiesWhereUniqueInput], {nullable:true})
    @Type(() => PokemonAbilitiesWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<PokemonAbilitiesWhereUniqueInput, 'pokemon_id_ability_id'>>;

    @Field(() => [PokemonAbilitiesWhereUniqueInput], {nullable:true})
    @Type(() => PokemonAbilitiesWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<PokemonAbilitiesWhereUniqueInput, 'pokemon_id_ability_id'>>;

    @Field(() => [PokemonAbilitiesUpdateWithWhereUniqueWithoutAbilityInput], {nullable:true})
    @Type(() => PokemonAbilitiesUpdateWithWhereUniqueWithoutAbilityInput)
    update?: Array<PokemonAbilitiesUpdateWithWhereUniqueWithoutAbilityInput>;

    @Field(() => [PokemonAbilitiesUpdateManyWithWhereWithoutAbilityInput], {nullable:true})
    @Type(() => PokemonAbilitiesUpdateManyWithWhereWithoutAbilityInput)
    updateMany?: Array<PokemonAbilitiesUpdateManyWithWhereWithoutAbilityInput>;

    @Field(() => [PokemonAbilitiesScalarWhereInput], {nullable:true})
    @Type(() => PokemonAbilitiesScalarWhereInput)
    deleteMany?: Array<PokemonAbilitiesScalarWhereInput>;
}
