import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokedexVersionGroupsCreateWithoutPokedexInput } from "../inputs/PokedexVersionGroupsCreateWithoutPokedexInput";
import { PokedexVersionGroupsWhereUniqueInput } from "../inputs/PokedexVersionGroupsWhereUniqueInput";

@TypeGraphQL.InputType("PokedexVersionGroupsCreateOrConnectWithoutPokedexInput", {})
export class PokedexVersionGroupsCreateOrConnectWithoutPokedexInput {
  @TypeGraphQL.Field(_type => PokedexVersionGroupsWhereUniqueInput, {
    nullable: false
  })
  where!: PokedexVersionGroupsWhereUniqueInput;

  @TypeGraphQL.Field(_type => PokedexVersionGroupsCreateWithoutPokedexInput, {
    nullable: false
  })
  create!: PokedexVersionGroupsCreateWithoutPokedexInput;
}
