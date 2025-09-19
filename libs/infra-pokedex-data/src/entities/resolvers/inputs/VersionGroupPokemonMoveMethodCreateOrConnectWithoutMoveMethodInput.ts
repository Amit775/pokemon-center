import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { VersionGroupPokemonMoveMethodCreateWithoutMoveMethodInput } from "../inputs/VersionGroupPokemonMoveMethodCreateWithoutMoveMethodInput";
import { VersionGroupPokemonMoveMethodWhereUniqueInput } from "../inputs/VersionGroupPokemonMoveMethodWhereUniqueInput";

@TypeGraphQL.InputType("VersionGroupPokemonMoveMethodCreateOrConnectWithoutMoveMethodInput", {})
export class VersionGroupPokemonMoveMethodCreateOrConnectWithoutMoveMethodInput {
  @TypeGraphQL.Field(_type => VersionGroupPokemonMoveMethodWhereUniqueInput, {
    nullable: false
  })
  where!: VersionGroupPokemonMoveMethodWhereUniqueInput;

  @TypeGraphQL.Field(_type => VersionGroupPokemonMoveMethodCreateWithoutMoveMethodInput, {
    nullable: false
  })
  create!: VersionGroupPokemonMoveMethodCreateWithoutMoveMethodInput;
}
