import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokedexesCreateWithoutVersionGroupsInput } from "../inputs/PokedexesCreateWithoutVersionGroupsInput";
import { PokedexesWhereUniqueInput } from "../inputs/PokedexesWhereUniqueInput";

@TypeGraphQL.InputType("PokedexesCreateOrConnectWithoutVersionGroupsInput", {})
export class PokedexesCreateOrConnectWithoutVersionGroupsInput {
  @TypeGraphQL.Field(_type => PokedexesWhereUniqueInput, {
    nullable: false
  })
  where!: PokedexesWhereUniqueInput;

  @TypeGraphQL.Field(_type => PokedexesCreateWithoutVersionGroupsInput, {
    nullable: false
  })
  create!: PokedexesCreateWithoutVersionGroupsInput;
}
