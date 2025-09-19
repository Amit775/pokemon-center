import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RegionCreateOrConnectWithoutPokedexesInput } from "../inputs/RegionCreateOrConnectWithoutPokedexesInput";
import { RegionCreateWithoutPokedexesInput } from "../inputs/RegionCreateWithoutPokedexesInput";
import { RegionWhereUniqueInput } from "../inputs/RegionWhereUniqueInput";

@TypeGraphQL.InputType("RegionCreateNestedOneWithoutPokedexesInput", {})
export class RegionCreateNestedOneWithoutPokedexesInput {
  @TypeGraphQL.Field(_type => RegionCreateWithoutPokedexesInput, {
    nullable: true
  })
  create?: RegionCreateWithoutPokedexesInput | undefined;

  @TypeGraphQL.Field(_type => RegionCreateOrConnectWithoutPokedexesInput, {
    nullable: true
  })
  connectOrCreate?: RegionCreateOrConnectWithoutPokedexesInput | undefined;

  @TypeGraphQL.Field(_type => RegionWhereUniqueInput, {
    nullable: true
  })
  connect?: RegionWhereUniqueInput | undefined;
}
