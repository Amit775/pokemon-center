import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EncounterCreateWithoutPokemonInput } from "../inputs/EncounterCreateWithoutPokemonInput";
import { EncounterUpdateWithoutPokemonInput } from "../inputs/EncounterUpdateWithoutPokemonInput";
import { EncounterWhereUniqueInput } from "../inputs/EncounterWhereUniqueInput";

@TypeGraphQL.InputType("EncounterUpsertWithWhereUniqueWithoutPokemonInput", {})
export class EncounterUpsertWithWhereUniqueWithoutPokemonInput {
  @TypeGraphQL.Field(_type => EncounterWhereUniqueInput, {
    nullable: false
  })
  where!: EncounterWhereUniqueInput;

  @TypeGraphQL.Field(_type => EncounterUpdateWithoutPokemonInput, {
    nullable: false
  })
  update!: EncounterUpdateWithoutPokemonInput;

  @TypeGraphQL.Field(_type => EncounterCreateWithoutPokemonInput, {
    nullable: false
  })
  create!: EncounterCreateWithoutPokemonInput;
}
