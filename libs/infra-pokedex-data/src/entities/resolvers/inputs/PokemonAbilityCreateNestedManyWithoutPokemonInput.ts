import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonAbilityCreateManyPokemonInputEnvelope } from "../inputs/PokemonAbilityCreateManyPokemonInputEnvelope";
import { PokemonAbilityCreateOrConnectWithoutPokemonInput } from "../inputs/PokemonAbilityCreateOrConnectWithoutPokemonInput";
import { PokemonAbilityCreateWithoutPokemonInput } from "../inputs/PokemonAbilityCreateWithoutPokemonInput";
import { PokemonAbilityWhereUniqueInput } from "../inputs/PokemonAbilityWhereUniqueInput";

@TypeGraphQL.InputType("PokemonAbilityCreateNestedManyWithoutPokemonInput", {})
export class PokemonAbilityCreateNestedManyWithoutPokemonInput {
  @TypeGraphQL.Field(_type => [PokemonAbilityCreateWithoutPokemonInput], {
    nullable: true
  })
  create?: PokemonAbilityCreateWithoutPokemonInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonAbilityCreateOrConnectWithoutPokemonInput], {
    nullable: true
  })
  connectOrCreate?: PokemonAbilityCreateOrConnectWithoutPokemonInput[] | undefined;

  @TypeGraphQL.Field(_type => PokemonAbilityCreateManyPokemonInputEnvelope, {
    nullable: true
  })
  createMany?: PokemonAbilityCreateManyPokemonInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [PokemonAbilityWhereUniqueInput], {
    nullable: true
  })
  connect?: PokemonAbilityWhereUniqueInput[] | undefined;
}
