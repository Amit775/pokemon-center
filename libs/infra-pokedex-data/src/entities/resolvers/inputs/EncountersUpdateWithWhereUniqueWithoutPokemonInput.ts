import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EncountersUpdateWithoutPokemonInput } from "../inputs/EncountersUpdateWithoutPokemonInput";
import { EncountersWhereUniqueInput } from "../inputs/EncountersWhereUniqueInput";

@TypeGraphQL.InputType("EncountersUpdateWithWhereUniqueWithoutPokemonInput", {})
export class EncountersUpdateWithWhereUniqueWithoutPokemonInput {
  @TypeGraphQL.Field(_type => EncountersWhereUniqueInput, {
    nullable: false
  })
  where!: EncountersWhereUniqueInput;

  @TypeGraphQL.Field(_type => EncountersUpdateWithoutPokemonInput, {
    nullable: false
  })
  data!: EncountersUpdateWithoutPokemonInput;
}
