import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AbilityCreateWithoutPokemonAbilitiesInput } from "../inputs/AbilityCreateWithoutPokemonAbilitiesInput";
import { AbilityWhereUniqueInput } from "../inputs/AbilityWhereUniqueInput";

@TypeGraphQL.InputType("AbilityCreateOrConnectWithoutPokemonAbilitiesInput", {})
export class AbilityCreateOrConnectWithoutPokemonAbilitiesInput {
  @TypeGraphQL.Field(_type => AbilityWhereUniqueInput, {
    nullable: false
  })
  where!: AbilityWhereUniqueInput;

  @TypeGraphQL.Field(_type => AbilityCreateWithoutPokemonAbilitiesInput, {
    nullable: false
  })
  create!: AbilityCreateWithoutPokemonAbilitiesInput;
}
