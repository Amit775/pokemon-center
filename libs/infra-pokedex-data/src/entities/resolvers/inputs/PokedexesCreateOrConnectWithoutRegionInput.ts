import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokedexesCreateWithoutRegionInput } from "../inputs/PokedexesCreateWithoutRegionInput";
import { PokedexesWhereUniqueInput } from "../inputs/PokedexesWhereUniqueInput";

@TypeGraphQL.InputType("PokedexesCreateOrConnectWithoutRegionInput", {})
export class PokedexesCreateOrConnectWithoutRegionInput {
  @TypeGraphQL.Field(_type => PokedexesWhereUniqueInput, {
    nullable: false
  })
  where!: PokedexesWhereUniqueInput;

  @TypeGraphQL.Field(_type => PokedexesCreateWithoutRegionInput, {
    nullable: false
  })
  create!: PokedexesCreateWithoutRegionInput;
}
