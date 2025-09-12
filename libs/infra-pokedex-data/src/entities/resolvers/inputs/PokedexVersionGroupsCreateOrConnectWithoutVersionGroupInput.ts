import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokedexVersionGroupsCreateWithoutVersionGroupInput } from "../inputs/PokedexVersionGroupsCreateWithoutVersionGroupInput";
import { PokedexVersionGroupsWhereUniqueInput } from "../inputs/PokedexVersionGroupsWhereUniqueInput";

@TypeGraphQL.InputType("PokedexVersionGroupsCreateOrConnectWithoutVersionGroupInput", {})
export class PokedexVersionGroupsCreateOrConnectWithoutVersionGroupInput {
  @TypeGraphQL.Field(_type => PokedexVersionGroupsWhereUniqueInput, {
    nullable: false
  })
  where!: PokedexVersionGroupsWhereUniqueInput;

  @TypeGraphQL.Field(_type => PokedexVersionGroupsCreateWithoutVersionGroupInput, {
    nullable: false
  })
  create!: PokedexVersionGroupsCreateWithoutVersionGroupInput;
}
