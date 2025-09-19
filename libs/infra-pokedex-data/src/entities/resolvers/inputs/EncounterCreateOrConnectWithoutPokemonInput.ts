import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EncounterCreateWithoutPokemonInput } from "../inputs/EncounterCreateWithoutPokemonInput";
import { EncounterWhereUniqueInput } from "../inputs/EncounterWhereUniqueInput";

@TypeGraphQL.InputType("EncounterCreateOrConnectWithoutPokemonInput", {})
export class EncounterCreateOrConnectWithoutPokemonInput {
  @TypeGraphQL.Field(_type => EncounterWhereUniqueInput, {
    nullable: false
  })
  where!: EncounterWhereUniqueInput;

  @TypeGraphQL.Field(_type => EncounterCreateWithoutPokemonInput, {
    nullable: false
  })
  create!: EncounterCreateWithoutPokemonInput;
}
