import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokedexCreateWithoutVersionGroupsInput } from "../inputs/PokedexCreateWithoutVersionGroupsInput";
import { PokedexWhereUniqueInput } from "../inputs/PokedexWhereUniqueInput";

@TypeGraphQL.InputType("PokedexCreateOrConnectWithoutVersionGroupsInput", {})
export class PokedexCreateOrConnectWithoutVersionGroupsInput {
  @TypeGraphQL.Field(_type => PokedexWhereUniqueInput, {
    nullable: false
  })
  where!: PokedexWhereUniqueInput;

  @TypeGraphQL.Field(_type => PokedexCreateWithoutVersionGroupsInput, {
    nullable: false
  })
  create!: PokedexCreateWithoutVersionGroupsInput;
}
