import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EncounterUpdateWithoutPokemonInput } from "../inputs/EncounterUpdateWithoutPokemonInput";
import { EncounterWhereUniqueInput } from "../inputs/EncounterWhereUniqueInput";

@TypeGraphQL.InputType("EncounterUpdateWithWhereUniqueWithoutPokemonInput", {})
export class EncounterUpdateWithWhereUniqueWithoutPokemonInput {
  @TypeGraphQL.Field(_type => EncounterWhereUniqueInput, {
    nullable: false
  })
  where!: EncounterWhereUniqueInput;

  @TypeGraphQL.Field(_type => EncounterUpdateWithoutPokemonInput, {
    nullable: false
  })
  data!: EncounterUpdateWithoutPokemonInput;
}
