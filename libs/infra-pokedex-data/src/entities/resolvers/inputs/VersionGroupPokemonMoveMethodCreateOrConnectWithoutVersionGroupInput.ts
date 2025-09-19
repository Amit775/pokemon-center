import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { VersionGroupPokemonMoveMethodCreateWithoutVersionGroupInput } from "../inputs/VersionGroupPokemonMoveMethodCreateWithoutVersionGroupInput";
import { VersionGroupPokemonMoveMethodWhereUniqueInput } from "../inputs/VersionGroupPokemonMoveMethodWhereUniqueInput";

@TypeGraphQL.InputType("VersionGroupPokemonMoveMethodCreateOrConnectWithoutVersionGroupInput", {})
export class VersionGroupPokemonMoveMethodCreateOrConnectWithoutVersionGroupInput {
  @TypeGraphQL.Field(_type => VersionGroupPokemonMoveMethodWhereUniqueInput, {
    nullable: false
  })
  where!: VersionGroupPokemonMoveMethodWhereUniqueInput;

  @TypeGraphQL.Field(_type => VersionGroupPokemonMoveMethodCreateWithoutVersionGroupInput, {
    nullable: false
  })
  create!: VersionGroupPokemonMoveMethodCreateWithoutVersionGroupInput;
}
