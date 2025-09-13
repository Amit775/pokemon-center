import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { VersionsCreateWithoutPokemonItemsInput } from "../inputs/VersionsCreateWithoutPokemonItemsInput";
import { VersionsWhereUniqueInput } from "../inputs/VersionsWhereUniqueInput";

@TypeGraphQL.InputType("VersionsCreateOrConnectWithoutPokemonItemsInput", {})
export class VersionsCreateOrConnectWithoutPokemonItemsInput {
  @TypeGraphQL.Field(_type => VersionsWhereUniqueInput, {
    nullable: false
  })
  where!: VersionsWhereUniqueInput;

  @TypeGraphQL.Field(_type => VersionsCreateWithoutPokemonItemsInput, {
    nullable: false
  })
  create!: VersionsCreateWithoutPokemonItemsInput;
}
