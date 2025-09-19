import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokedexVersionGroupCreateWithoutVersionGroupInput } from "../inputs/PokedexVersionGroupCreateWithoutVersionGroupInput";
import { PokedexVersionGroupWhereUniqueInput } from "../inputs/PokedexVersionGroupWhereUniqueInput";

@TypeGraphQL.InputType("PokedexVersionGroupCreateOrConnectWithoutVersionGroupInput", {})
export class PokedexVersionGroupCreateOrConnectWithoutVersionGroupInput {
  @TypeGraphQL.Field(_type => PokedexVersionGroupWhereUniqueInput, {
    nullable: false
  })
  where!: PokedexVersionGroupWhereUniqueInput;

  @TypeGraphQL.Field(_type => PokedexVersionGroupCreateWithoutVersionGroupInput, {
    nullable: false
  })
  create!: PokedexVersionGroupCreateWithoutVersionGroupInput;
}
