import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EncountersCreateWithoutPokemonInput } from "../inputs/EncountersCreateWithoutPokemonInput";
import { EncountersWhereUniqueInput } from "../inputs/EncountersWhereUniqueInput";

@TypeGraphQL.InputType("EncountersCreateOrConnectWithoutPokemonInput", {})
export class EncountersCreateOrConnectWithoutPokemonInput {
  @TypeGraphQL.Field(_type => EncountersWhereUniqueInput, {
    nullable: false
  })
  where!: EncountersWhereUniqueInput;

  @TypeGraphQL.Field(_type => EncountersCreateWithoutPokemonInput, {
    nullable: false
  })
  create!: EncountersCreateWithoutPokemonInput;
}
