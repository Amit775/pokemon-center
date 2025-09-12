import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AbilitiesCreateWithoutPokemonAbilitiesInput } from "../inputs/AbilitiesCreateWithoutPokemonAbilitiesInput";
import { AbilitiesWhereUniqueInput } from "../inputs/AbilitiesWhereUniqueInput";

@TypeGraphQL.InputType("AbilitiesCreateOrConnectWithoutPokemonAbilitiesInput", {})
export class AbilitiesCreateOrConnectWithoutPokemonAbilitiesInput {
  @TypeGraphQL.Field(_type => AbilitiesWhereUniqueInput, {
    nullable: false
  })
  where!: AbilitiesWhereUniqueInput;

  @TypeGraphQL.Field(_type => AbilitiesCreateWithoutPokemonAbilitiesInput, {
    nullable: false
  })
  create!: AbilitiesCreateWithoutPokemonAbilitiesInput;
}
