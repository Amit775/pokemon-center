import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokedexVersionGroupCreateWithoutPokedexInput } from "../inputs/PokedexVersionGroupCreateWithoutPokedexInput";
import { PokedexVersionGroupWhereUniqueInput } from "../inputs/PokedexVersionGroupWhereUniqueInput";

@TypeGraphQL.InputType("PokedexVersionGroupCreateOrConnectWithoutPokedexInput", {})
export class PokedexVersionGroupCreateOrConnectWithoutPokedexInput {
  @TypeGraphQL.Field(_type => PokedexVersionGroupWhereUniqueInput, {
    nullable: false
  })
  where!: PokedexVersionGroupWhereUniqueInput;

  @TypeGraphQL.Field(_type => PokedexVersionGroupCreateWithoutPokedexInput, {
    nullable: false
  })
  create!: PokedexVersionGroupCreateWithoutPokedexInput;
}
