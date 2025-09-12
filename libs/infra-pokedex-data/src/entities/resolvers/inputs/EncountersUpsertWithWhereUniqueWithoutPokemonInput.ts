import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EncountersCreateWithoutPokemonInput } from "../inputs/EncountersCreateWithoutPokemonInput";
import { EncountersUpdateWithoutPokemonInput } from "../inputs/EncountersUpdateWithoutPokemonInput";
import { EncountersWhereUniqueInput } from "../inputs/EncountersWhereUniqueInput";

@TypeGraphQL.InputType("EncountersUpsertWithWhereUniqueWithoutPokemonInput", {})
export class EncountersUpsertWithWhereUniqueWithoutPokemonInput {
  @TypeGraphQL.Field(_type => EncountersWhereUniqueInput, {
    nullable: false
  })
  where!: EncountersWhereUniqueInput;

  @TypeGraphQL.Field(_type => EncountersUpdateWithoutPokemonInput, {
    nullable: false
  })
  update!: EncountersUpdateWithoutPokemonInput;

  @TypeGraphQL.Field(_type => EncountersCreateWithoutPokemonInput, {
    nullable: false
  })
  create!: EncountersCreateWithoutPokemonInput;
}
