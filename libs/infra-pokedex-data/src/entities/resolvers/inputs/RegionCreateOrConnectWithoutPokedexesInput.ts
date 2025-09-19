import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RegionCreateWithoutPokedexesInput } from "../inputs/RegionCreateWithoutPokedexesInput";
import { RegionWhereUniqueInput } from "../inputs/RegionWhereUniqueInput";

@TypeGraphQL.InputType("RegionCreateOrConnectWithoutPokedexesInput", {})
export class RegionCreateOrConnectWithoutPokedexesInput {
  @TypeGraphQL.Field(_type => RegionWhereUniqueInput, {
    nullable: false
  })
  where!: RegionWhereUniqueInput;

  @TypeGraphQL.Field(_type => RegionCreateWithoutPokedexesInput, {
    nullable: false
  })
  create!: RegionCreateWithoutPokedexesInput;
}
