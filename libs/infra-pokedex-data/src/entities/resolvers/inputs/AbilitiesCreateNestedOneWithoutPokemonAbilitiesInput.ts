import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AbilitiesCreateOrConnectWithoutPokemonAbilitiesInput } from "../inputs/AbilitiesCreateOrConnectWithoutPokemonAbilitiesInput";
import { AbilitiesCreateWithoutPokemonAbilitiesInput } from "../inputs/AbilitiesCreateWithoutPokemonAbilitiesInput";
import { AbilitiesWhereUniqueInput } from "../inputs/AbilitiesWhereUniqueInput";

@TypeGraphQL.InputType("AbilitiesCreateNestedOneWithoutPokemonAbilitiesInput", {})
export class AbilitiesCreateNestedOneWithoutPokemonAbilitiesInput {
  @TypeGraphQL.Field(_type => AbilitiesCreateWithoutPokemonAbilitiesInput, {
    nullable: true
  })
  create?: AbilitiesCreateWithoutPokemonAbilitiesInput | undefined;

  @TypeGraphQL.Field(_type => AbilitiesCreateOrConnectWithoutPokemonAbilitiesInput, {
    nullable: true
  })
  connectOrCreate?: AbilitiesCreateOrConnectWithoutPokemonAbilitiesInput | undefined;

  @TypeGraphQL.Field(_type => AbilitiesWhereUniqueInput, {
    nullable: true
  })
  connect?: AbilitiesWhereUniqueInput | undefined;
}
