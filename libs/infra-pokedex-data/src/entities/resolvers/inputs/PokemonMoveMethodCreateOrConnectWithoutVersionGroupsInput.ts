import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonMoveMethodCreateWithoutVersionGroupsInput } from "../inputs/PokemonMoveMethodCreateWithoutVersionGroupsInput";
import { PokemonMoveMethodWhereUniqueInput } from "../inputs/PokemonMoveMethodWhereUniqueInput";

@TypeGraphQL.InputType("PokemonMoveMethodCreateOrConnectWithoutVersionGroupsInput", {})
export class PokemonMoveMethodCreateOrConnectWithoutVersionGroupsInput {
  @TypeGraphQL.Field(_type => PokemonMoveMethodWhereUniqueInput, {
    nullable: false
  })
  where!: PokemonMoveMethodWhereUniqueInput;

  @TypeGraphQL.Field(_type => PokemonMoveMethodCreateWithoutVersionGroupsInput, {
    nullable: false
  })
  create!: PokemonMoveMethodCreateWithoutVersionGroupsInput;
}
