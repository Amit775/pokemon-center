import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { VersionCreateWithoutPokemonItemsInput } from "../inputs/VersionCreateWithoutPokemonItemsInput";
import { VersionWhereUniqueInput } from "../inputs/VersionWhereUniqueInput";

@TypeGraphQL.InputType("VersionCreateOrConnectWithoutPokemonItemsInput", {})
export class VersionCreateOrConnectWithoutPokemonItemsInput {
  @TypeGraphQL.Field(_type => VersionWhereUniqueInput, {
    nullable: false
  })
  where!: VersionWhereUniqueInput;

  @TypeGraphQL.Field(_type => VersionCreateWithoutPokemonItemsInput, {
    nullable: false
  })
  create!: VersionCreateWithoutPokemonItemsInput;
}
