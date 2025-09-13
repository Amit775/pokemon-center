import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AbilitiesCreateWithoutPokemonAbilitiesInput } from "../inputs/AbilitiesCreateWithoutPokemonAbilitiesInput";
import { AbilitiesUpdateWithoutPokemonAbilitiesInput } from "../inputs/AbilitiesUpdateWithoutPokemonAbilitiesInput";
import { AbilitiesWhereInput } from "../inputs/AbilitiesWhereInput";

@TypeGraphQL.InputType("AbilitiesUpsertWithoutPokemonAbilitiesInput", {})
export class AbilitiesUpsertWithoutPokemonAbilitiesInput {
  @TypeGraphQL.Field(_type => AbilitiesUpdateWithoutPokemonAbilitiesInput, {
    nullable: false
  })
  update!: AbilitiesUpdateWithoutPokemonAbilitiesInput;

  @TypeGraphQL.Field(_type => AbilitiesCreateWithoutPokemonAbilitiesInput, {
    nullable: false
  })
  create!: AbilitiesCreateWithoutPokemonAbilitiesInput;

  @TypeGraphQL.Field(_type => AbilitiesWhereInput, {
    nullable: true
  })
  where?: AbilitiesWhereInput | undefined;
}
