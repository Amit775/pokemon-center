import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PokemonCreateWithoutEncountersInput } from './pokemon-create-without-encounters.input';
import { Type } from 'class-transformer';
import { PokemonCreateOrConnectWithoutEncountersInput } from './pokemon-create-or-connect-without-encounters.input';
import { PokemonUpsertWithoutEncountersInput } from './pokemon-upsert-without-encounters.input';
import { Prisma } from '@prisma/client';
import { PokemonWhereUniqueInput } from './pokemon-where-unique.input';
import { PokemonUpdateToOneWithWhereWithoutEncountersInput } from './pokemon-update-to-one-with-where-without-encounters.input';

@InputType()
export class PokemonUpdateOneRequiredWithoutEncountersNestedInput {

    @Field(() => PokemonCreateWithoutEncountersInput, {nullable:true})
    @Type(() => PokemonCreateWithoutEncountersInput)
    create?: PokemonCreateWithoutEncountersInput;

    @Field(() => PokemonCreateOrConnectWithoutEncountersInput, {nullable:true})
    @Type(() => PokemonCreateOrConnectWithoutEncountersInput)
    connectOrCreate?: PokemonCreateOrConnectWithoutEncountersInput;

    @Field(() => PokemonUpsertWithoutEncountersInput, {nullable:true})
    @Type(() => PokemonUpsertWithoutEncountersInput)
    upsert?: PokemonUpsertWithoutEncountersInput;

    @Field(() => PokemonWhereUniqueInput, {nullable:true})
    @Type(() => PokemonWhereUniqueInput)
    connect?: Prisma.AtLeast<PokemonWhereUniqueInput, 'id'>;

    @Field(() => PokemonUpdateToOneWithWhereWithoutEncountersInput, {nullable:true})
    @Type(() => PokemonUpdateToOneWithWhereWithoutEncountersInput)
    update?: PokemonUpdateToOneWithWhereWithoutEncountersInput;
}
