import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AbilityCreateWithoutPokemonAbilitiesInput } from "../inputs/AbilityCreateWithoutPokemonAbilitiesInput";
import { AbilityUpdateWithoutPokemonAbilitiesInput } from "../inputs/AbilityUpdateWithoutPokemonAbilitiesInput";
import { AbilityWhereInput } from "../inputs/AbilityWhereInput";

@TypeGraphQL.InputType("AbilityUpsertWithoutPokemonAbilitiesInput", {})
export class AbilityUpsertWithoutPokemonAbilitiesInput {
  @TypeGraphQL.Field(_type => AbilityUpdateWithoutPokemonAbilitiesInput, {
    nullable: false
  })
  update!: AbilityUpdateWithoutPokemonAbilitiesInput;

  @TypeGraphQL.Field(_type => AbilityCreateWithoutPokemonAbilitiesInput, {
    nullable: false
  })
  create!: AbilityCreateWithoutPokemonAbilitiesInput;

  @TypeGraphQL.Field(_type => AbilityWhereInput, {
    nullable: true
  })
  where?: AbilityWhereInput | undefined;
}
